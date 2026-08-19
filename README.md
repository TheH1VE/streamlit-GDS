# Streamlit GDS

`streamlit-gds` is an installable, typed compatibility layer that gives native
Streamlit 1.61 elements a GOV.UK-inspired presentation. It also includes an
exact GOV.UK component catalogue for applications that are **not** part of GOV.UK.

It deliberately does not ship the GOV.UK logo, GOV.UK header/footer, Crown
copyright defaults, or GDS Transport. The package uses the official Generic
Header approach and a neutral footer with Arial/Helvetica system fonts.

## Install and run

```powershell
python -m pip install -e .
python -m streamlit run gallery/app.py
```

For Posit Connect deployments, [`requirements.txt`](requirements.txt) lists
the third-party Python runtime dependencies explicitly. Deploy the repository
root so the bundled `streamlit_gds` package and its compiled frontend assets
are included with the Streamlit application.

Consuming applications need Python only. Node.js is needed only when changing
the bundled frontend:

```powershell
cd streamlit_gds/frontend
npm ci
npm run build
```

## Quick start

```python
import streamlit_gds as gds

gds.set_page_config(page_title="Example service")
gds.catalogue.header(organisation="Example organisation", service_name="Example service")

name = gds.text_input("Full name")
if gds.button("Continue", type="primary"):
    gds.notification_banner("Saved", f"Saved details for {name}", success=True)

gds.catalogue.footer(organisation="Example organisation")
```

Native-compatible functions retain Streamlit's arguments, return values,
callbacks, optional keys, form batching, session state and container objects.
GDS host styling is installed automatically on the first `gds` UI call and
keeps the Streamlit toolbar visible. `gds.configure(...)` remains available for
service branding and optional minimal chrome.

See [`docs/MIGRATION_0_2.md`](docs/MIGRATION_0_2.md) before updating an existing
0.1 application.

## Native-compatible API

For a typical Streamlit application, replace the import and keep the native
calls unchanged:

```python
# Before: import streamlit as st
import streamlit_gds as gds

name = gds.text_input("Full name", placeholder="For example, Alex Smith")
updates = gds.multiselect("Updates", ["Email", "Text message"])
priority = gds.pills("Priority", ["Routine", "Urgent"])

if gds.button("Continue", type="primary"):
    gds.success(f"Saved details for {name}")
```

The top-level API covers native text, buttons, inputs, dataframes, data editors,
metrics, forms, layouts, status messages, chat, charts and media. Calls outside
the explicitly styled surface are forwarded to Streamlit unchanged, including
`session_state`, caching, navigation, execution control and developer utilities.

Charts, media and interactive data grids retain their native rendering and get
only a neutral GDS frame, typography and focus treatment. The package does not
rewrite chart data or colour specifications.

## Exact component catalogue

Use `gds.catalogue` when you need exact GOV.UK structures or extra arguments
such as hints, errors, conditional content, start buttons and segmented dates:

```python
name = gds.catalogue.text_input(
    "Full name",
    key="full-name",
    hint="Enter your name as it appears on official documents",
    error="Enter your full name",
)
```

- Forms: Button, Download button, Character count, Checkboxes, Date input, Error message,
  Error summary, Fieldset, File upload, Password input, Radios, Select,
  Text input and Textarea.
- Navigation and page UI: Accordion, Back link, Breadcrumbs, Cookie banner,
  Exit this page, Generic Header, Notification banner, Pagination, Phase
  banner, Service navigation, Skip link, Tabs and neutral Footer.
- Content and status: Details, Inset text, Panel, Summary list, Table, Tag,
  Task list and Warning text, plus a clearly identified GOV.UK-inspired KPI
  card extension with optional accessible RAG status for Streamlit dashboards,
  and an accessible chatbot extension.
- Core styles: page configuration, containers, columns, spacing, headings,
  paragraphs, links, lists, images and section breaks.

The gallery at [`gallery/app.py`](gallery/app.py) contains a runnable example
of every public component and major variant. A complete validation flow is in
[`examples/example_service.py`](examples/example_service.py).

The repository's [`.streamlit/config.toml`](.streamlit/config.toml) makes the
gallery open in light mode by default so its GDS presentation is consistent.
This setting belongs to the gallery deployment and is not bundled into the
installed package; consuming applications remain in control of their own
Streamlit theme.

## Component state and forms

Native-compatible controls follow Streamlit exactly, including optional keys
and form batching. Exact catalogue controls require a unique `key`; their values
are available directly and under that key in `gds.session_state`.

`gds.catalogue.download_button` provides the exact GOV.UK button presentation for downloadable
text, bytes, or file-like data. It supports primary and secondary variants,
filename and MIME-type inference, disabled and full-width states, and click
callbacks. Deferred callable downloads are not currently supported.

Catalogue Component v2 controls can be placed inside `gds.form`, but their state updates
are not batched in the same way as native Streamlit widgets. Use a submit action
to control when your application processes the stored values.

`HtmlContent` is the only rich-HTML escape hatch. It is sanitised in the
browser using a small allow-list. Normal strings are always inserted as text.

The chatbot supplies an accessible transcript and composer, but no assistant
backend. Applications own message storage, model calls, moderation, privacy,
and the content of generated responses.

## Development checks

```powershell
python -m pytest
python -m ruff check .
python -m mypy streamlit_gds
python -m build
cd streamlit_gds/frontend
npm test
npm run build
npm audit --omit=dev
```

See [`docs/ACCESSIBILITY.md`](docs/ACCESSIBILITY.md),
[`docs/BRANDING.md`](docs/BRANDING.md), and
[`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md) before production use. Public
signatures and return values are listed in [`docs/API.md`](docs/API.md).

Contributions are welcome. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the
development workflow, [`SECURITY.md`](SECURITY.md) for private vulnerability
reporting, and [`CHANGELOG.md`](CHANGELOG.md) for release history. Maintainer
release steps are documented in [`docs/RELEASING.md`](docs/RELEASING.md).

## Licensing and status

This project is not affiliated with or endorsed by the UK Government. The
library source is MIT licensed. GOV.UK Frontend is also distributed under the
MIT licence; GOV.UK documentation content has separate Open Government Licence
terms. This is an alpha internal library and has not been assessed as an
official GOV.UK component implementation.
