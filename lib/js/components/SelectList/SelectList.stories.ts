import SelectList from './SelectList.vue';
import { SELECT_LIST_SIZES } from './SelectList.consts';
import { ICONS } from '../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/SelectList',
	component: SelectList,
} as Meta<typeof SelectList>;

const StoryTemplate: StoryFn<typeof SelectList> = (args) => ({
	components: { SelectList },
	setup() {
		return { ...args };
	},
	template: '<select-list v-model="value" :items="items" :size="size"></select-list>',
	data() {
		return {
			items: [
				{
					type: 'text',
					label: 'Wróć do listy poleceń',
					value: 'go-back',
					icon: null,
				},
				{
					type: 'divider',
				},
				{
					type: 'text',
					label: 'POLECENIE 1 / 3',
					value: 'part-1',
					icon: Object.freeze(ICONS.FA_CIRCLE),
				},
				{
					type: 'text',
					label: 'POLECENIE 2 / 3',
					value: 'part-2',
					icon: Object.freeze(ICONS.FA_CIRCLE),
				},
				{
					type: 'text',
					label: 'POLECENIE 3 / 3',
					value: 'part-3',
					icon: Object.freeze(ICONS.FA_CIRCLE_CHECK),
				},
				{
					type: 'divider',
				},
				{
					type: 'text',
					label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
					value: 'lipsum',
					icon: null,
				},
			],
			value: 'part-2',
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: SELECT_LIST_SIZES.MEDIUM,
} as Args;

const argTypes = {
	items: { control: false },
	size: {
		control: { type: 'select', options: Object.values(SELECT_LIST_SIZES) },
		defaultValue: SELECT_LIST_SIZES.MEDIUM,
	},
	value: { control: false },
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=0%3A1',
	},
};
