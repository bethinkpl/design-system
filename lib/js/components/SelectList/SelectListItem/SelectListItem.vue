<template>
	<div v-ripple class="selectListItem" :class="{ '-selected': isSelected, [`-${size}`]: true }">
		<ds-icon
			v-if="iconLeft || isLoading"
			class="selectListItem__icon"
			:icon="isLoading ? ICONS.FAD_SPINNER_THIRD : iconLeft"
			:size="ICON_SIZES.X_SMALL"
			:spinning="isLoading"
		/>
		<span class="selectListItem__text">{{ label }}</span>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/spacings';

.selectListItem {
	@include label-l-default-regular;

	background-color: $color-neutral-background-ghost;
	color: $color-neutral-text-heavy;
	display: flex;
	padding: $space-xs;
	pointer-events: none;

	&.-selected {
		background-color: $color-neutral-background;
	}

	&.-medium {
		@include label-xl-default-regular;
	}

	&:not(.-selected) {
		cursor: pointer;
		pointer-events: auto;

		&:focus {
			background-color: $color-neutral-background-ghost-focused;
		}

		&:hover {
			background-color: $color-neutral-background-ghost-hovered;
		}
	}

	&::v-deep .ripple {
		background-color: $color-neutral-ripple !important;
	}

	&__icon {
		color: $color-neutral-icon-strong;
		margin-right: $space-xxxs;
	}

	&__text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
</style>

<script lang="ts">
import Ripple from 'vue-ripple-directive';

import { SELECT_LIST_ITEM_STATES, SELECT_LIST_SIZES } from '../SelectList.consts';
import DsIcon, { ICON_SIZES, ICONS } from '../../Icons/Icon';

export default {
	name: 'SelectListItem',
	components: {
		DsIcon,
	},
	directives: {
		ripple: Ripple,
	},
	props: {
		iconLeft: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(icon);
			},
		},
		isSelected: {
			type: Boolean,
			default: false,
		},
		label: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			default: SELECT_LIST_SIZES.SMALL,
			validator(size) {
				return Object.values(SELECT_LIST_SIZES).includes(size);
			},
		},
		state: {
			type: String,
			default: SELECT_LIST_ITEM_STATES.DEFAULT,
			validator(state) {
				return Object.values(SELECT_LIST_ITEM_STATES).includes(state);
			},
		},
	},
	data() {
		return {
			ICON_SIZES: Object.freeze(ICON_SIZES),
			ICONS: Object.freeze(ICONS),
			SELECT_LIST_ITEM_STATES: Object.freeze(SELECT_LIST_ITEM_STATES),
		};
	},
	computed: {
		isLoading(): boolean {
			return this.state === SELECT_LIST_ITEM_STATES.LOADING;
		},
	},
};
</script>
