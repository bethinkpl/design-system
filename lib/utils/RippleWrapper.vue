<template>
	<div>
		<div v-if="!disableRipple" v-ripple><slot></slot></div>
		<div v-else><slot></slot></div>
	</div>
</template>

<script lang="ts">
import Ripple from 'vue-ripple-directive';

export default {
	name: 'RippleWrapper',
	directives: {
		ripple: Ripple,
	},
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
	created() {
		Ripple.color = 'rgba(12, 23, 38, 0.12)';
	},
};
</script>
