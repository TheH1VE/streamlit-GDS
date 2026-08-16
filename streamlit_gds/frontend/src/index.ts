import type { Component } from "@streamlit/component-v2-lib";
import DOMPurify from "dompurify";
import "./style.scss";

type Scalar = string | number | boolean | null;
type Props = Record<string, unknown>;
type RendererArgs = Parameters<Component>[0];

interface CatalogData {
  component: string;
  props: Props;
}

interface OptionData {
  label: string;
  value: unknown;
  hint?: string | null;
  disabled?: boolean;
  conditional?: unknown;
}

interface ChatMessageData {
  role: "assistant" | "user";
  content: unknown;
  name?: string | null;
  timestamp?: string | null;
}

const ALLOWED_TAGS = ["a", "abbr", "b", "br", "code", "em", "li", "ol", "p", "span", "strong", "ul"];
const ALLOWED_ATTR = ["href", "title", "target", "rel", "class"];

function element<K extends keyof HTMLElementTagNameMap>(
  name: K,
  className?: string,
  text?: Scalar,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(name);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = String(text);
  return node;
}

function appendContent(parent: HTMLElement, value: unknown): void {
  if (value && typeof value === "object" && "__html__" in value) {
    const raw = String((value as { __html__: unknown }).__html__);
    const safe = DOMPurify.sanitize(raw, { ALLOWED_TAGS, ALLOWED_ATTR });
    const holder = element("div");
    holder.innerHTML = safe;
    while (holder.firstChild) parent.append(holder.firstChild);
    return;
  }
  if (value !== undefined && value !== null) parent.append(document.createTextNode(String(value)));
}

