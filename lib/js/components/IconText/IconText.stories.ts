import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import IconText from './IconText.vue';
import { ICON_TEXT_COLORS, ICON_TEXT_SIZES, ICON_TEXT_STATES } from './IconText.consts';
import { ICONS } from '../Icons/Icon';

export default {
	title: 'Components/IconText',
	component: IconText,
} as Meta<typeof IconText>;

const StoryTemplate: StoryFn<typeof IconText> = (args) => ({
	components: { IconText },
	setup() {
		return args;
	},
	template: `
			<icon-text
					:color="color"
					:icon="ICONS[icon]"
					:label="label"
					:is-interactive="isInteractive"
					:is-label-bold="isLabelBold"
					:size="size"
					:state="state"
			/>`,
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});
Interactive.args = {
	size: ICON_TEXT_SIZES.X_SMALL,
	color: ICON_TEXT_COLORS.NEUTRAL_WEAK,
	label: 'Tagi lub filtry po przecinku',
	isLabelBold: false,
	icon: 'FA_TAGS',
	isInteractive: false,
	state: ICON_TEXT_STATES.DEFAULT,
} as Args;

const argTypes = {
	color: {
		control: 'select',
		options: Object.values(ICON_TEXT_COLORS),
	},
	icon: {
		control: 'select',
		options: Object.keys(ICONS),
	},
	size: {
		control: 'select',
		options: Object.values(ICON_TEXT_SIZES),
	},
	state: {
		control: 'select',
		options: Object.values(ICON_TEXT_STATES),
	},
} as ArgTypes;

Interactive.argTypes = argTypes;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=4832%3A81133',
	},
};
