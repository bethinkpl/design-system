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
	}

	&.-ds-small {
		padding: $space-xs;
	}

	&__chipContainer {
		position: absolute;
		right: 16px;
		top: -10px;
	}
}
</style>

<script lang="ts" setup>
import { WELL_PADDINGS } from './Well.consts';
import Chip, { CHIP_COLORS, CHIP_DEFAULT_COLOR, CHIP_RADIUSES } from '../Chip/index.ts';
import { ICONS } from '../Icons/Icon';
import type { Value } from '../../utils/type.utils';

type Padding = keyof typeof WELL_PADDINGS;
type IconItem = keyof typeof ICONS;

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
	padding?: Padding;
	hasChip?: boolean;
	chipLabel?: string;
	chipLabelUppercase?: boolean;
	chipLeftIcon?: IconItem;
	chipRadius?: Value<typeof CHIP_RADIUSES>;
	chipColor?: Value<typeof CHIP_COLORS>;
	chipColorHex?: string;
}>();
</script>
