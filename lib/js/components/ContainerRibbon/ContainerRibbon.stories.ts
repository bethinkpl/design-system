import { ComponentProps } from 'vue-component-type-helpers';
import { Meta, StoryObj } from '@storybook/vue3';

import ContainerRibbon from './ContainerRibbon.vue';
import {
	CONTAINER_RIBBON_SIZES,
	CONTAINER_RIBBON_COLORS,
	CONTAINER_RIBBON_LAYOUTS,
	CONTAINER_RIBBON_RADIUSES,
} from './ContainerRibbon.consts';

type ContainerRibbonProps = ComponentProps<typeof ContainerRibbon>;

const meta: Meta<typeof ContainerRibbon> = {
	title: 'Components/ContainerRibbon',
	component: ContainerRibbon,
	render: (args: ContainerRibbonProps) => ({
		components: { ContainerRibbon },
		setup() {
			return { args };
		},
		template: `
			<div style="width: 120px; height: 120px; display: flex;">
				<ContainerRibbon v-bind="args" />
			</div>
		`,
	}),
	argTypes: {
		size: {
			control: 'select',
			options: Object.values(CONTAINER_RIBBON_SIZES),
		},
		color: {
			control: 'select',
			options: Object.values(CONTAINER_RIBBON_COLORS),
		},
		layout: {
			control: 'select',
			options: Object.values(CONTAINER_RIBBON_LAYOUTS),
		},
		radius: {
			control: 'select',
			options: Object.values(CONTAINER_RIBBON_RADIUSES),
		},
	},
};
export default meta;

type Story = StoryObj<typeof ContainerRibbon>;

export const Interactive: Story = {
	args: {
		size: CONTAINER_RIBBON_SIZES.LARGE,
		color: CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
		layout: CONTAINER_RIBBON_LAYOUTS.VERTICAL,
		radius: CONTAINER_RIBBON_RADIUSES.NONE,
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=8468-25270&m=dev',
	},
};
