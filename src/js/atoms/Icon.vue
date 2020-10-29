<template>
	<i
		:class="{
			'a-icon': true,
			[faIconClass]: true,
			[sizeClassName]: true,
			'-touchable': touchable,
		}"
	/>
</template>

<script lang="ts">
export default {
	props: {
		faIconClass: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			default: 'small',
			validator: (value: string) =>
				['xx-large', 'x-large', 'large', 'medium', 'small', 'x-small'].includes(value),
		},
		touchable: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		sizeClassName() {
			return `-${this.size}`;
		},
	},
};
</script>
