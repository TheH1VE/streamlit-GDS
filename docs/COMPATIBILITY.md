# Compatibility and upstream maintenance

| Package | Supported baseline | Notes |
| --- | --- | --- |
| Python | 3.10+ | Type annotations are shipped through `py.typed`. |
| Streamlit | 1.60 to latest 1.x | Component v2 and AppTest discovery are required. |
| GOV.UK Frontend | 6.4.0 | Pinned frontend build dependency. |
| Browser | Current evergreen browsers | JavaScript, CSS grid/flex and typed arrays required. |

For an upstream GOV.UK Frontend update:

1. Read the release notes and migration guide.
2. Update the exact version in `frontend/package.json` and regenerate the lock.
3. Rebuild and inspect the asset list; fail if GOV.UK fonts, Crown or branded
   header/footer assets enter the wheel.
4. Compare every gallery component and variant at mobile and desktop sizes.
5. Run unit, AppTest, axe, keyboard, NVDA, print and forced-colour checks.
6. Record intentional visual or behavioural differences here before release.

Intentional differences are the system font, Generic Header/neutral Footer,
Streamlit rerun semantics, and the file upload transport through Component v2.
