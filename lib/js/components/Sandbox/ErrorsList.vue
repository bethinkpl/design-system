<template>
	<ul class="ds-form-errors" v-if="hasError">
		<li v-for="(error, index) in input.$errors" :key="index"><small>{{error.$message}}</small></li>
	</ul>
</template>

<style lang="scss" scoped>
.ds-form-errors {
	color: red;
	list-style-type: none;
	padding-left: 5px;
	margin: 0;

	li {
		padding: 0;
	}
}
</style>

<script lang="ts">
import PrimeInputText from "primevue/inputtext";
import FloatLabel from 'primevue/floatlabel';

export default {
	name: 'ErrorsList',
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
		name: {
			type: String,
			required: true,
		},
	},
};
</script>
