// Temporary comparison playgrounds for reviewing the Reka migration.
import type { Meta, StoryObj } from '@storybook/vue3';
import FloatingPlayground from './FloatingPlayground.vue';

const meta: Meta<typeof FloatingPlayground> = {
	title: 'Temporary Playgrounds/Floating panels',
	component: FloatingPlayground,
	parameters: { layout: 'fullscreen', controls: { disable: true } },
};
export default meta;
type Story = StoryObj<typeof FloatingPlayground>;
export const PopoverComparison: Story = {
	name: 'PopOver + Legacy PopOver',
	args: { kind: 'popover' },
};
export const DropdownComparison: Story = {
	name: 'Dropdown + Legacy Dropdown',
	args: { kind: 'dropdown' },
};
