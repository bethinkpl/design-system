<template>
	<div class="radio-button-wrapper">
		<radio-button v-model="modelValue" :name="name" :value="value" :input-id="inputId" />
		<label :for="inputId">{{ label }}</label>
	</div>
</template>

<style scoped>
.radio-button-wrapper {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
</style>

<script setup lang="ts">
import RadioButton from 'primevue/radiobutton';
import { computed } from 'vue';

interface Props {
	name: string;
	value: string;
	label: string;
}

const modelValue = defineModel();
const props = defineProps<Props>();

const inputId = computed(() => `${props.name}-${props.value}`);
</script>
