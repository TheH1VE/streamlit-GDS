from __future__ import annotations

from datetime import date
from types import SimpleNamespace
from typing import Any

import pytest

import streamlit_gds as gds
import streamlit_gds.components as components
import streamlit_gds.styles as styles


def fake_mount_factory(result: SimpleNamespace) -> tuple[list[tuple[Any, ...]], Any]:
    calls: list[tuple[Any, ...]] = []

    def fake_mount(*args: Any, **kwargs: Any) -> SimpleNamespace:
        calls.append((args, kwargs))
        return result

    return calls, fake_mount


def test_text_input_returns_native_value(monkeypatch: pytest.MonkeyPatch) -> None:
    calls, fake_mount = fake_mount_factory(SimpleNamespace(value="Ada"))
    monkeypatch.setattr(components, "mount", fake_mount)
    assert gds.text_input("Name", key="name", value="Initial") == "Ada"
    assert calls[0][0][0] == "text_input"
    assert calls[0][1]["default"] == {"value": "Initial"}


def test_number_input_and_password_labels_are_forwarded(monkeypatch: pytest.MonkeyPatch) -> None:
    calls, fake_mount = fake_mount_factory(SimpleNamespace(value="12.50"))
    monkeypatch.setattr(components, "mount", fake_mount)
    assert gds.text_input("Amount", key="amount", input_type="number") == "12.50"
    assert calls[0][0][1]["input_type"] == "number"
    assert calls[0][0][1]["inputmode"] == "decimal"

    calls, fake_mount = fake_mount_factory(SimpleNamespace(value="secret"))
    monkeypatch.setattr(components, "mount", fake_mount)
    assert gds.password_input("Password", key="password", show_label="Enter") == "secret"
    assert calls[0][0][1]["show_label"] == "Enter"
    assert calls[0][0][1]["hide_label"] == "Hide"


def test_public_list_helper_uses_builtin_list(monkeypatch: pytest.MonkeyPatch) -> None:
    calls: list[tuple[tuple[Any, ...], dict[str, Any]]] = []
    monkeypatch.setattr(styles, "mount", lambda *args, **kwargs: calls.append((args, kwargs)))

    gds.list(("First", "Second"), ordered=True)

    expected_props = {
        "items": ["First", "Second"],
        "ordered": True,
        "bullet": True,
    }
    assert calls == [(("list", expected_props), {})]


def test_kpi_card_forwards_accessible_metric_content(monkeypatch: pytest.MonkeyPatch) -> None:
    calls, fake_mount = fake_mount_factory(SimpleNamespace())
    monkeypatch.setattr(components, "mount", fake_mount)

    gds.kpi_card(
        "Applications received",
        1248,
        change="12%",
        trend="up",
        comparison="from last month",
        supporting_text="Target: 1,000",
    )

    assert calls[0][0] == (
        "kpi_card",
        {
            "label": "Applications received",
            "value": 1248,
            "change": "12%",
            "trend": "up",
            "comparison": "from last month",
            "supporting_text": "Target: 1,000",
        },
    )


def test_kpi_card_rejects_invalid_labels_and_trends() -> None:
    with pytest.raises(ValueError, match="label must not be empty"):
        gds.kpi_card(" ", 10)
    with pytest.raises(ValueError, match="trend must be"):
        gds.kpi_card("Cases", 10, trend="sideways")  # type: ignore[arg-type]


def test_chatbot_returns_submission_and_forwards_accessible_content(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    calls, fake_mount = fake_mount_factory(SimpleNamespace(submitted="Where is my application?"))
    monkeypatch.setattr(components, "mount", fake_mount)
    messages = [gds.ChatMessage("assistant", "How can I help?", timestamp="10:30")]

    assert (
        gds.chatbot(
            messages,
            key="support-chat",
            label="Ask the service",
            hint="Do not include personal information.",
        )
        == "Where is my application?"
    )
    assert calls[0][0][0] == "chatbot"
    assert calls[0][0][1]["messages"] == messages
    assert calls[0][0][1]["label"] == "Ask the service"
    assert calls[0][1]["default"] == {"draft": ""}
    assert "draft" in calls[0][1]["callbacks"]
    assert "submitted" in calls[0][1]["callbacks"]


def test_chatbot_rejects_empty_labels_and_unknown_roles() -> None:
    with pytest.raises(ValueError, match="label must not be empty"):
        gds.chatbot([], key="chat", label=" ")
    invalid = gds.ChatMessage("system", "Hidden instruction")  # type: ignore[arg-type]
    with pytest.raises(ValueError, match="role must be"):
        gds.chatbot([invalid], key="chat")


def test_choice_inputs_return_native_values(monkeypatch: pytest.MonkeyPatch) -> None:
    _, fake_mount = fake_mount_factory(SimpleNamespace(value="email"))
    monkeypatch.setattr(components, "mount", fake_mount)
    options = ["email", "post"]
    assert gds.radios("Contact", options, key="contact") == "email"
    assert gds.select("Contact", options, key="select-contact") == "email"

    _, fake_mount = fake_mount_factory(SimpleNamespace(value=["email", "post"]))
    monkeypatch.setattr(components, "mount", fake_mount)
    assert gds.checkboxes("Contact", options, key="checks") == ["email", "post"]


def test_date_parsing_and_transient_button(monkeypatch: pytest.MonkeyPatch) -> None:
    _, fake_mount = fake_mount_factory(SimpleNamespace(value="2026-08-13"))
    monkeypatch.setattr(components, "mount", fake_mount)
    assert gds.date_input("Date", key="date") == date(2026, 8, 13)

    _, fake_mount = fake_mount_factory(SimpleNamespace(clicked=True))
    monkeypatch.setattr(components, "mount", fake_mount)
    assert gds.button("Continue", key="continue") is True


def test_every_catalogue_wrapper_is_exported() -> None:
    expected = {
        "accordion",
        "back_link",
        "breadcrumbs",
        "button",
        "character_count",
        "chatbot",
        "checkboxes",
        "cookie_banner",
        "date_input",
        "details",
        "error_message",
        "error_summary",
        "exit_this_page",
        "fieldset",
        "file_upload",
        "footer",
        "header",
        "inset_text",
        "kpi_card",
        "notification_banner",
        "pagination",
        "panel",
        "password_input",
        "phase_banner",
        "radios",
        "select",
        "service_navigation",
        "skip_link",
        "summary_list",
        "table",
        "tabs",
        "tag",
        "task_list",
        "text_input",
        "textarea",
        "warning_text",
    }
    assert expected <= set(gds.__all__)
    assert not hasattr(gds, "govuk_header")
    assert not hasattr(gds, "govuk_footer")
