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
  Colors/                  # color variables (not yet tokenised)
  ColorsThemes/            # theme overrides
  ColorsTokensLms/         # LMS color tokens
  ColorsTokensPrimaryBodywork/
  ColorsTokensPrimaryMedcourses/
  ColorsTokensPrimaryWnl/  # WNL color tokens
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
| `colors/` tokens                       | `Colors*` / `ColorsTokens*` stories |
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

Reference SCSS variables from `ColorsTokens*`:

```scss
color: $color-inverted-text;
background-color: $color-primary-background;
border-color: $color-neutral-border;
```

## Global SCSS load order

The `.storybook/scss-preview-styles-plugin.ts` compiles `preview.scss` and injects it before all component styles. This means global resets and token definitions are always available — do not re-import them in component styles unless you need a specific variable that is not already globally available.

## Syncing tokens from Figma

```bash
yarn importColors              # pull color tokens from Figma → SCSS
yarn synchronizeTypography     # pull typography tokens from Figma → SCSS
```

Both commands require a `JSON_BIN_X_ACCESS_KEY` in `.env`. After running, commit the changed files in `lib/js/styles/`.

## Color themes

The design system supports four themes, each with its own token set:
- **LMS** (`ColorsTokensLms`, `TypographyTokensLms`) — default for the learning platform
- **Primary WNL** (`ColorsTokensPrimaryWnl`) — WNL brand colors
- **Primary Bodywork** (`ColorsTokensPrimaryBodywork`) — Bodywork brand colors
- **Primary Medcourses** (`ColorsTokensPrimaryMedcourses`) — Medcourses brand colors

Theme tokens follow the same variable naming convention — swapping the import path changes the theme.

## Dark mode

Dark mode swaps only the **raw** layer; `--color-*` token mappings are identical in light and dark.

- Toggle: the `.-ds-dark` class on `<html>` (Storybook: "Color scheme" toolbar). It overrides raw values only — never add `--color-*` overrides under `.-ds-dark`.
- Dark raw values mirror the light files: `settings/colors/_raw-dark.scss` (palettes, base/contrast/static) ↔ `_raw.scss`, `_raw-semantic-dark.scss` (surfaces, shadow/overlay, alphas) ↔ `_raw-semantic.scss`, and `_raw-{wnl,mc,bodywork}-dark.scss` (`--theme-*`) ↔ `_raw-{wnl,mc,bodywork}.scss`. Hand-maintained.
- Light primitives not yet in Figma: `settings/colors/_raw-semantic.scss` (surfaces, shadow/overlay rgb, alphas).
- `--raw-base` / `--raw-contrast` invert between modes; `--raw-static-white` / `--raw-static-black` do not.
- Surfaces: `page-background` (surface-0, page) → `default-background` (surface-1, docked panels, modals) → `elevated-background` (surface-2, cards, dropdowns, popovers, elevation). An element is never darker than its parent. Gradient masks fade from a level's `*-background` to its `*-mask`.
- Components use tokens, never `--raw-*` (use `white-*` / `black-*` tokens for colors that must not invert, e.g. text on photos or avatar initials).
- **Do not run `yarn importColors`** until the Figma variables include the new raw names and tokens — the import would revert them.
