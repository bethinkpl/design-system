import FeatureIcon from './FeatureIcon.vue';
import { ICONS } from '../Icon';
import { FEATURE_ICON_SIZES, FEATURE_ICON_COLOR } from './FeatureIcon.consts';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Icons/FeatureIcon',
	component: FeatureIcon,
} as Meta<typeof FeatureIcon>;

const StoryTemplate: StoryFn<typeof FeatureIcon> = (argTypes) => ({
	components: { FeatureIcon },
	props: Object.keys(argTypes),
	template:
		'<feature-icon :icon="ICONS[icon]" :size="size" :color="color" :doubleBackground="doubleBackground" />',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {} as Args;

const argTypes = {
	size: {
		control: { type: 'select', options: Object.values(FEATURE_ICON_SIZES) },
		defaultValue: FEATURE_ICON_SIZES.X_LARGE,
	},
	icon: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: 'FA_CIRCLE_QUESTION',
	},
	color: {
		control: { type: 'select', options: Object.values(FEATURE_ICON_COLOR) },
		defaultValue: FEATURE_ICON_COLOR.PRIMARY,
	},
	doubleBackground: {
		control: { type: 'boolean' },
		defaultValue: true,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=1552%3A34963',
	},
};
