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

// New stories showcasing ContainerRibbon integration
export const WithVerticalRibbon = StoryTemplate.bind({});
WithVerticalRibbon.args = {
	...args,
	content: 'Card with a <strong>vertical ribbon</strong> on the left side using ContainerRibbon component',
	hasBorder: true,
	borderPosition: CARD_BORDER_POSITIONS.LEFT,
	borderSize: CARD_BORDER_SIZES.MEDIUM,
	borderColor: CARD_BORDER_COLORS.SUCCESS,
};

export const WithHorizontalRibbon = StoryTemplate.bind({});
WithHorizontalRibbon.args = {
	...args,
	content: 'Card with a <strong>horizontal ribbon</strong> on the top using ContainerRibbon component',
	hasBorder: true,
	borderPosition: CARD_BORDER_POSITIONS.TOP,
	borderSize: CARD_BORDER_SIZES.LARGE,
	borderColor: CARD_BORDER_COLORS.PRIMARY,
};

export const RibbonColors = () => ({
	components: { Card },
	template: `
		<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding: 20px;">
			<Card hasBorder borderPosition="left" borderSize="medium" borderColor="success">
				<template #content>Success Status</template>
			</Card>
			<Card hasBorder borderPosition="left" borderSize="medium" borderColor="warning">
				<template #content>Warning Status</template>
			</Card>
			<Card hasBorder borderPosition="left" borderSize="medium" borderColor="danger">
				<template #content>Danger Status</template>
			</Card>
			<Card hasBorder borderPosition="left" borderSize="medium" borderColor="info">
				<template #content>Info Status</template>
			</Card>
			<Card hasBorder borderPosition="left" borderSize="medium" borderColor="primary">
				<template #content>Primary Status</template>
			</Card>
			<Card hasBorder borderPosition="left" borderSize="medium" borderColor="fail">
				<template #content>Fail Status</template>
			</Card>
		</div>
	`,
});

export const RibbonSizes = () => ({
	components: { Card },
	template: `
		<div style="display: flex; gap: 16px; padding: 20px;">
			<Card hasBorder borderPosition="left" borderSize="small" borderColor="primary">
				<template #content><strong>Small</strong> ribbon border</template>
			</Card>
			<Card hasBorder borderPosition="left" borderSize="medium" borderColor="primary">
				<template #content><strong>Medium</strong> ribbon border</template>
			</Card>
			<Card hasBorder borderPosition="left" borderSize="large" borderColor="primary">
				<template #content><strong>Large</strong> ribbon border</template>
			</Card>
		</div>
	`,
});
