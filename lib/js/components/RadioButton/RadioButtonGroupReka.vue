<template>
	<radio-group-root v-model="radioStateSingle" class="RadioGroupRoot" aria-label="label">
		<slot></slot>
	</radio-group-root>
</template>

<script setup lang="ts">
import { RadioGroupRoot } from 'reka-ui';

const radioStateSingle = defineModel<string>();
</script>
