<template>
	<div class="ds-labelValueItem" :class="{ '-ds-large': size === LABEL_VALUE_ITEM_SIZES.LARGE }">
		<div class="ds-labelValueItem__label" :class="{ '-ds-strong': isLabelStrong }">
			{{ label }}
		</div>
		<ds-icon
			v-if="state === LABEL_VALUE_ITEM_STATES.LOADING"
			:icon="ICONS.FAD_SPINNER_THIRD"
			:size="ICON_SIZES.XX_SMALL"
			spinning
		/>
		<div
			v-else
			class="ds-labelValueItem__value"
			:class="{
				'-ds-color-primary': valueColor === LABEL_VALUE_ITEM_VALUE_COLORS.PRIMARY,
			}"
		>
			{{ valueText }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';

.ds-labelValueItem {
	align-items: center;
	color: $color-neutral-text-strong;
	display: flex;
	gap: $space-4;
	padding: $space-4 0;
	width: 100%;

	&__label {
		@include label-m-default-regular;

		flex-shrink: 1;
		overflow: hidden;
		overflow-wrap: break-word;
		width: 100%;

		&.-ds-strong {
			@include label-m-default-bold;
		}
	}

	&__value {
		@include info-m-default-bold;

		flex-shrink: 0;
		max-width: 50%;

		&.-ds-color-primary {
			color: $color-primary-text-strong;
		}
	}

	&.-ds-large {
		.ds-labelValueItem__label {
			@include label-l-default-regular;

			&.-ds-strong {
				@include label-l-default-bold;
			}
		}

		.ds-labelValueItem__value {
			@include info-l-default-bold;
		}
	}
}
</style>

<script setup lang="ts">
import {
	LABEL_VALUE_ITEM_SIZES,
	LABEL_VALUE_ITEM_STATES,
	LABEL_VALUE_ITEM_VALUE_COLORS,
	LabelValueItemSize,
	LabelValueItemState,
	LabelValueItemValueColor,
} from './LabelValueItem.consts';
import DsIcon, { ICON_SIZES, ICONS } from '../../Icons/Icon';

const {
	state = LABEL_VALUE_ITEM_STATES.DEFAULT,
	size = LABEL_VALUE_ITEM_SIZES.MEDIUM,
	isLabelStrong = false,
	valueColor = LABEL_VALUE_ITEM_VALUE_COLORS.NEUTRAL,
} = defineProps<{
	state?: LabelValueItemState;
	label: string;
	valueText: string;
	size?: LabelValueItemSize;
	isLabelStrong?: boolean;
	valueColor?: LabelValueItemValueColor;
}>();
</script>
