<template>
	<div class="ds-drawerListItem">
		<div class="ds-drawerListItem__label">{{ label }}</div>
		<ds-icon
			v-if="state === DRAWER_LIST_ITEM_STATES.LOADING"
			:icon="ICONS.FAD_SPINNER_THIRD"
			:size="ICON_SIZES.XX_SMALL"
			spinning
		/>
		<div v-else class="ds-drawerListItem__value">
			{{ valueText }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';

.ds-drawerListItem {
	align-items: center;
	color: $color-neutral-text-strong;
	display: flex;
	gap: $space-2xs;
	padding: $space-2xs 0;
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

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { DRAWER_LIST_ITEM_STATES, DrawerListItemState } from './DrawerListItem.consts';
import Icon, { ICON_SIZES, ICONS } from '../../Icons/Icon';

export default defineComponent({
	name: 'DrawerListItem',
	components: {
		DsIcon: Icon,
	},
	props: {
		state: {
			type: String as PropType<DrawerListItemState>,
			default: DRAWER_LIST_ITEM_STATES.DEFAULT,
			validator(state) {
				return Object.values(DRAWER_LIST_ITEM_STATES).includes(
					state as DrawerListItemState,
				);
			},
		},
		label: {
			type: String,
			required: true,
		},
		valueText: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			DRAWER_LIST_ITEM_STATES: Object.freeze(DRAWER_LIST_ITEM_STATES),
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
});
</script>
