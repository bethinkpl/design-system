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
			<template #titleTrailing v-if="titleTrailing">
				<div v-html="titleTrailing" />
			</template>
			<template #actions v-if="actions">
				<div v-html="actions" />
			</template>
		</drawer-header>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {} as Args;

const argTypes = {
	eyebrowText: { control: { type: 'text' }, defaultValue: 'eyebrow' },
	isInteractiveEyebrow: { control: { type: 'boolean' }, defaultValue: false },
	eyebrowEllipsis: { control: { type: 'boolean' }, defaultValue: false },
	title: { control: { type: 'text' }, defaultValue: 'Header Title' },
	titleEllipsis: { control: { type: 'boolean' }, defaultValue: false },
	titleColor: {
		control: { type: 'select', options: Object.values(DRAWER_HEADER_TITLE_COLORS) },
		defaultValue: DRAWER_HEADER_TITLE_COLORS.NEUTRAL_STRONG,
	},
	leftIcon: {
		control: { type: 'select', options: [...Object.keys(ICONS), null] },
		defaultValue: null,
	},
	chipLabel: { control: { type: 'text' }, defaultValue: 'chip' },
	hasDivider: { control: { type: 'boolean' }, defaultValue: false },
	isSecondLevel: { control: { type: 'boolean' }, defaultValue: false },
	isClosable: { control: { type: 'boolean' }, defaultValue: true },
	titleTrailing: { control: { type: 'text' }, defaultValue: 'trailing slot' },
	actions: { control: { type: 'text' }, defaultValue: 'actions slot' },
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5844-97971&t=BghQUeaLDBGoEKOq-4',
	},
};
