from __future__ import annotations

import inspect
from typing import Any

import streamlit as st

import streamlit_gds as gds
import streamlit_gds._native as native

NATIVE_CALLABLES = (
    "write",
    "markdown",
    "title",
    "header",
    "subheader",
    "caption",
    "text",
    "code",
    "latex",
    "divider",
    "badge",
    "button",
    "download_button",
    "form_submit_button",
    "link_button",
    "menu_button",
    "page_link",
    "checkbox",
    "toggle",
    "radio",
    "selectbox",
    "multiselect",
    "pills",
    "segmented_control",
    "select_slider",
    "number_input",
    "slider",
    "date_input",
    "datetime_input",
    "time_input",
    "text_input",
    "text_area",
    "file_uploader",
    "color_picker",
    "feedback",
    "audio_input",
    "camera_input",
    "metric",
    "table",
    "dataframe",
    "data_editor",
    "json",
    "form",
    "container",
    "columns",
    "tabs",
    "expander",
    "popover",
    "dialog",
    "empty",
    "space",
    "info",
    "success",
    "warning",
    "error",
    "exception",
    "progress",
    "spinner",
    "status",
    "skeleton",
    "toast",
    "chat_input",
    "chat_message",
    "write_stream",
    "area_chart",
    "bar_chart",
    "line_chart",
    "scatter_chart",
    "map",
    "pyplot",
    "altair_chart",
    "vega_lite_chart",
    "plotly_chart",
    "pydeck_chart",
    "graphviz_chart",
    "mermaid_chart",
    "image",
    "audio",
    "video",
    "pdf",
    "logo",
)


def test_native_wrappers_match_streamlit_signatures_and_annotations() -> None:
    for name in NATIVE_CALLABLES:
        gds_callable = getattr(gds, name)
        st_callable = getattr(st, name)
        assert inspect.signature(gds_callable) == inspect.signature(st_callable), name
        assert gds_callable.__annotations__ == st_callable.__annotations__, name
        assert gds_callable.__wrapped__ is st_callable, name


def test_non_visual_streamlit_primitives_are_forwarded() -> None:
    assert gds.session_state is st.session_state
    assert gds.query_params is st.query_params
    assert gds.cache_data is st.cache_data
    assert gds.cache_resource is st.cache_resource
    assert gds.Page is st.Page
    assert gds.navigation is st.navigation
    assert gds.rerun is st.rerun
    assert gds.fragment is st.fragment


def test_styled_delegate_mounts_default_theme_once_per_run(monkeypatch: Any) -> None:
    calls: list[tuple[Any, ...]] = []
    monkeypatch.setattr(native, "_styled_context", None)
    monkeypatch.setattr(native, "_context_id", lambda: 42)
    monkeypatch.setattr(native, "mount", lambda *args, **kwargs: calls.append((args, kwargs)))

    wrapped = native.styled(lambda value: value * 2)
    assert wrapped(3) == 6
    assert wrapped(4) == 8

    assert calls == [
        (
            (
                "bootstrap",
                {
                    "service_name": "",
                    "brand_colour": "#1d70b8",
                    "chrome": "streamlit",
                },
            ),
            {"key": "streamlit-gds-bootstrap"},
        )
    ]


def test_unlisted_streamlit_apis_are_transparent_passthroughs() -> None:
    assert gds.balloons is st.balloons
    assert gds.html is st.html
    assert not hasattr(gds, "govuk_header")


def test_release_targets_streamlit_161() -> None:
    assert gds.__version__ == "0.2.0"
    assert st.__version__.startswith("1.61.")
