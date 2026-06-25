import Card from './Card.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import {
	CARD_BACKGROUND_COLORS,
	CARD_RIBBON_COLORS,
	CARD_RIBBON_POSITIONS,
	CARD_RIBBON_SIZES,
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
	contentHasPadding: true,
	headerHasPadding: false,
	footerHasPadding: false,
	paddingSize: CARD_PADDING_SIZES.SMALL,
	dividerUnderHeader: false,
	hasRibbon: false,
	hasRadius: true,
	backgroundColor: CARD_BACKGROUND_COLORS.DEFAULT,
	ribbonPosition: CARD_RIBBON_POSITIONS.TOP,
	ribbonSize: CARD_RIBBON_SIZES.LARGE,
	ribbonColor: CARD_RIBBON_COLORS.NEUTRAL_HEAVY,
	hasRibbonRadius: false,
	hasLoadingBar: false,
	loadingBarColor: LOADING_BAR_COLORS.NEUTRAL_HEAVY,
	loadingBarTime: '0',
	isFlat: false,
	isContentScrollable: false,
} as Args;

const argTypes = {
	header: { control: 'text' },
	content: {
		control: 'text',
	},
	footer: { control: 'text' },
	backgroundColor: {
		control: 'select',
		options: Object.values(CARD_BACKGROUND_COLORS),
	},
	ribbonPosition: {
		control: 'select',
		options: Object.values(CARD_RIBBON_POSITIONS),
	},
	ribbonSize: {
		control: 'select',
		options: Object.values(CARD_RIBBON_SIZES),
	},
	ribbonColor: {
		control: 'select',
		options: Object.values(CARD_RIBBON_COLORS),
	},
	hasRibbonRadius: {
		control: 'boolean',
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
