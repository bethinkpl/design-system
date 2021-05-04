<template>
	<mcw-textfield v-model="text" label="Hint text" />
</template>

<style lang="scss">
$mdc-theme-primary: red;
@import '@material/textfield/mdc-text-field';
</style>

<script lang="ts">
import { textfield } from 'vue-material-adapter-legacy';
import Vue from 'vue';

Vue.use(textfield);

export default {
	name: 'Input',
	data() {
		return {
			text: '',
		};
	},
};
</script>
