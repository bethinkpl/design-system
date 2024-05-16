<template>
	<div class="ds-input-text">
		<float-label>
			<prime-input-text :id="name" v-model="input.$model" :invalid="hasError" />
			<label :for="name">{{ label }}</label>
		</float-label>
		<errors-list :name="name" />
	</div>
</template>

<style lang="scss" scoped>
.ds-input-text {
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-top: 32px;

	.ds-form-errors {
		color: red;
	}
}
</style>

<script lang="ts">
import PrimeInputText from "primevue/inputtext";
import FloatLabel from 'primevue/floatlabel';
import ErrorsList from "./ErrorsList.vue";

export default {
	name: 'InputText',
	components: {
		ErrorsList,
		FloatLabel,
		PrimeInputText,
	},
	inject: ['v$'],
	data() {
		return {
			input: this.v$.value[this.name],
		};
	},
	computed: {
		hasError() {
			return this.input.$error && this.input.$dirty;
		},
	},
	props: {
		label: {
			type: String,
			default: null,
		},
		name: {
			type: String,
			required: true,
		},
	},
};
</script>
