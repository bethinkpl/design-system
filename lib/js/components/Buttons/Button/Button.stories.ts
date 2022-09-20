// Button.stories.ts

import Button from './Button.vue';
import {
	BUTTON_SIZES,
	BUTTON_TYPES,
	BUTTON_COLORS,
	BUTTON_STATES,
	BUTTON_RADIUSES,
	BUTTON_ELEVATIONS,
} from './Button.consts';
import { ICONS } from '../../Icon';

import { Meta, Story } from '@storybook/vue';

export default {
	title: 'Components/Buttons/Button',
	component: Button,
} as Meta<typeof Button>;

const Template: Story<{
	slotText: Object;
	size: Object;
	type: Object;
	color: Object;
	radius: Object;
	state: Object;
	elevation: Object;
	iconLeft: Object;
	iconRight: Object;
}> = (argTypes) => ({
	components: { Button },
	props: Object.keys(argTypes),
	template: `<div :class="{ contrastBackground: isInverted }">
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
                    {{slotText}}
                </Button>
            </div>`,
	computed: {
		isInverted() {
			return this.color === 'inverted';
		},
	},
	created() {
		this.ICONS = ICONS;
	},
});

export const Interactive = Template.bind({});

Interactive.args = {
	slotText: 'hello',
};

Interactive.argTypes = {
	size: {
		control: { type: 'select', options: Object.values(BUTTON_SIZES) },
		defaultValue: BUTTON_SIZES.MEDIUM,
	},
	type: {
		control: { type: 'select', options: Object.values(BUTTON_TYPES) },
		defaultValue: BUTTON_TYPES.FILLED,
	},
	color: {
		control: { type: 'select', options: Object.values(BUTTON_COLORS) },
		defaultValue: BUTTON_COLORS.PRIMARY,
	},
	radius: {
		control: { type: 'select', options: Object.values(BUTTON_RADIUSES) },
		defaultValue: BUTTON_RADIUSES.CAPSULE,
	},
	state: {
		control: { type: 'select', options: Object.values(BUTTON_STATES) },
		defaultValue: BUTTON_STATES.DEFAULT,
	},
	elevation: {
		control: { type: 'select', options: Object.values(BUTTON_ELEVATIONS) },
		defaultValue: BUTTON_ELEVATIONS.NONE,
	},
	iconLeft: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: 'FA_CHEVRON_LEFT',
	},
	iconRight: {
		control: { type: 'select', options: [null, ...Object.keys(ICONS)] },
		defaultValue: null,
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/izQdYyiBR1GQgFkaOIfIJI/LMS---DS---Components?node-id=138%3A2373',
	},
};
