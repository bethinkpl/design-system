# Agents Guide

## Project Overview

Bethink Design System — a Vue 3 component library published as `@bethinkpl/design-system`. Components are built with Vue 3 + TypeScript, documented in Storybook, and styled using CSS/SCSS. Icons use Font Awesome PRO.

## Repository Structure

```
lib/js/
  components/     # Vue components, organized by category
  composables/    # Vue composables
  consts/         # Shared constants
  i18n/           # Translations (en, pl)
  icons/          # Icon definitions
  styles/         # Global styles
  utils/          # Utility functions
  index.ts        # Main library entry point
```

## Storybook Configuration (`.storybook/`)

```
.storybook/
  main.ts                      # Storybook build config — addons, story glob, Vite overrides
  preview.ts                   # Global decorators, parameters, viewport presets, locale global type
  preview.scss                 # Global SCSS loaded before all component styles
  storybook.scss               # Additional Storybook UI styles
  preview-head.html            # Injects compiled preview.css into the Storybook iframe head
  manager.ts                   # Storybook manager UI config — registers the locale-switcher toolbar addon
  i18n.ts                      # Creates the vue-i18n instance used across all stories (default locale: pl)
  ChangeLocale.tsx             # Toolbar button component that switches the active locale
  scss-preview-styles-plugin.ts # Custom Vite plugin that compiles preview.scss and serves it at /preview.css
```

Key details:

- **Story glob**: `../lib/**/*.stories.@(js|ts)` — place story files anywhere under `lib/`.
- **Global styles order**: `scss-preview-styles-plugin` ensures global SCSS loads _before_ component styles. In dev it compiles on-the-fly; in production it writes `public/storybook/preview.css` which `preview-head.html` then links.
- **Locale switcher**: Stories receive a `locale` global (`pl` | `en`). The toolbar button in `manager.ts` / `ChangeLocale.tsx` toggles it; `preview.ts` propagates the value to the vue-i18n instance.
- **Viewports**: Custom breakpoints defined in `preview.ts` — mobile (320 px), S (760 px), M (980 px), L (1280 px), XL (1600 px), plus common device sizes.
- **Story sort order**: foundations → components, with Colors and Design Tokens listed first inside foundations.
- **SCSS hot-reload**: Any `.scss` change triggers a full Storybook iframe reload (handled in `scss-preview-styles-plugin`).

## Key Commands

```bash
yarn dev              # Start Storybook dev server (port 6006)
yarn build            # Build the library
yarn test             # Run unit tests (Vitest)
yarn lint             # Lint scripts and styles
yarn lint:fix         # Auto-fix lint issues
yarn ts:check         # TypeScript type check
yarn format:check     # Check formatting
yarn format:fix       # Auto-fix formatting
```

## Development Guidelines

- **Components** live in `lib/js/components/` — each component has its own directory with the `.vue` file, stories, and tests alongside it.
- **i18n** — translations are in `lib/js/i18n/` with `en.ts` and `pl.ts` as entry points. Locale-specific JSON files live in `lib/js/i18n/en/` and `lib/js/i18n/pl/`.
- **Icons** require Font Awesome PRO — set `FONT_AWESOME_AUTH_TOKEN` in your shell environment before installing dependencies.
- **Linting** — ESLint for scripts (`lib/js/**/*.{js,vue,ts,json}`), Stylelint for styles. Run lint before committing.
- **Tests** — Vitest. Test files sit next to the component they test.

## Environment Setup

1. Add `FONT_AWESOME_AUTH_TOKEN=<token>` to your shell profile (see README for token location).
2. Optionally create `.env` with `JSON_BIN_X_ACCESS_KEY` for color/typography sync scripts.

## Docs

Before implementing changes, read the relevant guide first:

- **Component patterns** (file structure, naming, exports, props, SCSS classes, i18n): `@agent-docs/component-patterns.md`
- **Storybook** (story structure, argTypes, Figma links, locale, event tracking): `@agent-docs/storybook-patterns.md`
- **Testing** (Vitest patterns, it.each, assertions, directive mocking): `@agent-docs/testing.md`
- **Verification** (commands to run after changes, release checklist): `@agent-docs/verification.md`
- **Styling & design tokens** (CSS naming, token imports, themes, Figma sync): `@agent-docs/styling.md`

## Releasing

1. Bump version in `package.json`.
2. Wait for the `Build and Deploy Dist` GitHub Action to finish.
3. Create a new tag and release on GitHub.
4. Run `npm publish --access public`.