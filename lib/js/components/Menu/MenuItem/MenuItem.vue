<template>
	<li class="ds-menuItem__wrapper">
		<component
			:is="as"
			v-if="shouldRenderComponent"
			v-bind="bindings"
			:class="[
				'ds-menuItem',
				levelClass,
				{
					'-ds-disabled': isDisabled,
					'-ds-medium': size === MENU_ITEM_SIZES.MEDIUM,
					'-ds-selected': isSelected,
					'-ds-hoverable': !isSelected || isSelectedInteractive,
					'-ds-backgroundNeutral':
						backgroundColor === MENU_ITEM_BACKGROUND_COLORS.NEUTRAL,
				},
			]"
		>
			<span class="ds-menuItem__content">
				<ds-icon
					v-if="isExpandable"
					:class="['ds-menuItem__accessory', { '-ds-active': isSelected }]"
					:icon="ICONS.FA_DOT_SOLID"
					:size="ICON_SIZES.XXX_SMALL"
					@click="toggleExpanded"
				/>
				<span
					v-if="index !== null"
					class="ds-menuItem__index"
					:class="{ '-ds-active': isSelected }"
				>
					{{ index }}.
				</span>
				<ds-icon
					v-if="iconLeft"
					class="ds-menuItem__icon"
					:class="{
						'-ds-active': isSelected && hasSelectedIconsColorPrimary,
					}"
					:icon="iconLeft"
					:size="ICON_SIZES.X_SMALL"
				/>
				<span class="ds-menuItem__text">
					<span class="ds-menuItem__label" :class="{ '-ds-uppercase': isLabelUppercase }">
						<template v-if="$slots.labelSlot">
							<slot name="labelSlot" />
						</template>
						<template v-else>
							{{ label }}
						</template>
					</span>
					<span v-if="additionalText" class="ds-menuItem__additionalText">
						{{ additionalText }}
					</span>
				</span>
			</span>
			<span
				v-if="shouldRenderRightContent"
				class="ds-menuItem__rightContent"
				:class="{ '-ds-centeredContent': $slots.default }"
			>
				<template v-if="$slots.default">
					<slot />
				</template>
				<ds-icon
					v-if="isDone"
					class="ds-menuItem__icon -ds-active"
					:icon="ICONS.FA_CHECK_SOLID"
					:size="ICON_SIZES.X_SMALL"
				/>
				<ds-icon
					v-else-if="iconRight"
					class="ds-menuItem__icon"
					:class="{
						'-ds-active': isSelected && hasSelectedIconsColorPrimary,
					}"
					:icon="iconRight"
					:size="ICON_SIZES.X_SMALL"
					:rotation="iconRightRotation"
				></ds-icon>
			</span>
		</component>
		<slot v-if="!isExpandable || isExpandedInternal" name="children" />
	</li>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';

.ds-menuItem {
	$root: &;
	$menu-item-horizontal-padding: $space-2xs;

	@for $i from 2 through 6 {
		&.-ds-level#{$i} {
			padding-left: $menu-item-horizontal-padding + ($i - 1) * $space-2xs;
		}
	}

	background-color: $color-neutral-background-weak;
	border-radius: $radius-s;
	column-gap: $space-2xs;
	display: flex;
	justify-content: space-between;
	padding: $space-s $menu-item-horizontal-padding;
	text-decoration: none;

	&__wrapper {
		list-style-type: none;
	}

	&__rightContent,
	&__content {
		align-items: flex-start;
		display: flex;
		max-width: 100%;
	}

	&__rightContent {
		column-gap: $space-2xs;

		&.-ds-centeredContent {
			align-items: center;
		}
	}

	&__content {
		overflow-x: clip;
	}

	&__accessory {
		color: $color-neutral-icon-weak;
		padding: $space-4xs $space-5xs;

		&.-ds-active {
			color: $color-primary-icon;
		}
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

		&.-ds-hoverable:hover {
			background-color: $color-neutral-background-hovered;
		}
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
import { computed, inject, provide, toRef } from 'vue';
import DsIcon, { ICON_SIZES, IconItem, ICONS } from '../../Icons/Icon';
import {
	MENU_ITEM_BACKGROUND_COLORS,
	MENU_ITEM_LEVEL_INJECTION_KEY,
	MENU_ITEM_SIZES,
	MENU_ITEM_STATES,
	type MenuItemBackgroundColor,
	type MenuItemSize,
	type MenuItemState,
} from './MenuItem.consts';
import useExpanded from '../../../composables/useExpanded'; // DS don't have vue-router installed, so we define a loose type which should match RouteLocationRaw

// DS don't have vue-router installed, so we define a loose type which should match RouteLocationRaw
type RouterLocation = string | Record<string, unknown>;

const {
	href = '',
	to = '',
	size = MENU_ITEM_SIZES.SMALL,
	backgroundColor = MENU_ITEM_BACKGROUND_COLORS.NEUTRAL_WEAK,
	iconLeft = null,
	iconRight = null,
	iconRightRotation = null,
	index = null,
	label = '',
	isLabelUppercase = false,
	additionalText = '',
	state = MENU_ITEM_STATES.DEFAULT,
	isExpandable = false,
	isExpanded = false,
	isSelected = false,
	isDone = false,
	hasSelectedIconsColorPrimary = true,
	isSelectedInteractive = false,
	level = null,
} = defineProps<{
	href?: string;
	to?: RouterLocation;
	size?: MenuItemSize;
	backgroundColor?: MenuItemBackgroundColor;
	iconLeft?: IconItem | null;
	iconRight?: IconItem | null;
	iconRightRotation?: 90 | 180 | 270 | null;
	index?: number | null;
	label?: string;
	isLabelUppercase?: boolean;
	additionalText?: string;
	state?: MenuItemState;
	isExpandable?: boolean;
	isExpanded?: boolean;
	isSelected?: boolean;
	isDone?: boolean;
	hasSelectedIconsColorPrimary?: boolean;
	isSelectedInteractive?: boolean;
	level?: number | null;
}>();

const slots = defineSlots<{
	children?: () => any;
	labelSlot?: () => any;
	default?: () => any;
}>();

const emit = defineEmits<{
	'update:isExpanded': [isExpanded: boolean];
}>();

const { toggleExpanded, isExpandedInternal } = useExpanded(
	toRef(() => isExpanded),
	emit,
);

const as = computed(() => {
	if (href) {
		return 'a';
	}
	if (to) {
		return 'router-link';
	}
	return 'span';
});

const bindings = computed(() => {
	if (href) {
		return { href };
	}
	if (to) {
		return { to };
	}
	return {};
});

const isDisabled = computed(() => {
	return state === MENU_ITEM_STATES.DISABLED;
});

const levelComputed = computed(() => {
	const injectedLevel = inject(MENU_ITEM_LEVEL_INJECTION_KEY, null);

	if (level !== null) {
		return level;
	}

	if (injectedLevel !== null) {
		return injectedLevel;
	}

	return 1;
});

const shouldRenderRightContent = computed(() => slots.default || isDone || iconRight);

const shouldRenderComponent = computed(
	() =>
		label ||
		additionalText ||
		slots.labelSlot ||
		isExpandable ||
		index !== null ||
		iconLeft ||
		shouldRenderRightContent.value,
);

const levelClass = computed(() => {
	const limitedLevel = levelComputed.value > 6 ? 6 : levelComputed.value;

	return `-ds-level${limitedLevel}`;
});

provide(MENU_ITEM_LEVEL_INJECTION_KEY, levelComputed.value + 1);
</script>