function safeHref(value: unknown): string {
  const href = String(value ?? "#").trim();
  if (/^(https?:|mailto:|tel:|\/|#)/i.test(href)) return href;
  return "#";
}

function linkNode(label: unknown, href: unknown, className = "govuk-link", external = false): HTMLAnchorElement {
  const anchor = element("a", `${className}${external ? " st-gds-external" : ""}`, String(label ?? ""));
  anchor.href = safeHref(href);
  if (external) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }
  return anchor;
}

function componentId(props: Props, suffix = "field"): string {
  const key = String(props._key ?? "gds").replace(/[^a-zA-Z0-9_-]/g, "-");
  return `st-gds-${key}-${suffix}`;
}

function addHintAndError(container: HTMLElement, props: Props, id: string): string[] {
  const describedBy: string[] = [];
  if (props.hint) {
    const hintId = `${id}-hint`;
    const hint = element("div", "govuk-hint", props.hint as Scalar);
    hint.id = hintId;
    container.append(hint);
    describedBy.push(hintId);
  }
  if (props.error) {
    const errorId = `${id}-error`;
    const error = element("p", "govuk-error-message");
    error.id = errorId;
    const hidden = element("span", "govuk-visually-hidden", "Error:");
    error.append(hidden, document.createTextNode(` ${String(props.error)}`));
    container.append(error);
    describedBy.push(errorId);
  }
  return describedBy;
}

function inputGroup(props: Props, id: string, labelTag: "label" | "legend" = "label"): { group: HTMLElement; label: HTMLElement; describedBy: string[] } {
  const group = element("div", `govuk-form-group${props.error ? " govuk-form-group--error" : ""}`);
  const label = element(labelTag, labelTag === "legend" ? "govuk-fieldset__legend govuk-fieldset__legend--m" : "govuk-label", props.label as Scalar);
  if (label instanceof HTMLLabelElement) label.htmlFor = id;
  if (props.required) {
    const required = element("span", "govuk-visually-hidden", " required");
    label.append(required);
  }
  group.append(label);
  const describedBy = addHintAndError(group, props, id);
  return { group, label, describedBy };
}

function setAriaDescription(control: HTMLElement, ids: string[]): void {
  if (ids.length) control.setAttribute("aria-describedby", ids.join(" "));
}

function supportsTextSelection(target: HTMLElement): target is HTMLInputElement | HTMLTextAreaElement {
  if (target instanceof HTMLTextAreaElement) return true;
  if (!(target instanceof HTMLInputElement)) return false;
  return ["text", "search", "tel", "url", "password"].includes(target.type);
}

export function restoreFocus(root: HTMLElement, previousId: string | null, selection: [number | null, number | null] | null): void {
  if (!previousId) return;
  const target = root.ownerDocument.getElementById(previousId);
  if (!target || !root.contains(target)) return;
  target.focus({ preventScroll: true });
  if (selection && supportsTextSelection(target)) {
    target.setSelectionRange(selection[0], selection[1]);
  }
}

function renderTextInput(root: HTMLElement, props: Props, args: RendererArgs, password = false): void {
  const id = componentId(props);
  const { group, describedBy } = inputGroup(props, id);
  const input = element("input", `govuk-input${props.error ? " govuk-input--error" : ""} st-gds-width-${String(props.width ?? "full")}`);
  input.id = id;
  input.name = id;
  input.type = password && !props.visible ? "password" : String(props.input_type ?? "text");
  input.value = String(props.value ?? "");
  input.disabled = Boolean(props.disabled);
  input.required = Boolean(props.required);
  if (props.autocomplete) input.setAttribute("autocomplete", String(props.autocomplete));
  if (props.inputmode) input.inputMode = String(props.inputmode);
  setAriaDescription(input, describedBy);
  input.addEventListener("change", () => args.setStateValue("value", input.value));

  let control: HTMLElement = input;
  if (props.prefix || props.suffix) {
    const wrapper = element("div", "govuk-input__wrapper");
    if (props.prefix) wrapper.append(element("div", "govuk-input__prefix", props.prefix as Scalar));
    wrapper.append(input);
    if (props.suffix) wrapper.append(element("div", "govuk-input__suffix", props.suffix as Scalar));
    control = wrapper;
  }
  if (password) {
    const wrapper = element("div", "st-gds-password-wrapper");
    wrapper.append(input);
    const toggle = element(
      "button",
      "govuk-button govuk-button--secondary st-gds-password-toggle",
      props.visible ? String(props.hide_label ?? "Hide") : String(props.show_label ?? "Show"),
    );
    toggle.type = "button";
    toggle.setAttribute("aria-controls", id);
    toggle.addEventListener("click", () => args.setStateValue("visible", !Boolean(props.visible)));
    wrapper.append(toggle);
    control = wrapper;
  }
  group.append(control);
  root.append(group);
}

function renderTextarea(root: HTMLElement, props: Props, args: RendererArgs, characterCount = false): void {
  const id = componentId(props);
  const { group, describedBy } = inputGroup(props, id);
  const area = element("textarea", `govuk-textarea${props.error ? " govuk-textarea--error" : ""}`);
  area.id = id;
  area.name = id;
  area.rows = Number(props.rows ?? 5);
  area.value = String(props.value ?? "");
  area.disabled = Boolean(props.disabled);
  area.required = Boolean(props.required);
  setAriaDescription(area, describedBy);
  let updateCount = (): void => {};
  area.addEventListener("input", () => {
    if (characterCount) updateCount();
  });
  area.addEventListener("change", () => args.setStateValue("value", area.value));
  group.append(area);
  if (characterCount) {
    const max = Number(props.max_characters);
    const message = element("div", "govuk-character-count__message govuk-hint", "");
    message.id = `${id}-info`;
    message.setAttribute("aria-live", "polite");
    describedBy.push(message.id);
    setAriaDescription(area, describedBy);
    group.append(message);
    updateCount = (): void => {
      const remaining = max - area.value.length;
      message.textContent = remaining >= 0
        ? `You have ${remaining} character${remaining === 1 ? "" : "s"} remaining`
        : `You have ${Math.abs(remaining)} character${remaining === -1 ? "" : "s"} too many`;
      message.classList.toggle("govuk-error-message", remaining < 0);
    };
    updateCount();
  }
  root.append(group);
}

function renderChatbot(root: HTMLElement, props: Props, args: RendererArgs): void {
  const chatbot = element("section", "st-gds-chatbot");
  chatbot.setAttribute("aria-label", String(props.label));
  chatbot.append(element("h2", "govuk-heading-m st-gds-chatbot__title", props.label as Scalar));

  const transcript = element("div", "st-gds-chatbot__transcript");
  transcript.setAttribute("role", "log");
  transcript.setAttribute("aria-label", `${String(props.label)} messages`);
  transcript.setAttribute("aria-live", "polite");
  transcript.setAttribute("aria-relevant", "additions text");
  transcript.tabIndex = 0;
  const messages = (props.messages ?? []) as ChatMessageData[];
  if (!messages.length) {
    transcript.append(element("p", "govuk-body st-gds-chatbot__empty", props.empty_text as Scalar));
  }
  for (const message of messages) {
    const displayName = message.name || (message.role === "user" ? props.user_name : props.assistant_name);
    const item = element("article", `st-gds-chat-message st-gds-chat-message--${message.role}`);
    item.setAttribute("aria-label", `${String(displayName)} message`);
    const meta = element("p", "st-gds-chat-message__meta");
    meta.append(element("strong", "st-gds-chat-message__name", displayName as Scalar));
    if (message.timestamp) {
      meta.append(document.createTextNode(" "));
      meta.append(element("time", "st-gds-chat-message__time", message.timestamp));
    }
    const body = element("div", "st-gds-chat-message__body");
    appendContent(body, message.content);
    item.append(meta, body);
    transcript.append(item);
  }
  if (props.waiting) {
    const status = element("p", "govuk-body st-gds-chatbot__status", `${String(props.assistant_name)} is responding`);
    status.setAttribute("role", "status");
    transcript.append(status);
  }
  chatbot.append(transcript);

  const form = element("form", "st-gds-chatbot__composer");
  const id = componentId(props, "message");
  const inputProps: Props = { ...props, label: props.input_label, required: true };
  const { group, describedBy } = inputGroup(inputProps, id);
  const area = element("textarea", `govuk-textarea${props.error ? " govuk-textarea--error" : ""}`);
  area.id = id;
  area.name = id;
  area.rows = 3;
  area.value = String(props.draft ?? "");
  area.required = true;
  area.disabled = Boolean(props.disabled || props.waiting);
  if (props.placeholder) area.placeholder = String(props.placeholder);
  setAriaDescription(area, describedBy);
  group.append(area);

  const send = element("button", "govuk-button st-gds-chatbot__send", props.send_label as Scalar);
  send.type = "submit";
  send.disabled = area.disabled || !area.value.trim();
  const updateDraft = (): void => {
    send.disabled = area.disabled || !area.value.trim();
    args.setStateValue("draft", area.value);
  };
  area.addEventListener("input", updateDraft);
  area.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      form.requestSubmit();
    }
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitted = area.value.trim();
    if (!submitted || area.disabled) return;
    area.value = "";
    send.disabled = true;
    args.setStateValue("draft", "");
    args.setTriggerValue("submitted", submitted);
  });
  form.append(group, send);
  chatbot.append(form);
  root.append(chatbot);
}

