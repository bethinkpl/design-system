<template>
	<div
		class="ds-outlineItem"
		:class="{
			'-ds-disabled': isDisabled,
			'-ds-medium': size === OUTLINE_ITEM_SIZES.MEDIUM,
			'-ds-selected': isSelected,
			'-ds-hoverable': !isSelected || isSelectedInteractive,
			'-ds-backgroundNeutral': backgroundColor === OUTLINE_ITEM_BACKGROUND_COLORS.NEUTRAL,
		}"
	>
		<div class="ds-outlineItem__content" :class="{ '-ds-centeredContent': $slots.default }">
			<span
				v-if="index !== null"
				class="ds-outlineItem__index"
				:class="{ '-ds-active': isSelected }"
			>
				{{ index }}.
			</span>
			<ds-icon
				v-if="iconLeft"
				class="ds-outlineItem__icon"
				:class="{
					'-ds-active': isSelected && hasSelectedIconsColorPrimary,
				}"
				:icon="iconLeft"
				:size="ICON_SIZES.X_SMALL"
			/>
			<span class="ds-outlineItem__text">
				<span class="ds-outlineItem__label" :class="{ '-ds-uppercase': isLabelUppercase }">
					<template v-if="$slots.labelSlot">
						<slot name="labelSlot" />
					</template>
					<template v-else>
						{{ label }}
					</template>
				</span>
				<span v-if="additionalText" class="ds-outlineItem__additionalText">
					{{ additionalText }}
				</span>
			</span>
		</div>
		<div
			v-if="$slots.default || isDone || iconRight"
			class="ds-outlineItem__rightContent"
			:class="{ '-ds-centeredContent': $slots.default }"
		>
			<template v-if="$slots.default">
				<slot />
			</template>
			<ds-icon
				v-if="isDone"
				class="ds-outlineItem__icon -ds-active"
				:icon="ICONS.FA_CHECK_SOLID"
				:size="ICON_SIZES.X_SMALL"
			/>
			<ds-icon
				v-else-if="iconRight"
				class="ds-outlineItem__icon"
				:class="{
					'-ds-active': isSelected && hasSelectedIconsColorPrimary,
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

.ds-outlineItem {
	$root: &;
	$border-width: 2px;

	background-color: $color-neutral-background-weak;
	border-radius: $radius-s;
	column-gap: $space-2xs;
	display: flex;
	justify-content: space-between;
	padding: $space-xs;

	&__rightContent,
	&__content {
		align-items: flex-start;
		column-gap: $space-2xs;
		display: flex;
		max-width: 100%;

		&.-ds-centeredContent {
			align-items: center;
		}
	}

	&__content {
		overflow-x: hidden;
	}

	&__index {
		@include label-l-default-bold;

		color: $color-neutral-text-weak;

		&.-ds-active {
			color: $color-primary-text;
		}
	}

	&__text {
		@include label-l-default-regular; //it fixes whole component height
	}

	&__label {
		@include label-l-default-regular;

		color: $color-neutral-text-heavy;

		&.-ds-uppercase {
			@include label-l-default-regular-uppercase;
		}
	}

	&__additionalText {
		@include label-m-default-bold;

		color: $color-neutral-text-weak;
		margin-left: $space-4xs;
	}

	&__icon {
		color: $color-neutral-icon-weak;

		&.-ds-active {
			color: $color-primary-icon;
		}
	}

	&.-ds-hoverable:hover {
		background-color: $color-neutral-background-weak-hovered;
		cursor: pointer;
	}

	&.-ds-selected {
		background-color: $color-neutral-background;
		border-left: $border-width solid $color-primary-border;
		border-radius: $radius-xs $radius-s $radius-s $radius-xs;
		padding-left: $space-xs - $border-width;
	}

	&.-ds-disabled {
		pointer-events: none;

		&.-ds-selected {
			border-left: $border-width solid $color-primary-border-disabled;
		}

		#{$root}__icon {
			color: $color-neutral-icon-weak-disabled;

			&.-ds-active {
				color: $color-primary-icon-disabled;
			}
		}

		#{$root}__index {
			color: $color-neutral-text-weak-disabled;

			&.-ds-active {
				color: $color-primary-text-disabled;
			}
		}

		#{$root}__label {
			color: $color-neutral-text-heavy-disabled;
		}
	}

	&.-ds-medium {
		padding: $space-s $space-xs;

		#{$root}__content {
			column-gap: $space-3xs;
		}

		#{$root}__label {
			@include label-l-default-bold;

			&.-ds-uppercase {
				@include label-l-default-bold-uppercase;
			}
		}

		&.-ds-selected {
			padding-left: $space-xs - $border-width;
		}
	}

	&.-ds-backgroundNeutral {
		background-color: $color-neutral-background;

		&.-ds-hoverable:hover {
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

export default {
	name: 'OutlineItem',
	components: {
		DsIcon,
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
