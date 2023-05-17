import DrawerHeader from './DrawerHeader.vue';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import { ICONS } from '../../Icons/Icon';

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
		<drawer-header :title="title" :eyebrow-text="eyebrowText" :pill-label="pillLabel"
					   :left-icon="ICONS[leftIcon]"
					   :has-divider="hasDivider" :is-closable="isClosable"
					   :is-interactive-eyebrow="isInteractiveEyebrow" :is-second-level="isSecondLevel"
					   :eyebrow-ellipsis="eyebrowEllipsis" :title-ellipsis="titleEllipsis"/>`,
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
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?type=design&node-id=5844-97971&t=BghQUeaLDBGoEKOq-4',
	},
};
