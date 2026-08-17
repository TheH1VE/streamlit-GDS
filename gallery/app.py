"""Interactive catalogue for every Streamlit GDS component."""

from __future__ import annotations

from datetime import date

import streamlit as st

import streamlit_gds as gds

gds.configure(
    page_title="Streamlit GDS component gallery",
    service_name="Component gallery",
    chrome="streamlit",
    layout="wide",
)
gds.skip_link()
gds.header(
    organisation="Example public service",
    service_name="Streamlit GDS",
    navigation=[
        gds.NavigationItem("Components", "#components", active=True),
        gds.NavigationItem("Accessibility", "#accessibility"),
    ],
)
gds.phase_banner("Alpha", "This library is being actively developed.")
gds.breadcrumbs(
    [gds.Breadcrumb("Home", "/"), gds.Breadcrumb("Component gallery")],
    collapse_on_mobile=True,
)
gds.heading("Component gallery", size="xl", caption="Streamlit GDS")
gds.paragraph(
    "All non-brand-restricted GOV.UK Design System components are represented below. "
    "The header and footer are neutral alternatives for non-GOV.UK services.",
    lead=True,
)

section = st.sidebar.radio(
    "Catalogue section",
    ["Forms", "Navigation", "Content", "Styles"],
    key="gallery-section",
)

if section == "Forms":
    gds.heading("Form controls", size="l")
    if gds.button("Primary button", key="gallery-primary"):
        gds.notification_banner("Success", "The primary button was selected.", success=True)
    gds.button("Secondary button", key="gallery-secondary", kind="secondary")
    gds.button("Warning button", key="gallery-warning", kind="warning")
    gds.button("Start now", key="gallery-start", kind="start")

    name = gds.text_input(
        "Full name",
        key="gallery-name",
        hint="Enter your name as it appears on official documents",
        autocomplete="name",
        width="two-thirds",
    )
    gds.paragraph(f"Current value: {name or 'None'}")
    gds.text_input(
        "Amount",
        key="gallery-amount",
        prefix="£",
        suffix="per month",
        width="one-third",
        input_type="number",
    )
    gds.password_input(
        "Password",
        key="gallery-password",
        hint="Use at least 10 characters",
        width="one-half",
        show_label="Enter",
    )
    gds.textarea("Additional information", key="gallery-textarea", rows=4)
    gds.character_count(
        "Describe the issue",
        key="gallery-count",
        max_characters=200,
        hint="Do not include personal information",
    )

    options = [
        gds.Option("Email", "email", hint="We will send a confirmation"),
        gds.Option("Phone", "phone", conditional="Calls are available Monday to Friday."),
        gds.Option("Post", "post"),
    ]
    gds.radios("How should we contact you?", options, key="gallery-radios")
    gds.checkboxes(
        "Which updates do you want?",
        [("Service updates", "service"), ("Research invitations", "research")],
        key="gallery-checkboxes",
    )
    gds.select("Country", ["England", "Scotland", "Wales"], key="gallery-select")
    gds.date_input(
        "Date of birth", key="gallery-date", value=date(1990, 1, 1), hint="For example, 31 3 1980"
    )
    gds.file_upload(
        "Upload supporting evidence",
        key="gallery-file",
        accept=[".pdf", ".png", ".jpg"],
        hint="PDF, PNG or JPG",
    )
    gds.fieldset("Contact details", "Use a phone number where we can reach you during the day.")
    gds.error_message("Enter a valid reference number")
    gds.error_summary(
        "There is a problem",
        [gds.ErrorItem("Enter your full name", "#st-gds-gallery-name-field")],
        focus=False,
    )

elif section == "Navigation":
    gds.heading("Navigation and page UI", size="l")
    gds.back_link()
    gds.service_navigation(
        [
            gds.NavigationItem("Overview", "#overview", active=True),
            gds.NavigationItem("Applications", "#applications"),
        ],
        service_name="Example service",
    )
    gds.accordion(
        [
            gds.AccordionItem("What you need", "Your reference number and contact details."),
            gds.AccordionItem("What happens next", "We will review your application."),
        ],
        key="gallery-accordion",
    )
    gds.tabs(
        [gds.TabItem("Past day", "12 applications"), gds.TabItem("Past week", "81 applications")],
        key="gallery-tabs",
    )
    gds.pagination(
        [
            gds.PaginationItem("1", "#page-1", current=True),
            gds.PaginationItem("2", "#page-2"),
        ],
        previous=gds.Link("Previous", "#previous"),
        next=gds.Link("Next", "#next"),
    )
    action = gds.cookie_banner(
        "Cookies on this example service",
        "We use analytics cookies to understand how people use this service.",
        [
            gds.CookieAction("Accept analytics cookies", "accept"),
            gds.CookieAction("Reject analytics cookies", "reject"),
            gds.CookieAction("View cookies", "view", kind="link", href="#cookies"),
        ],
        key="gallery-cookie-banner",
    )
    if action:
        gds.paragraph(f"Cookie action: {action}")
    gds.exit_this_page(key="gallery-exit")

