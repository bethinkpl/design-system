<template>
	<i :class="[faIconClass, sizeClassName]" class="a-icon" />
</template>

<script>
export default {
	props: {
		faIconClass: {
			type: String,
			required: true
		},
		size: {
			type: String,
			default: 'small',
			validator: function (value) {
				return ['xx-large', 'x-large', 'large', 'medium', 'small', 'x-small'].includes(value);
			},
		}
	},
	computed: {
		sizeClassName() {
			return `-${this.size}`;
		}
	}
};
</script>
