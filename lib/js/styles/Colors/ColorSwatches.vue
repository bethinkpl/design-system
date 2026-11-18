<template>
	<div class="ds-colorSwatches">
		<section v-for="group in groups" :key="group.title" class="ds-colorSwatches__group">
			<h2 class="ds-colorSwatches__title">{{ group.title }}</h2>
			<div v-for="item in group.items" :key="item.name" class="ds-colorSwatches__item">
				<span class="ds-colorSwatches__tile">
					<span
						class="ds-colorSwatches__fill"
						:style="{ background: `var(--${item.name})` }"
					/>
				</span>
				<code class="ds-colorSwatches__name">--{{ item.name }}</code>
				<code class="ds-colorSwatches__value">{{ item.value }}</code>
				<code class="ds-colorSwatches__computed">{{ computedValues[item.name] }}</code>
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/spacings';

.ds-colorSwatches {
	background: $color-page-background;
	color: $color-default-text;
	padding: $space-4;

	&__group {
		margin-bottom: $space-8;
	}

	&__title {
		margin: 0 0 $space-2;
		text-transform: capitalize;
	}

	// mobile: tile on the left, name / value / computed stacked next to it
	&__item {
		align-items: center;
		column-gap: $space-2;
		display: grid;
		font-size: 12px;
		grid-template-columns: 48px minmax(0, 1fr);
		padding: $space-2 0;

		@media #{breakpoint-l()} {
			font-size: inherit;
			gap: $space-2;
			grid-template-columns: 48px minmax(0, 3fr) minmax(0, 3fr) minmax(0, 2fr);
			padding: $space-1 0;
		}
	}

	&__tile {
		align-self: start;
		// checkerboard reveals transparency of alpha colors
		background: repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 50% / 12px 12px;
		border: 1px solid $color-neutral-border;
		border-radius: $radius-xs;
		grid-row: 1 / span 3;
		height: 32px;
		overflow: hidden;
		width: 48px;

		@media #{breakpoint-l()} {
			align-self: auto;
			grid-row: auto;
		}
	}

	&__name,
	&__value,
	&__computed {
		overflow-wrap: anywhere;
	}

	&__fill {
		display: block;
		height: 100%;
		width: 100%;
	}

	&__value,
	&__computed {
		color: $color-neutral-text-weak;
	}

	&__value:empty {
		display: none;

		@media #{breakpoint-l()} {
			display: block;
		}
	}
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { ColorSwatchGroup } from './ColorSwatches.types';
import { useOnStorybookThemeChange } from '../useOnStorybookThemeChange';

const { groups } = defineProps<{
	groups: Array<ColorSwatchGroup>;
}>();

const { computedValues } = useComputedValues();

function useComputedValues() {
	const computedValues = ref<Record<string, string>>({});

	function readComputedValues(): void {
		const style = getComputedStyle(document.documentElement);
		computedValues.value = Object.fromEntries(
			groups
				.flatMap((group) => group.items)
				.map(({ name }) => [name, style.getPropertyValue(`--${name}`).trim()]),
		);
	}

	useOnStorybookThemeChange(readComputedValues);

	return { computedValues };
}
</script>
