<template>
	<div
		class="selectListItem"
		:class="{
			'-disabled': isDisabled,
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

		<span class="selectListItem__textWrapper">
			<span
				v-if="eyebrowText"
				class="selectListItem__eyebrowText"
				:class="{ '-uppercase': isEyebrowTextUppercase }"
				>{{ eyebrowText }}</span
			>
			<span class="selectListItem__text">{{ label }}</span>
		</span>

		<ds-icon
			v-if="isSelected"
			class="selectListItem__iconRight"
			:icon="ICONS.FA_CHECK_SOLID"
			:size="ICON_SIZES.XX_SMALL"
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

	&.-loading,
	&.-disabled {
		pointer-events: none;
	}

	&.-selected {
		background-color: $color-neutral-background;

		&.-disabled {
			background-color: $color-neutral-background-disabled;
		}

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

	&__textWrapper {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		gap: $space-xxxxxs;
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

		&.-uppercase {
			@include info-s-extensive-bold-uppercase;
		}
	}

	&.-disabled {
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
			color: $color-neutral-text-weak;
		}
	}
}
</style>

<script lang="ts">
import {
	SELECT_LIST_ITEM_SELECTION_MODE,
	SELECT_LIST_ITEM_SIZES,
	SELECT_LIST_ITEM_STATES,
} from './SelectListItem.consts';
import DsIcon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
import { toRaw } from 'vue';

export default {
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
		isDisabled(): boolean {
			return this.state === SELECT_LIST_ITEM_STATES.DISABLED;
		},
	},
};
</script>
