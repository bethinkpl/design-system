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

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';

import { VUETIFY_THEME } from '../../consts/vuetifyTheme.const';

const vuetifyConfig = {
	theme: VUETIFY_THEME,
	icons: {
		iconfont: 'faSvg',
	},
};

// eslint-disable-next-line vue/component-definition-name-casing, vue/match-component-file-name
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(fas);
library.add(far);

Vue.use(Vuetify, vuetifyConfig);

export default {
	name: 'App',
	components: { VApp },
	vuetify: new Vuetify(vuetifyConfig),
};
</script>
