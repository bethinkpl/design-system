<template>
	<div
		v-ripple
		class="selectListItem"
		:class="{ '-loading': isLoading, '-selected': isSelected, [`-${size}`]: true }"
	>
		<ds-icon
			v-if="iconLeft || isLoading"
			class="selectListItem__iconLeft"
			:icon="isLoading ? ICONS.FAD_SPINNER_THIRD : iconLeft"
			:size="ICON_SIZES.X_SMALL"
			:spinning="isLoading"
		/>
		<span class="selectListItem__text">{{ label }}</span>
		<ds-icon
			v-if="isSelected"
			class="selectListItem__iconRight"
			:icon="ICONS.FA_CHECK_SOLID"
			:size="ICON_SIZES.X_SMALL"
		/>
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
	cursor: pointer;
	display: flex;
	padding: $space-xs;

	&:focus {
		background-color: $color-neutral-background-ghost-focused;
	}

	&:hover {
		background-color: $color-neutral-background-ghost-hovered;
	}

	&.-selected {
		background-color: $color-neutral-background;

		&:focus {
			background-color: $color-neutral-background-focused;
		}

		&:hover {
			background-color: $color-neutral-background-hovered;
		}
	}

	&.-medium {
		@include label-xl-default-regular;
	}

	&.-loading {
		pointer-events: none;
	}

	&::v-deep .ripple {
		background-color: $color-neutral-ripple !important;
	}

	&__iconLeft {
		color: $color-neutral-icon-strong;
		margin-right: $space-xxxs;
	}

	&__iconRight {
		color: $color-primary-icon;
		margin-left: $space-xxxs;
	}

	&__text {
		flex-grow: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
</style>

<script lang="ts">
import Ripple from 'vue-ripple-directive';

import { SELECT_LIST_ITEM_STATES, SELECT_LIST_ITEM_SIZES } from './SelectListItem.consts';
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
			default: SELECT_LIST_ITEM_SIZES.SMALL,
			validator(size) {
				return Object.values(SELECT_LIST_ITEM_SIZES).includes(size);
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
