# Releasing

This repository is not configured to publish automatically. Before creating a
release:

1. Update the version in `pyproject.toml`, `streamlit_gds/pyproject.toml`, and
   `streamlit_gds/frontend/package.json`.
2. Regenerate `streamlit_gds/frontend/package-lock.json` when its package
   metadata changes.
3. Move the relevant entries from `Unreleased` in `CHANGELOG.md` into a dated
   version section.
4. Run every command in `CONTRIBUTING.md`, including the Playwright suite.
5. Build the frontend and commit `streamlit_gds/frontend/dist`.
6. Build the wheel and source distribution with `python -m build`.
7. Install the wheel in a clean environment and run the gallery without
   Node.js or network-hosted assets.
8. Create a signed version tag only after CI succeeds on `main`.

Package-index publication should be added later as a separate trusted-publisher
workflow. Do not store an API token in GitHub repository secrets.
