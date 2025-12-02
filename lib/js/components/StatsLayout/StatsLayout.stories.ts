import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import StatsLayout from './StatsLayout.vue';
import type { ComponentProps } from 'vue-component-type-helpers';

type StatsLayoutProps = ComponentProps<typeof StatsLayout>;

const meta: Meta<StatsLayoutProps> = {
	title: 'Components/StatsLayout',
	component: StatsLayout,
	render: (args) => ({
		components: { StatsLayout },
		setup() {
			return {
				args,
			};
		},
		template: '<stats-layout v-bind="args" />',
	}),
	argTypes: {} as ArgTypes,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14877-39964&m=dev',
		},
	},
};
export default meta;

type Story = StoryObj<StatsLayoutProps>;

export const Interactive: Story = {
	args: {} as Args,
};

const argTypes = {} as ArgTypes;

Interactive.argTypes = argTypes;
