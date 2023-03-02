<template>
	<div
		v-ripple
		class="selectListItem"
		:class="{
			'-loading': isLoading,
			'-selected': isSelected,
			[`-${size}`]: true,
			[`-${selectionMode}`]: true,
		}"
		:title="label"
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
		<div v-else class="selectListItem__placeholderRight" />
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/icons';
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

	&.-loading {
		pointer-events: none;
	}

	&.-selected {
		background-color: $color-neutral-background;

		&:focus {
			background-color: $color-neutral-background-focused;
		}

		&:hover {
			background-color: $color-neutral-background-hovered;
		}

		&.-selectOnly {
			pointer-events: none;
		}
	}

	&.-xSmall {
		@include label-m-default-regular;
	}

	&.-medium {
		@include label-xl-default-regular;
	}

	&::v-deep .ripple {
		background-color: $color-neutral-ripple !important;
	}

	&__iconLeft {
		color: $color-neutral-icon;
		margin-right: $space-xxxs;
	}

	&__iconRight {
		color: $color-primary-icon;
		margin-left: $space-xs;
	}

	&__placeholderRight {
		flex-shrink: 0;
		margin-left: $space-xs;
		width: $icon-xs;
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

import {
	SELECT_LIST_ITEM_STATES,
	SELECT_LIST_ITEM_SIZES,
	SELECT_LIST_ITEM_SELECTION_MODE,
} from './SelectListItem.consts';
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
		selectionMode: {
			type: String,
			default: SELECT_LIST_ITEM_SELECTION_MODE.SELECT_ONLY,
			validator(selectionMode) {
				return Object.values(SELECT_LIST_ITEM_SELECTION_MODE).includes(selectionMode);
			},
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
			SELECT_LIST_ITEM_SELECTION_MODE: Object.freeze(SELECT_LIST_ITEM_SELECTION_MODE),
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
