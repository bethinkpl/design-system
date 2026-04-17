# Verification Commands

## After any change

Run in this order:

```bash
yarn format:fix     # Prettier — auto-fix formatting first
yarn test           # Vitest unit tests
yarn ts:check       # TypeScript type check
yarn lint           # ESLint + Stylelint
```

## After visual/component changes

Start Storybook and verify the component renders correctly across variants:

```bash
yarn dev            # Storybook dev server at http://localhost:6006
```

Check:
- Interactive story controls work
- All size/variant combinations render correctly
- Both `pl` and `en` locales display properly (toolbar switcher)
- No console errors

## Quick reference

| Command | What it checks |
|---------|---------------|
| `yarn format:fix` | Prettier formatting (auto-fixes) |
| `yarn format:check` | Prettier formatting (report only) |
| `yarn test` | Vitest unit tests |
| `yarn test:ui` | Vitest with browser UI |
| `yarn ts:check` | TypeScript type errors |
| `yarn lint` | ESLint (scripts) + Stylelint (SCSS) |
| `yarn lint:fix` | Auto-fix lint issues |
| `yarn build` | Vite library build |
| `yarn storybook:build` | Build static Storybook to `public/storybook/` |

## Before releasing

1. Run the full quality check: `yarn format:fix && yarn test && yarn ts:check && yarn lint`
2. Confirm the Storybook build succeeds: `yarn storybook:build`
3. Bump the version in `package.json`
4. Wait for the `Build and Deploy Dist` GitHub Action
5. Create a tag and release on GitHub
6. Run `npm publish --access public`
