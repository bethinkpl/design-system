<template>
	<v-app>
		<slot />
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import Vuetify, { VApp } from 'vuetify/lib';
import { VUETIFY_THEME } from './consts/vuetifyTheme.const';

Vue.use(Vuetify, { theme: VUETIFY_THEME });

export default {
	name: 'App',
	components: { VApp },
	vuetify: new Vuetify({ theme: VUETIFY_THEME }),
}
</script>