function renderOptions(root: HTMLElement, props: Props, args: RendererArgs, multiple: boolean): void {
  const id = componentId(props);
  const fieldset = element("fieldset", "govuk-fieldset");
  const { group, label, describedBy } = inputGroup(props, id, "legend");
  fieldset.setAttribute("aria-describedby", describedBy.join(" "));
  fieldset.append(label);
  for (const child of [...group.children].slice(1)) fieldset.append(child);
  const listClass = multiple
    ? `govuk-checkboxes${props.small ? " govuk-checkboxes--small" : ""}`
    : `govuk-radios${props.inline ? " govuk-radios--inline" : ""}`;
  const list = element("div", listClass);
  const options = (props.options ?? []) as OptionData[];
  const current = multiple ? ((props.value ?? []) as unknown[]) : [props.value];

  options.forEach((option, index) => {
    const item = element("div", multiple ? "govuk-checkboxes__item" : "govuk-radios__item");
    const input = element("input", multiple ? "govuk-checkboxes__input" : "govuk-radios__input");
    input.type = multiple ? "checkbox" : "radio";
    input.name = id;
    input.id = `${id}-${index}`;
    input.value = String(index);
    input.disabled = Boolean(props.disabled) || Boolean(option.disabled);
    input.checked = current.some((value) => JSON.stringify(value) === JSON.stringify(option.value));
    const labelNode = element("label", multiple ? "govuk-label govuk-checkboxes__label" : "govuk-label govuk-radios__label", option.label);
    labelNode.htmlFor = input.id;
    item.append(input, labelNode);
    if (option.hint) item.append(element("div", "govuk-hint govuk-checkboxes__hint", option.hint));
    list.append(item);

    let conditional: HTMLElement | null = null;
    if (option.conditional) {
      conditional = element("div", "st-gds-conditional");
      appendContent(conditional, option.conditional);
      conditional.hidden = !input.checked;
      list.append(conditional);
    }
    input.addEventListener("change", () => {
      if (conditional) conditional.hidden = !input.checked;
      if (multiple) {
        const values = [...list.querySelectorAll<HTMLInputElement>("input:checked")].map((selected) => options[Number(selected.value)].value);
        args.setStateValue("value", values);
      } else {
        args.setStateValue("value", option.value);
      }
    });
  });
  fieldset.append(list);
  group.replaceChildren(fieldset);
  root.append(group);
}

function renderSelect(root: HTMLElement, props: Props, args: RendererArgs): void {
  const id = componentId(props);
  const { group, describedBy } = inputGroup(props, id);
  const select = element("select", "govuk-select");
  select.id = id;
  select.name = id;
  select.disabled = Boolean(props.disabled);
  select.required = Boolean(props.required);
  setAriaDescription(select, describedBy);
  const options = (props.options ?? []) as OptionData[];
  if (!props.required) select.append(element("option", undefined, "Select an option"));
  options.forEach((option, index) => {
    const node = element("option", undefined, option.label);
    node.value = String(index);
    node.disabled = Boolean(option.disabled);
    node.selected = JSON.stringify(option.value) === JSON.stringify(props.value);
    select.append(node);
  });
  select.addEventListener("change", () => {
    args.setStateValue("value", select.value === "" ? null : options[Number(select.value)].value);
  });
  group.append(select);
  root.append(group);
}

function renderDate(root: HTMLElement, props: Props, args: RendererArgs): void {
  const id = componentId(props);
  const { group, label, describedBy } = inputGroup(props, id, "legend");
  const fieldset = element("fieldset", "govuk-fieldset");
  fieldset.append(label);
  for (const child of [...group.children].slice(1)) fieldset.append(child);
  const values = String(props.value ?? "").split("-");
  const row = element("div", "st-gds-date-row");
  const fields: Array<[string, string, number]> = [["day", values[2] ?? "", 2], ["month", values[1] ?? "", 2], ["year", values[0] ?? "", 4]];
  const inputs: HTMLInputElement[] = [];
  fields.forEach(([name, current, max]) => {
    const item = element("div", "govuk-form-group");
    const fieldId = `${id}-${name}`;
    const labelNode = element("label", "govuk-label", name[0].toUpperCase() + name.slice(1));
    labelNode.htmlFor = fieldId;
    const input = element("input", `govuk-input${name === "year" ? " st-gds-date-year" : ""}`);
    input.id = fieldId;
    input.name = fieldId;
    input.inputMode = "numeric";
    input.pattern = "[0-9]*";
    input.maxLength = max;
    input.value = current;
    input.disabled = Boolean(props.disabled);
    setAriaDescription(input, describedBy);
    item.append(labelNode, input);
    row.append(item);
    inputs.push(input);
  });
  const update = (): void => {
    const [day, month, year] = inputs.map((input) => input.value.padStart(2, "0"));
    const complete = day && month && year;
    args.setStateValue("value", complete ? `${year}-${month}-${day}` : null);
  };
  inputs.forEach((input) => input.addEventListener("change", update));
  fieldset.append(row);
  group.replaceChildren(fieldset);
  root.append(group);
}

