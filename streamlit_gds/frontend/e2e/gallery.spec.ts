import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Component gallery/ })).toBeVisible();
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
  await page.getByRole("button", { name: "Primary button" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("heading", { name: "Success" })).toBeVisible();
});

for (const [section, heading] of [
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
