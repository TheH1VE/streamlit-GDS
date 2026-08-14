from __future__ import annotations

from pathlib import Path

from streamlit.testing.v1 import AppTest


def test_component_gallery_smoke_app_runs() -> None:
    app = Path(__file__).parent / "fixtures" / "smoke_app.py"
    result = AppTest.from_file(str(app)).run(timeout=20)
    assert not result.exception
