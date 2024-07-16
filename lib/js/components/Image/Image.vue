<template>
	<div class="ds-image">
		<prime-skeleton v-if="isLoading" width="100%" height="100%"></prime-skeleton>
		<span v-else-if="error">Error</span>
		<img v-else class="ds-image__image" :src="src" />
	</div>
</template>

<style lang="scss" scoped>
.ds-image {
	height: 100%;

	&__image {
		height: 100%;
		width: 100%;
	}
}
</style>

<script lang="ts" setup>
import { useImage } from '@vueuse/core';
import PrimeSkeleton from 'primevue/skeleton';

const props = defineProps({
	src: {
		type: String,
		required: true,
	},
});
const { isLoading, error } = useImage({ src: props.src });
</script>
