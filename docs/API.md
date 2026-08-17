# Python API

All stateful controls require a unique `key` without the reserved `__`
sequence. Callbacks follow Streamlit's execution model and accept `args` and
`kwargs` where exposed.

## Setup and core styles

- `configure(*, page_title, service_name, brand_colour="#1d70b8", chrome="minimal", page_icon=None, layout="centered")`
- `container(*, key, width="full", border=False)` returns a Streamlit container.
- `columns(spec, *, gap="medium", vertical_alignment="top")` returns Streamlit columns.
- `space(size=4)`, `heading(text, *, size="l", caption=None)`, and
  `paragraph(content, *, lead=False)` render typography and spacing.
- `link(label, href, *, external=False)`, `list(items, *, ordered=False, bullet=True)`,
  `image(src, *, alt, caption=None, width=None)`, and `section_break(...)` render core elements.

## Stateful form controls

- `button(label, *, key, kind="primary", disabled=False, width="auto", on_click=None, ...) -> bool`
- `text_input(label, *, key, value="", hint=None, error=None, disabled=False, required=False, width="full", prefix=None, suffix=None, autocomplete=None, inputmode=None, input_type="text", on_change=None, ...) -> str`; set `input_type="number"` for numeric entry.
- `textarea(...) -> str`, `password_input(..., show_label="Show", hide_label="Hide") -> str`, and
  `character_count(..., max_characters, threshold=75) -> str`
- `select(label, options, *, key, value=None, ...) -> T | None`
- `radios(label, options, *, key, value=None, inline=False, ...) -> T | None`
- `checkboxes(label, options, *, key, value=(), small=False, ...) -> list[T]`
- `date_input(label, *, key, value=None, ...) -> datetime.date | None`
- `file_upload(label, *, key, accept=(), max_size_mb=None, ...) -> UploadedFileValue | None`

## Navigation and page UI

`accordion`, `back_link`, `breadcrumbs`, `cookie_banner`, `exit_this_page`,
`header`, `footer`, `notification_banner`, `pagination`, `phase_banner`,
`service_navigation`, `skip_link`, and `tabs` map directly to their catalogue
names. Stateful functions return the selected index, action, or trigger value.

## Content and status

`details`, `error_message`, `error_summary`, `fieldset`, `inset_text`, `panel`,
`summary_list`, `table`, `tag`, `task_list`, and `warning_text` render static
semantic content. `error_summary(..., focus=True)` focuses itself by default;
set `focus=False` only for galleries or non-validation demonstrations.

`kpi_card(label, value, *, change=None, trend="neutral", rag_status=None,
comparison=None, supporting_text=None)` renders a GOV.UK-inspired KPI display. It is a
Streamlit GDS extension rather than an official GOV.UK component. `trend` is
`"up"`, `"down"`, or `"neutral"` and communicates direction only, not whether
the change is good or bad. Set `rag_status` to `"red"`, `"amber"`, or `"green"`
for a subtle status-coloured accent and a visible written status:

```python
gds.kpi_card(
    "Decisions issued",
    986,
    rag_status="amber",
    supporting_text="Target: 1,000 decisions",
)
```

The written status and forced-colour treatment ensure colour is not the only
cue. Define what red, amber, and green mean for the service near the cards;
do not assume every user will interpret the categories in the same way.

`chatbot(messages, *, key, label="Chat support", input_label="Your message",
hint=None, error=None, placeholder=None, send_label="Send",
assistant_name="Service assistant", user_name="You", waiting=False,
disabled=False, empty_text="No messages yet.", on_submit=None, ...) -> str | None`
renders an accessible transcript and message composer. It returns a submitted
message as a transient value. Store `ChatMessage` objects in session state,
send the returned text to your own assistant backend, append the response, and
rerun the app. This is a Streamlit GDS extension, not an official GOV.UK
component.

## Typed models

`Option`, `Link`, `Breadcrumb`, `ChatMessage`, `NavigationItem`, `PaginationItem`,
`SummaryAction`, `SummaryRow`, `TaskItem`, `TableColumn`, `ErrorItem`,
`AccordionItem`, `TabItem`, `CookieAction`, `UploadedFileValue`, and
`HtmlContent` are exported from `streamlit_gds`.

Plain strings are text-only. `HtmlContent` permits only sanitised rich content
using the frontend allow-list; it does not permit scripts, images, event
handlers, embedded content, or arbitrary attributes.
