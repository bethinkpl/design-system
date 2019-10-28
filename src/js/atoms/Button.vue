<template>
	<span class="a-button" :class="{'-text': text, '-small': small}">
		<slot />
	</span>
</template>

<script>
export default {
	props: {
		text: {
			type: Boolean,
			default: false
		},
		small: {
			type: Boolean,
			default: false
		}
	},
};
</script>
