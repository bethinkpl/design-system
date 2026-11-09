# Styling & Design Tokens

## CSS class naming convention

| Class type | Pattern | Example |
|-----------|---------|---------|
| Root element | `ds-<component-name>` | `ds-avatar` |
| BEM element | `ds-<component-name>__<element>` | `ds-avatar__content` |
| Modifier | `-ds-<modifier>` (leading dash) | `-ds-medium`, `-ds-disabled` |
| Color modifier | `-ds-color-<name>` | `-ds-color-primary`, `-ds-color-success` |

Modifiers are applied conditionally via `:class` bindings — they are never hardcoded in the `class` attribute.

## Design tokens location

The SCSS token sources live in `lib/styles/settings/` (e.g. `_radiuses.scss`, `_shadows.scss`, `_borders.scss`, `_spacings.scss`, `colors/`, `typography/`). Each token group is visualised by a matching **foundation story** under `lib/js/styles/`:

```
lib/js/styles/
  Borders/                 # $border-* sizes
  Colors/                  # Raw / Theme / Tokens color stories (live from CSS, follow the Brand + Color scheme toolbar)
  Radiuses/                # $radius-* values
  Shadows/                 # $shadow-* values (story SCSS @imports settings/shadows)
  Spacings/
  TypographyTokensLms/     # LMS typography tokens
  TypographyVariables/     # global typography mixins/variables
```

## Keep foundation stories in sync with tokens

Whenever you add, remove, rename, or change a value of a design token in `lib/styles/settings/*.scss`, update the matching foundation story under `lib/js/styles/` in the **same change** so Storybook stays accurate. Token source → story mapping:

| Token source (`lib/styles/settings/`) | Foundation story (`lib/js/styles/`) |
|----------------------------------------|--------------------------------------|
| `_radiuses.scss` (`$radius-*`)         | `Radiuses/Radiuses.stories.ts` |
| `_shadows.scss` (`$shadow-*`)          | `Shadows/Shadows.stories.*` |
| `_borders.scss` (`$border-*`)          | `Borders/BorderSizes.stories.ts` |
| `_spacings.scss` (`$space-*`)          | `Spacings/Spacings.stories.ts` |
| `colors/` (generated)                  | `Colors/Colors{Raw,Theme,Tokens}.stories.ts` (read the generated `_raw.json` / `_theme.json` / `_tokens.json`, no manual update) |
| `typography/` tokens                   | `Typography*` stories |

Prefer sourcing values from SCSS in the story so the two can't drift — the `Shadows` story is the reference pattern: its `Shadows.stories.scss` `@import`s `settings/shadows` and applies each `$shadow-*` variable through a class, and the `.stories.ts` only lists token names. Stories that currently inline their values (e.g. `Borders`, `Radiuses`) must be edited by hand to match the SCSS.

## Importing tokens in component SCSS

Use `@import` with the relative path from the component file to `lib/styles/`:

```scss
<style scoped lang="scss">
@import '../../../../lib/styles/settings/colors/tokens';
@import '../../../../lib/styles/settings/typography/tokens';
@import '../../../../lib/styles/settings/radiuses';
@import '../../../../lib/styles/settings/spacings';
</style>
```

The depth of `../` depends on how nested the component is:
- `lib/js/components/Avatar/` → `../../../../lib/styles/...`
- `lib/js/components/Buttons/Button/` → `../../../../../lib/styles/...`

## Typography tokens

Use mixins from `TypographyVariables` — they set `font-size`, `line-height`, `font-weight`, etc.:

```scss
@include info-s-default-regular;
@include heading-m-default-regular;
@include displayHeading-xs-default-regular;
```

## Color tokens

Reference SCSS variables from `settings/colors/_tokens.scss` (browse them in Storybook: foundations / Colors / Tokens):

```scss
color: $color-inverted-text;
background-color: $color-primary-background;
border-color: $color-neutral-border;
```

## Global SCSS load order

