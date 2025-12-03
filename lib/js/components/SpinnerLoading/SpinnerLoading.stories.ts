import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import SpinnerLoading from './SpinnerLoading.vue';
import type { ComponentProps } from 'vue-component-type-helpers';

type SpinnerLoadingProps = ComponentProps<typeof SpinnerLoading>;

const meta: Meta<SpinnerLoadingProps> = {
	title: 'Components/SpinnerLoading',
	component: SpinnerLoading,
	render: (args) => {
		return {
			components: { SpinnerLoading },
			setup() {
				return {
					args,
				};
			},
			template: '<spinner-loading v-bind="args" />',
		};
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/WeJCbVlnkL9HmEcoBpu5NU/LMS---Specific-Components---Limbo?node-id=108-7632&m=dev',
		},
	},
};
export default meta;

type Story = StoryObj<SpinnerLoadingProps>;

export const Interactive: Story = {
	args: {
		message: 'Momencik, ładuję dane...',
	} as Args,
};

Interactive.argTypes = {
	message: {
		control: 'text',
	},
} as ArgTypes;
