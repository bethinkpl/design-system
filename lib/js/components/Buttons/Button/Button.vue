<template>
	<component
		:is="as"
		class="ds-button"
		:class="{
			'-ds-outlined': type === BUTTON_TYPES.OUTLINED,
			'-ds-text': type === BUTTON_TYPES.TEXT,

			'-ds-small': size === BUTTON_SIZES.SMALL,
			'-ds-large': size === BUTTON_SIZES.LARGE,

			'-ds-rounded': type !== BUTTON_TYPES.TEXT && radius === BUTTON_RADIUSES.ROUNDED,

			'-ds-hovered': state === BUTTON_STATES.HOVERED,
			'-ds-focused': state === BUTTON_STATES.FOCUSED,
			'-ds-loading': state === BUTTON_STATES.LOADING,
			'-ds-disabled': state === BUTTON_STATES.DISABLED,

			[colorClassName]: true,

			'-ds-elevation-x-small': elevation === BUTTON_ELEVATIONS.X_SMALL,
			'-ds-elevation-small': elevation === BUTTON_ELEVATIONS.SMALL,
		}"
	>
		<span class="ds-button__content">
			<wnl-icon
				v-if="iconLeft"
				class="ds-button__icon -ds-left"
				:icon="iconLeft"
				:size="iconSize"
			/>
			<slot />
			<wnl-icon
				v-if="iconRight"
				class="ds-button__icon -ds-right"
				:icon="iconRight"
				:size="iconSize"
			/>
		</span>
		<wnl-icon
			v-if="state === BUTTON_STATES.LOADING"
			class="ds-button__loadingIcon"
			:icon="ICONS.FAD_SPINNER_THIRD"
			:size="loadingIconSize"
		/>
	</component>
</template>

<!-- Looking for styles? These are defined in the global styles file: design-system.scss > _buttons.scss -->

<script lang="ts" setup>
import WnlIcon, { ICON_SIZES, IconItem, ICONS, IconSize } from '../../Icons/Icon';
import {
	BUTTON_COLORS,
	BUTTON_ELEVATIONS,
	BUTTON_RADIUSES,
	BUTTON_SIZES,
	BUTTON_STATES,
	BUTTON_TYPES,
	ButtonColor,
	ButtonRadius,
	ButtonSize,
	ButtonState,
	ButtonType,
	ButtonElevation,
} from './Button.consts';
import { computed } from 'vue';

const {
	size = BUTTON_SIZES.MEDIUM,
	type = BUTTON_TYPES.FILLED,
	color = BUTTON_COLORS.PRIMARY,
	radius = BUTTON_RADIUSES.CAPSULE,
	state = BUTTON_STATES.DEFAULT,
	iconLeft = null,
	iconRight = null,
	elevation = BUTTON_ELEVATIONS.NONE,
	as = 'span',
} = defineProps<{
	// Fixme - remove `string` from types - it is used only to avoid breaking changes for now
	size?: ButtonSize | string;
	type?: ButtonType | string;
	color?: ButtonColor | null | string;
	radius?: ButtonRadius | string;
	state?: ButtonState | string;
	iconLeft?: IconItem | null;
	iconRight?: IconItem | null;
	elevation?: ButtonElevation | string;
	as?: 'button' | 'a' | 'span';
}>();

const iconSize = computed((): IconSize => {
	if (size === BUTTON_SIZES.SMALL || size === BUTTON_SIZES.MEDIUM) {
		return ICON_SIZES.XX_SMALL;
	}
	return ICON_SIZES.X_SMALL;
});

const colorClassName = computed((): string => {
	return `-ds-color-${color}`;
});

const loadingIconSize = computed((): IconSize => {
	if (size === BUTTON_SIZES.LARGE) {
		return ICON_SIZES.MEDIUM;
	}

	if (size === BUTTON_SIZES.SMALL) {
		return ICON_SIZES.X_SMALL;
	}

	return ICON_SIZES.SMALL;
});
</script>
