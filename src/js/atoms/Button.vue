<template>
	<span class="a-button" :class="{'-text': text}">
		<slot />
	</span>
</template>

<script>
export default {
	props: {
		text: {
			type: Boolean,
			default: true
		}
	},
};
</script>
