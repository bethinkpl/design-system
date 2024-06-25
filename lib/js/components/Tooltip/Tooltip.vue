<template>
	<span v-if="inline" v-pv-tooltip:[tooltipParams]="options" tabindex="-1">
		<slot />
	</span>
	<div v-else v-pv-tooltip:[tooltipParams]="options" tabindex="-1">
		<slot />
	</div>
</template>

<style lang="scss">
@import '../../../styles/settings/typography/tokens';

.ds-tooltip-text {
	@include text-s-compact-bold;
}

.ds-tooltip-arrow-hide {
	display: none;
}
</style>

<script lang="ts">
import { TOOLTIP_PLACEMENTS, TooltipPlacement } from './Tooltip.consts';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'Tooltip',
	props: {
		placement: {
			type: String as PropType<TooltipPlacement>,
			default: TOOLTIP_PLACEMENTS.BOTTOM,
			validator(placement: TooltipPlacement) {
				return Object.values(TOOLTIP_PLACEMENTS).includes(placement);
			},
		},
		text: {
			type: String,
			default: '',
		},
		isDisabled: {
			type: Boolean,
			default: false,
		},
		isPointerVisible: {
			type: Boolean,
			default: true,
		},
		inline: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		tooltipParams() {
			return {
				position: this.placement,
				event: this.isTouchDevice() ? 'focus' : 'hover',
			};
		},
		options() {
			return {
				value: this.text,
				disabled: this.isDisabled,
				dt: {
					shadow: '0px 0px 4px 0px rgba(12, 23, 38, 0.08), 0px 6px 12px 0px rgba(12, 23, 38, 0.12), 0px 2px 4px 0px rgba(12, 23, 38, 0.06)',
					padding: 'var(--spacing-space-3xs, 6px) var(--spacing-space-2xs, 8px)',
					background: 'var(--neutral-background-medium, #E5E7ED)',
					color: 'var(--neutral-text-heavy, #343C50)',
					borderRadius: '4px',
				},
				ptOptions: {
					mergeProps: true,
				},
				pt: {
					text: 'ds-tooltip-text',
					arrow: this.isPointerVisible ? '' : 'ds-tooltip-arrow-hide',
				},
			};
		},
	},
	methods: {
		isTouchDevice() {
			return (
				'ontouchstart' in window ||
				navigator.maxTouchPoints > 0 ||
				(navigator as any).msMaxTouchPoints > 0
			);
		},
	},
});
</script>
