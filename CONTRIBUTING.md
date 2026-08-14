# Contributing

Thank you for contributing to Streamlit GDS. Changes should preserve accessible
GOV.UK-style behaviour without introducing restricted GOV.UK branding.

## Development setup

Python 3.10 or newer and Node.js 22 are required for development. Consuming
applications do not require Node.js.

```console
python -m venv .venv
python -m pip install -e ".[dev]"
cd streamlit_gds/frontend
npm ci
npm run build
```

Run the gallery from the repository root:

```console
python -m streamlit run gallery/app.py
```

## Before opening a pull request

```console
python -m ruff check .
python -m mypy streamlit_gds
python -m pytest
python -m build
cd streamlit_gds/frontend
npm test
npm run build
npm run test:e2e
```

Commit the rebuilt files in `streamlit_gds/frontend/dist`. Pull requests that
change component markup, styling, or behaviour should update the gallery, API
documentation, automated tests, and visual snapshots when appropriate.

## Accessibility and parity

- Start with the official GOV.UK Design System component guidance and markup.
- Record intentional differences caused by Streamlit or branding restrictions.
- Test keyboard operation, focus, error states, 320px layout, and screen-reader
  semantics for interactive changes.
- Do not add the GOV.UK logo, Crown, GDS Transport, GOV.UK header/footer, or
  wording that implies government endorsement.

Use focused commits and do not include generated caches, local logs, secrets,
or service data. By contributing, you agree that your contribution is licensed
under the MIT licence in this repository.
