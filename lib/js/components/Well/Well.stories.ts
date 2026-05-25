// SB8.0 Good code to copy when creating a new story - this code use new API

import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import Well from './Well.vue';
import { WELL_COLORS, WELL_PADDINGS } from './Well.consts';
import type { ComponentProps } from 'vue-component-type-helpers';
import Chip, { CHIP_RADIUSES } from '../Chip';

type WellProps = ComponentProps<typeof Well>;

const meta: Meta<WellProps> = {
	title: 'Components/Well',
	component: Well,
	render: (args) => ({
		components: { Well },
		setup() {
			return { args };
		},
		template: '<well v-bind="args"><div v-html="args.content" /></well>',
	}),
	argTypes: {
		padding: {
			control: 'select',
			options: [null, ...Object.values(WELL_PADDINGS)],
		},
		color: {
			control: 'select',
			options: Object.values(WELL_COLORS),
		},
		content: {
			control: 'text',
		},
	} as ArgTypes,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13194-76861&p=f&m=dev',
		},
	},
};
export default meta;

type Story = StoryObj<WellProps>;

export const Interactive: Story = {
	args: {
		padding: null,
		content:
			'<h3 style="margin-top: 0">Content</h3>' +
			'Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',
	} as Args,
};

export const WithMultipleChips: Story = {
	render: (args) => {
		return {
			components: { Chip, Well },
			setup() {
				return {
					args,
					CHIP_RADIUSES,
					content:
						'<h3 style="margin-top: 0">Content</h3>' +
						'Voluptatem saepe suscipit optio et delectus esse sed velit. Autem maxime soluta aliquam perspiciatis quidem dolor saepe rerum.',
				};
			},
			template: `<well v-bind="args">
				<template #accessory>
					<chip
						label="First Chip"
						:radius="CHIP_RADIUSES.ROUNDED"
					/>
					<chip
						label="Second Chip"
						:radius="CHIP_RADIUSES.ROUNDED"
					/>
					<chip
						label="Third Chip"
						:radius="CHIP_RADIUSES.ROUNDED"
					/>
				</template>
				<div v-html="content" />
			</well>`,
		};
	},
	args: {
		padding: WELL_PADDINGS.SMALL,
	},
};
