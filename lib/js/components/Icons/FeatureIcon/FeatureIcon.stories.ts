import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

import FeatureIcon from './FeatureIcon.vue';
import { ICONS } from '../Icon';
import { FEATURE_ICON_COLOR, FEATURE_ICON_SIZES } from './FeatureIcon.consts';

export default {
	title: 'Components/Icons/FeatureIcon',
	component: FeatureIcon,
} as Meta<typeof FeatureIcon>;

const StoryTemplate: StoryFn<typeof FeatureIcon> = (args) => ({
	components: { FeatureIcon },
	setup() {
		return args;
	},
	template:
		'<feature-icon :icon="ICONS[icon]" :size="size" :color="color" :doubleBackground="doubleBackground" />',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: FEATURE_ICON_SIZES.X_LARGE,
	icon: 'FA_CIRCLE_QUESTION',
	color: FEATURE_ICON_COLOR.PRIMARY,
	doubleBackground: true,
} as Args;

const argTypes = {
	size: {
		control: 'select',
		options: Object.values(FEATURE_ICON_SIZES),
	},
	icon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	color: {
		control: 'select',
		options: Object.values(FEATURE_ICON_COLOR),
	},
	doubleBackground: {
		control: 'boolean',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=5604-96259',
	},
};
