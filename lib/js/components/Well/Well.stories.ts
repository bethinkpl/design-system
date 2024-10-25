// SB8.0 Good code to copy when creating a new story - this code use new API

import { Args, ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import Well from './Well.vue';
import { WELL_PADDINGS } from './Well.consts';
import type { ComponentProps } from 'vue-component-type-helpers';

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
		content: {
			control: 'text',
		},
	} as ArgTypes,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/oqNhXXGdc4ZnNQ6YNpkLEK/INI-152-Baza-v3---planowanie?node-id=1807-518161&t=sQ5nflpPY2YcPKNc-4',
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
