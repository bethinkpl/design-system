<template>
	<div class="ds-image">
		<img
			class="ds-image__image"
			:class="{
				'-ds-contain': fit === IMAGE_FITS.CONTAIN,
				'-ds-cover': fit === IMAGE_FITS.COVER,
			}"
			draggable="false"
			loading="lazy"
			:src="src"
			@error="isLoading = false"
			@load="isLoading = false"
		/>
		<div v-if="isLoading" class="ds-image__loader">
			<prime-skeleton width="100%" height="100%" border-radius="0" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.ds-image {
	height: 100%;
	position: relative;

	&__image {
		height: 100%;
		user-select: none;
		width: 100%;

		&.-ds-contain {
			object-fit: contain;
		}

		&.-ds-cover {
			object-fit: cover;
		}
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
import { defineComponent, PropType } from 'vue';
import { IMAGE_FITS, ImageFit } from './Image.consts';

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
		fit: {
			type: String as PropType<ImageFit>,
			default: IMAGE_FITS.COVER,
		},
		src: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isLoading: true,
			IMAGE_FITS: Object.freeze(IMAGE_FITS),
		};
	},
});
</script>
