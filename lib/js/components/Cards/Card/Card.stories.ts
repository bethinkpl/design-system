import Card from './Card.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Cards/Card',
	component: Card,
} as Meta<typeof Card>;

const StoryTemplate: StoryFn<typeof Card> = (args) => ({
	components: { Card },
	setup() {
		return { ...args };
	},
	template: `
			<card :header-has-padding="headerHasPadding" :divider-under-header="dividerUnderHeader">
			<template v-if="header" #header>
				<div v-html="header" />
			</template>
			<template v-if="content" #content>
				<div v-html="content" />
			</template>
			<template v-if="footer" #footer>
				<div v-html="footer" />
			</template>
			</card>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	headerHasPadding: false,
	dividerUnderHeader: false,
} as Args;

const argTypes = {
	header: { control: { type: 'text' }, defaultValue: 'header slot' },
	content: {
		control: { type: 'text' },
		defaultValue: 'content slot that supports <b>HTML markup</b>',
	},
	footer: { control: { type: 'text' }, defaultValue: 'footer slot' },
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959',
	},
};
