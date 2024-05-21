import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import Stripe from './Stripe.vue';
import { STRIPE_COLORS, STRIPE_SIZES } from './Stripe.consts';

export default {
	title: 'Components/Stripe',
	component: Stripe,
} as Meta<typeof Stripe>;

const StoryTemplate: StoryFn<typeof Stripe> = (args) => ({
	components: { DsStripe: Stripe },
	setup() {
		return { ...args };
	},
	template: `<ds-stripe :size="size" :color="color" :time="time" />`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: STRIPE_SIZES.MEDIUM,
	color: STRIPE_COLORS.NEUTRAL_HEAVY,
	time: '5',
} as Args;

const argTypes = {
	size: {
		control: { type: 'select', options: Object.values(STRIPE_SIZES) },
		defaultValue: STRIPE_SIZES.MEDIUM,
	},
	color: {
		control: { type: 'select', options: Object.values(STRIPE_COLORS) },
		defaultValue: STRIPE_COLORS.NEUTRAL_HEAVY,
	},
} as ArgTypes;

Interactive.argTypes = argTypes;
Interactive.args = args;

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8375-32853',
	},
};
