<template>
	<v-form @submit="handleFormSubmit" :validation-schema="schema" v-slot="{ values }" :initial-values="formInitialValues">
		<pv-stepper class="form" linear>
			<pv-stepper-panel header="Krok 1">
				<template #content="{ nextCallback }">
					<step-one :form="formInitialValues" />
					<div class="form__stepButtons">
						<!-- Set style attribute on root element using PT -->
						<pv-button label="Dalej" severity="primary" :pt="{root: { style: { 'margin-left': 'auto' }}}" @click="nextCallback" />
					</div>
				</template>
			</pv-stepper-panel>
			<pv-stepper-panel header="Krok 2">
				<template #content="{ prevCallback }">
					<step-two :form="formInitialValues" />
					<div class="form__stepButtons">
						<pv-button label="Wróć" severity="secondary" @click="prevCallback" />
						<pv-button label="Wyślij" type="submit" severity="primary" />
					</div>
				</template>
			</pv-stepper-panel>
		</pv-stepper>
		<hr />
		<pre>{{JSON.stringify(values)}}</pre>
	</v-form>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';

.form {
	&__stepButtons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: $space-m;
	}
}
</style>

<script lang="ts">
import PvStepper from 'primevue/stepper';
import PvStepperPanel from 'primevue/stepperpanel';
import PvButton from 'primevue/button';
import StepOne from './components/StepOne.vue';
import StepTwo from './components/StepTwo.vue';
import { Form as VForm } from 'vee-validate';
import * as yup from 'yup';


export default {
	name: 'Sandbox',
	components: {
		PvButton,
		PvStepper,
		PvStepperPanel,
		StepOne,
		StepTwo,
		VForm,
	},
	data() {
		const schema = yup.object({
			firstName: yup.string().required(),
			lastName: yup.string(),
			email: yup.string().required().email(),
			password: yup.string().required().min(8),
			accept: yup.boolean().oneOf([true], 'Musisz zaakceptować regulamin'),
			newsletter: yup.boolean(),
			dateRange: yup.array().of(yup.date()).required(),
			dateRange2: yup.array().of(yup.date()),
		});

		return {
			formInitialValues: {
				accept: false,
				newsletter: true,
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				dateRange: null,
				dateRange2: null,
			},
			schema,
		};
	},
	methods: {
		async handleFormSubmit(data, ev) {
			console.log('Successful submit', data);

			// API call simulation
			const isNameValid = await new Promise<boolean>((resolve) => {
				setTimeout(() => {
					resolve(data.firstName !== 'John');
				}, 1000);
			});

			if (!isNameValid) {
				ev.setErrors({
					firstName: 'Imię John jest zajęte!',
				});
			}
		},
	}
};
</script>
