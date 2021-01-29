<template>
	<label class="a-label" :for="inputId">
		<slot />
		<span v-if="isOptional" class="a-label__optionalText">(opcjonalne)</span>
	</label>
</template>

<script>
export default {
	name: 'Label',
	props: {
		inputId: {
			type: String,
			default: undefined,
		},
		isOptional: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
