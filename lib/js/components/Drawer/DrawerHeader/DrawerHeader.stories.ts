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
			:pill-label="pillLabel"
			:title-color="titleColor"
			:title-ellipsis="titleEllipsis"
			:title="title"
		/>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {} as Args;

const argTypes = {
	title: { control: { type: 'text' }, defaultValue: 'Header Title' },
	eyebrowText: { control: { type: 'text' }, defaultValue: 'eyebrow' },
	pillLabel: { control: { type: 'text' }, defaultValue: 'pill' },
	hasDivider: { control: { type: 'boolean' }, defaultValue: false },
	isClosable: { control: { type: 'boolean' }, defaultValue: true },
	isSecondLevel: { control: { type: 'boolean' }, defaultValue: false },
	isInteractiveEyebrow: { control: { type: 'boolean' }, defaultValue: false },
	leftIcon: {
		control: { type: 'select', options: [...Object.keys(ICONS), null] },
		defaultValue: null,
	},
	eyebrowEllipsis: { control: { type: 'boolean' }, defaultValue: false },
	titleEllipsis: { control: { type: 'boolean' }, defaultValue: false },
	titleColor: {
		control: { type: 'select', options: Object.values(DRAWER_HEADER_TITLE_COLORS) },
		defaultValue: DRAWER_HEADER_TITLE_COLORS.NEUTRAL_STRONG,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5844-97971&t=BghQUeaLDBGoEKOq-4',
	},
};
