<template>
	<div>FormExample Ark</div>
	<form @submit="onSubmit">
		<v-input
			v-model="email"
			:input-props="{
				...emailAttrs,
				type: 'text',
			}"
			:error-text="errors.email"
		/>
		<v-input
			v-model="password"
			:input-props="{
				...passwordAttrs,
				type: 'password',
			}"
			:error-text="errors.password"
		/>
		<v-combobox v-model="item" :options="items" />
		<button type="submit">Submit</button>
	</form>
</template>

<script lang="ts" setup>
import VInput from '../Input/InputArk.vue';
import VCombobox from '../Combobox/ComboboxArk.vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { object, string } from 'zod';

const { defineField, handleSubmit, errors } = useForm({
	validationSchema: toTypedSchema(
		object({
			email: string().min(5, 'Minimum 5 znaków').email('Niepoprawny email'),
			password: string().min(10, 'Minimum 10 znaków'),
			item: string({
				required_error: 'Wybierz element',
			})
				.min(1, 'Wybierz element')
				.regex(/Item [12]/, {
					message: 'Niepoprawny element',
				}),
		}),
	),
});

const onSubmit = handleSubmit(
	async (values, x) => {
		console.log(values);
	},
	({ values, errors, results }) => {
		console.log({ errors, values, results });
	},
);

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [item] = defineField('item');

const items = [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }];
</script>
