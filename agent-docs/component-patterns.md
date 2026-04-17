# Component Patterns

## Directory structure

Standalone component:

```
lib/js/components/ComponentName/
  ComponentName.vue
  ComponentName.consts.ts
  ComponentName.stories.ts
  ComponentName.spec.ts        # optional but preferred
  ComponentName.types.ts       # optional, for complex prop types
  ComponentName.utils.ts       # optional, for pure helper functions
  index.ts
```

Component belonging to a category group:

```
lib/js/components/Category/ComponentName/
  ComponentName.vue
  ComponentName.consts.ts
  ComponentName.stories.ts
  index.ts
```

Examples of grouped categories: `Buttons/`, `Cards/`, `DatePickers/`, `Form/`, `Icons/`, `Modals/`, `Toggles/`.

## index.ts

Every component directory must have an `index.ts` that re-exports the component and all its constants:

```ts
import ComponentName from './ComponentName.vue';

export default ComponentName;
export * from './ComponentName.consts';
```

## lib/js/index.ts — adding exports

Add only the `Ds`-prefixed export for the component. Constants are re-exported separately:

```ts
export { default as DsComponentName } from './components/ComponentName';
export * from './components/ComponentName/ComponentName.consts';
```

Some older components in the file have a plain-name export (without `Ds` prefix) — that is legacy. Do not add plain-name exports for new components.

## Constants pattern

Use `as const` and derive the union type with `Value<T>` from `lib/js/utils/type.utils`:

```ts
import { Value } from '../../utils/type.utils';

export const COMPONENT_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type ComponentSize = Value<typeof COMPONENT_SIZES>;
```

Name constants `COMPONENT_NAME_VARIANTS`, `COMPONENT_NAME_SIZES`, `COMPONENT_NAME_COLORS`, etc.

## Vue SFC structure

`<template>` first, then `<style scoped lang="scss">`, then `<script setup lang="ts">`.

Props use `defineProps<{}>()` with destructuring for defaults:

```ts
const {
  size = COMPONENT_SIZES.MEDIUM,
  variant,
  label,
} = defineProps<{
  size?: ComponentSize;
  variant: ComponentVariant;
  label: string;
}>();
```

Internal logic is organised into composable-style functions within the same file:

```ts
const { computedValue } = useInternalLogic();

function useInternalLogic() {
  const computedValue = computed(() => ...);
  return { computedValue };
}
```

## SCSS class naming

Root element class: `ds-<component-name>` (no leading dash).
BEM element classes: `ds-<component-name>__<element>`.
Modifier classes (applied via `:class` binding): `-ds-<modifier>` (leading dash).

```html
<div
  class="ds-avatar"
  :class="{
    '-ds-small': size === COMPONENT_SIZES.SMALL,
    '-ds-medium': size === COMPONENT_SIZES.MEDIUM,
    '-ds-disabled': isDisabled,
  }"
>
  <span class="ds-avatar__initials">...</span>
</div>
```

Import global tokens at the top of the `<style>` block:

```scss
@import '../../../../lib/styles/settings/colors/tokens';
@import '../../../../lib/styles/settings/typography/tokens';
@import '../../../../lib/styles/settings/radiuses';
```

Adjust the relative path depth to match the component's directory level.

## i18n

Translations live in `lib/js/i18n/pl/<module>.json` and `lib/js/i18n/en/<module>.json`.

Add keys in both files. Use the component name as the JSON namespace:

```json
{
  "componentName": {
    "placeholder": "Wpisz wartość",
    "errorMessage": "Pole jest wymagane"
  }
}
```

Access in component via `useI18n()` or the `$t()` template helper.

## Importing other DS components

Import directly from their index:

```ts
import DsBadge, { BADGE_SIZES, BADGE_COLORS } from '../Badge';
import DsIcon from '../Icons/Icon';
```
