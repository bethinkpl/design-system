import Icon from './Icon.vue';
import { ICON_SIZES, ICONS } from './Icon.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/Icons/Icon',
	component: Icon,
} as Meta<typeof Icon>;

const StoryTemplate: StoryFn<typeof Icon> = (args) => ({
	components: { Icon },
	setup() {
		return { ...args };
	},
	template:
		'<div class="sbIconList__singleIcon"><icon :icon="ICONS[icon]" :size="size" :touchable="touchable" :spinning="spinning" :rotation="rotation" :flipped-vertical="flippedVertical" :flipped-horizontal="flippedHorizontal" /></div>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: ICON_SIZES.MEDIUM,
	icon: 'HEAD_WITH_QUESTION_MARK',
	spinning: false,
	touchable: false,
	rotation: null,
	flippedVertical: false,
	flippedHorizontal: false,
} as Args;

const argTypes = {
	size: {
		control: 'select',
		options: Object.values(ICON_SIZES),
	},
	icon: {
		control: 'select',
		options: Object.keys(ICONS),
	},
	rotation: {
		control: 'select',
		options: [null, 90, 180, 270],
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	actions: {
		handles: ['click'],
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34963',
	},
};

const StoryAllIconsTemplate: StoryFn<typeof Icon> = (args) => ({
	components: { Icon },
	setup() {
		return { ...args };
	},
	template:
		'<div class="sbIconList">' +
		'<div v-for="(icon, iconName) in ICONS" :key="iconName" class="sbIconList__icon">' +
		'<icon :icon="icon" />' +
		'<div>{{iconName}}</div>' +
		'</div>' +
		'</div>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const AllIcons = StoryAllIconsTemplate.bind({});
AllIcons.argTypes = argTypes;
AllIcons.args = args;
