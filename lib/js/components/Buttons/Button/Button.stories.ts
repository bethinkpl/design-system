import Button from './Button.vue';
import {
	BUTTON_COLORS,
	BUTTON_ELEVATIONS,
	BUTTON_RADIUSES,
	BUTTON_SIZES,
	BUTTON_STATES,
	BUTTON_TYPES,
} from './Button.consts';
import { ICONS } from '../../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3-vite';
import { withActions } from 'storybook/actions/decorator';

export default {
	title: 'Components/Buttons/Button',
	component: Button,
	decorators: [withActions],
} as Meta<typeof Button>;

const StoryTemplate: StoryFn<typeof Button> = (args) => ({
	components: { Button },
	setup() {
		return args;
	},
	template: `
			<div :class="{ contrastBackground: isInverted }">
			<Button
					:size="size"
					:type="type"
					:state="state"
					:radius="radius"
					:color="color"
					:elevation="elevation"
					:icon-left="ICONS[iconLeft]"
					:icon-right="ICONS[iconRight]"
			>
				{{ slotText }}
			</Button>
			</div>`,
	computed: {
		isInverted() {
			return this.color === 'inverted';
		},
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
		};
	},
});

export const Interactive = StoryTemplate.bind({});

const args = {
	slotText: 'Hello',
	size: BUTTON_SIZES.MEDIUM,
	type: BUTTON_TYPES.FILLED,
	color: BUTTON_COLORS.PRIMARY,
	radius: BUTTON_RADIUSES.CAPSULE,
	state: BUTTON_STATES.DEFAULT,
	elevation: BUTTON_ELEVATIONS.NONE,
	iconLeft: 'FA_CHEVRON_LEFT',
	iconRight: null,
} as Args;

const argTypes = {
	size: {
		control: 'select',
		options: Object.values(BUTTON_SIZES),
	},
	type: {
		control: 'select',
		options: Object.values(BUTTON_TYPES),
	},
	color: {
		control: 'select',
		options: Object.values(BUTTON_COLORS),
	},
	radius: {
		control: 'select',
		options: Object.values(BUTTON_RADIUSES),
	},
	state: {
		control: 'select',
		options: Object.values(BUTTON_STATES),
	},
	elevation: {
		control: 'select',
		options: Object.values(BUTTON_ELEVATIONS),
	},
	iconLeft: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	iconRight: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
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
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=138%3A2373',
	},
};
