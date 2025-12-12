import { Meta, StoryObj } from '@storybook/vue3';
import StatsErrorBanner from './StatsErrorBanner.vue';
import type { ComponentProps } from 'vue-component-type-helpers';

type StatsErrorBannerProps = ComponentProps<typeof StatsErrorBanner>;

const meta: Meta<StatsErrorBannerProps> = {
	title: 'Components/StatsLayout/StatsErrorBanner',
	component: StatsErrorBanner,
	render: (args) => {
		return {
			components: { StatsErrorBanner },
			setup() {
				return {
					args,
				};
			},
			template: '<stats-error-banner v-bind="args"></stats-error-banner>',
		};
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14870-10790&m=dev',
		},
	},
};
export default meta;

type Story = StoryObj<StatsErrorBannerProps>;

export const Interactive: Story = {};
