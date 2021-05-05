<template>
	<mcw-textfield v-model="text" label="Hint text" />
</template>

<style lang="scss">
@import '../../styles/settings/material-theme';
@import '@material/textfield/mdc-text-field';
</style>

<script lang="ts">
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { textfield } from 'vue-material-adapter-legacy';

Vue.use(VueCompositionAPI);
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