function renderFileUpload(root: HTMLElement, props: Props, args: RendererArgs): void {
  const id = componentId(props);
  const { group, describedBy } = inputGroup(props, id);
  const input = element("input", `govuk-file-upload${props.error ? " govuk-file-upload--error" : ""}`);
  input.type = "file";
  input.id = id;
  input.name = id;
  input.disabled = Boolean(props.disabled);
  input.required = Boolean(props.required);
  input.accept = ((props.accept ?? []) as string[]).join(",");
  setAriaDescription(input, describedBy);
  const meta = element("p", "st-gds-file-meta");
  input.addEventListener("change", async () => {
    const file = input.files?.[0];
    if (!file) {
      args.setStateValue("file", null);
      meta.textContent = "";
      return;
    }
    const limit = Number(props.max_size_mb) * 1024 * 1024;
    if (file.size > limit) {
      meta.className = "govuk-error-message";
      meta.textContent = `The selected file must be smaller than ${String(props.max_size_mb)} MB`;
      input.value = "";
      return;
    }
    const data = new Uint8Array(await file.arrayBuffer());
    meta.className = "st-gds-file-meta";
    meta.textContent = `${file.name} (${Math.ceil(file.size / 1024)} KB)`;
    args.setStateValue("file", { name: file.name, type: file.type, size: file.size, data });
  });
  group.append(input, meta);
  root.append(group);
}

function renderButton(root: HTMLElement, props: Props, args: RendererArgs): void {
  const kind = String(props.kind ?? "primary");
  const modifiers: Record<string, string> = { secondary: " govuk-button--secondary", warning: " govuk-button--warning" };
  const button = element("button", `govuk-button${modifiers[kind] ?? ""}${props.width === "full" ? " st-gds-button-full" : ""}`, props.label as Scalar);
  button.type = "button";
  button.disabled = Boolean(props.disabled);
  if (kind === "start") {
    button.classList.add("govuk-button--start");
    button.append(document.createTextNode("  →"));
  }
  button.addEventListener("click", () => args.setTriggerValue("clicked", true));
  root.append(button);
}

function renderAccordion(root: HTMLElement, props: Props, args: RendererArgs): void {
  const items = (props.items ?? []) as Array<{ heading: string; content: unknown; expanded?: boolean }>;
  const open = new Set<number>((props.open ?? []) as number[]);
  const wrapper = element("div", "govuk-accordion");
  items.forEach((item, index) => {
    const section = element("div", "govuk-accordion__section");
    const heading = element("h2", "govuk-accordion__section-heading");
    const button = element("button", "govuk-accordion__section-button", item.heading);
    button.type = "button";
    const contentId = componentId(props, `accordion-${index}`);
    button.setAttribute("aria-controls", contentId);
    button.setAttribute("aria-expanded", String(open.has(index) || item.expanded));
    const content = element("div", "govuk-accordion__section-content");
    content.id = contentId;
    content.hidden = !(open.has(index) || item.expanded);
    appendContent(content, item.content);
    button.addEventListener("click", () => {
      content.hidden = !content.hidden;
      button.setAttribute("aria-expanded", String(!content.hidden));
      if (content.hidden) open.delete(index); else open.add(index);
      args.setStateValue("open", [...open]);
    });
    heading.append(button);
    section.append(heading, content);
    wrapper.append(section);
  });
  root.append(wrapper);
}

