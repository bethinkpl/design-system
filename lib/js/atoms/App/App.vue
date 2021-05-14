<template>
  <v-app>
    <slot />
  </v-app>
</template>

<script lang="ts">
import { VApp, } from 'vuetify/lib';
import Vue from 'vue';
import { VUETIFY_THEME } from '../../consts/vuetifyTheme.const';
import Vuetify from 'vuetify';

Vue.use(Vuetify, { theme: VUETIFY_THEME });

export default {
  name: 'App',
  components: { VApp },
};
</script>

<style scoped>

</style>