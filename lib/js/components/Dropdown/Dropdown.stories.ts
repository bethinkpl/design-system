import Dropdown from './Dropdown.vue';
import { DROPDOWN_RADIUSES, DROPDOWN_TRIGGER_ACTIONS } from './Dropdown.consts';
import SelectList from '../SelectList/SelectList.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';
import SelectListItem from '../SelectList/SelectListItem/SelectListItem.vue';

export default {
	title: 'Components/Dropdown',
	component: Dropdown,
} as Meta<typeof Dropdown>;

const StoryTemplate: StoryFn<typeof Dropdown> = (argTypes) => ({
	components: { Dropdown, SelectList, SelectListItem },
	props: Object.keys(argTypes),
	template: `<div style="position: relative">
			<dropdown :trigger-action="triggerAction" :force-show="forceShow" :same-width="sameWidth" :radius="radius">
				<template #reference><span>Dropdown entry point</span></template>
				<template #default="{ close }">
					<select-list>
						<select-list-item label="One" @click.native="close" />
						<select-list-item label="Two" @click.native="close" />
					</select-list>
				</template>
			</dropdown>
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	triggerAction: DROPDOWN_TRIGGER_ACTIONS.CLICK,
	radius: DROPDOWN_RADIUSES.BOTH,
	forceShow: false,
	sameWidth: false,
} as Args;

const argTypes = {
	triggerAction: {
		control: { type: 'select', options: Object.values(DROPDOWN_TRIGGER_ACTIONS) },
		defaultValue: DROPDOWN_TRIGGER_ACTIONS.CLICK,
	},
	radius: {
		control: { type: 'select', options: Object.values(DROPDOWN_RADIUSES) },
		defaultValue: DROPDOWN_RADIUSES.BOTH,
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
