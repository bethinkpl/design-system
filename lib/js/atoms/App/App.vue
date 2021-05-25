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

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { VUETIFY_THEME } from '../../consts/vuetifyTheme.const';

const vuetifyConfig = {
	theme: VUETIFY_THEME,
	icons: {
		iconfont: 'faSvg',
	},
} as const;

// eslint-disable-next-line vue/component-definition-name-casing, vue/match-component-file-name
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuetify, vuetifyConfig);

export default {
	name: 'App',
	components: { VApp },
	vuetify: new Vuetify(vuetifyConfig),
};
</script>
