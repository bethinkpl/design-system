import { Meta, StoryObj } from '@storybook/vue3';
import FormFieldMessage from './FormFieldMessage.vue';
import { ComponentProps, ComponentSlots } from 'vue-component-type-helpers';
import { FORM_FIELD_MESSAGE_VARIANTS, FormFieldMessageVariant } from './FormFieldMessage.consts';
import { FORM_FIELD_ID } from '../FormField.consts';
import { ref } from 'vue';

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
		provide: {
			[FORM_FIELD_ID]: ref('field-id'),
		},
		template: `<FormFieldMessage v-bind="args">
			<div v-html="args.default" />
		</FormFieldMessage>`,
	}),
	argTypes: {
		variant: {
			control: 'select',
			options: [null, ...Object.values(FORM_FIELD_MESSAGE_VARIANTS)],
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
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13364-13669&m=dev',
	},
};
