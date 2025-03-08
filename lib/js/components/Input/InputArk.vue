<template
	><field-root><field-input v-model="value" class="fieldInput" /></field-root
></template>

<style lang="scss">
.fieldInput {
	padding: 4px;
	border-radius: 4px;
	border: 1px solid black;
}
</style>

<script setup lang="ts">
import { FieldInput, FieldRoot } from '@ark-ui/vue/field';

const value = defineModel();
</script>