elif section == "Content":
    gds.heading("Content and status", size="l")
    gds.heading("Key performance indicators", size="m")
    gds.paragraph(
        "KPI cards are a Streamlit GDS extension, not an official GOV.UK Design System component."
    )
    kpi_columns = st.columns(3)
    with kpi_columns[0]:
        gds.kpi_card(
            "Applications received",
            "1,248",
            change="12%",
            trend="up",
            comparison="from last month",
            supporting_text="Target: 1,200 applications",
        )
    with kpi_columns[1]:
        gds.kpi_card(
            "Decisions issued",
            986,
            change="8%",
            trend="up",
            comparison="from last month",
            supporting_text="Target: 1,000 decisions",
        )
    with kpi_columns[2]:
        gds.kpi_card(
            "Median processing time",
            "9 days",
            change="2 days",
            trend="down",
            comparison="from last month",
            supporting_text="Target: 10 days or fewer",
        )
    gds.heading("Chatbot", size="m")
    gds.paragraph(
        "The chatbot is a Streamlit GDS extension, not an official GOV.UK Design System "
        "component. Connect submitted messages to your own assistant service."
    )
    chat_history_key = "gallery-chat-history"
    if chat_history_key not in st.session_state:
        st.session_state[chat_history_key] = [
            gds.ChatMessage(
                "assistant",
                "Hello. I can help you understand your application status.",
                timestamp="10:30",
            )
        ]
    submitted_message = gds.chatbot(
        st.session_state[chat_history_key],
        key="gallery-chatbot",
        label="Ask the service",
        hint="Do not include personal or financial information.",
        placeholder="Type your message",
    )
    if submitted_message:
        st.session_state[chat_history_key].extend(
            [
                gds.ChatMessage("user", submitted_message, timestamp="Now"),
                gds.ChatMessage(
                    "assistant",
                    "Thanks. In a live service, your assistant backend would respond here.",
                    timestamp="Now",
                ),
            ]
        )
        st.rerun()
    gds.details("Help with your reference number", "It is shown at the top of your letter.")
    gds.inset_text("It can take up to 10 working days to process an application.")
    gds.notification_banner("Important", "The service will be unavailable on Sunday.")
    gds.panel("Application complete", "Your reference number is HDJ2123F", variant="confirmation")
    gds.panel("Check before continuing", "This action cannot be undone.", variant="interruption")
    gds.summary_list(
        [
            gds.SummaryRow(
                "Name", "Taylor Example", (gds.SummaryAction("Change", "#name", "name"),)
            ),
            gds.SummaryRow("Contact", "taylor@example.com"),
        ],
        card_title="Applicant",
    )
    gds.table(
        [gds.TableColumn("month", "Month"), gds.TableColumn("amount", "Amount", numeric=True)],
        [{"month": "January", "amount": "£120"}, {"month": "February", "amount": "£140"}],
        caption="Monthly totals",
    )
    colour_columns = st.columns(3)
    for column, (label, colour) in zip(
        colour_columns,
        [("Completed", "green"), ("In progress", "blue"), ("Not started", "grey")],
        strict=True,
    ):
        with column:
            gds.tag(label, colour=colour)
    gds.task_list(
        [
            gds.TaskItem("Personal details", "#personal", "completed"),
            gds.TaskItem("Supporting evidence", "#evidence", "in_progress"),
            gds.TaskItem("Declaration", status="cannot_start"),
        ],
        title="Application tasks",
    )
    gds.warning_text("You can be fined if you provide false information.")

else:
    gds.heading("Core styles", size="l")
    for size in ("xl", "l", "m", "s"):
        gds.heading(f"Heading {size}", size=size)
    gds.paragraph("Lead paragraphs establish the purpose of a page.", lead=True)
    gds.paragraph("Body copy uses a readable system sans-serif stack.")
    gds.link("External guidance", "https://design-system.service.gov.uk/", external=True)
    gds.list(["A bulleted item", "Another bulleted item"])
    gds.list(["First step", "Second step"], ordered=True)
    gds.section_break(size=4)
    gds.space(6)

gds.footer(
    organisation="Example public service",
    text="This demonstration does not use GOV.UK branding.",
    links=[gds.Link("Accessibility", "#accessibility"), gds.Link("Privacy", "#privacy")],
)
