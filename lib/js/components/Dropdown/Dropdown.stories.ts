import Dropdown from './Dropdown.vue';
import { DROPDOWN_TRIGGER_ACTIONS } from './Dropdown.consts';
import SelectList, { SELECT_LIST_SIZES } from '../SelectList';
import { ICONS } from '../Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Dropdown',
	component: Dropdown,
} as Meta<typeof Dropdown>;

const StoryTemplate: StoryFn<typeof Dropdown> = (argTypes) => ({
	components: { Dropdown, SelectList },
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
					icon: ICONS.FA_CIRCLE,
				},
				{
					type: 'text',
					label: 'POLECENIE 2 / 3',
					value: 'part-2',
					icon: ICONS.FA_CIRCLE,
				},
				{
					type: 'text',
					label: 'POLECENIE 3 / 3',
					value: 'part-3',
					icon: ICONS.FA_CIRCLE_CHECK,
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
			SELECT_LIST_SIZES: Object.freeze(SELECT_LIST_SIZES),
		};
	},
	props: Object.keys(argTypes),
	template:
		'<div style="position: relative">' +
		'<dropdown :trigger-action="triggerAction" :force-show="forceShow" :same-width="sameWidth">' +
		'<template #reference><span>Dropdown entry point</span></template>' +
		'<template #default="{ close }">' +
		'<select-list v-model="value" :items="items" :size="SELECT_LIST_SIZES.MEDIUM" @input="close" />' +
		'</template>' +
		'</dropdown>' +
		'</div>',
});

export const Interactive = StoryTemplate.bind({});

const args = {
	triggerAction: DROPDOWN_TRIGGER_ACTIONS.CLICK,
	forceShow: false,
	sameWidth: false,
} as Args;

const argTypes = {
	triggerAction: {
		control: { type: 'select', options: Object.values(DROPDOWN_TRIGGER_ACTIONS) },
		defaultValue: DROPDOWN_TRIGGER_ACTIONS.CLICK,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4010%3A69857',
	},
};
