<template>
	<div class="v-application--is-ltr">
		<slot />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import Vuetify from 'vuetify/lib';
import { VUETIFY_THEME } from './consts/vuetifyTheme.const';

Vue.use(Vuetify, { theme: VUETIFY_THEME });

export default {
	name: 'App',
}
</script>