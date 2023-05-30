import { Args, ArgTypes } from '@storybook/vue3';

export const template = (componentTag: string) => `
		<${componentTag} v-bind="args" @toggle="onIsSelectedUpdated"/>`;

export const argTypes = (size, state) =>
	({
		size: {
			control: { type: 'select', options: Object.values(size) },
			defaultValue: size.SMALL,
		},
		label: { control: { type: 'text' } },
		isSelected: { control: { type: 'boolean' } },
		state: {
			control: { type: 'select', options: Object.values(state) },
			defaultValue: state.DEFAULT,
		},
	} as ArgTypes);

export const args = {
	label: 'Example label',
	isSelected: false,
} as Args;
