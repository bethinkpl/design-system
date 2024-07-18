<template>
	<div class="ds-image">
		<img class="ds-image__image" loading="lazy" :src="src" @error="onError" @load="onLoad" />
		<div v-if="isLoading" class="ds-image__loader">
			<prime-skeleton width="100%" height="100%"></prime-skeleton>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.ds-image {
	height: 100%;
	position: relative;

	&__image {
		height: 100%;
		object-fit: contain;
		width: 100%;
	}

	&__loader {
		bottom: 0;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}
}
</style>

<script lang="ts">
import PrimeSkeleton from 'primevue/skeleton';
import { defineComponent } from 'vue';

export default defineComponent({
	// <image> is "an ancient and poorly supported precursor to the <img> element"
	// so there should be no conflicts. Also, we prefix all DS components with ds-
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Element#obsolete_and_deprecated_elements
	// eslint-disable-next-line vue/no-reserved-component-names
	name: 'Image',
	components: {
		PrimeSkeleton,
	},
	props: {
		src: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isLoading: true,
		};
	},
	methods: {
		onError() {
			this.isLoading = false;
		},
		onLoad() {
			this.isLoading = false;
		},
	},
});
</script>
