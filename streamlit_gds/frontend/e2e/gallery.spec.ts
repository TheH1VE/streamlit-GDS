import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  // The health endpoint can be ready before Streamlit has completed the first
  // script render on a cold CI runner. Keep normal assertions at Playwright's
  // default timeout, but allow this page-readiness signal a little longer.
  await expect(page.getByRole("heading", { name: /Component gallery/ })).toBeVisible({
    timeout: 15_000,
  });
});

test("gallery has no serious or critical axe violations", async ({ page }) => {
  // Streamlit 1.61 currently puts aria-expanded on its own sidebar section,
  // which axe flags independently of this package. Scan the document while
  // excluding that framework-owned element.
  const results = await new AxeBuilder({ page })
    .exclude('[data-testid="stSidebar"]')
    .analyze();
  const blocking = results.violations.filter(
    (violation) => violation.impact === "critical" || violation.impact === "serious",
  );
  expect(blocking).toEqual([]);
});

test("component gallery visual baseline and responsive width", async ({ page }, testInfo) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);
  await expect(page).toHaveScreenshot(`gallery-${testInfo.project.name}.png`, {
    fullPage: true,
    animations: "disabled",
  });
});

test("keyboard reaches the skip link and primary action", async ({ page }) => {
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await skipLink.focus();
  await expect(skipLink).toBeFocused();
  await page.getByRole("radio", { name: "Forms" }).evaluate((radio: HTMLInputElement) => radio.click());
  await expect(page.getByRole("heading", { name: "Form controls" })).toBeVisible();
  await page.getByRole("button", { name: "Primary button" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("heading", { name: "Success" })).toBeVisible();
});

test("download button supplies the configured filename", async ({ page }) => {
  await page.getByRole("radio", { name: "Forms" }).evaluate((radio: HTMLInputElement) => radio.click());
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download example CSV" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("applications.csv");
});

test("native wrappers retain Streamlit interactions and GDS host styling", async ({ page }) => {
  await expect(page.locator("body")).toHaveClass(/st-gds-host/);
  await expect(page.getByRole("heading", { name: "Native Streamlit compatibility" })).toBeVisible();
  const inputsTab = page.getByRole("tab", { name: "Inputs" });
  await inputsTab.click({ force: true });
  await expect(inputsTab).toHaveAttribute("aria-selected", "true");
  const fullName = page.getByRole("textbox", { name: "Full name" });
  await fullName.fill("Ada Lovelace");
  await expect(fullName).toHaveValue("Ada Lovelace");
  const agreement = page.getByRole("checkbox", { name: "I agree to the declaration" });
  await agreement.evaluate((checkbox: HTMLInputElement) => checkbox.click());
  await expect(agreement).toBeChecked();
  await expect(fullName).toHaveCSS("background-color", "rgb(255, 255, 255)");

  const multiselect = page.getByRole("combobox", { name: "Updates" });
  expect(
    await multiselect.evaluate((input) => getComputedStyle(input, "::placeholder").color),
  ).toBe("rgb(80, 90, 95)");

  const routine = page.getByRole("radio", { name: "Routine" });
  await expect(routine).toHaveCSS("background-color", "rgb(243, 242, 241)");
  await expect(routine.locator("p")).toHaveCSS("color", "rgb(11, 12, 12)");
  await routine.click();
  await expect(routine).toHaveAttribute("aria-checked", "true");
  await expect(routine).toHaveCSS("background-color", "rgb(29, 112, 184)");
  await expect(routine.locator("p")).toHaveCSS("color", "rgb(255, 255, 255)");

  const openState = page.getByRole("radio", { name: "Open", exact: true });
  await expect(openState).toHaveCSS("background-color", "rgb(243, 242, 241)");
  await expect(openState.locator("p")).toHaveCSS("color", "rgb(11, 12, 12)");
});

test("native form batches values until its submit button", async ({ page }) => {
  const layoutTab = page.getByRole("tab", { name: "Layout" });
  await layoutTab.click({ force: true });
  await expect(layoutTab).toHaveAttribute("aria-selected", "true");
  const reference = page.getByRole("textbox", { name: "Form reference" });
  await reference.fill("A-123");
  await page.getByRole("button", { name: "Submit", exact: true }).click();
  await expect(reference).toHaveValue("");
});

test("KPI cards expose values and trend direction without colour alone", async ({ page }) => {
  await page.getByRole("radio", { name: "Content" }).evaluate((radio: HTMLInputElement) => radio.click());
  await expect(page.getByRole("heading", { name: "Content and status" })).toBeVisible();
  const card = page.getByRole("region", { name: "Applications received" });
  await expect(card).toContainText("1,248");
  await expect(card).toContainText("Green status");
  await expect(card).toContainText("Increased by");
  await expect(card).toContainText("12%");
  await expect(card).toContainText("from last month");
  await expect(page.getByRole("region", { name: "Decisions issued" })).toContainText("Amber status");
  await expect(page.getByRole("region", { name: "Overdue cases" })).toContainText("Red status");
});

test("chatbot submits a message and preserves visible speaker attribution", async ({ page }) => {
  await page.getByRole("radio", { name: "Content" }).evaluate((radio: HTMLInputElement) => radio.click());
  const chat = page.getByRole("region", { name: "Ask the service" });
  const transcript = chat.getByRole("log", { name: "Ask the service messages" });
  await expect(transcript).toContainText("Service assistant");
  await expect(transcript).toContainText("Hello. I can help you understand your application status.");

  await chat.getByRole("textbox", { name: "Your message" }).fill("Where is my application?");
  await chat.getByRole("button", { name: "Send" }).click();

  await expect(transcript).toContainText("You");
  await expect(transcript).toContainText("Where is my application?");
  await expect(transcript).toContainText("In a live service, your assistant backend would respond here.");
});

for (const [section, heading] of [
  ["Forms", "Form controls"],
  ["Navigation", "Navigation and page UI"],
  ["Content", "Content and status"],
  ["Styles", "Core styles"],
] as const) {
  test(`${section} catalogue section renders and passes axe`, async ({ page }) => {
    await page.getByRole("radio", { name: section }).evaluate((radio: HTMLInputElement) => radio.click());
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
    const results = await new AxeBuilder({ page })
      .exclude('[data-testid="stSidebar"]')
      .analyze();
    const blocking = results.violations.filter(
      (violation) => violation.impact === "critical" || violation.impact === "serious",
    );
    expect(blocking).toEqual([]);
  });
}
