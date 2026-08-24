# Changelog

All notable changes to this project will be documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- Repeated identical `section_break()` calls no longer create duplicate
  Component v2 IDs, and the `size` argument now changes spacing using GOV.UK
  spacing utilities.
- The Exit this page warning button keeps white text on its red background and
  black text on its yellow keyboard-focus treatment.

### Changed

- Package metadata now follows current PyPA licence and discovery guidance, and
  releases use separate build and Trusted Publishing jobs for TestPyPI and
  PyPI.

## [0.2.0] - 2026-08-19

### Added

- Native-compatible Streamlit 1.61 façade for text, widgets, data, layout,
  status, chat, chart, and media APIs with automatic GDS host styling.
- `gds.catalogue` namespace preserving the exact GOV.UK component APIs.
- Transparent forwarding for Streamlit session state, caching, navigation,
  execution control, and APIs outside the styled surface.
- Native compatibility gallery, signature contract tests, migration guide, and
  paired behavioural smoke coverage.
- GitHub contribution, security, issue, pull-request, and dependency-update
  configuration.
- GOV.UK-styled download button for text, bytes, and file-like data with
  configurable filenames, MIME types, callbacks, and primary or secondary styles.
- Accessible GOV.UK-inspired KPI card extension with directional change and
  comparison text, plus subtle red, amber, or green status accents with visible
  text labels and forced-colour support.
- Accessible GOV.UK-inspired chatbot extension with a live transcript,
  attributed messages, message composer, waiting state, and transient submits.

### Changed

- `gds` now targets Streamlit `>=1.61,<1.62`; Posit Connect deployments pin
  Streamlit 1.61.1.
- Top-level names that conflict with Streamlit now use native signatures and
  return types. Their previous exact-catalogue implementations moved to
  `gds.catalogue`.

## [0.1.0] - 2026-08-14

### Added

- Initial typed Streamlit GDS component catalogue.
- Bundled GOV.UK Frontend 6.4.0 assets using a system font stack.
- Component gallery, example service, API documentation, and accessibility
  guidance.
- Python, frontend, browser, visual-regression, and accessibility tests.