function renderTabs(root: HTMLElement, props: Props, args: RendererArgs): void {
  const items = (props.items ?? []) as Array<{ label: string; content: unknown }>;
  let selected = Number(props.selected ?? 0);
  const tabs = element("div", "govuk-tabs");
  const title = element("h2", "govuk-tabs__title", "Contents");
  const list = element("ul", "govuk-tabs__list");
  list.setAttribute("role", "tablist");
  const panels: HTMLElement[] = [];
  const buttons: HTMLAnchorElement[] = [];
  const choose = (index: number): void => {
    selected = index;
    buttons.forEach((button, buttonIndex) => {
      button.parentElement?.classList.toggle("govuk-tabs__list-item--selected", buttonIndex === index);
      button.setAttribute("aria-selected", String(buttonIndex === index));
    });
    panels.forEach((panel, panelIndex) => { panel.hidden = panelIndex !== index; });
    args.setStateValue("selected", index);
  };
  items.forEach((item, index) => {
    const li = element("li", `govuk-tabs__list-item${index === selected ? " govuk-tabs__list-item--selected" : ""}`);
    li.setAttribute("role", "presentation");
    const anchor = linkNode(item.label, `#${componentId(props, `panel-${index}`)}`, "govuk-tabs__tab");
    anchor.id = componentId(props, `tab-${index}`);
    anchor.setAttribute("role", "tab");
    anchor.setAttribute("aria-selected", String(index === selected));
    anchor.addEventListener("click", (event) => { event.preventDefault(); choose(index); });
    li.append(anchor);
    list.append(li);
    buttons.push(anchor);
    const panel = element("div", "govuk-tabs__panel");
    panel.id = componentId(props, `panel-${index}`);
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", anchor.id);
    panel.hidden = index !== selected;
    appendContent(panel, item.content);
    panels.push(panel);
  });
  tabs.append(title, list, ...panels);
  root.append(tabs);
}

