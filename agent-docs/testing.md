# Testing

## File location

Test files sit next to the component they test:

```
lib/js/components/ComponentName/ComponentName.spec.ts
```

## Basic structure

```ts
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ComponentName from './ComponentName.vue';
import { COMPONENT_SIZES } from './ComponentName.consts';
import { ComponentProps } from 'vue-component-type-helpers';

const setup = (props: ComponentProps<typeof ComponentName>) =>
  mount(ComponentName, { props });

describe('ComponentName', () => {
  it('should render with default props', () => {
    const wrapper = setup({ label: 'Hello' });
    expect(wrapper.find('.ds-component-name').exists()).toBe(true);
  });
});
```

## i18n

The vue-i18n plugin is configured globally in `vitest.setup.ts`. No manual setup is needed per test file.

## Parameterised tests with it.each

Test all values of a constant in one block:

```ts
it.each(Object.values(COMPONENT_SIZES))('should render in size: %s', (size) => {
  const wrapper = setup({ size, label: 'Hello' });
  expect(wrapper.find('.ds-component-name').classes()).toContain(`-ds-${size}`);
});
```

Test a table of cases:

```ts
it.each([
  { status: COMPONENT_STATUSES.ACTIVE, expectedClass: '-ds-color-success' },
  { status: COMPONENT_STATUSES.INACTIVE, expectedClass: '-ds-color-neutral' },
])('should apply $expectedClass for status $status', ({ status, expectedClass }) => {
  const wrapper = setup({ status });
  expect(wrapper.find('.ds-component-name').classes()).toContain(expectedClass);
});
```

## Common assertions

```ts
// Class presence
wrapper.find('.ds-component-name').classes()          // array of classes
wrapper.find('.ds-component-name').classes().toContain('-ds-medium')

// Attributes
wrapper.find('img').attributes('src')
wrapper.find('button').attributes('disabled')

// Text content
wrapper.find('.ds-component-name__label').text()

// Element existence
wrapper.find('.ds-component-name__icon').exists()

// Child component
wrapper.findComponent({ name: 'Badge' }).exists()
wrapper.findComponent({ name: 'Badge' }).props('color')
```

## Mocking global directives

PrimeVue directives (`v-tooltip`, etc.) can be stubbed:

```ts
const setup = (props: ComponentProps<typeof ComponentName>) =>
  mount(ComponentName, {
    props,
    global: {
      directives: {
        pvTooltip: () => {},
      },
    },
  });
```

## Running tests

```bash
yarn test                        # all tests
yarn test ComponentName          # filter by name
yarn test:ui                     # Vitest UI in browser
```