The `.storybook/scss-preview-styles-plugin.ts` compiles `preview.scss` and injects it before all component styles. This means global resets and token definitions are always available — do not re-import them in component styles unless you need a specific variable that is not already globally available.

## Syncing tokens from Figma

```bash
yarn importColors              # Figma variables export → color SCSS/JSON
yarn synchronizeTypography     # pull typography tokens from Figma → SCSS
```

**Colors** — every file in `lib/styles/settings/colors/` except `_color-scheme.scss` and `_magic*.scss` is generated; never edit them by hand.
1. In Figma, export the `RAWColors`, `BrandColors` and `ColorTokens` variable collections: right-click each collection → "Export modes". Put the JSON files in `tools/importers/figma-export/`, overwriting the old ones. The script finds them by mode name, not file name: `Light mode` / `Dark mode` (RAWColors), `WNL` / `BW` / `MC` (BrandColors), `Mode 1` (ColorTokens). The brand mapping is in `tools/importers/configs/ImportColorsFromFigmaTokensConfig.json`.
2. Run `yarn importColors`. It fails without writing anything when a mode is missing, key sets differ between modes or brands, or a token aliases an unknown variable or a literal.
3. Commit the export and the generated files together.

Generated: `_raw.scss` (`:root`) / `_raw-dark.scss` (`.-ds-dark`), `_theme-{wnl,bodywork,mc}.scss` (`.-ds-theme-X`) / `-dark.scss` (`.-ds-theme-X.-ds-dark`), `_tokens-variables.scss` + `_tokens.scss`, and `_raw.json` / `_theme.json` / `_tokens.json` for Storybook. Every raw/theme color gets an `-rgb` companion; alpha variants (`gray-700-12%`) are not emitted, tokens build them as `rgba(var(--…-rgb), 0.12)`.

**Typography** requires a `JSON_BIN_X_ACCESS_KEY` in `.env`.

## Color themes

Brands (WNL, Bodywork, MC) differ only in the `--theme-*` palette, set by the `.-ds-theme-{wnl,bodywork,mc}` class on `<html>` (Storybook: "Brand" toolbar). Tokens are shared: `primary-*` tokens map to `--theme-*`. There is **no default brand** in `:root` — an app must set one of the classes, otherwise `primary-*` colors are empty.

## Dark mode

Dark mode swaps only the **raw** layer; `--color-*` token mappings are identical in light and dark.

- Toggle: the `.-ds-dark` class on `<html>` (Storybook: "Color scheme" toolbar). It overrides raw values only — never add `--color-*` overrides under `.-ds-dark`.
- Dark raw values: `settings/colors/_raw-dark.scss` ↔ `_raw.scss`, and `_theme-{wnl,mc,bodywork}-dark.scss` ↔ `_theme-{wnl,mc,bodywork}.scss`. Generated from Figma (see "Syncing tokens from Figma").
- `--raw-base` / `--raw-contrast` invert between modes; `--raw-static-white` / `--raw-static-black` do not.
- Surfaces: `page-background` (surface-0, page) → `default-background` (surface-1, docked panels, modals) → `elevated-background` (surface-2, cards, dropdowns, popovers, elevation). An element is never darker than its parent.
- Overflow fades use an **alpha mask**, never a colour gradient: `fadeMask($side, $width, $offset)`, `fadeMaskBoth($axis, $start-width, $end-width)` (two opposite edges in one mask; two `fadeMask` calls override each other) (`mixins/_fade-mask.scss`) and `flexOverflowMask($width)` fade the element's own content with `mask-image`, so they work on any surface. Put the mask on the element holding the content (not a box with its own background/border — those fade too); it clips everything outside the border box (focus rings, shadows, non-teleported popups), so use it on elements that already clip. Don't build fades from the `*-mask` tokens (they come from the Figma export; DS components don't use them).
- Components use tokens, never `--raw-*` (use `white-*` / `black-*` tokens for colors that must not invert, e.g. text on photos or avatar initials).
