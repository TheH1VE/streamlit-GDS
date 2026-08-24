# Releasing

Releases are built and published by `.github/workflows/publish.yml`. The
workflow keeps building and publishing in separate jobs and authenticates with
PyPI Trusted Publishing. Do not add a PyPI API token to GitHub secrets.

## One-time maintainer setup

These steps require the project owner's accounts and cannot be performed by
the repository itself:

1. Create separate accounts on [PyPI](https://pypi.org/) and
   [TestPyPI](https://test.pypi.org/), verify both email addresses, enable
   two-factor authentication, and store the recovery codes safely.
2. In the GitHub repository, create environments named `pypi` and `testpypi`.
   Require approval for `pypi`. Approval is optional for `testpypi`.
3. On the PyPI account's **Publishing** page, add a pending GitHub publisher:

   - PyPI project name: `streamlit-gds`
   - Owner: `TheH1VE`
   - Repository: `streamlit-GDS`
   - Workflow: `publish.yml`
   - Environment: `pypi`

4. Repeat the publisher setup on TestPyPI with the environment
   `testpypi`.

A pending publisher creates the project on first use. It does not reserve the
name before that first successful publication.

## Release checklist

1. Confirm `main` is clean, current, and passing CI.
2. Choose a version that has never been uploaded to the target index. Published
   distributions cannot be overwritten.
3. Update the version in all three package manifests:

   - `pyproject.toml`
   - `streamlit_gds/pyproject.toml`
   - `streamlit_gds/frontend/package.json`

4. Run `npm install --package-lock-only` in `streamlit_gds/frontend` so the
   lock file records the same frontend package version.
5. Move relevant `CHANGELOG.md` entries from **Unreleased** into a dated
   version section.
6. Run the checks in `CONTRIBUTING.md`, including Playwright.
7. Build the frontend with `npm run build` and commit the generated
   `streamlit_gds/frontend/dist` assets.
8. Build and validate the Python distributions locally:

   ```powershell
   python -m pip install --upgrade build twine
   python -m build
   python -m twine check dist/*
   ```

9. Install the wheel into a clean virtual environment and verify the gallery
   runs without Node.js or network-hosted assets.
10. Open a pull request containing the version, changelog, lock-file, bundled
    assets, and documentation changes. Merge it only after CI succeeds.

## TestPyPI release

Before the first production release, set a version that has not previously been
used on TestPyPI and run the **Publish Python package** workflow manually from
GitHub Actions. Manual runs build and publish only to TestPyPI.

Test the uploaded wheel without asking TestPyPI to resolve dependencies, as
TestPyPI does not mirror every dependency from PyPI:

```powershell
python -m venv .testpypi-venv
.testpypi-venv\Scripts\python -m pip install --index-url https://test.pypi.org/simple/ --no-deps streamlit-gds
```

## Production release

After TestPyPI verification and green CI, create and push a signed tag matching
the version in the manifests:

```powershell
git tag -s v0.2.1 -m "streamlit-gds 0.2.1"
git push origin v0.2.1
```

A `v*` tag triggers the workflow's production publishing job. The `pypi`
environment approval must be granted before upload. After publication:

1. Confirm the project page and README render correctly on PyPI.
2. Install from PyPI in a new environment with `python -m pip install
   streamlit-gds`.
3. Create a GitHub Release from the same tag and include the relevant changelog
   notes.
4. Start a new **Unreleased** changelog section if necessary.

If a release is faulty, publish a corrected patch version. Never attempt to
reuse or overwrite a version already uploaded to PyPI.
