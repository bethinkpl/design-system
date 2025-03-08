<template>
	<div>FormExample PrimeVue</div>
	<form @submit="onSubmit">
		<v-input v-model="email" />
		<v-input v-model="password" type="password" />
		<v-combobox v-model="item" :options="items" />
		<button type="submit">Submit</button>
	</form>
</template>

<script lang="ts" setup>
import VInput from '../Input/InputPrimeVue.vue';
import VCombobox from '../Combobox/ComboboxPrimeVue.vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { any, object, string, unknown } from 'zod';

const { defineField, handleSubmit, errors } = useForm({
	validationSchema: toTypedSchema(
		object({
			email: string().min(5, 'Minimum 5 znaków').email('Niepoprawny email'),
			password: string().min(10, 'Minimum 10 znaków'),
			item: any().refine((value) => value !== undefined, 'Wybierz element'),
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

const [email] = defineField('email');
const [password] = defineField('password');
const [item] = defineField('item');

const items = [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }];
</script>
