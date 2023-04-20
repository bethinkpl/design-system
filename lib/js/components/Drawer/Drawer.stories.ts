import Drawer from './Drawer.vue';
import { DRAWER_POSITIONS } from './Drawer.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Drawer',
	component: Drawer,
} as Meta<typeof Drawer>;

const StoryTemplate: StoryFn<typeof Drawer> = (args) => ({
	components: { Drawer },
	setup() {
		return { ...args };
	},
	template: `<div style="height: 300px; width: 200px;">
		<drawer :position="position" :sticky-header="stickyHeader" :sticky-footer="stickyFooter">
		<template v-slot:header><div style="background-color: var(--raw-gray-100)">Header<br><br></div></template>
		<div>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br>Content<br></div>
		<template v-slot:footer><div style="background-color: var(--raw-gray-100)">Footer<br><br></div></template>
		</drawer>
		</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	position: DRAWER_POSITIONS.RIGHT,
	stickyHeader: true,
	stickyFooter: true,
} as Args;

const argTypes = {
	position: {
		control: { type: 'select', options: Object.values(DRAWER_POSITIONS) },
		defaultValue: DRAWER_POSITIONS.RIGHT,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=3343%3A61189',
	},
};
