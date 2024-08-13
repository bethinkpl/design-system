import DrawerHeader from './DrawerHeader.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { ICONS } from '../../Icons/Icon';
import { DRAWER_HEADER_TITLE_COLORS } from './DrawerHeader.consts';

export default {
	title: 'Components/Drawer/DrawerHeader',
	component: DrawerHeader,
} as Meta<typeof DrawerHeader>;

const StoryTemplate: StoryFn<typeof DrawerHeader> = (args) => ({
	components: { DrawerHeader },
	setup() {
		return { ...args };
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
	template: `
		<drawer-header
			:eyebrow-ellipsis="eyebrowEllipsis"
			:eyebrow-text="eyebrowText"
			:has-divider="hasDivider"
			:is-closable="isClosable"
			:is-interactive-eyebrow="isInteractiveEyebrow"
			:is-second-level="isSecondLevel"
			:left-icon="ICONS[leftIcon]"
			:chip-label="chipLabel"
			:title-color="titleColor"
			:title-ellipsis="titleEllipsis"
			:title="title"
		>
			<template #actions v-if="actions">
				<div v-html="actions" />
			</template>
			<template #titleTrailing v-if="titleTrailing">
				<div v-html="titleTrailing" />
			</template>
		</drawer-header>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	eyebrowText: 'eyebrow',
	isInteractiveEyebrow: false,
	eyebrowEllipsis: false,
	title: 'Header Title',
	titleEllipsis: false,
	titleColor: DRAWER_HEADER_TITLE_COLORS.NEUTRAL_STRONG,
	leftIcon: null,
	chipLabel: 'chip',
	isClosable: true,
	hasDivider: false,
	isSecondLevel: false,
	actions: 'actions slot',
	titleTrailing: 'trailing slot',
} as Args;

const argTypes = {
	eyebrowText: { control: 'text' },
	isInteractiveEyebrow: { control: 'boolean' },
	eyebrowEllipsis: { control: 'boolean' },
	title: { control: 'text' },
	titleEllipsis: { control: 'boolean' },
	titleColor: {
		control: 'select',
		options: Object.values(DRAWER_HEADER_TITLE_COLORS),
	},
	leftIcon: {
		control: 'select',
		options: [...Object.keys(ICONS), null],
	},
	chipLabel: { control: 'text' },
	hasDivider: { control: 'boolean' },
	isSecondLevel: { control: 'boolean' },
	isClosable: { control: 'boolean' },
	actions: { control: 'text' },
	titleTrailing: { control: 'text' },
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5844-97971&t=BghQUeaLDBGoEKOq-4',
	},
};
