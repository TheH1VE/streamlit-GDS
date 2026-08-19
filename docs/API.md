# Python API

Version 0.2 has two complementary surfaces:

- top-level `gds.*` functions delegate to Streamlit 1.61 and retain native
  signatures, annotations, return values and state;
- `gds.catalogue.*` contains the exact GOV.UK component implementations and
  their additional hint, error, conditional-content and variant arguments.

GDS host styling is installed lazily on the first supported top-level UI call.
Automatic mode keeps Streamlit chrome visible. `configure(...)` can set the
page title, service name, brand colour, layout and optional minimal chrome.

## Native-compatible functions

The following functions have the same callable contract as their `st.*`
counterpart:

- Text: `write`, `markdown`, `title`, `header`, `subheader`, `caption`, `text`,
  `code`, `latex`, `divider`, and `badge`.
- Actions: `button`, `download_button`, `form_submit_button`, `link_button`,
  `menu_button`, and `page_link`.
- Inputs: `checkbox`, `toggle`, `radio`, `selectbox`, `multiselect`, `pills`,
  `segmented_control`, `select_slider`, `number_input`, `slider`, `date_input`,
  `datetime_input`, `time_input`, `text_input`, `text_area`, `file_uploader`,
  `color_picker`, `feedback`, `audio_input`, and `camera_input`.
- Data: `metric`, `table`, `dataframe`, `data_editor`, and `json`.
- Layout: `form`, `container`, `columns`, `tabs`, `expander`, `popover`,
  `dialog`, `empty`, `space`, `sidebar`, and `bottom`.
- Status and chat: `info`, `success`, `warning`, `error`, `exception`,
  `progress`, `spinner`, `status`, `skeleton`, `toast`, `chat_input`,
  `chat_message`, and `write_stream`.
- Charts and media: `area_chart`, `bar_chart`, `line_chart`, `scatter_chart`,
  `map`, `pyplot`, `altair_chart`, `vega_lite_chart`, `plotly_chart`,
  `pydeck_chart`, `graphviz_chart`, `mermaid_chart`, `image`, `audio`, `video`,
  `pdf`, and `logo`.

Consult the Streamlit 1.61 API reference for individual parameters. For
example, native button variants use `type`, not the catalogue's `kind`:

```python
import streamlit_gds as gds

name = gds.text_input("Full name")
if gds.button("Continue", type="primary"):
    gds.success(f"Saved details for {name}")
```

`session_state`, `query_params`, `cache_data`, `cache_resource`, `secrets`,
`Page`, `navigation`, `rerun`, `stop`, `fragment`, `switch_page`, and
`set_page_config` are direct Streamlit aliases. Other unlisted Streamlit APIs
are transparently forwarded but are not guaranteed to receive GDS styling.

## Exact catalogue

Conflicting 0.1 APIs are available as:

- `gds.catalogue.header`, `button`, `download_button`, `text_input`,
  `date_input`, `table`, `tabs`, `image`, `container`, `columns`, and `space`.
- All other catalogue functions are also present in that namespace. Their
  existing top-level aliases remain for compatibility when no native name
  conflict exists.

All stateful catalogue controls require a unique `key` without the reserved
`__` sequence. Catalogue callbacks follow Streamlit's execution model where
`args` and `kwargs` are exposed.

### Catalogue form controls

- `button(label, *, key, kind="primary", ...) -> bool`
- `download_button(label, data, file_name=None, mime=None, *, key, ...) -> bool`
- `text_input(label, *, key, hint=None, error=None, required=False, prefix=None,
  suffix=None, input_type="text", ...) -> str`
- `textarea`, `password_input`, and `character_count`
- `select`, `radios`, and `checkboxes`
- `date_input` and `file_upload`
- `fieldset`, `error_message`, and `error_summary`

### Navigation and content

`accordion`, `back_link`, `breadcrumbs`, `cookie_banner`, `exit_this_page`,
`header`, `footer`, `notification_banner`, `pagination`, `phase_banner`,
`service_navigation`, `skip_link`, `tabs`, `details`, `inset_text`, `panel`,
`summary_list`, `table`, `tag`, `task_list`, and `warning_text` map to their
catalogue names.

`kpi_card(..., rag_status="red" | "amber" | "green")` and `chatbot(...)` are
GDS-inspired Streamlit extensions rather than official GOV.UK components.

## Typed models and safe content

`Option`, `Link`, `Breadcrumb`, `ChatMessage`, `NavigationItem`,
`PaginationItem`, `SummaryAction`, `SummaryRow`, `TaskItem`, `TableColumn`,
`ErrorItem`, `AccordionItem`, `TabItem`, `CookieAction`, `UploadedFileValue`,
and `HtmlContent` are exported at the package top level.

Plain catalogue strings are text-only. `HtmlContent` permits only sanitised
rich content through the frontend allow-list and never allows scripts, images,
event handlers or embedded content.
