<template>
	<div>
		<ds-form :form="form" :rules="rules">
			<ds-input-text label="First name" name="firstName" />
			<ds-input-text label="Last name" name="lastName" />
		</ds-form>
	</div>
</template>

<style scoped lang="scss">
</style>

<script lang="ts">
import PrimeButton from 'primevue/button';
import Calendar from 'primevue/calendar';
import FloatLabel from 'primevue/floatlabel';
import InputSwitch from 'primevue/inputswitch';
import 'primevue/resources/themes/saga-blue/theme.css';

import DsForm from './Form.vue';
import DsInputText from './InputText.vue';
import {required} from "@vuelidate/validators";

export default {
	name: 'Sandbox',
	components: {
		Calendar,
		FloatLabel,
		PrimeButton,
		InputSwitch,
		DsInputText,
		DsForm,
	},
	data() {
		return {
			form: {
				firstName: 'test',
				lastName: '',
			},
			rules: {
				firstName: {
					required,
				},
				lastName: {
					required,
				},
			},
			calendarValue: null,
			checked: false,
			buttonLabel: 'Submit',
		};
	},
};
</script>
