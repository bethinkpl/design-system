<template>
	<input-text v-model="model" />
</template>

<script setup lang="ts">
import { defineModel } from 'vue';
import InputText from 'primevue/inputtext';

const model = defineModel<string>(); // Ensure type safety for v-model
</script>
