<template>
	<component
		:is="as"
		:class="[
			'ds-menuItem',
			levelClass,
			{
				'-ds-disabled': isDisabled,
				'-ds-medium': props.size === MENU_ITEM_SIZES.MEDIUM,
				'-ds-selected': props.isSelected,
				'-ds-hoverable': !props.isSelected || props.isSelectedInteractive,
				'-ds-backgroundNeutral':
					props.backgroundColor === MENU_ITEM_BACKGROUND_COLORS.NEUTRAL,
			},
		]"
	>
		<div class="ds-menuItem__content" :class="{ '-ds-centeredContent': $slots.default }">
			<ds-icon
				v-if="accessoryState === MENU_ITEM_ACCESSORY_STATES.DOT"
				class="ds-menuItem__accessory"
				:icon="ICONS.FA_DOT_SOLID"
				:size="ICON_SIZES.XXX_SMALL"
			/>
			<span
				v-if="props.index !== null"
				class="ds-menuItem__index"
				:class="{ '-ds-active': props.isSelected }"
			>
				{{ props.index }}.
			</span>
			<ds-icon
				v-if="props.iconLeft"
				class="ds-menuItem__icon"
				:class="{
					'-ds-active': props.isSelected && props.hasSelectedIconsColorPrimary,
				}"
				:icon="props.iconLeft"
				:size="ICON_SIZES.X_SMALL"
			/>
			<span class="ds-menuItem__text">
				<span
					class="ds-menuItem__label"
					:class="{ '-ds-uppercase': props.isLabelUppercase }"
				>
					<template v-if="$slots.labelSlot">
						<slot name="labelSlot" />
					</template>
					<template v-else>
						{{ props.label }}
					</template>
				</span>
				<span v-if="props.additionalText" class="ds-menuItem__additionalText">
					{{ props.additionalText }}
				</span>
			</span>
		</div>
		<div
			v-if="$slots.default || props.isDone || props.iconRight"
			class="ds-menuItem__rightContent"
			:class="{ '-ds-centeredContent': $slots.default }"
		>
			<template v-if="$slots.default">
				<slot />
			</template>
			<ds-icon
				v-if="props.isDone"
				class="ds-menuItem__icon -ds-active"
				:icon="ICONS.FA_CHECK_SOLID"
				:size="ICON_SIZES.X_SMALL"
			/>
			<ds-icon
				v-else-if="props.iconRight"
				class="ds-menuItem__icon"
				:class="{
					'-ds-active': props.isSelected && props.hasSelectedIconsColorPrimary,
				}"
				:icon="props.iconRight"
				:size="ICON_SIZES.X_SMALL"
				:rotation="props.iconRightRotation"
			></ds-icon>
		</div>
	</component>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.ds-menuItem {
	$root: &;

	background-color: $color-neutral-background-weak;
	border-radius: $radius-s;
	column-gap: $space-2xs;
	display: flex;
	justify-content: space-between;
	padding: $space-xs;

	@for $i from 2 through 6 {
		&.-ds-level#{$i} {
			// TODO more bullet-prof solution for initial padding
			padding-left: $space-xs + ($i - 1) * $space-3xs;
		}
	}

	&__rightContent,
	&__content {
		align-items: flex-start;
		display: flex;
		max-width: 100%;

		&.-ds-centeredContent {
			align-items: center;
		}
	}

	&__rightContent {
		column-gap: $space-2xs;
	}

	&__content {
		overflow-x: clip;
	}

	&__accessory {
		color: $color-neutral-icon-weak;
		margin-right: $space-4xs;
	}

	&__index {
		@include label-l-default-bold;

		color: $color-neutral-text-weak;
		margin-right: $space-3xs;

		&.-ds-active {
			color: $color-primary-text;
		}
	}

	&__text {
		@include label-l-default-regular; // it fixes whole component height

		// To hide scrollbar in case Chrome renders __label higher than line-height - there are some problems with fraction of a pixel on Retina screens
		// https://bethinkteam.slack.com/archives/C012R8RM3A4/p1727776466931369?thread_ts=1727775029.076259&cid=C012R8RM3A4
		overflow: hidden;
	}

	&__label {
		@include label-l-default-regular;

		color: $color-neutral-text-heavy;

		&.-ds-uppercase {
			@include label-l-default-regular-uppercase;

			#{$root}.-ds-selected & {
				@include label-l-default-bold-uppercase;
			}
		}

		#{$root}.-ds-selected & {
			@include label-l-default-bold;
		}
	}

	&__additionalText {
		@include label-m-default-bold;

		color: $color-neutral-text-weak;
		margin-left: $space-4xs;
	}

	&__icon {
		color: $color-neutral-icon-weak;
		margin-right: $space-3xs;

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
	}

	&.-ds-disabled {
		pointer-events: none;

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
	}

	&.-ds-backgroundNeutral {
		background-color: $color-neutral-background;

		&.-ds-hoverable:hover {
			background-color: $color-neutral-background-hovered;
		}
	}
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import DsIcon, { ICON_SIZES, IconItem, ICONS } from '../../Icons/Icon';
import {
	MENU_ITEM_ACCESSORY_STATES,
	MENU_ITEM_BACKGROUND_COLORS,
	MENU_ITEM_SIZES,
	MENU_ITEM_STATES,
	type MenuItemAccessoryState,
	type MenuItemBackgroundColor,
	type MenuItemSize,
	type MenuItemState,
} from './MenuItem.consts';

export interface Props {
	as: 'li' | 'div';
	size?: MenuItemSize;
	backgroundColor?: MenuItemBackgroundColor;
	iconLeft?: IconItem | null;
	iconRight?: IconItem | null;
	iconRightRotation?: 90 | 180 | 270 | null;
	index?: number | null;
	label?: string;
	isLabelUppercase?: boolean;
	additionalText: string;
	state?: MenuItemState;
	accessoryState?: MenuItemAccessoryState | null;
	isSelected?: boolean;
	isDone?: boolean;
	hasSelectedIconsColorPrimary?: boolean;
	isSelectedInteractive?: boolean;
	level: number;
}

const props = withDefaults(defineProps<Props>(), {
	as: 'li',
	size: MENU_ITEM_SIZES.SMALL,
	backgroundColor: MENU_ITEM_BACKGROUND_COLORS.NEUTRAL_WEAK,
	iconLeft: null,
	iconRight: null,
	iconRightRotation: null,
	index: null,
	label: '',
	isLabelUppercase: false,
	additionalText: '',
	state: MENU_ITEM_STATES.DEFAULT,
	accessoryState: null,
	isSelected: false,
	isDone: false,
	hasSelectedIconsColorPrimary: true,
	isSelectedInteractive: false,
	level: 1,
});

const isDisabled = computed(() => {
	return props.state === MENU_ITEM_STATES.DISABLED;
});

const levelClass = computed(() => {
	const level = props.level > 6 ? 6 : props.level;

	return `-ds-level${level}`;
});
</script>
