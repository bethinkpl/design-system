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
import { SKELETON_RADIUSES, SkeletonRadius } from './Skeleton.consts';

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
			type: String as PropType<SkeletonRadius>,
			default: SKELETON_RADIUSES.MD,
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
			SKELETON_RADIUSES: Object.freeze(SKELETON_RADIUSES),
		};
	},
	computed: {
		radiusTranslated(): string {
			const map = {
				[SKELETON_RADIUSES.SM]: 0,
				[SKELETON_RADIUSES.MD]: 6,
				[SKELETON_RADIUSES.XL]: 200,
			};

			return `${map[this.radius]}px`;
		},
	},
});
</script>
