import { Meta, StoryObj } from '@storybook/vue3';
import FormField from './FormField.vue';
import HelpButton from '../../Buttons/HelpButton/HelpButton.vue';
import { FORM_FIELD_STATES } from './FormField.consts';
import { args, argTypes } from './FormField.stories.shared';
import { reactive, toRefs } from 'vue';

const meta: Meta<typeof FormField> = {
	title: 'Components/Form/FormField',
	component: FormField,
	render: (args) => ({
		components: { FormField, HelpButton },
		setup() {
			const { field, help, labelAside, message, fieldStatus, ...restRefs } = toRefs(args);
			const props = reactive({ ...restRefs });

			return {
				props,
				labelAside,
				fieldStatus,
				message,
				help,
				field,
				FORM_FIELD_STATES,
			};
		},
		template: `<FormField v-bind="props">
			<template #field="{fieldId, messageId}">
				<input v-if="!field" :id="fieldId" :aria-describedby="messageId" />
				<div v-else v-html="field" />
			</template>
			<template v-if="help" #help>
				<HelpButton :is-disabled="props.state === FORM_FIELD_STATES.DISABLED" modal-title="Help modal title">
					<template #modalContent>
						Modal
					</template>
				</HelpButton>
			</template>
			<template v-if="labelAside" #labelAside>
				<div v-html="labelAside" />
			</template>
			<template v-if="fieldStatus" #fieldStatus>
				<div v-html="fieldStatus" />
			</template>
			<template v-if="message" #message>
				<div v-html="message" />
			</template>
		</FormField>`,
	}),
	argTypes: {
		...argTypes,
		field: {
			control: 'text',
		},
	},
};
export default meta;

type Story = StoryObj<typeof FormField>;

export const Interactive: Story = {
	args: {
		...args,
		field: '',
	},
};

Interactive.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=13267-86654&t=ezos5nMsGrZyaqmC-4',
	},
};