function renderStatic(root: HTMLElement, component: string, props: Props, args: RendererArgs): (() => void) | void {
  switch (component) {
    case "bootstrap": {
      document.documentElement.style.setProperty("--st-gds-brand", String(props.brand_colour));
      document.body.classList.toggle("st-gds-minimal-chrome", props.chrome === "minimal");
      const styleId = "streamlit-gds-host-styles";
      let style = document.getElementById(styleId) as HTMLStyleElement | null;
      if (!style) {
        style = document.createElement("style");
        style.id = styleId;
        document.head.append(style);
      }
      style.textContent = `
        .stMainBlockContainer { max-width: 1020px; padding-left: 30px; padding-right: 30px; }
        body, [data-testid="stAppViewContainer"] { background: #fff; color: #0b0c0c; font-family: Arial, Helvetica, sans-serif; }
        .st-gds-minimal-chrome [data-testid="stHeader"], .st-gds-minimal-chrome [data-testid="stToolbar"] { display: none; }
        [class*="st-key-gds-width-one-quarter-"] { width: 25%; }
        [class*="st-key-gds-width-one-third-"] { width: 33.333%; }
        [class*="st-key-gds-width-one-half-"] { width: 50%; }
        [class*="st-key-gds-width-two-thirds-"] { width: 66.666%; }
        [class*="st-key-gds-width-three-quarters-"] { width: 75%; }
        @media(max-width: 640px) { .stMainBlockContainer { padding-left: 15px; padding-right: 15px; } [class*="st-key-gds-width-"] { width: 100%; } }
      `;
      return;
    }
    case "space": {
      const spacer = element("span", "st-gds-space");
      spacer.style.height = `${Number(props.size ?? 4) * 5}px`;
      root.append(spacer);
      return;
    }
    case "heading": {
      const sizes: Record<string, string> = { xl: "govuk-heading-xl", l: "govuk-heading-l", m: "govuk-heading-m", s: "govuk-heading-s" };
      const heading = element("h2", sizes[String(props.size)] ?? sizes.l);
      if (props.caption) heading.append(element("span", "govuk-caption-l st-gds-heading-caption", props.caption as Scalar));
      heading.append(document.createTextNode(String(props.text ?? "")));
      root.append(heading);
      return;
    }
    case "paragraph": {
      const paragraph = element("p", props.lead ? "govuk-body-l" : "govuk-body");
      appendContent(paragraph, props.content);
      root.append(paragraph);
      return;
    }
    case "link": root.append(linkNode(props.label, props.href, "govuk-link", Boolean(props.external))); return;
    case "list": {
      const list = element(props.ordered ? "ol" : "ul", `govuk-list${props.ordered ? " govuk-list--number" : props.bullet ? " govuk-list--bullet" : ""}`);
      for (const item of (props.items ?? []) as string[]) list.append(element("li", undefined, item));
      root.append(list); return;
    }
    case "image": {
      const figure = element("figure");
      const image = element("img", "govuk-image");
      image.src = safeHref(props.src);
      image.alt = String(props.alt ?? "");
      if (props.width) image.width = Number(props.width);
      figure.append(image);
      if (props.caption) figure.append(element("figcaption", "govuk-body-s", props.caption as Scalar));
      root.append(figure); return;
    }
    case "section_break": {
      root.append(element("hr", `govuk-section-break govuk-section-break--${String(props.size ?? 3)}${props.visible ? " govuk-section-break--visible" : ""}`)); return;
    }
    case "back_link": root.append(linkNode(props.label, props.href, "govuk-back-link")); return;
    case "breadcrumbs": {
      const nav = element("nav", `govuk-breadcrumbs${props.collapse_on_mobile ? " govuk-breadcrumbs--collapse-on-mobile" : ""}`);
      nav.setAttribute("aria-label", "Breadcrumb");
      const list = element("ol", "govuk-breadcrumbs__list");
      for (const item of (props.items ?? []) as Array<{ label: string; href?: string }>) {
        const li = element("li", "govuk-breadcrumbs__list-item");
        if (item.href) li.append(linkNode(item.label, item.href, "govuk-breadcrumbs__link")); else li.append(document.createTextNode(item.label));
        list.append(li);
      }
      nav.append(list); root.append(nav); return;
    }
    case "details": {
      const details = element("details", "govuk-details");
      details.open = Boolean(props.open);
      details.append(element("summary", "govuk-details__summary", props.summary as Scalar));
      const content = element("div", "govuk-details__text"); appendContent(content, props.content); details.append(content); root.append(details); return;
    }
    case "inset_text": { const inset = element("div", "govuk-inset-text"); appendContent(inset, props.content); root.append(inset); return; }
    case "error_message": {
      const error = element("p", "govuk-error-message"); error.append(element("span", "govuk-visually-hidden", "Error:"), document.createTextNode(` ${String(props.text)}`)); root.append(error); return;
    }
    case "error_summary": {
      const box = element("div", "govuk-error-summary"); box.tabIndex = -1; box.setAttribute("role", "alert");
      box.append(element("h2", "govuk-error-summary__title", props.title as Scalar));
      if (props.description) box.append(element("p", "govuk-body", props.description as Scalar));
      const list = element("ul", "govuk-list govuk-error-summary__list");
      for (const error of (props.errors ?? []) as Array<{ text: string; href: string }>) {
        const item = element("li");
        item.append(linkNode(error.text, error.href));
        list.append(item);
      }
      box.append(list);
      root.append(box);
      if (props.focus) queueMicrotask(() => box.focus());
      return;
    }
    case "fieldset": {
      const fieldset = element("fieldset", "govuk-fieldset"); fieldset.append(element("legend", `govuk-fieldset__legend govuk-fieldset__legend--${String(props.heading_size)}`, props.legend as Scalar));
      const content = element("div"); appendContent(content, props.content); fieldset.append(content); root.append(fieldset); return;
    }
    case "header": {
      const header = element("header", "st-gds-generic-header"); header.style.setProperty("--st-gds-brand", String(props.brand_colour ?? "#1d70b8"));
      const inner = element("div", "st-gds-generic-header__inner");
      const org = linkNode(props.organisation, props.home_url, "st-gds-generic-header__organisation"); inner.append(org);
      if (props.service_name) inner.append(element("span", "st-gds-generic-header__service", props.service_name as Scalar));
      const items = props.navigation as Array<{ label: string; href: string; active?: boolean }>;
      if (items?.length) { const nav = element("nav"); nav.setAttribute("aria-label", "Primary navigation"); const list = element("ul", "st-gds-generic-header__nav"); items.forEach((item) => { const li = element("li"); const a = linkNode(item.label, item.href); if (item.active) a.setAttribute("aria-current", "page"); li.append(a); list.append(li); }); nav.append(list); inner.append(nav); }
      header.append(inner); root.append(header); return;
    }
    case "footer": {
      const footer = element("footer", "st-gds-neutral-footer"); const inner = element("div", "st-gds-neutral-footer__inner");
      if (props.organisation) inner.append(element("h2", "govuk-heading-s", props.organisation as Scalar));
      if (props.text) inner.append(element("p", "govuk-body-s", props.text as Scalar));
      const links = props.links as Array<{ label: string; href: string; external?: boolean }>;
      if (links?.length) { const list = element("ul", "st-gds-neutral-footer__links"); links.forEach((item) => { const li = element("li"); li.append(linkNode(item.label, item.href, "govuk-link", item.external)); list.append(li); }); inner.append(list); }
      footer.append(inner); root.append(footer); return;
    }
    case "notification_banner": {
      const banner = element("div", `govuk-notification-banner${props.success ? " govuk-notification-banner--success" : ""}`); banner.setAttribute("role", String(props.role ?? "region"));
      const header = element("div", "govuk-notification-banner__header");
      header.append(element("h2", "govuk-notification-banner__title", props.title as Scalar));
      banner.append(header);
      const content = element("div", "govuk-notification-banner__content"); appendContent(content, props.content); banner.append(content); root.append(banner); return;
    }
    case "pagination": {
      const nav = element("nav", "govuk-pagination"); nav.setAttribute("aria-label", "Pagination");
      const list = element("ul", "govuk-pagination__list");
      const addDirectional = (item: unknown, direction: string): void => { if (!item) return; const value = item as { label: string; href: string }; const li = element("li", `govuk-pagination__${direction}`); li.append(linkNode(`${direction === "prev" ? "← " : ""}${value.label}${direction === "next" ? " →" : ""}`, value.href, "govuk-link govuk-pagination__link")); list.append(li); };
      addDirectional(props.previous, "prev");
      for (const item of (props.items ?? []) as Array<{ label: string; href: string; current?: boolean }>) { const li = element("li", `govuk-pagination__item${item.current ? " govuk-pagination__item--current" : ""}`); const a = linkNode(item.label, item.href, "govuk-link govuk-pagination__link"); if (item.current) a.setAttribute("aria-current", "page"); li.append(a); list.append(li); }
      addDirectional(props.next, "next"); nav.append(list); root.append(nav); return;
    }
    case "phase_banner": {
      const banner = element("div", "govuk-phase-banner"); const p = element("p", "govuk-phase-banner__content"); p.append(element("strong", "govuk-tag govuk-phase-banner__content__tag", props.phase as Scalar)); const text = element("span", "govuk-phase-banner__text"); appendContent(text, props.content); p.append(text); banner.append(p); root.append(banner); return;
    }
    case "service_navigation": {
      const nav = element("nav", "govuk-service-navigation"); nav.setAttribute("aria-label", "Service information"); const container = element("div", "govuk-width-container");
      if (props.service_name) container.append(linkNode(props.service_name, props.service_url, "govuk-service-navigation__service-name"));
      const list = element("ul", "govuk-service-navigation__list"); for (const item of (props.items ?? []) as Array<{ label: string; href: string; active?: boolean }>) { const li = element("li", `govuk-service-navigation__item${item.active ? " govuk-service-navigation__item--active" : ""}`); const a = linkNode(item.label, item.href, "govuk-service-navigation__link"); if (item.active) a.setAttribute("aria-current", "page"); li.append(a); list.append(li); } container.append(list); nav.append(container); root.append(nav); return;
    }
    case "skip_link": root.append(linkNode(props.label, props.href, "govuk-skip-link")); return;
    case "panel": {
      const interruption = props.variant === "interruption"; const panel = element("div", interruption ? "st-gds-panel--interruption" : "govuk-panel govuk-panel--confirmation"); panel.append(element("h1", interruption ? "govuk-heading-xl" : "govuk-panel__title", props.title as Scalar)); if (props.content) { const content = element("div", interruption ? "govuk-body-l" : "govuk-panel__body"); appendContent(content, props.content); panel.append(content); } root.append(panel); return;
    }
    case "kpi_card": {
      const card = element("section", "st-gds-kpi-card");
      card.setAttribute("aria-label", String(props.label));
      card.append(element("h3", "st-gds-kpi-card__label", props.label as Scalar));
      card.append(element("p", "st-gds-kpi-card__value", props.value as Scalar));
      if (props.change !== undefined && props.change !== null) {
        const trend = String(props.trend ?? "neutral");
        const change = element("p", `st-gds-kpi-card__change st-gds-kpi-card__change--${trend}`);
        const directions: Record<string, { arrow: string; label: string }> = {
          up: { arrow: "↑", label: "Increased by" },
          down: { arrow: "↓", label: "Decreased by" },
          neutral: { arrow: "", label: "Change:" },
        };
        const direction = directions[trend] ?? directions.neutral;
        if (direction.arrow) {
          const arrow = element("span", "st-gds-kpi-card__arrow", direction.arrow);
          arrow.setAttribute("aria-hidden", "true");
          change.append(arrow);
        }
        change.append(element("span", "govuk-visually-hidden", `${direction.label} `));
        change.append(element("strong", "st-gds-kpi-card__change-value", props.change as Scalar));
        if (props.comparison) {
          change.append(document.createTextNode(" "));
          change.append(element("span", "st-gds-kpi-card__comparison", props.comparison as Scalar));
        }
        card.append(change);
      }
      if (props.supporting_text) {
        card.append(element("p", "st-gds-kpi-card__supporting", props.supporting_text as Scalar));
      }
      root.append(card);
      return;
    }
    case "summary_list": {
      const wrapper = props.card_title ? element("div", "govuk-summary-card") : root;
      if (props.card_title) {
        const header = element("div", "govuk-summary-card__title-wrapper");
        header.append(element("h2", "govuk-summary-card__title", props.card_title as Scalar));
        wrapper.append(header);
      }
      const dl = element("dl", `govuk-summary-list${props.card_title ? " govuk-summary-card__content" : ""}`); for (const row of (props.rows ?? []) as Array<{ key: string; value: unknown; actions: Array<{ label: string; href: string; visually_hidden_text?: string }> }>) { const item = element("div", "govuk-summary-list__row"); item.append(element("dt", "govuk-summary-list__key", row.key)); const value = element("dd", "govuk-summary-list__value"); appendContent(value, row.value); item.append(value); if (row.actions?.length) { const actions = element("dd", "govuk-summary-list__actions"); row.actions.forEach((action, index) => { if (index) actions.append(document.createTextNode(" ")); const a = linkNode(action.label, action.href); if (action.visually_hidden_text) a.append(element("span", "govuk-visually-hidden", ` ${action.visually_hidden_text}`)); actions.append(a); }); item.append(actions); } dl.append(item); } wrapper.append(dl); if (wrapper !== root) root.append(wrapper); return;
    }
    case "table": {
      const table = element("table", `govuk-table${props.responsive ? " st-gds-table-responsive" : ""}`); if (props.caption) table.append(element("caption", "govuk-table__caption govuk-table__caption--m", props.caption as Scalar)); const columns = props.columns as Array<{ key: string; heading: string; numeric?: boolean }>; const head = element("thead", "govuk-table__head"); const hr = element("tr", "govuk-table__row"); columns.forEach((column) => hr.append(element("th", `govuk-table__header${column.numeric ? " govuk-table__header--numeric" : ""}`, column.heading))); head.append(hr); table.append(head); const body = element("tbody", "govuk-table__body"); for (const row of props.rows as Array<Record<string, unknown>>) { const tr = element("tr", "govuk-table__row"); columns.forEach((column, index) => { const cell = element(index === 0 ? "th" : "td", `${index === 0 ? "govuk-table__header" : "govuk-table__cell"}${column.numeric ? ` ${index === 0 ? "govuk-table__header" : "govuk-table__cell"}--numeric` : ""}`, row[column.key] as Scalar); cell.setAttribute("data-label", column.heading); if (index === 0) cell.setAttribute("scope", "row"); tr.append(cell); }); body.append(tr); } table.append(body); root.append(table); return;
    }
    case "tag": root.append(element("strong", `govuk-tag govuk-tag--${String(props.colour)}`, props.text as Scalar)); return;
    case "task_list": {
      if (props.title) root.append(element("h2", "govuk-heading-m", props.title as Scalar)); const list = element("ol", "st-gds-task-list"); const labels: Record<string, string> = { not_started: "Not started", in_progress: "In progress", completed: "Completed", cannot_start: "Cannot start yet", optional: "Optional" }; for (const item of (props.items ?? []) as Array<{ title: string; href?: string; status: string; hint?: string }>) { const li = element("li", "st-gds-task-list__item"); const row = element("div", "st-gds-task-list__row"); row.append(item.href ? linkNode(item.title, item.href) : element("span", undefined, item.title)); const colour = item.status === "completed" ? "green" : item.status === "in_progress" ? "blue" : "grey"; row.append(element("strong", `govuk-tag govuk-tag--${colour}`, labels[item.status] ?? item.status)); li.append(row); if (item.hint) li.append(element("p", "st-gds-task-list__hint", item.hint)); list.append(li); } root.append(list); return;
    }
    case "warning_text": {
      const warning = element("div", "govuk-warning-text"); warning.append(element("span", "govuk-warning-text__icon", "!")); const strong = element("strong", "govuk-warning-text__text"); strong.append(element("span", "govuk-visually-hidden", `${String(props.icon_fallback)}:`), document.createTextNode(` ${String(props.text)}`)); warning.append(strong); root.append(warning); return;
    }
    case "cookie_banner": {
      if (props.hidden) return; const banner = element("div", "govuk-cookie-banner"); banner.setAttribute("role", "region"); const message = element("div", "govuk-cookie-banner__message govuk-width-container"); message.append(element("h2", "govuk-cookie-banner__heading govuk-heading-m", props.title as Scalar)); const content = element("div", "govuk-cookie-banner__content"); appendContent(content, props.content); message.append(content); const group = element("div", "govuk-button-group"); for (const action of (props.actions ?? []) as Array<{ label: string; value: string; kind: string; href?: string }>) { if (action.kind === "link") group.append(linkNode(action.label, action.href, "govuk-link")); else { const button = element("button", "govuk-button", action.label); button.type = "button"; button.addEventListener("click", () => args.setTriggerValue("action", action.value)); group.append(button); } } message.append(group); banner.append(message); root.append(banner); return;
    }
    case "exit_this_page": {
      const button = linkNode(props.label, props.href, "govuk-exit-this-page__button govuk-button govuk-button--warning"); const handler = (event: KeyboardEvent): void => { if (event.key === "Escape") { args.setTriggerValue("exited", true); window.location.assign(safeHref(props.href)); } }; button.addEventListener("click", () => args.setTriggerValue("exited", true)); document.addEventListener("keydown", handler); root.append(button); return () => document.removeEventListener("keydown", handler);
    }
  }
}

