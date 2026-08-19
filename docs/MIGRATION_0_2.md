# Migrating from 0.1 to 0.2

Version 0.2 makes the package top level compatible with Streamlit 1.61. Calls
that share a name with Streamlit now have the same signature and return type as
the native function. Exact GOV.UK component implementations remain available
under `gds.catalogue`.

## Required changes

| 0.1 call | 0.2 exact-catalogue call | 0.2 native alternative |
| --- | --- | --- |
| `gds.header(organisation=...)` | `gds.catalogue.header(organisation=...)` | `gds.header("Heading")` |
| `gds.button(..., kind=...)` | `gds.catalogue.button(..., kind=...)` | `gds.button(..., type=...)` |
| `gds.download_button(..., kind=...)` | `gds.catalogue.download_button(..., kind=...)` | `gds.download_button(...)` |
| `gds.text_input(..., hint=..., error=...)` | `gds.catalogue.text_input(...)` | `gds.text_input(...)` |
| `gds.date_input(..., hint=...)` | `gds.catalogue.date_input(...)` | `gds.date_input(...)` |
| `gds.table(columns, rows, ...)` | `gds.catalogue.table(columns, rows, ...)` | `gds.table(data)` |
| `gds.tabs(TabItem(...), ...)` | `gds.catalogue.tabs(...)` | `gds.tabs(["One", "Two"])` |
| `gds.image(src, alt=...)` | `gds.catalogue.image(src, alt=...)` | `gds.image(image, caption=...)` |
| `gds.container(key=..., width="two-thirds")` | `gds.catalogue.container(...)` | `gds.container(...)` |
| `gds.columns(..., gap="medium")` | `gds.catalogue.columns(...)` | `gds.columns(...)` |
| `gds.space(6)` | `gds.catalogue.space(6)` | `gds.space("large")` |

Non-conflicting catalogue functions remain as top-level compatibility aliases,
but new code should use `gds.catalogue` when mixing native and exact components.

## Behaviour changes

- Native-compatible widgets no longer require `key` unless Streamlit requires
  one for that use case.
- Native widgets use Streamlit session state and form batching directly.
- Native arguments such as `type`, `format_func`, `label_visibility`, `width`,
  `on_change`, `args`, and `kwargs` are accepted unchanged.
- Exact catalogue widgets retain their 0.1 state model and required keys.
- Automatic styling keeps Streamlit chrome visible. Call
  `gds.configure(..., chrome="minimal")` to hide it for a service deployment.

Update deployment environments to Streamlit 1.61.1 before installing version
0.2.
