# Branding restrictions

This package targets public and internal services outside GOV.UK. It does not
contain or expose a `govuk_header()` or `govuk_footer()` function, the GOV.UK
logo or Crown, Crown copyright wording, or the GDS Transport font.

Use `header()` for a configurable organisation and service identity and
`footer()` for neutral service links. Do not use this package to imply that a
service is hosted on, operated by, or endorsed by GOV.UK.

Eligible GOV.UK services should use GOV.UK Frontend through an approved service
stack and follow the current GOV.UK Design System and Service Manual guidance,
rather than enabling branding in this package.
