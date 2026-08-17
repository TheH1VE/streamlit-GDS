# Streamlit GDS

`streamlit-gds` is an installable, typed component library that brings the
layout, accessibility conventions, and component appearance of GOV.UK Frontend
to Streamlit applications that are **not** part of GOV.UK.

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

gds.configure(page_title="Example service", service_name="Example service")
gds.header(organisation="Example organisation", service_name="Example service")

name = gds.text_input("Full name", key="full-name")
if gds.button("Continue", key="continue"):
    gds.notification_banner("Saved", f"Saved details for {name}", success=True)

gds.footer(organisation="Example organisation")
```

## Catalogue

- Forms: Button, Character count, Checkboxes, Date input, Error message,
  Error summary, Fieldset, File upload, Password input, Radios, Select,
  Text input and Textarea.
- Navigation and page UI: Accordion, Back link, Breadcrumbs, Cookie banner,
  Exit this page, Generic Header, Notification banner, Pagination, Phase
  banner, Service navigation, Skip link, Tabs and neutral Footer.
- Content and status: Details, Inset text, Panel, Summary list, Table, Tag,
  Task list and Warning text, plus a clearly identified GOV.UK-inspired KPI
  card extension for Streamlit dashboards and an accessible chatbot extension.
- Core styles: page configuration, containers, columns, spacing, headings,
  paragraphs, links, lists, images and section breaks.

The gallery at [`gallery/app.py`](gallery/app.py) contains a runnable example
of every public component and major variant. A complete validation flow is in
[`examples/example_service.py`](examples/example_service.py).

## Component state and forms

Stateful controls require a unique `key`. Values are available directly from
the return value and under that key in `st.session_state`. Text inputs commit
on `change`, while buttons and navigation actions use transient triggers.

Component v2 controls can be placed inside `st.form`, but their state updates
are not batched in the same way as native Streamlit widgets. Use a submit action
to control when your application processes the stored values.

Choice controls accept simple value lists, for example
`gds.select("Country", ["England", "Scotland"], key="country")`. Use
`(label, value)` tuples when the displayed label should differ from the returned
value, or `gds.Option` for hints, disabled choices, and conditional content.

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
