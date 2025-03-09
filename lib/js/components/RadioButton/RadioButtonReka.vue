<template>
	<div class="radio-button-wrapper">
		<radio-group-item :id="id" class="RadioGroupItem" :value="value">
			<radio-group-indicator class="RadioGroupIndicator" />
		</radio-group-item>
		<label class="Label" :for="id">{{ label }}</label>
	</div>
</template>

<style>
button {
	all: unset;
}

.radio-button-wrapper {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.RadioGroupItem {
	background-color: white;
	width: 16px;
	height: 16px;
	border-radius: 100%;
	border: 1px solid black;
}
.RadioGroupItem:hover {
	background-color: lightblue;
}
.RadioGroupItem:focus {
	box-shadow: 0 0 0 1px black;
}

.RadioGroupIndicator {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: relative;
}
.RadioGroupIndicator::after {
	content: '';
	display: block;
	width: 11px;
	height: 11px;
	border-radius: 50%;
	background-color: blueviolet;
}

.Label {
	padding-left: 8px;
}
</style>

<script setup lang="ts">
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui';
import { computed } from 'vue';

const props = defineProps<{
	label: string;
	value: string;
}>();

const id = computed(() => `radio-${props.label}-${props.value}`);
</script>
