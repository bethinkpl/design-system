<template>
	<span
		class="a-button"
		:class="{
			'-text': type === TYPES.TEXT,
			'-small': size === SIZES.SMALL,
			'-large': size === SIZES.LARGE,
			'-loading': loading,
			'-roundedCorners': roundedCorners,
			'-disabled': disabled,
			'-outlined': type === TYPES.OUTLINED,
			'-danger': danger,
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

		text: {
			// TODO make sure size is ok
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
		roundedCorners: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		secondary: {
			// TODO make sure size is ok
			type: Boolean,
			default: false,
		},
		danger: {
			type: Boolean,
			default: false,
		},
		hovered: {
			type: Boolean,
			default: false,
		},
	},
	created() {
		this.SIZES = SIZES;
		this.TYPES = TYPES;
	},
};
</script>
