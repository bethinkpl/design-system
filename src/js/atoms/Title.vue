<template>
	<component
		:is="levelComponent"
		:class="[isClass]"
		class="a-title"
	>{{text}}</component>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/typography';

	.a-title {

		&.-is3 {
			@include textPlus3;
		}

		&.-is2 {
			@include textBold;
			@include textPlus6;
		}
	}

</style>
<script>

export default {
	props: {
		level: {
			type: Number,
			default: 2,
			validator: function (value) {
				return [1,2,3,4,5,6].includes(value);
			}
		},
		text: {
			type: String,
			required: true
		}
	},
	computed: {
		levelComponent() {
			return `h${this.level}`;
		},
		isClass() {
			return `-is${this.level}`;
		}
	}
};
</script>
