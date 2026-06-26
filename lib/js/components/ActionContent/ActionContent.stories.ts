import ActionContent from './ActionContent.vue';
import DsButton from '../Buttons/Button';
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES } from '../Buttons/Button/Button.consts';
import { ICONS } from '../Icons/Icon';

import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';

export default {
	title: 'Components/ActionContent',
	component: ActionContent,
} as Meta<typeof ActionContent>;

const StoryTemplate: StoryFn<typeof ActionContent> = (args) => {
	return {
		components: { ActionContent },
		setup() {
			return args;
		},
		data() {
			return {
				ICONS: Object.freeze(ICONS),
			};
		},
		template: `
				<action-content
						:icon="ICONS[icon]"
						:main-text="mainText"
						:supporting-text="supportingText"
						:button-label="buttonLabel"
						:button-icon="ICONS[buttonIcon]"
						:is-action-vertical="isActionVertical"
				>
				<template v-if="actions" #actions><span v-html="actions" /></template>
				</action-content>`,
	};
};

export const Interactive = StoryTemplate.bind({});

const args = {
	icon: 'FA_COMMENT_DOTS',
	mainText: 'Main text tutaj sobie będzie',
	supportingText: 'Supporting text tutaj będzie',
	buttonLabel: 'Button label',
	buttonIcon: null,
	isActionVertical: false,
	actions: '',
} as Args;

const argTypes = {
	icon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	mainText: {
		control: 'text',
	},
	supportingText: {
		control: 'text',
	},
	buttonLabel: {
		control: 'text',
	},
	buttonIcon: {
		control: 'select',
		options: [null, ...Object.keys(ICONS)],
	},
	isActionVertical: {
		control: 'boolean',
	},
	actions: {
		control: 'text',
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/uLBrJvVwTYzuch6VnDOBlL/INI-188---Dyskusje-2.0-NEW?node-id=4001-152961&m=dev',
	},
};

const WithActionsSlotTemplate: StoryFn<typeof ActionContent> = (args) => {
	return {
		components: { ActionContent, DsButton },
		setup() {
			return {
				...args,
				ICONS,
				BUTTON_COLORS,
				BUTTON_SIZES,
				BUTTON_TYPES,
			};
		},
		template: `
				<action-content
						:icon="ICONS[icon]"
						:main-text="mainText"
						:supporting-text="supportingText"
						:is-action-vertical="isActionVertical"
				>
				<template #actions>
					<ds-button
							:color="BUTTON_COLORS.NEUTRAL"
							:type="BUTTON_TYPES.OUTLINED"
							:size="BUTTON_SIZES.SMALL"
					>Cancel</ds-button>
					<ds-button
							:color="BUTTON_COLORS.PRIMARY"
							:type="BUTTON_TYPES.FILLED"
							:size="BUTTON_SIZES.SMALL"
					>Confirm</ds-button>
				</template>
				</action-content>`,
	};
};

export const WithActionsSlot = WithActionsSlotTemplate.bind({});

WithActionsSlot.argTypes = {
	icon: argTypes.icon,
	mainText: argTypes.mainText,
	supportingText: argTypes.supportingText,
	isActionVertical: argTypes.isActionVertical,
} as ArgTypes;

WithActionsSlot.args = {
	icon: 'FA_COMMENT_DOTS',
	mainText: 'Main text tutaj sobie będzie',
	supportingText: 'Supporting text tutaj będzie',
	isActionVertical: false,
} as Args;

WithActionsSlot.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/uLBrJvVwTYzuch6VnDOBlL/INI-188---Dyskusje-2.0-NEW?node-id=4001-152961&m=dev',
	},
};
