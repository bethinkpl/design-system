<template>
	<div>
		<div v-if="!disableRipple"><slot></slot></div>
		<div v-else><slot></slot></div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'RippleWrapper',
	props: {
		disable: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return { disableRipple: false };
	},
	watch: {
		disable: {
			handler(value: boolean) {
				setTimeout(() => {
					this.disableRipple = value;
				}, 600);
			},
			immediate: true,
		},
	},
};
</script>
