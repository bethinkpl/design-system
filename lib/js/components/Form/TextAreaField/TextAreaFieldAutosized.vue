<template>
	<textarea ref="textarea" v-model="model" />
</template>

<script lang="ts" setup>
import { computed, useTemplateRef } from 'vue';
import { useTextareaAutosize } from '@vueuse/core';

const model = defineModel<string>();

const textareaEl = useTemplateRef<HTMLTextAreaElement>('textarea');

useTextareaAutosize({
	element: textareaEl,
	input: computed(() => model.value ?? ''),
	// `min-height` rather than `height`, so the `rows` attribute keeps supplying the intrinsic
	// height and the measured content can only raise the floor.
	styleProp: 'minHeight',
});
</script>
