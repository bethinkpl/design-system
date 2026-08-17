import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';

import Callout from './Callout.vue';
import {
	CALLOUT_COLORS,
	CALLOUT_LAYOUTS,
	CALLOUT_MAIN_TEXT_COLORS,
	CALLOUT_SIZES,
} from './Callout.consts';
import DsButton from '../Buttons/Button';
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES } from '../Buttons/Button/Button.consts';
import { ICONS } from '../Icons/Icon';

type CalloutProps = ComponentProps<typeof Callout>;

const VERTICAL_FIGMA_URL =
	'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=17359-1009&m=dev';
const HORIZONTAL_FIGMA_URL =
	'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=17760-416&m=dev';

/**
 * Clearing a text control yields `''`, which TextGroup renders as a `&nbsp;` placeholder row.
 * Mapping it to `null` removes the row instead, which is what an empty control should mean.
 */
const emptyToNull = (value?: string | null) => value || null;

const mapArgs = (args: CalloutProps) => ({
	...args,
	icon: ICONS[args.icon],
	buttonIcon: ICONS[args.buttonIcon],
	eyebrowText: emptyToNull(args.eyebrowText),
	mainText: emptyToNull(args.mainText),
	supportingText: emptyToNull(args.supportingText),
	buttonLabel: emptyToNull(args.buttonLabel),
});

const meta: Meta<typeof Callout> = {
	title: 'Components/Callout',
	component: Callout,
	render: (args: CalloutProps) => ({
		components: { Callout },
		setup() {
			return { onButtonClicked: action('button-clicked') };
		},
		computed: {
			props() {
				return mapArgs(args);
			},
		},
		template: `<div style="max-width: 500px;"><Callout v-bind="props" @button-clicked="onButtonClicked" /></div>`,
	}),
	argTypes: {
		layout: {
			control: 'select',
			options: Object.values(CALLOUT_LAYOUTS),
		},
		size: {
			control: 'select',
			options: Object.values(CALLOUT_SIZES),
		},
		color: {
			control: 'select',
			options: Object.values(CALLOUT_COLORS),
		},
		mainTextColor: {
			control: 'select',
			// `null` stands for "prop not passed", which falls back to primary.
			// The danger color pins the text to neutral and ignores this control entirely.
			options: [null, ...Object.values(CALLOUT_MAIN_TEXT_COLORS)],
		},
		icon: {
			control: 'select',
			options: Object.keys(ICONS),
		},
		buttonIcon: {
			control: 'select',
			options: [null, ...Object.keys(ICONS)],
		},
		eyebrowText: { control: 'text' },
		mainText: { control: 'text' },
		supportingText: { control: 'text' },
		buttonLabel: { control: 'text' },
		isActionVertical: { control: 'boolean' },
	},
};
export default meta;

type Story = StoryObj<typeof Callout>;

export const Interactive: Story = {
	args: {
		layout: CALLOUT_LAYOUTS.VERTICAL,
		size: CALLOUT_SIZES.MEDIUM,
		color: CALLOUT_COLORS.PRIMARY,
		mainTextColor: null,
		icon: 'FA_COMMENT_DOTS' as unknown as CalloutProps['icon'],
		eyebrowText: '',
		mainText: 'Main text tutaj sobie będzie',
		supportingText: 'Supporting text tutaj będzie',
		buttonLabel: 'Button label',
		buttonIcon: null,
		isActionVertical: false,
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: VERTICAL_FIGMA_URL,
	},
};

export const WithActionsSlot: Story = {
	render: (args: CalloutProps) => ({
		components: { Callout, DsButton },
		setup() {
			return { args, ICONS, BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES };
		},
		computed: {
			props() {
				return mapArgs(args);
			},
		},
		template: `
			<div style="max-width: 500px;">
				<Callout v-bind="props">
					<template #actions>
						<ds-button :color="BUTTON_COLORS.NEUTRAL" :type="BUTTON_TYPES.OUTLINED" :size="BUTTON_SIZES.SMALL">Cancel</ds-button>
						<ds-button :color="BUTTON_COLORS.PRIMARY" :type="BUTTON_TYPES.FILLED" :size="BUTTON_SIZES.SMALL">Confirm</ds-button>
					</template>
				</Callout>
			</div>`,
	}),
	args: {
		layout: CALLOUT_LAYOUTS.VERTICAL,
		size: CALLOUT_SIZES.MEDIUM,
		color: CALLOUT_COLORS.PRIMARY,
		mainTextColor: null,
		icon: 'FA_COMMENT_DOTS' as unknown as CalloutProps['icon'],
		mainText: 'Main text tutaj sobie będzie',
		supportingText: 'Supporting text tutaj będzie',
		isActionVertical: false,
	},
};

WithActionsSlot.parameters = {
	design: {
		type: 'figma',
		url: VERTICAL_FIGMA_URL,
	},
};

/**
 * The full variant matrix, laid out for side-by-side comparison with the Figma component set
 * (node 17696:2260).
 */
export const Variants: Story = {
	render: () => ({
		components: { Callout },
		setup() {
			return {
				ICONS,
				CALLOUT_COLORS,
				CALLOUT_LAYOUTS,
				CALLOUT_SIZES,
				sizes: Object.values(CALLOUT_SIZES),
			};
		},
		template: `
			<div style="display: flex; flex-direction: column; gap: 48px;">
				<section v-for="layout in [CALLOUT_LAYOUTS.VERTICAL, CALLOUT_LAYOUTS.HORIZONTAL]" :key="layout">
					<h3 style="margin-bottom: 16px;">{{ layout }}</h3>
					<div style="display: flex; flex-direction: column; gap: 32px; max-width: 500px;">
						<Callout
							v-for="size in sizes"
							:key="size"
							:layout="layout"
							:size="size"
							:icon="ICONS.FA_COMMENT_DOTS"
							:eyebrow-text="size === CALLOUT_SIZES.SMALL ? 'Eyebrow text' : null"
							:main-text="'Main text tutaj sobie będzie (' + size + ')'"
							supporting-text="Supporting text tutaj będzie"
							button-label="Button small"
						/>
						<Callout
							:layout="layout"
							:color="CALLOUT_COLORS.DANGER"
							:icon="ICONS.FA_COMMENT_DOTS"
							main-text="Main text tutaj sobie będzie (danger)"
							supporting-text="Supporting text tutaj będzie"
							button-label="Button small"
						/>
						<Callout
							:layout="layout"
							:icon="ICONS.FA_COMMENT_DOTS"
							main-text="Main text tutaj sobie będzie (stacked actions)"
							supporting-text="Supporting text tutaj będzie"
							button-label="Button small"
							is-action-vertical
						/>
						<Callout
							:layout="layout"
							:icon="ICONS.FA_COMMENT_DOTS"
							main-text="Main text tutaj sobie będzie (no actions)"
							supporting-text="Supporting text tutaj będzie"
						/>
					</div>
				</section>
			</div>`,
	}),
};

Variants.parameters = {
	design: {
		type: 'figma',
		url: HORIZONTAL_FIGMA_URL,
	},
};
