import { describe, expect, it } from "vitest";

import { appendContent, restoreFocus, safeHref } from "./index";

describe("safeHref", () => {
  it("allows service links and rejects executable protocols", () => {
    expect(safeHref("/apply")).toBe("/apply");
    expect(safeHref("https://example.test/help")).toBe("https://example.test/help");
    expect(safeHref("javascript:alert(1)")).toBe("#");
    expect(safeHref("data:text/html,bad")).toBe("#");
  });
});

describe("appendContent", () => {
  it("renders plain content as text", () => {
    const root = document.createElement("div");
    appendContent(root, "<strong>not markup</strong>");
    expect(root.innerHTML).toBe("&lt;strong&gt;not markup&lt;/strong&gt;");
  });

  it("sanitises the explicit rich-content shape", () => {
    const root = document.createElement("div");
    appendContent(root, {
      __html__: '<strong>Allowed</strong><img src=x onerror="alert(1)"><script>alert(1)</script>',
    });
    expect(root.innerHTML).toBe("<strong>Allowed</strong>");
  });
});

describe("restoreFocus", () => {
  it("restores radio focus without using the unsupported selection API", () => {
    const root = document.createElement("div");
    const radio = document.createElement("input");
    radio.id = "contact-email";
    radio.type = "radio";
    root.append(radio);
    document.body.append(root);

    expect(() => restoreFocus(root, radio.id, [0, 0])).not.toThrow();
    expect(document.activeElement).toBe(radio);
    root.remove();
  });

  it("restores the cursor for text controls", () => {
    const root = document.createElement("div");
    const input = document.createElement("input");
    input.id = "full-name";
    input.type = "text";
    input.value = "Adam";
    root.append(input);
    document.body.append(root);

    restoreFocus(root, input.id, [1, 3]);

    expect(document.activeElement).toBe(input);
    expect(input.selectionStart).toBe(1);
    expect(input.selectionEnd).toBe(3);
    root.remove();
  });
});
