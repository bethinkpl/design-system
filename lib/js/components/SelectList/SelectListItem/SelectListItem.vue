<template>
	<div
		class="ds-selectListItem"
		:class="{
			'-ds-disabled': isDisabled,
			'-ds-loading': isLoading,
			'-ds-selected': isSelected,
			[`-ds-${size}`]: true,
			[`-ds-${selectionMode}`]: true,
		}"
		:title="label"
	>
		<ds-icon
			v-if="iconLeft || isLoading"
			class="ds-selectListItem__iconLeft"
			:icon="isLoading ? ICONS.FAD_SPINNER_THIRD : iconLeft"
			:size="ICON_SIZES.X_SMALL"
			:spinning="isLoading"
		/>

		<span class="ds-selectListItem__textWrapper">
			<span
				v-if="eyebrowText"
				class="ds-selectListItem__eyebrowText"
				:class="{ '-ds-uppercase': isEyebrowTextUppercase }"
				>{{ eyebrowText }}</span
			>
			<span class="ds-selectListItem__text">{{ label }}</span>
		</span>

		<ds-icon
			v-if="isSelected"
			class="ds-selectListItem__iconRight"
			:icon="ICONS.FA_CHECK_SOLID"
			:size="ICON_SIZES.XX_SMALL"
		/>
		<div v-else class="ds-selectListItem__placeholderRight" />
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/icons';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/spacings';

.ds-selectListItem {
	$self: &;
	$minHeight: 40px;

	@include label-l-default-regular;

	background-color: $color-neutral-background-ghost;
	color: $color-neutral-text-heavy;
	cursor: pointer;
	display: flex;
	min-height: $minHeight;
	padding: $space-xs;

	&:focus {
		background-color: $color-neutral-background-ghost-focused;
	}

	&:hover {
		background-color: $color-neutral-background-ghost-hovered;
	}

	&.-ds-loading,
	&.-ds-disabled {
		pointer-events: none;
	}

	&.-ds-selected {
		background-color: $color-neutral-background;

		&.-ds-disabled {
			background-color: $color-neutral-background-disabled;
		}

		&:focus {
			background-color: $color-neutral-background-focused;
		}

		&:hover {
			background-color: $color-neutral-background-hovered;
		}

		&.-ds-selectOnly {
			pointer-events: none;
		}
	}

	&.-ds-xSmall {
		@include label-m-default-regular;
	}

	&.-ds-medium {
		@include label-xl-default-regular;
	}

	&__iconLeft {
		color: $color-neutral-icon;
		margin-right: $space-3xs;
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

	&__textWrapper {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		gap: $space-5xs;
		overflow: hidden;
		white-space: nowrap;
	}

	&__text {
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&__eyebrowText {
		@include info-s-default-bold;

		color: $color-neutral-text-weak;
		overflow: hidden;
		text-overflow: ellipsis;

		&.-ds-uppercase {
			@include info-s-extensive-bold-uppercase;
		}
	}

	&.-ds-disabled {
		#{$self}__iconLeft {
			color: $color-neutral-icon-disabled;
		}

		#{$self}__iconRight {
			color: $color-primary-icon-disabled;
		}

		#{$self}__text {
			color: $color-neutral-text-heavy-disabled;
		}

		#{$self}__eyebrowText {
			color: $color-neutral-text-weak-disabled;
		}
	}
}
</style>

<script lang="ts">
import {
	SELECT_LIST_ITEM_SELECTION_MODE,
	SELECT_LIST_ITEM_SIZES,
	SELECT_LIST_ITEM_STATES,
	SelectListItemSelectionMode,
	SelectListItemSize,
	SelectListItemState,
} from './SelectListItem.consts';
import DsIcon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
import { defineComponent, toRaw } from 'vue';

export default defineComponent({
	name: 'SelectListItem',
	components: {
		DsIcon,
	},
	props: {
		iconLeft: {
			type: Object,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
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
		eyebrowText: {
			type: String,
			default: '',
		},
		isEyebrowTextUppercase: {
			type: Boolean,
			default: false,
		},
		selectionMode: {
			type: String,
			default: SELECT_LIST_ITEM_SELECTION_MODE.SELECT_ONLY,
			validator(selectionMode) {
				return Object.values(SELECT_LIST_ITEM_SELECTION_MODE).includes(
					selectionMode as SelectListItemSelectionMode,
				);
			},
		},
		size: {
			type: String,
			default: SELECT_LIST_ITEM_SIZES.SMALL,
			validator(size) {
				return Object.values(SELECT_LIST_ITEM_SIZES).includes(size as SelectListItemSize);
			},
		},
		state: {
			type: String,
			default: SELECT_LIST_ITEM_STATES.DEFAULT,
			validator(state) {
				return Object.values(SELECT_LIST_ITEM_STATES).includes(
					state as SelectListItemState,
				);
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
		isDisabled(): boolean {
			return this.state === SELECT_LIST_ITEM_STATES.DISABLED;
		},
	},
});
</script>
