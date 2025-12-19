import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import StatsResetBanner from './StatsResetBanner.vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import Modal from '../../Modals/Modal/Modal.vue';

type StatsResetBannerProps = ComponentProps<typeof StatsResetBanner>;

const meta: Meta<StatsResetBannerProps> = {
	title: 'Components/StatsLayout/StatsResetBanner',
	component: StatsResetBanner,
	render: (args) => {
		return {
			components: { StatsResetBanner, Modal },
			setup() {
				return {
					args,
				};
			},
			template:
				'<stats-reset-banner v-bind="args"><template #message>Statystyki liczone od <strong>2 czerwca 2025</strong></template><template #infoModalContent>Default content</template><template #resetModal="{onClose}"><modal @close-modal="onClose">Modal content</modal></template></stats-reset-banner>',
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
		infoModalTitle: 'Info modal title',
	} as Args,
};

Interactive.argTypes = {
	infoModalTitle: {
		control: 'text',
	},
} as ArgTypes;
