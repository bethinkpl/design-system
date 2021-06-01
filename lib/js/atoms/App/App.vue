<template>
	<v-app>
		<slot />
	</v-app>
</template>

<style>
select {
	-webkit-appearance: auto;
}
</style>

<script lang="ts">
import Vuetify, { VApp } from 'vuetify/lib';
import Vue from 'vue';
import { VUETIFY_THEME } from '../../consts/vuetifyTheme.const';

Vue.use(Vuetify, { theme: VUETIFY_THEME });

export default {
	name: 'App',
	components: { VApp },
	vuetify: new Vuetify({ theme: VUETIFY_THEME }),
};
</script>
