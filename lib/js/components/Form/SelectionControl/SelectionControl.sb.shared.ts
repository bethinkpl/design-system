import { Args, ArgTypes } from '@storybook/vue3';

export const template = (componentTag: string) => `
		<${componentTag} v-bind="args" @update:is-selected="onIsSelectedUpdated"/>`;

export const argTypes = (size, state) =>
	({
		size: {
			control: 'select',
			options: Object.values(size),
		},
		label: { control: 'text' },
		isSelected: { control: 'boolean' },
		state: {
			control: 'select',
			options: Object.values(state),
		},
	} as ArgTypes);

export const args = (size, state) =>
	({
		label: 'Example label',
		isSelected: false,
		size: size.SMALL,
		state: state.DEFAULT,
	} as Args);
