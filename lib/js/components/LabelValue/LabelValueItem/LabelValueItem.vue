<template>
	<div class="ds-labelValueItem">
		<div class="ds-labelValueItem__label">{{ label }}</div>
		<ds-icon
			v-if="state === LABEL_VALUE_ITEM_STATES.LOADING"
			:icon="ICONS.FAD_SPINNER_THIRD"
			:size="ICON_SIZES.XX_SMALL"
			spinning
		/>
		<div v-else class="ds-labelValueItem__value">
			{{ valueText }}
		</div>
	</div>
</template>

<script setup lang="ts">
import { LABEL_VALUE_ITEM_STATES, LabelValueItemState } from './LabelValueItem.consts';
import DsIcon, { ICON_SIZES, ICONS } from '../../Icons/Icon';

const { state = LABEL_VALUE_ITEM_STATES.DEFAULT } = defineProps<{
	state?: LabelValueItemState;
	label: string;
	valueText: string;
}>();
</script>

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
	}

	&__value {
		@include info-m-default-bold;

		flex-shrink: 0;
		max-width: 50%;
	}
}
</style>
