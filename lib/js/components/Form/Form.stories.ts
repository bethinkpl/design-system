import Checkbox from './Checkbox/Checkbox.vue';
import { withActions } from '@storybook/addon-actions/decorator';
import { Meta } from '@storybook/vue3';
import InputField from './InputField';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { array, object, string } from 'zod';
import CheckboxGroupField from './CheckboxGroupField/CheckboxGroupField.vue';
import Button from '../Buttons/Button';

export default {
	title: 'Components/Form/FormExamples',
	decorators: [withActions],
} as Meta<any>;

export const SimpleForm = () => ({
	components: { InputField, CheckboxGroupField, Checkbox, Button },
	setup: () => {
		const { handleSubmit } = useForm({
			initialValues: {
				fullName: '',
				newsletterTopics: [],
			},
			validationSchema: toTypedSchema(
				object({
					fullName: string().min(1, 'Imię i nazwisko jest wymagane'),
					newsletterTopics: array(string()).min(
						1,
						'Wybierz przynajmniej jeden temat newslettera',
					),
				}),
			),
		});

		const onSubmit = handleSubmit(
			(form) => {
				console.log('Form submitted successfully:', form);
			},
			(errors) => {
				console.log('Validation errors:', errors);
			},
		);

		return {
			onSubmit,
		};
	},
	template: `
		<form @submit.prevent="onSubmit" style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
			<InputField label="Imię i nazwisko" name="fullName" />
			<CheckboxGroupField label="Jakie tematy newslettera Cię interesują?" name="newsletterTopics">
				<template #field>
					<Checkbox value="technology">Technologia</Checkbox>
					<Checkbox value="health">Zdrowie</Checkbox>
					<Checkbox value="finance">Finanse</Checkbox>
					<Checkbox value="sports">Sport</Checkbox>
				</template>
			</CheckboxGroupField>
			<Button as="button">
				Wyślij
			</Button>
		</form>				
	`,
	data() {
		return {};
	},
});
