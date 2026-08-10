import Checkbox from './Checkbox/Checkbox.vue';
import { withActions } from '@storybook/addon-actions/decorator';
import { Meta } from '@storybook/vue3';
import InputField from './InputField';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { array, object, string } from 'zod';
import CheckboxGroupField from './CheckboxGroupField/CheckboxGroupField.vue';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import Button from '../Buttons/Button';

export default {
	title: 'Components/Form/FormExamples',
	decorators: [withActions],
} as Meta<any>;

export const SimpleForm = () => ({
	components: { InputField, CheckboxGroupField, Checkbox, SelectField, TextAreaField, Button },
	setup: () => {
		const { handleSubmit } = useForm({
			initialValues: {
				fullName: '',
				country: '',
				newsletterTopics: [],
				notes: '',
			},
			validationSchema: toTypedSchema(
				object({
					fullName: string().min(1, 'Imię i nazwisko jest wymagane'),
					country: string().min(1, 'Kraj jest wymagany'),
					newsletterTopics: array(string()).min(
						1,
						'Wybierz przynajmniej jeden temat newslettera',
					),
					notes: string().max(500, 'Maksymalnie 500 znaków'),
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
			countryOptions: [
				{ value: 'pl', label: 'Polska' },
				{ value: 'de', label: 'Niemcy' },
				{ value: 'cz', label: 'Czechy' },
			],
		};
	},
	template: `
		<form @submit.prevent="onSubmit" style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
			<InputField label="Imię i nazwisko" name="fullName" />
			<SelectField
				label="Kraj"
				name="country"
				placeholder="Wybierz kraj"
				:options="countryOptions"
			/>
			<CheckboxGroupField label="Jakie tematy newslettera Cię interesują?" name="newsletterTopics">
				<template #field>
					<Checkbox value="technology">Technologia</Checkbox>
					<Checkbox value="health">Zdrowie</Checkbox>
					<Checkbox value="finance">Finanse</Checkbox>
					<Checkbox value="sports">Sport</Checkbox>
				</template>
			</CheckboxGroupField>
			<TextAreaField
				label="Uwagi"
				name="notes"
				is-autoresizing
				:input-props="{ rows: 4, maxlength: 500, placeholder: 'Coś jeszcze?' }"
			/>
			<Button as="button">
				Wyślij
			</Button>
		</form>				
	`,
	data() {
		return {};
	},
});
