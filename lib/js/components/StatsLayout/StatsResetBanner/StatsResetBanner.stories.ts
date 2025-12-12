import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import StatsResetBanner from './StatsResetBanner.vue';
import type { ComponentProps } from 'vue-component-type-helpers';

type StatsResetBannerProps = ComponentProps<typeof StatsResetBanner>;

const meta: Meta<StatsResetBannerProps> = {
	title: 'Components/StatsLayout/StatsResetBanner',
	component: StatsResetBanner,
	render: (args) => {
		return {
			components: { StatsResetBanner },
			setup() {
				return {
					args,
				};
			},
			template:
				'<stats-reset-banner v-bind="args"><template #infoModalContent>Default content</template></stats-reset-banner>',
		};
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14870-10680&m=dev',
		},
	},
};
export default meta;

type Story = StoryObj<StatsResetBannerProps>;

export const Interactive: Story = {
	args: {
		timeMarker: '2 czerwca 2025',
		infoModalTitle: 'Info modal title',
	} as Args,
};

Interactive.argTypes = {
	timeMarker: {
		control: 'text',
	},
	infoModalTitle: {
		control: 'text',
	},
} as ArgTypes;
