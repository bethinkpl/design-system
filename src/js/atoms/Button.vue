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
		}"
	>
		<slot />
	</span>
</template>

<script>
export default {
	props: {
		text: {
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
			type: Boolean,
			default: false,
		},
		danger: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
