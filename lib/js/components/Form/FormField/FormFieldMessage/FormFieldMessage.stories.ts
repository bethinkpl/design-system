import { Meta, StoryObj } from '@storybook/vue3';
import FormFieldMessage from './FormFieldMessage.vue';
import { ComponentProps, ComponentSlots } from 'vue-component-type-helpers';
import { FORM_FIELD_STATES } from '../FormField.consts';
import Icon, { ICONS, ICON_SIZES } from '../../../Icons/Icon';

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
			options: Object.values(FORM_FIELD_STATES),
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
		state: FORM_FIELD_STATES.DEFAULT,
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13364-13669&m=dev',
	},
};

export const WithInlineIcons: Story = {
	args: {
		messageId: 'message-id',
		state: FORM_FIELD_STATES.DEFAULT,
	},
	render: (args) => ({
		components: { FormFieldMessage, Icon },
		setup() {
			return {
				args,
				ICONS,
				ICON_SIZES,
			};
		},
		template: `<FormFieldMessage v-bind="args">
			Message with inline <Icon :icon="ICONS.FA_ADDRESS_CARD" :size="ICON_SIZES.XX_SMALL" /> icon
		</FormFieldMessage>`,
	}),
};
