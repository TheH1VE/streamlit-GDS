from __future__ import annotations

from pathlib import Path

from streamlit.testing.v1 import AppTest


def test_component_gallery_smoke_app_runs() -> None:
    app = Path(__file__).parent / "fixtures" / "smoke_app.py"
    result = AppTest.from_file(str(app)).run(timeout=20)
    assert not result.exception


def test_native_compatibility_app_uses_native_widgets_without_configure() -> None:
    app = Path(__file__).parent / "fixtures" / "native_app.py"
    result = AppTest.from_file(str(app)).run(timeout=20)

    assert not result.exception
    assert len(result.text_input) == 2
    assert len(result.selectbox) == 1
    assert len(result.checkbox) == 1
    assert len(result.button) == 1
    assert result.text_input[0].value == ""
    assert result.selectbox[0].value == "Email"
