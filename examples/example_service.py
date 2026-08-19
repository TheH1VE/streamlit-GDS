"""A small multi-step service showing validation and session-state usage."""

from __future__ import annotations

import streamlit_gds as gds

gds.configure(page_title="Apply for an example permit", service_name="Example permits")
gds.skip_link()
gds.catalogue.header(
    organisation="Example Council", service_name="Apply for an example permit"
)
gds.phase_banner("Beta", "Your feedback helps us improve this service.")

step = gds.session_state.get("step", 1)
if step == 1:
    gds.heading("Your details", size="xl")
    name = gds.catalogue.text_input(
        "Full name",
        key="service-name",
        hint="Enter your name as it appears on official documents",
        error=gds.session_state.get("name_error"),
    )
    email = gds.catalogue.text_input(
        "Email address",
        key="service-email",
        autocomplete="email",
        error=gds.session_state.get("email_error"),
    )
    if gds.catalogue.button("Save and continue", key="service-continue"):
        gds.session_state.name_error = None if name.strip() else "Enter your full name"
        gds.session_state.email_error = None if "@" in email else "Enter a valid email address"
        if not gds.session_state.name_error and not gds.session_state.email_error:
            gds.session_state.step = 2
            gds.rerun()
elif step == 2:
    gds.back_link(href="#", label="Back to your details")
    gds.heading("Upload evidence", size="xl")
    uploaded = gds.file_upload(
        "Upload a document",
        key="service-evidence",
        accept=[".pdf", ".png", ".jpg"],
        hint="PDF, PNG or JPG",
    )
    if uploaded:
        gds.inset_text(f"Selected {uploaded.name} ({uploaded.size} bytes)")
    if gds.catalogue.button("Submit application", key="service-submit"):
        gds.session_state.step = 3
        gds.rerun()
else:
    gds.panel("Application complete", "Your reference number is EXAMPLE-1234")
    gds.paragraph("We have sent a confirmation email. You can now close this page.")

gds.catalogue.footer(
    organisation="Example Council",
    links=[gds.Link("Accessibility", "#accessibility"), gds.Link("Privacy", "#privacy")],
)
