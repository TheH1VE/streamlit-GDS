from __future__ import annotations

import json
from pathlib import Path

try:
    import tomllib
except ModuleNotFoundError:  # pragma: no cover - Python 3.10 compatibility
    import tomli as tomllib


ROOT = Path(__file__).resolve().parents[1]


def test_release_versions_stay_in_sync() -> None:
    package_version = tomllib.loads(
        (ROOT / "pyproject.toml").read_text(encoding="utf-8")
    )["project"]["version"]
    component_version = tomllib.loads(
        (ROOT / "streamlit_gds" / "pyproject.toml").read_text(encoding="utf-8")
    )["project"]["version"]
    frontend_version = json.loads(
        (ROOT / "streamlit_gds" / "frontend" / "package.json").read_text(encoding="utf-8")
    )["version"]

    assert package_version == component_version == frontend_version


def test_bundled_frontend_assets_are_present() -> None:
    asset_dir = ROOT / "streamlit_gds" / "frontend" / "dist"

    assert list(asset_dir.glob("*.js"))
    assert list(asset_dir.glob("*.css"))
