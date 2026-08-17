from __future__ import annotations

import pytest

from streamlit_gds._validation import colour, normalise_options, required_key, width
from streamlit_gds.models import HtmlContent, Option, SummaryAction, SummaryRow, serialize


def test_models_serialize_recursively() -> None:
    row = SummaryRow(
        "Name",
        HtmlContent("<strong>Taylor</strong>"),
        (SummaryAction("Change", "#name", "name"),),
    )
    assert serialize(row) == {
        "key": "Name",
        "value": {"__html__": "<strong>Taylor</strong>"},
        "actions": [{"label": "Change", "href": "#name", "visually_hidden_text": "name"}],
    }


def test_option_validation() -> None:
    options = normalise_options([1, ("Two", 2), Option("Three", 3)])
    assert [(option.label, option.value) for option in options] == [
        ("1", 1),
        ("Two", 2),
        ("Three", 3),
    ]
    with pytest.raises(ValueError, match="at least one"):
        normalise_options([])
    with pytest.raises(ValueError, match="unique"):
        normalise_options([("One", 1), ("Again", 1)])
    with pytest.raises(TypeError, match=r"exactly \(label, value\)"):
        normalise_options([("One", 1, "unexpected")])


@pytest.mark.parametrize("value", ["red", "#123", "#1234567", "#gggggg"])
def test_invalid_brand_colours(value: str) -> None:
    with pytest.raises(ValueError, match="hexadecimal"):
        colour(value)


def test_keys_and_widths_are_validated() -> None:
    assert required_key("example", "input") == "example"
    assert width("two-thirds") == "two-thirds"
    with pytest.raises(ValueError, match="requires"):
        required_key("", "input")
    with pytest.raises(ValueError, match="reserved"):
        required_key("bad__key", "input")
    with pytest.raises(ValueError, match="width"):
        width("almost-full")
