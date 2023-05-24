<template>
	<div
		v-ripple:disabled="isSelected && !isSelectedInteractive"
		class="outlineItem"
		:class="{
			'-disabled': isDisabled,
			'-medium': size === OUTLINE_ITEM_SIZES.MEDIUM,
			'-selected': isSelected,
			'-hoverable': !isSelected || isSelectedInteractive,
			'-backgroundNeutral': backgroundColor === OUTLINE_ITEM_BACKGROUND_COLORS.NEUTRAL,
		}"
	>
		<div class="outlineItem__content">
			<span
				v-if="index !== null"
				class="outlineItem__index"
				:class="{ '-active': isSelected }"
			>
				{{ index }}.
			</span>
			<ds-icon
				v-if="iconLeft"
				class="outlineItem__icon"
				:class="{
					'-active': isSelected && hasSelectedIconsColorPrimary,
				}"
				:icon="iconLeft"
				:size="ICON_SIZES.X_SMALL"
			/>
			<span class="outlineItem__text">
				<span class="outlineItem__label" :class="{ '-uppercase': isLabelUppercase }">
					{{ label }}
				</span>
				<span v-if="additionalText" class="outlineItem__additionalText">
					{{ additionalText }}
				</span>
			</span>
		</div>
		<div class="outlineItem__rightContent">
			<template v-if="$slots.default"><slot /></template>
			<ds-icon
				v-if="isDone"
				class="outlineItem__icon -active"
				:icon="ICONS.FA_CHECK_SOLID"
				:size="ICON_SIZES.X_SMALL"
			/>
			<ds-icon
				v-else-if="iconRight"
				class="outlineItem__icon"
				:class="{
					'-active': isSelected && hasSelectedIconsColorPrimary,
				}"
				:icon="iconRight"
				:size="ICON_SIZES.X_SMALL"
				:rotation="iconRightRotation"
			></ds-icon>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.outlineItem {
	$root: &;
	$border-width: 2px;

	background-color: $color-neutral-background-weak;
	border-radius: $radius-s;
	column-gap: $space-xxs;
	display: flex;
	justify-content: space-between;
	padding: $space-xs;

	&__rightContent,
	&__content {
		align-items: center;
		column-gap: $space-xxs;
		display: inline-flex;
	}

	&__index {
		@include label-l-default-bold;

		align-self: flex-start;
		color: $color-neutral-text-weak;

		&.-active {
			color: $color-primary-text;
		}
	}

	&__text {
		align-items: flex-end;
		display: flex;
	}

	&__label {
		@include label-l-default-regular;

		color: $color-neutral-text-heavy;

		&.-uppercase {
			@include label-l-default-regular-uppercase;
		}
	}

	&__additionalText {
		@include label-m-default-bold;

		color: $color-neutral-text-weak;
		margin-left: $space-xxxxs;
	}

	&__icon {
		align-self: flex-start;
		color: $color-neutral-icon-weak;

		&.-active {
			color: $color-primary-icon;
		}
	}

	&.-hoverable:hover {
		background-color: $color-neutral-background-weak-hovered;
		cursor: pointer;
	}

	&.-selected {
		background-color: $color-neutral-background;
		border-left: $border-width solid $color-primary-border;
		border-radius: $radius-xs $radius-s $radius-s $radius-xs;
		padding-left: $space-xs - $border-width;
	}

	&.-disabled {
		pointer-events: none;

		&.-selected {
			border-left: $border-width solid $color-primary-border-disabled;
		}

		#{$root}__icon {
			color: $color-neutral-icon-weak-disabled;

			&.-active {
				color: $color-primary-icon-disabled;
			}
		}

		#{$root}__index {
			color: $color-neutral-text-weak-disabled;

			&.-active {
				color: $color-primary-text-disabled;
			}
		}

		#{$root}__label {
			color: $color-neutral-text-heavy-disabled;
		}
	}

	&.-medium {
		padding: $space-s $space-xs;

		#{$root}__content {
			column-gap: $space-xxxs;
		}

		#{$root}__label {
			@include label-l-default-bold;

			&.-uppercase {
				@include label-l-default-bold-uppercase;
			}
		}
	}

	&.-backgroundNeutral {
		background-color: $color-neutral-background;

		&.-hoverable:hover {
			background-color: $color-neutral-background-hovered;
		}
	}
}
</style>

<script lang="ts">
import DsIcon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
import { toRaw } from 'vue';
import {
	OUTLINE_ITEM_BACKGROUND_COLORS,
	OUTLINE_ITEM_SIZES,
	OUTLINE_ITEM_STATES,
} from './OutlineItem.consts';
import Ripple from 'vue-ripple-directive';

export default {
	name: 'OutlineItem',
	components: {
		DsIcon,
	},
	directives: {
		ripple: Ripple,
	},
	props: {
		size: {
			type: String,
			default: OUTLINE_ITEM_SIZES.SMALL,
			validator(size) {
				return Object.values(OUTLINE_ITEM_SIZES).includes(size);
			},
		},
		backgroundColor: {
			type: String,
			default: OUTLINE_ITEM_BACKGROUND_COLORS.NEUTRAL_WEAK,
			validator(color) {
				return Object.values(OUTLINE_ITEM_BACKGROUND_COLORS).includes(color);
			},
		},
		iconLeft: {
			type: Object,
			default: null,
			validator(icon) {
				return icon == null || Object.values(ICONS).includes(toRaw(icon));
			},
		},
		iconRight: {
			type: Object,
			default: null,
			validator(icon) {
				return icon == null || Object.values(ICONS).includes(toRaw(icon));
			},
		},
		iconRightRotation: {
			type: Number,
			default: null,
			validator(value: number) {
				return [90, 180, 270].includes(value);
			},
		},
		index: {
			type: Number,
			default: null,
		},
		label: {
			type: String,
			required: true,
		},
		isLabelUppercase: {
			type: Boolean,
			default: false,
		},
		additionalText: {
			type: String,
			default: null,
		},
		state: {
			type: String,
			default: OUTLINE_ITEM_STATES.DEFAULT,
			validator(state) {
				return Object.values(OUTLINE_ITEM_STATES).includes(state);
			},
		},
		isSelected: {
			type: Boolean,
			default: false,
		},
		isDone: {
			type: Boolean,
			default: false,
		},
		hasSelectedIconsColorPrimary: {
			type: Boolean,
			default: true,
		},
		isSelectedInteractive: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			OUTLINE_ITEM_BACKGROUND_COLORS: Object.freeze(OUTLINE_ITEM_BACKGROUND_COLORS),
			OUTLINE_ITEM_SIZES: Object.freeze(OUTLINE_ITEM_SIZES),
		};
	},
	computed: {
		isDisabled() {
			return this.state === OUTLINE_ITEM_STATES.DISABLED;
		},
	},
};
</script>
