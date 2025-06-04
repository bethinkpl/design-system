import { Meta, StoryObj } from '@storybook/vue3';
import FormFieldMessage from './FormFieldMessage.vue';
import { ComponentProps, ComponentSlots } from 'vue-component-type-helpers';
import { FORM_FIELD_STATES } from '../FormField.consts';

const meta: Meta<
	ComponentProps<typeof FormFieldMessage> & ComponentSlots<typeof FormFieldMessage>
> = {
	title: 'Components/Form/FormFieldMessage',
	component: FormFieldMessage,
	render: (args) => ({
		components: { FormFieldMessage },
		setup() {
			return {
				args,
			};
		},
		template: `<FormFieldMessage v-bind="args">
			<div v-html="args.default" />
		</FormFieldMessage>`,
	}),
	argTypes: {
		state: {
			control: 'select',
			options: [null, ...Object.values(FORM_FIELD_STATES)],
		},
		messageId: {
			control: 'text',
		},
		default: {
			control: 'text',
			description: 'Default slot content for the message.',
		},
	},
};
export default meta;

type Story = StoryObj<typeof FormFieldMessage>;

export const Interactive: Story = {
	args: {
		default: 'Message',
		messageId: 'message-id',
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13364-13669&m=dev',
	},
};
