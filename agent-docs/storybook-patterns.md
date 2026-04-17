# Storybook Patterns

## Story file structure

Use `ComponentProps` from `vue-component-type-helpers` for type-safe args:

```ts
import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryObj } from '@storybook/vue3';
import ComponentName from './ComponentName.vue';
import { COMPONENT_SIZES } from './ComponentName.consts';

type ComponentNameProps = ComponentProps<typeof ComponentName>;

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  render: (args: ComponentNameProps) => ({
    components: { ComponentName },
    setup() {
      return { args };
    },
    template: `<ComponentName v-bind="args" />`,
  }),
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(COMPONENT_SIZES),
    },
  },
};
export default meta;

type Story = StoryObj<typeof ComponentName>;

export const Interactive: Story = {
  args: {
    size: COMPONENT_SIZES.MEDIUM,
  },
};
```

## Story titles

| Location | Title format |
|----------|-------------|
| Standalone component | `'Components/ComponentName'` |
| Grouped component | `'Components/Category/ComponentName'` |
| Foundation / tokens | `'Foundations/ComponentName'` |

The story sort order is: Foundations first, then Components. Within Foundations, Colors and Design Tokens appear first.

## Figma link

Attach the Figma design link to the `Interactive` story:

```ts
Interactive.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/<file-id>/<node-id>',
  },
};
```

## Event tracking

For components that emit events, add the `withActions` decorator:

```ts
import { withActions } from '@storybook/addon-actions/decorator';
import { Meta } from '@storybook/vue3';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  decorators: [withActions],
};
```

## argTypes reference

```ts
argTypes: {
  // Dropdown select from const values
  size: {
    control: 'select',
    options: Object.values(COMPONENT_SIZES),
  },
  // Dropdown that includes undefined
  status: {
    control: {
      type: 'select',
      labels: { undefined: 'None (undefined)' },
    },
    options: [undefined, ...Object.values(COMPONENT_STATUSES)],
  },
  // Free text input
  label: {
    control: 'text',
  },
  // Disable control for a prop
  icon: {
    control: false,
  },
  // Boolean toggle
  isDisabled: {
    control: 'boolean',
  },
}
```

## Locale-aware stories

The Storybook toolbar has a locale switcher (`pl` / `en`). Stories automatically use the active locale through the vue-i18n instance configured in `.storybook/i18n.ts`. No special setup is needed in individual story files.

## Older StoryFn pattern

Some existing stories use `StoryFn` instead of `StoryObj`. Both work; prefer `StoryObj` for new stories:

```ts
import { Args, Meta, StoryFn } from '@storybook/vue3';

const StoryTemplate: StoryFn<typeof ComponentName> = (args) => ({
  components: { ComponentName },
  setup() { return args; },
  template: `<ComponentName v-bind="args" />`,
});

export const Interactive = StoryTemplate.bind({});
Interactive.args = { size: COMPONENT_SIZES.MEDIUM };
```

## Dev server

```bash
yarn dev   # starts Storybook at http://localhost:6006
```
