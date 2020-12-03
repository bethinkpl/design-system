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
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';

export const SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
};
export const TYPES = {
	FILLED: 'filled',
	OUTLINED: 'outlined',
	TEXT: 'text',
};
export const COLORS = {
	PRIMARY: 'primary',
	MINOR: 'minor',
	DANGER: 'danger',
	WARNING: 'warning',
	SUCCESS: 'success',
};
export const RADIUSES = {
	CAPSULE: 'capsule',
	ROUNDED: 'rounded',
};
export const STATES = {
	DEFAULT: 'default',
	HOVERED: 'hovered',
	FOCUSED: 'focused',
	DISABLED: 'disabled',
	LOADING: 'loading',
};

export default {
	components: {
		WnlIcon,
	},
	props: {
		size: {
			type: String,
			default: SIZES.MEDIUM,
			validator(value) {
				return Object.values(SIZES).includes(value);
			},
		},
		type: {
			type: String,
			default: TYPES.FILLED,
			validator(value) {
				return Object.values(TYPES).includes(value);
			},
		},
		color: {
			type: String,
			default: COLORS.PRIMARY,
			validator(value) {
				return Object.values(COLORS).includes(value);
			},
		},
		radius: {
			type: String,
			default: RADIUSES.CAPSULE,
			validator(value) {
				return Object.values(RADIUSES).includes(value);
			},
		},
		state: {
			type: String,
			default: STATES.DEFAULT,
			validator(value) {
				return Object.values(STATES).includes(value);
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
		this.BUTTON_TYPES = TYPES;
		this.COLORS = COLORS;
		this.RADIUSES = RADIUSES;
		this.SIZES = SIZES;
		this.STATES = STATES;
	},
};
</script>
