import { Args, ArgTypes, Meta, StoryFn } from '@storybook/vue3';
import StripeLoader from './StripeLoader.vue';
import { STRIPE_LOADER_COLORS, STRIPE_LOADER_SIZES } from './StripeLoader.consts';

export default {
	title: 'Components/StripeLoadder',
	component: StripeLoader,
} as Meta<typeof StripeLoader>;

const StoryTemplate: StoryFn<typeof StripeLoader> = (args) => ({
	components: { DsStripe: StripeLoader },
	setup() {
		return { ...args };
	},
	template: `<ds-stripe :size="size" :color="color" :time="time" />`,
});

export const Interactive = StoryTemplate.bind({});

const args = {
	size: STRIPE_LOADER_SIZES.MEDIUM,
	color: STRIPE_LOADER_COLORS.NEUTRAL_HEAVY,
	time: '5',
} as Args;

const argTypes = {
	size: {
		control: { type: 'select', options: Object.values(STRIPE_LOADER_SIZES) },
		defaultValue: STRIPE_LOADER_SIZES.MEDIUM,
	},
	color: {
		control: { type: 'select', options: Object.values(STRIPE_LOADER_COLORS) },
		defaultValue: STRIPE_LOADER_COLORS.NEUTRAL_HEAVY,
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
