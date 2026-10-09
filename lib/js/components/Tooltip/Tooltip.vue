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
@import '../../../styles/settings/media-queries';

.ds-tooltip-text {
	@include text-s-compact-bold;
}

.ds-tooltip-arrow-hide {
	display: none;
}

.ds-tooltip-hide-on-mobile {
	display: none !important;

	@media #{breakpoint-l()} {
		display: inline-block !important;
	}
}
</style>

<script lang="ts">
import {
	TOOLTIP_MAX_WIDTH_PX,
	TOOLTIP_PLACEMENTS,
	TOOLTIP_VIEWPORT_MARGIN_PX,
	TooltipPlacement,
} from './Tooltip.consts';
import { getTooltipArrowOffset, getTooltipViewportFitShift } from './Tooltip.utils';
import { defineComponent, markRaw, PropType } from 'vue';
import { isTouchDevice } from '../../utils/device';

/** Element, na którym PrimeVue trzyma id wyrenderowanego tooltipa. */
type TooltipHost = HTMLElement & { $_ptooltipId?: string | null };

const CENTERED_POSITIONS = [TOOLTIP_PLACEMENTS.TOP, TOOLTIP_PLACEMENTS.BOTTOM] as Array<string>;

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
		isHiddenOnMobile: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			tooltipObserver: null as MutationObserver | null,
		};
	},
	computed: {
		tooltipParams() {
			return {
				position: this.placement,
				event: isTouchDevice() ? 'focus' : 'hover',
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
					maxWidth: `min(${TOOLTIP_MAX_WIDTH_PX}px, calc(100vw - ${
						TOOLTIP_VIEWPORT_MARGIN_PX * 2
					}px))`,
				},
				class: this.isHiddenOnMobile ? 'ds-tooltip-hide-on-mobile' : null,
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
	mounted() {
		const host = this.$el as TooltipHost;

		host.addEventListener('mouseenter', this.observeTooltip);
		host.addEventListener('focus', this.observeTooltip);
		host.addEventListener('mouseleave', this.stopObservingTooltip);
		host.addEventListener('blur', this.stopObservingTooltip);
	},
	beforeUnmount() {
		const host = this.$el as TooltipHost;

		host.removeEventListener('mouseenter', this.observeTooltip);
		host.removeEventListener('focus', this.observeTooltip);
		host.removeEventListener('mouseleave', this.stopObservingTooltip);
		host.removeEventListener('blur', this.stopObservingTooltip);
		this.stopObservingTooltip();
	},
	methods: {
		observeTooltip() {
			this.stopObservingTooltip();

			const host = this.$el as TooltipHost;
			const observer = new MutationObserver(() => {
				const tooltipElement = host.$_ptooltipId
					? document.getElementById(host.$_ptooltipId)
					: null;

				if (!tooltipElement) {
					return;
				}

				this.stopObservingTooltip();
				this.fitTooltipIntoViewport(tooltipElement);
			});

			observer.observe(document.body, { childList: true });
			this.tooltipObserver = markRaw(observer);
		},
		stopObservingTooltip() {
			this.tooltipObserver?.disconnect();
			this.tooltipObserver = null;
		},
		fitTooltipIntoViewport(tooltipElement: HTMLElement) {
			const centeredLeft = tooltipElement.getBoundingClientRect().left;
			const inlineLeft = parseFloat(tooltipElement.style.left);
			const scrollOffset = inlineLeft - centeredLeft;

			tooltipElement.style.left = `${TOOLTIP_VIEWPORT_MARGIN_PX + scrollOffset}px`;
			const width = tooltipElement.getBoundingClientRect().width;

			const shift = getTooltipViewportFitShift(
				centeredLeft,
				width,
				document.documentElement.clientWidth,
			);
			tooltipElement.style.left = `${inlineLeft + shift}px`;

			const position = tooltipElement.getAttribute('data-p-position') ?? '';
			const arrow = tooltipElement.querySelector<HTMLElement>('[data-pc-section="arrow"]');

			if (arrow && CENTERED_POSITIONS.includes(position)) {
				arrow.style.left = `${getTooltipArrowOffset(width, shift)}px`;
			}
		},
	},
});
</script>
