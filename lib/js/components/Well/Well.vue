<template>
	<div
		class="ds-well"
		:class="[colorClass, {
			'-ds-medium': WELL_PADDINGS.MEDIUM === padding,
			'-ds-small': WELL_PADDINGS.SMALL === padding,
		}]"
	>
		<div v-if="$slots.accessory" class="ds-well__accessorySlot">
			<slot name="accessory" />
		</div>

		<slot />
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/colors/tokens';

.ds-well {
	$root: &;

	border-radius: $radius-m;
	position: relative;

	&.-ds-default  { background-color: $color-default-background; }
	&.-ds-neutral  { background-color: $color-neutral-background; }
	&.-ds-info     { background-color: $color-info-background; }
	&.-ds-success  { background-color: $color-success-background; }
	&.-ds-warning  { background-color: $color-warning-background; }
	&.-ds-fail     { background-color: $color-fail-background; }
	&.-ds-danger   { background-color: $color-danger-background; }
	&.-ds-accent   { background-color: $color-accent-background; }

	&__accessorySlot {
		display: flex;
		gap: $space-4xs;
		position: absolute;
		right: 0;
		top: -10px;
	}

	&.-ds-medium {
		padding: $space-s;

		#{$root}__accessorySlot {
			right: $space-s;
		}
	}

	&.-ds-small {
		padding: $space-xs;

		#{$root}__accessorySlot {
			right: $space-xs;
		}
	}
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';
import { WELL_PADDINGS, WELL_COLORS, WELL_DEFAULT_COLOR, WellPadding, WellColor } from './Well.consts';

const {
	padding = null,
	color = WELL_DEFAULT_COLOR,
} = defineProps<{
	padding?: WellPadding | null;
	color?: WellColor;
}>();

const colorClass = computed(() => {
	const colorMap: Record<WellColor, string> = {
		[WELL_COLORS.DEFAULT]: '-ds-default',
		[WELL_COLORS.NEUTRAL]: '-ds-neutral',
		[WELL_COLORS.INFO]: '-ds-info',
		[WELL_COLORS.SUCCESS]: '-ds-success',
		[WELL_COLORS.WARNING]: '-ds-warning',
		[WELL_COLORS.FAIL]: '-ds-fail',
		[WELL_COLORS.DANGER]: '-ds-danger',
		[WELL_COLORS.ACCENT]: '-ds-accent',
	};
	return colorMap[color];
});
</script>
