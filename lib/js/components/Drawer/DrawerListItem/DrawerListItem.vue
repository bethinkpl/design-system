<template>
	<div class="drawerListItem">
		<div class="drawerListItem__label">{{ label }}</div>
		<ds-icon
			v-if="state === DRAWER_LIST_ITEM_STATES.LOADING"
			:icon="ICONS.FAD_SPINNER_THIRD"
			:size="ICON_SIZES.XX_SMALL"
			spinning
		/>
		<div v-else class="drawerListItem__value">
			{{ valueText }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';

.drawerListItem {
	align-items: center;
	color: $color-neutral-text-strong;
	display: flex;
	gap: $space-xxs;
	padding: $space-xxs 0;
	width: 100%;

	&__label {
		@include label-m-default-regular;

		overflow: hidden;
		overflow-wrap: break-word;
		width: 100%;
	}

	&__value {
		@include info-m-default-bold;
	}
}
</style>

<script lang="ts">
import { PropType } from 'vue';

import { DRAWER_LIST_ITEM_STATES, DrawerListItemState } from './DrawerListItem.consts';
import Icon, { ICONS, ICON_SIZES } from '../../Icons/Icon';

export default {
	name: 'DrawerListItem',
	components: {
		DsIcon: Icon,
	},
	props: {
		state: {
			type: String as PropType<DrawerListItemState>,
			default: DRAWER_LIST_ITEM_STATES.DEFAULT,
			validator(state) {
				return Object.values(DRAWER_LIST_ITEM_STATES).includes(state);
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
};
</script>
