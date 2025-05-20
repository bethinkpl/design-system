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
				<slot name="chipAccessory" />
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
	background-color: $color-neutral-background;
	border-radius: $radius-m;
	position: relative;

	&.-ds-medium {
		padding: $space-s;

		& > .ds-well__chipContainer{
			right: $space-s;
		}
	}

	&.-ds-small {
		padding: $space-xs;

		& > .ds-well__chipContainer {
			right: $space-xs;
		}
	}

	&__chipContainer {
		position: absolute;
		top: -10px;
		right: 0;
	}
}
</style>

<script lang="ts" setup>
import { WELL_PADDINGS, WellPadding } from './Well.consts';
import Chip, { CHIP_DEFAULT_COLOR, CHIP_RADIUSES, ChipRadius, ChipColor } from '../Chip';
import { IconKey } from '../Icons/Icon';

const {
	padding = null,
	hasChip = false,
	chipLabel = null,
	chipLabelUppercase = false,
	chipLeftIcon = null,
	chipRadius = CHIP_RADIUSES.ROUNDED,
	chipColor = CHIP_DEFAULT_COLOR,
	chipColorHex = null,
} = defineProps<{
	padding?: WellPadding;
	hasChip?: boolean;
	chipLabel?: string;
	chipLabelUppercase?: boolean;
	chipLeftIcon?: IconKey;
	chipRadius?: ChipRadius;
	chipColor?: ChipColor;
	chipColorHex?: string;
}>();
</script>
