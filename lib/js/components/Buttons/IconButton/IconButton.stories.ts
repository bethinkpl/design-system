import IconButton from './IconButton.vue';
import {
	ICON_BUTTON_SIZES,
	ICON_BUTTON_COLOR_SCHEMES,
	ICON_BUTTON_TYPES,
	ICON_BUTTON_COLORS,
	ICON_BUTTON_STATES,
} from './IconButton.consts';
import { BUTTON_ELEVATIONS, BUTTON_RADIUSES } from '../Button';
import { ICONS } from '../../Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
	title: 'Components/Buttons/IconButton',
	component: IconButton,
} as Meta<typeof IconButton>;

const StoryTemplate: StoryFn<typeof IconButton> = (argTypes) => ({
	components: { IconButton },
	props: Object.keys(argTypes),
	computed: {
		isInverted() {
			return this.color === 'inverted';
		},
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
		};
	},
	template: `<div :class="{ contrastBackground: isInverted }">
	<icon-button
		:icon="ICONS[icon]"
		:size="size"
		:type="type"
		:radius="radius"
		:color-scheme="colorScheme"
		:touchable="touchable"
		:elevation="elevation"
		:color="color"
		:state="state"
	><span v-if="label !== ''">{{label}}</span></icon-button>
	</div>`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: ICON_BUTTON_SIZES.LARGE,
	type: ICON_BUTTON_TYPES.ICON_ONLY,
	radius: BUTTON_RADIUSES.CAPSULE,
	label: 'Zamknij',
	colorScheme: ICON_BUTTON_COLOR_SCHEMES.ALL_IN_COLOR,
	touchable: true,
	elevation: BUTTON_ELEVATIONS.NONE,
	color: 'primary',
	state: ICON_BUTTON_STATES.DEFAULT,
} as Args;

const argTypes = {
	size: {
		control: { type: 'select', options: Object.values(ICON_BUTTON_SIZES) },
		defaultValue: ICON_BUTTON_SIZES.LARGE,
	},
	type: {
		control: { type: 'select', options: Object.values(ICON_BUTTON_TYPES) },
		defaultValue: ICON_BUTTON_TYPES.ICON_ONLY,
	},
	radius: {
		control: { type: 'select', options: Object.values(BUTTON_RADIUSES) },
		defaultValue: BUTTON_RADIUSES.CAPSULE,
	},
	icon: {
		control: { type: 'select', options: Object.keys(ICONS) },
		defaultValue: 'FA_XMARK',
	},
	color: {
		control: { type: 'select', options: Object.values(ICON_BUTTON_COLORS) },
		defaultValue: 'primary',
	},
	colorScheme: {
		control: { type: 'select', options: Object.values(ICON_BUTTON_COLOR_SCHEMES) },
		defaultValue: ICON_BUTTON_COLOR_SCHEMES.ALL_IN_COLOR,
	},
	elevation: {
		control: { type: 'select', options: Object.values(BUTTON_ELEVATIONS) },
		defaultValue: BUTTON_ELEVATIONS.NONE,
	},
	state: {
		control: { type: 'select', options: Object.values(ICON_BUTTON_STATES) },
		defaultValue: ICON_BUTTON_STATES.DEFAULT,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=180%3A2709',
	},
};

const argTypesDisabled = {
	size: {
		control: { type: null },
	},
	type: {
		control: { type: null },
	},
	radius: {
		control: { type: null },
	},
	icon: {
		control: { type: null },
	},
	color: {
		control: { type: null },
	},
	colorScheme: {
		control: { type: null },
	},
	elevation: {
		control: { type: null },
	},
	state: {
		control: { type: null },
	},
	touchable: {
		control: { type: null },
	},
	default: {
		control: { type: null },
	},
} as ArgTypes;

const StoryFilledWithLabelTemplate: StoryFn<typeof IconButton> = (argTypes) => ({
	components: { IconButton },
	props: Object.keys(argTypes),
	template:
		'<icon-button :icon="ICONS.FA_XMARK" :type="ICON_BUTTON_TYPES.FILLED" >Zamknij</icon-button>',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_BUTTON_TYPES: Object.freeze(ICON_BUTTON_TYPES),
		};
	},
});

export const FilledWithLabel = StoryFilledWithLabelTemplate.bind({});
FilledWithLabel.argTypes = argTypesDisabled;

const StoryOutlinedRoundedTemplate: StoryFn<typeof IconButton> = (argTypes) => ({
	components: { IconButton },
	props: Object.keys(argTypes),
	template:
		'<icon-button :icon="ICONS.FA_CHEVRON_RIGHT" :type="ICON_BUTTON_TYPES.OUTLINED" :radius="BUTTON_RADIUSES.ROUNDED" />',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_BUTTON_TYPES: Object.freeze(ICON_BUTTON_TYPES),
			BUTTON_RADIUSES: Object.freeze(BUTTON_RADIUSES),
		};
	},
});

export const OutlinedRounded = StoryOutlinedRoundedTemplate.bind({});
OutlinedRounded.argTypes = argTypesDisabled;

const StoryFilledPrimaryTemplate: StoryFn<typeof IconButton> = (argTypes) => ({
	components: { IconButton },
	props: Object.keys(argTypes),
	template:
		'<icon-button :icon="ICONS.FA_XMARK" :type="ICON_BUTTON_TYPES.FILLED" :color="ICON_BUTTON_COLORS.PRIMARY" :size="ICON_BUTTON_SIZES.X_SMALL" />',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_BUTTON_TYPES: Object.freeze(ICON_BUTTON_TYPES),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
		};
	},
});

export const FilledPrimary = StoryFilledPrimaryTemplate.bind({});
FilledPrimary.argTypes = argTypesDisabled;

const StoryIconOnlyInfoTemplate: StoryFn<typeof IconButton> = (argTypes) => ({
	components: { IconButton },
	props: Object.keys(argTypes),
	template:
		'<icon-button :icon="ICONS.FA_FLAG" :color="ICON_BUTTON_COLORS.INFO" :size="ICON_BUTTON_SIZES.MEDIUM" />',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
		};
	},
});

export const IconOnlyInfo = StoryIconOnlyInfoTemplate.bind({});
IconOnlyInfo.argTypes = argTypesDisabled;

const StoryIconOnlyWarningTemplate: StoryFn<typeof IconButton> = (argTypes) => ({
	components: { IconButton },
	props: Object.keys(argTypes),
	template:
		'<icon-button :icon="ICONS.HEAD_WITH_QUESTION_MARK" :color="ICON_BUTTON_COLORS.WARNING" :size="ICON_BUTTON_SIZES.MEDIUM" />',
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
		};
	},
});

export const IconOnlyWarning = StoryIconOnlyWarningTemplate.bind({});

IconOnlyWarning.argTypes = argTypesDisabled;
IconOnlyWarning.args = {} as Args;
