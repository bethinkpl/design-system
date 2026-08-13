<template>
	<textarea ref="textarea" v-model="model" />
</template>

<script lang="ts" setup>
import { computed, useTemplateRef } from 'vue';
import { useTextareaAutosize } from '@vueuse/core';

const model = defineModel<string>();

const textareaEl = useTemplateRef<HTMLTextAreaElement>('textarea');

// Writes `height`, so the `min-height` / `max-height` from the CSS stay in charge of the bounds —
// `min-height` would otherwise win over `max-height` and let the field grow past the cap.
useTextareaAutosize({
	element: textareaEl,
	input: computed(() => model.value ?? ''),
});
</script>
