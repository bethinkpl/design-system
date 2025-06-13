import Card from './Card.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3-vite';
import { CARD_BORDER_COLORS, CARD_BORDER_POSITIONS, CARD_BORDER_SIZES } from './Card.consts';
import { LOADING_BAR_COLORS } from '../../LoadingBar';

export default {
	title: 'Components/Cards/Card',
	component: Card,
} as Meta<typeof Card>;

const StoryTemplate: StoryFn<typeof Card> = (args) => ({
	components: { Card },
	setup() {
		return args;
	},
	template: `
		<card :header-has-padding="headerHasPadding"
			  :divider-under-header="dividerUnderHeader"
			  :has-border="hasBorder"
			  :border-position="borderPosition"
			  :border-size="borderSize"
			  :border-color="borderColor"
			  :has-loading-bar="hasLoadingBar"
			  :loading-bar-color="loadingBarColor"
			  :loading-bar-time="loadingBarTime"
		>
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
	header: 'header slot',
	content: 'content slot that supports <b>HTML markup</b>',
	footer: 'footer slot',
	headerHasPadding: false,
	dividerUnderHeader: false,
	hasBorder: false,
	borderPosition: CARD_BORDER_POSITIONS.TOP,
	borderSize: CARD_BORDER_SIZES.LARGE,
	borderColor: CARD_BORDER_COLORS.NEUTRAL_HEAVY,
	hasLoadingBar: false,
	loadingBarColor: LOADING_BAR_COLORS.NEUTRAL_HEAVY,
	loadingBarTime: '0',
} as Args;

const argTypes = {
	header: { control: 'text' },
	content: {
		control: 'text',
	},
	footer: { control: 'text' },
	borderPosition: {
		control: 'select',
		options: Object.values(CARD_BORDER_POSITIONS),
	},
	borderSize: {
		control: 'select',
		options: Object.values(CARD_BORDER_SIZES),
	},
	borderColor: {
		control: 'select',
		options: Object.values(CARD_BORDER_COLORS),
	},
	loadingBarColor: {
		control: 'select',
		options: Object.values(LOADING_BAR_COLORS),
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34959',
	},
};