const catalog: Component = (args) => {
  const data = args.data as CatalogData;
  const root = args.parentElement.querySelector<HTMLElement>(".st-gds-root");
  if (!root) return;
  const active = document.activeElement as HTMLInputElement | HTMLTextAreaElement | null;
  const activeId = active && root.contains(active) ? active.id : null;
  const selection: [number | null, number | null] | null = activeId && active && supportsTextSelection(active)
    ? [active.selectionStart, active.selectionEnd] : null;
  root.replaceChildren();

  const props = data.props ?? {};
  let cleanup: (() => void) | void = undefined;
  switch (data.component) {
    case "button": renderButton(root, props, args); break;
    case "text_input": renderTextInput(root, props, args); break;
    case "password_input": renderTextInput(root, props, args, true); break;
    case "textarea": renderTextarea(root, props, args); break;
    case "character_count": renderTextarea(root, props, args, true); break;
    case "select": renderSelect(root, props, args); break;
    case "radios": renderOptions(root, props, args, false); break;
    case "checkboxes": renderOptions(root, props, args, true); break;
    case "date_input": renderDate(root, props, args); break;
    case "file_upload": renderFileUpload(root, props, args); break;
    case "accordion": renderAccordion(root, props, args); break;
    case "tabs": renderTabs(root, props, args); break;
    case "chatbot": renderChatbot(root, props, args); break;
    default: cleanup = renderStatic(root, data.component, props, args);
  }
  restoreFocus(root, activeId, selection);
  return cleanup;
};

export default catalog;
export { appendContent, safeHref };
