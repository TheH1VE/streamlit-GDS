# Accessibility

The component DOM follows GOV.UK Frontend class and semantic structures, with
visible labels, fieldsets and legends, deterministic IDs, error associations,
live character-count messages, keyboard-operable disclosure controls, and
focusable error summaries.

KPI cards expose a named region, heading, value, and textual trend direction.
Arrow icons are decorative, and an increase or decrease is never conveyed by
colour alone.

The chatbot transcript is a named, keyboard-focusable live log. Every message
has visible speaker attribution, optional timestamps, and text that is safely
escaped by default. The composer uses GOV.UK label, hint, error and button
conventions. Enter inserts a new line; Control+Enter (or Command+Enter) submits.
Applications should announce genuinely asynchronous failures, avoid placing
sensitive information in conversation history, and manually test the complete
assistant journey with a screen reader.

Application authors remain responsible for:

- providing meaningful labels, hints, link text, image alternative text, and
  page titles;
- placing `skip_link()` before the header and ensuring the page has a
  `main-content` target;
- validating on the server and passing field errors and an error summary;
- preserving heading order and testing content at 200% and 400% zoom;
- testing complete journeys with keyboard-only operation and at least one
  screen reader used by the service audience.

The automated suite checks semantic rendering and sanitisation. Before a
production release, run Playwright with axe at 320px, tablet and desktop sizes,
then manually test Chrome with NVDA, forced-colour mode, print output, zoom,
focus order, conditional controls, tabs, accordions and error navigation.
