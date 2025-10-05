<template>
	<div
		:class="[
			'ds-container-ribbon',
			`ds-container-ribbon--${size}`,
			`ds-container-ribbon--${color}`,
			`ds-container-ribbon--${layout}`,
		]"
	/>
</template>

<script setup lang="ts">
import {
	CONTAINER_RIBBON_COLORS,
	CONTAINER_RIBBON_LAYOUTS,
	CONTAINER_RIBBON_SIZES,
	type ContainerRibbonColor,
	type ContainerRibbonLayout,
	type ContainerRibbonSize,
} from './ContainerRibbon.consts';

export interface ContainerRibbonProps {
	size?: ContainerRibbonSize;
	color?: ContainerRibbonColor;
	layout?: ContainerRibbonLayout;
}

withDefaults(defineProps<ContainerRibbonProps>(), {
	size: CONTAINER_RIBBON_SIZES.LARGE,
	color: CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
	layout: CONTAINER_RIBBON_LAYOUTS.VERTICAL,
});
</script>

<style lang="scss" scoped>
.ds-container-ribbon {
	// Vertical layout styles
	&--vertical {
		height: auto;
		flex-shrink: 0;
		align-self: stretch; // Ensures ribbon stretches to container height

		&.ds-container-ribbon--small {
			width: 2px;
		}

		&.ds-container-ribbon--medium {
			width: 4px;
		}

		&.ds-container-ribbon--large {
			width: 6px;
		}
	}

	// Horizontal layout styles
	&--horizontal {
		width: 100%;
		flex-shrink: 0;

		&.ds-container-ribbon--small {
			height: 2px;
		}

		&.ds-container-ribbon--medium {
			height: 4px;
		}

		&.ds-container-ribbon--large {
			height: 6px;
		}
	}

	// Color variants
	&--neutralHeavy {
		background-color: var(--color-neutral-border-heavy);
	}

	&--neutralStrong {
		background-color: var(--color-neutral-border-strong);
	}

	&--primary {
		background-color: var(--color-primary-border);
	}

	&--success {
		background-color: var(--color-success-border);
	}

	&--warning {
		background-color: var(--color-warning-border);
	}

	&--danger {
		background-color: var(--color-danger-border);
	}

	&--fail {
		background-color: var(--color-fail-border);
	}

	&--info {
		background-color: var(--color-info-border);
	}

	&--transparent {
		background-color: transparent;
	}
}
</style>