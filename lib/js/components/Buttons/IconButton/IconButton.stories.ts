import IconButton from './IconButton.vue';
import {
	ICON_BUTTON_COLOR_SCHEMES,
	ICON_BUTTON_COLORS,
	ICON_BUTTON_SIZES,
	ICON_BUTTON_STATES,
	ICON_BUTTON_TYPES,
} from './IconButton.consts';
import { BUTTON_ELEVATIONS, BUTTON_RADIUSES } from '../Button';
import { ICONS } from '../../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3-vite';
import { withActions } from 'storybook/actions/decorator';

export default {
	title: 'Components/Buttons/IconButton',
	component: IconButton,
	decorators: [withActions],
} as Meta<typeof IconButton>;

const StoryTemplate: StoryFn<typeof IconButton> = (args) => ({
	components: { IconButton },
	setup() {
		return args;
	},
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
	icon: 'FA_XMARK',
} as Args;

const argTypes = {
	size: {
		control: 'select',
		options: Object.values(ICON_BUTTON_SIZES),
	},
	type: {
		control: 'select',
		options: Object.values(ICON_BUTTON_TYPES),
	},
	radius: {
		control: 'select',
		options: Object.values(BUTTON_RADIUSES),
	},
	icon: {
		control: 'select',
		options: Object.keys(ICONS),
	},
	color: {
		control: 'select',
		options: Object.values(ICON_BUTTON_COLORS),
	},
	colorScheme: {
		control: 'select',
		options: Object.values(ICON_BUTTON_COLOR_SCHEMES),
	},
	elevation: {
		control: 'select',
		options: Object.values(BUTTON_ELEVATIONS),
	},
	state: {
		control: 'select',
		options: Object.values(ICON_BUTTON_STATES),
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
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=180%3A2709',
	},
};

const argTypesDisabled = {
	size: {
		disable: true,
	},
	type: {
		disable: true,
	},
	radius: {
		disable: true,
	},
	icon: {
		disable: true,
	},
	color: {
		disable: true,
	},
	colorScheme: {
		disable: true,
	},
	elevation: {
		disable: true,
	},
	state: {
		disable: true,
	},
	touchable: {
		disable: true,
	},
	default: {
		disable: true,
	},
} as ArgTypes;

const StoryFilledWithLabelTemplate: StoryFn<typeof IconButton> = (args) => ({
	components: { IconButton },
	setup() {
		return args;
	},
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

const StoryOutlinedRoundedTemplate: StoryFn<typeof IconButton> = (args) => ({
	components: { IconButton },
	setup() {
		return args;
	},
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

const StoryFilledPrimaryTemplate: StoryFn<typeof IconButton> = (args) => ({
	components: { IconButton },
	setup() {
		return args;
	},
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

const StoryIconOnlyInfoTemplate: StoryFn<typeof IconButton> = (args) => ({
	components: { IconButton },
	setup() {
		return args;
	},
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

const StoryIconOnlyWarningTemplate: StoryFn<typeof IconButton> = (args) => ({
	components: { IconButton },
	setup() {
		return args;
	},
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
