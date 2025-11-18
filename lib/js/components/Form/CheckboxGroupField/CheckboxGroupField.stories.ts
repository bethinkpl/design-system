import type { Meta, StoryObj } from '@storybook/vue3';
import CheckboxGroupField from './CheckboxGroupField.vue';
import Checkbox from '../Checkbox/Checkbox.vue';
import { CHECKBOX_STATES } from '../Checkbox/Checkbox.consts';
import { FORM_FIELD_STATES } from '../FormField/FormField.consts';
import { args, argTypes } from '../FormField/FormField.stories.shared';
import { reactive, toRefs } from 'vue';
import { ICONS } from '../../Icons/Icon';
import HelpButton from '../../Buttons/HelpButton';
import Banner from '../../Banner';

const meta: Meta<typeof CheckboxGroupField> = {
	title: 'Components/Form/CheckboxGroupField',
	component: CheckboxGroupField,
	render: (args) => ({
		components: { CheckboxGroupField, Checkbox, HelpButton, Banner },
		setup() {
			const { help, labelAside, message, fieldStatus, field, ...restRefs } = toRefs(args);
			const props = reactive({ ...restRefs });

			return {
				props,
				labelAside,
				fieldStatus,
				message,
				help,
				FORM_FIELD_STATES,
				ICONS,
			};
		},
		template: `
			<CheckboxGroupField v-bind="props">
				<template #field>
					<Checkbox value="option1">Option 1</Checkbox>
					<Checkbox value="option2">Option 2</Checkbox>
					<Checkbox value="option3">Option 3</Checkbox>
				</template>
				<template v-if="help" #help>
					<HelpButton :is-disabled="props.state === FORM_FIELD_STATES.DISABLED" modal-title="Help modal title">
						<template #modalContent>
							Modal
						</template>
					</HelpButton>
				</template>
				<template #labelAside v-if="labelAside">
					<div v-html="labelAside" />
				</template>
				<template #fieldStatus v-if="fieldStatus">
					<div v-html="fieldStatus" />
				</template>
				<template #message v-if="message">
					<div v-if="message" v-html="message" />
				</template>
			</CheckboxGroupField>
			<Banner color="danger" title="Uwaga! Mogą wystąpić problemy z pisaniem testów jednostkowych korzystających z tego komponentu. Unikaj jego używania. A jeśli jest rok 2026 i wciąż widzisz ten komunikat — nakrzycz na Karola!" title-in-color />
		`,
	}),
	argTypes,
};

export default meta;
type Story = StoryObj<typeof CheckboxGroupField>;

export const Interactive: Story = {
	args: {
		...args,
		state: CHECKBOX_STATES.DEFAULT,
		// Override the field arg just to make TS happy; the story doesn't allow editing it anyway
		field: () => {},
	},
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/izQdYyiBR1GQgFkaOIfIJI/LMS---DS-Components?node-id=14832-98644&m=dev',
		},
	},
};
