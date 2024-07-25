<template>
	<prime-skeleton
		width="100%"
		height="100%"
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
		radius: {
			type: String as PropType<SkeletonRadius>,
			default: SKELETON_RADIUSES.MD,
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
