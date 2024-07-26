<template>
	<prime-skeleton
		:width="width"
		:height="height"
		:border-radius="radiusTranslated"
		:dt="designTokens"
	/>
</template>

<script lang="ts">
import PrimeSkeleton from 'primevue/skeleton';
import { defineComponent, PropType } from 'vue';
import { SKELETON_RADIUS_SIZES, SkeletonRadiusSize } from './Skeleton.consts';

export default defineComponent({
	name: 'Skeleton',
	components: {
		PrimeSkeleton,
	},
	props: {
		height: {
			type: String,
			default: '100%',
		},
		radius: {
			type: String as PropType<SkeletonRadiusSize>,
			default: SKELETON_RADIUS_SIZES.MEDIUM,
		},
		width: {
			type: String,
			default: '100%',
		},
	},
	data() {
		return {
			designTokens: {
				animation: {
					background: 'rgba(var(--raw-white-rgb), 0.4)',
				},
				background: 'var(--raw-gray-200)',
			},
		};
	},
	computed: {
		radiusTranslated(): string {
			const map = {
				[SKELETON_RADIUS_SIZES.SMALL]: 0,
				[SKELETON_RADIUS_SIZES.MEDIUM]: 6,
				[SKELETON_RADIUS_SIZES.LARGE]: 200,
			};

			return `${map[this.radius]}px`;
		},
	},
});
</script>
