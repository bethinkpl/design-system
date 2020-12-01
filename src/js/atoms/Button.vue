<template>
	<span
		class="a-button"
		:class="{
			'-text': type === BUTTON_TYPES.TEXT,
			'-small': size === SIZES.SMALL,
			'-large': size === SIZES.LARGE,
			'-loading': loading,
			'-roundedCorners': radius === RADIUSES.ROUNDED,
			'-disabled': disabled,
			'-outlined': type === BUTTON_TYPES.OUTLINED,
			'-danger': color === COLORS.DANGER,
			'-hovered': hovered,
		}"
	>
		<slot />
	</span>
</template>

<script lang="ts">
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
	SUCCESS: 'success',
};
export const RADIUSES = {
	CAPSULE: 'capsule',
	ROUNDED: 'rounded',
};

export default {
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
		loading: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		hovered: {
			type: Boolean,
			default: false,
		},
	},
	created() {
		this.BUTTON_TYPES = TYPES;
		this.COLORS = COLORS;
		this.RADIUSES = RADIUSES;
		this.SIZES = SIZES;
	},
};
</script>
