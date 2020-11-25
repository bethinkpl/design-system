<template>
	<span
		class="a-button"
		:class="{
			'-text': text,
			'-small': small,
			'-medium': medium,
			'-loading': loading,
			'-roundedCorners': roundedCorners,
			'-disabled': disabled,
			'-secondary': secondary,
			'-danger': danger,
			'-hovered': hovered,
		}"
	>
		<slot />
	</span>
</template>

<script>
export const SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
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

		text: {
			// TODO make sure size is ok
			type: Boolean,
			default: false,
		},
		small: {
			type: Boolean,
			default: false,
		},
		medium: {
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
};
</script>
