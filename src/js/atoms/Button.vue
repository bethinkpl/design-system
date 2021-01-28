<template>
	<span
		v-ripple
		class="a-button"
		:class="{
			'-outlined': type === BUTTON_TYPES.OUTLINED,
			'-text': type === BUTTON_TYPES.TEXT,

			'-small': size === SIZES.SMALL,
			'-large': size === SIZES.LARGE,

			'-rounded': type !== BUTTON_TYPES.TEXT && radius === RADIUSES.ROUNDED,

			'-hovered': state === STATES.HOVERED,
			'-focused': state === STATES.FOCUSED,
			'-loading': state === STATES.LOADING,
			'-disabled': state === STATES.DISABLED,

			'-minor': color === COLORS.MINOR,
			'-danger': color === COLORS.DANGER,
			'-warning': color === COLORS.WARNING,
			'-success': color === COLORS.SUCCESS,
		}"
	>
		<span class="a-button__content">
			<wnl-icon
				v-if="iconLeft"
				class="a-button__icon -left"
				:fa-icon-class="iconLeft"
				size="x-small"
			/>
			<slot />
			<wnl-icon
				v-if="iconRight"
				class="a-button__icon -right"
				:fa-icon-class="iconRight"
				size="x-small"
			/>
		</span>
		<wnl-icon
			v-if="state === STATES.LOADING"
			class="a-button__loadingIcon"
			fa-icon-class="fa-refresh"
			size="x-small"
		/>
	</span>
</template>

<script lang="ts">
import Ripple from 'vue-ripple-directive';

import WnlIcon from 'js/components/global/styleguide/atoms/Icon';

export const BUTTON_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
} as const;
export const BUTTON_TYPES = {
	FILLED: 'filled',
	OUTLINED: 'outlined',
	TEXT: 'text',
} as const;
export const BUTTON_COLORS = {
	PRIMARY: 'primary',
	MINOR: 'minor',
	DANGER: 'danger',
	WARNING: 'warning',
	SUCCESS: 'success',
} as const;
export const BUTTON_RADIUSES = {
	CAPSULE: 'capsule',
	ROUNDED: 'rounded',
} as const;
export const BUTTON_STATES = {
	DEFAULT: 'default',
	HOVERED: 'hovered',
	FOCUSED: 'focused',
	DISABLED: 'disabled',
	LOADING: 'loading',
} as const;

export default {
	name: 'Button',
	directives: {
		ripple: Ripple,
	},
	components: {
		WnlIcon,
	},
	props: {
		size: {
			type: String,
			default: BUTTON_SIZES.MEDIUM,
			validator(value) {
				return Object.values(BUTTON_SIZES).includes(value);
			},
		},
		type: {
			type: String,
			default: BUTTON_TYPES.FILLED,
			validator(value) {
				return Object.values(BUTTON_TYPES).includes(value);
			},
		},
		color: {
			type: String,
			default: BUTTON_COLORS.PRIMARY,
			validator(value) {
				return Object.values(BUTTON_COLORS).includes(value);
			},
		},
		radius: {
			type: String,
			default: BUTTON_RADIUSES.CAPSULE,
			validator(value) {
				return Object.values(BUTTON_RADIUSES).includes(value);
			},
		},
		state: {
			type: String,
			default: BUTTON_STATES.DEFAULT,
			validator(value) {
				return Object.values(BUTTON_STATES).includes(value);
			},
		},
		iconLeft: {
			type: String,
			default: null,
		},
		iconRight: {
			type: String,
			default: null,
		},
	},
	created() {
		this.BUTTON_TYPES = BUTTON_TYPES;
		this.COLORS = BUTTON_COLORS;
		this.RADIUSES = BUTTON_RADIUSES;
		this.SIZES = BUTTON_SIZES;
		this.STATES = BUTTON_STATES;
	},
};
</script>
