<template>
	<form class="ds-form" @submit.prevent="onSubmit">
		<slot />
		<prime-button label="Submit" @click="onSubmit" />
		<small><pre>{{JSON.stringify(v$)}}</pre></small>
	</form>
</template>

<style lang="scss" scoped>
.ds-form {
	display: flex;
	flex-direction: column;
	gap: 4px;
	width: 300px;
}
</style>

<script lang="ts">
import useVuelidate from "@vuelidate/core";
import PrimeButton from "primevue/button";
import {computed} from "vue";

export default {
	name: 'Form',
	setup() {
		return {
			v$: useVuelidate(),
		}
	},
	components: {
		PrimeButton,
	},
	provide() {
		return {
			v$: computed(() => this.v$),
			form: computed(() => this.form),
		}
	},
	data() {
		return {
			...this.form,
		}
	},
	emits: ['submit'],
	props: {
		form: {
			type: Object,
			default: {},
		},
		rules: {
			type: Object,
			default: {},
		}
	},
	validations() {
		return this.rules;
	},
	methods: {
		async onSubmit() {
			this.v$.$touch();

			if (this.v$.$error) {
				console.error('failed!');
			} else {
				console.info(this.form);
				this.$emit('submit');
			}
		}
	},
};
</script>
