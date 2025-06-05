import Card from './Card.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	CARD_BORDER_COLORS,
	CARD_BORDER_POSITIONS,
	CARD_BORDER_SIZES,
	CARD_PADDING_SIZES,
} from './Card.consts';
import { LOADING_BAR_COLORS } from '../../LoadingBar';

export default {
	title: 'Components/Cards/Card',
	component: Card,
} as Meta<typeof Card>;

const StoryTemplate: StoryFn<typeof Card> = (args) => ({
	components: { Card },
	setup() {
		return { args };
	},
	template: `
		<card v-bind="args">
			<template v-if="args.header" #header>
				<div v-html="args.header" />
			</template>
			<template v-if="args.content" #content>
				<div v-html="args.content" />
			</template>
			<template v-if="args.footer" #footer>
				<div v-html="args.footer" />
			</template>
		</card>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	header: 'header slot',
	content: 'content slot that supports <b>HTML markup</b>',
	footer: 'footer slot',
	headerHasPadding: false,
	footerHasPadding: false,
	paddingSize: CARD_PADDING_SIZES.SMALL,
	dividerUnderHeader: false,
	hasBorder: false,
	borderPosition: CARD_BORDER_POSITIONS.TOP,
	borderSize: CARD_BORDER_SIZES.LARGE,
	borderColor: CARD_BORDER_COLORS.NEUTRAL_HEAVY,
	hasLoadingBar: false,
	loadingBarColor: LOADING_BAR_COLORS.NEUTRAL_HEAVY,
	loadingBarTime: '0',
	isFlat: false,
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
	paddingSize: {
		control: 'select',
		options: Object.values(CARD_PADDING_SIZES),
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
