import DrawerSection from './DrawerSection.vue';

import { Args, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Drawer/DrawerSection',
	component: DrawerSection,
} as Meta<typeof DrawerSection>;

const StoryTemplate: StoryFn<typeof DrawerSection> = (args) => ({
	components: { DrawerSection },
	setup() {
		return { ...args };
	},
	template: `
		<drawer-section
			:has-divider="hasDivider"
			:is-expandable="isExpandable"
			:title="title"
		>
		Default slot
		<template #uncollapsible>Uncollapsible slot</template>
		</drawer-section>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	hasDivider: true,
	isExpandable: false,
	title: 'Drawer section header',
} as Args;

Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=6785-111107&t=jOrkmR91y4woubGJ-4',
	},
};
