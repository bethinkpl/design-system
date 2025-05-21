<template>
	<div
		class="ds-well"
		:class="{
			'-ds-medium': WELL_PADDINGS.MEDIUM === padding,
			'-ds-small': WELL_PADDINGS.SMALL === padding,
		}"
	>
		<div v-if="hasChip" class="ds-well__chipContainer">
			<chip
				:label="chipLabel"
				:is-label-uppercase="chipLabelUppercase"
				:left-icon="chipLeftIcon"
				:radius="chipRadius"
				:color="chipColor"
				:color-hex="chipColorHex"
			>
				<template v-if="$slots.chipAccessory" #accessory>
					<slot name="chipAccessory" />
				</template>
			</chip>
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

	background-color: $color-neutral-background;
	border-radius: $radius-m;
	position: relative;

	&__chipContainer {
		display: flex;
		position: absolute;
		right: 0;
		top: -10px;
	}

	&.-ds-medium {
		padding: $space-s;

		#{$root}__chipContainer {
			right: $space-s;
		}
	}

	&.-ds-small {
		padding: $space-xs;

		#{$root}__chipContainer {
			right: $space-xs;
		}
	}
}
</style>

<script lang="ts" setup>
import { WELL_PADDINGS, WellPadding } from './Well.consts';
import Chip, { CHIP_DEFAULT_COLOR, CHIP_RADIUSES, ChipRadius, ChipColor } from '../Chip';
import { IconItem } from '../Icons/Icon';

const {
	padding = null,
	hasChip = false,
	chipLabel,
	chipLabelUppercase = false,
	chipLeftIcon = null,
	chipRadius = CHIP_RADIUSES.ROUNDED,
	chipColor = CHIP_DEFAULT_COLOR,
	chipColorHex,
} = defineProps<{
	padding?: WellPadding;
	hasChip?: boolean;
	chipLabel?: string;
	chipLabelUppercase?: boolean;
	chipLeftIcon?: IconItem;
	chipRadius?: ChipRadius;
	chipColor?: ChipColor;
	chipColorHex?: string;
}>();
</script>
