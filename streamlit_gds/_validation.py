"""Public-argument validation helpers."""

from __future__ import annotations

import re
from collections.abc import Sequence
from typing import Any, TypeVar, cast

from .models import Option

T = TypeVar("T")
_HEX = re.compile(r"^#[0-9a-fA-F]{6}$")


def colour(value: str) -> str:
    if not _HEX.fullmatch(value):
        raise ValueError(
            "brand_colour must be a six-digit hexadecimal colour, for example '#1d70b8'"
        )
    return value.lower()


def required_key(key: str | None, component: str) -> str:
    if not key or not key.strip():
        raise ValueError(f"{component} requires a non-empty key so state is stable across reruns")
    if "__" in key:
        raise ValueError(f"{component} key must not contain the reserved '__' sequence")
    return key


def normalise_options(options: Sequence[T | Option[T] | tuple[str, T]]) -> list[Option[T]]:
    output: list[Option[T]] = []
    seen: set[Any] = set()
    for item in options:
        if isinstance(item, Option):
            option = item
        elif isinstance(item, tuple):
            if len(item) != 2 or not isinstance(item[0], str):
                raise TypeError("tuple options must contain exactly (label, value)")
            label, value = cast(tuple[str, T], item)
            option = Option(label=label, value=value)
        else:
            value = item
            option = Option(label=str(value), value=value)
        marker = repr(option.value)
        if marker in seen:
            raise ValueError(f"option values must be unique; duplicate: {option.value!r}")
        seen.add(marker)
        output.append(option)
    if not output:
        raise ValueError("at least one option is required")
    return output


def width(value: str) -> str:
    allowed = {
        "auto",
        "full",
        "one-quarter",
        "one-third",
        "one-half",
        "two-thirds",
        "three-quarters",
    }
    if value not in allowed:
        raise ValueError(f"width must be one of {sorted(allowed)}")
    return value
