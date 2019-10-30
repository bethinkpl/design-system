<template>
	<component
		:is="tagName"
		:class="[levelClass]"
		class="a-title"
	>{{text}}</component>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/typography';

	.a-title {

		&.-level2 {
			@include textBold;
			@include textPlus6;
		}

		&.-level3 {
			@include textBold;
			@include textPlus5;
		}

		&.-level4 {
			@include textBold;
			@include textPlus3;
		}

		&.-level5 {
			@include textPlus2;
		}

		&.-level6 {
			@include textMedium;
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
		tagName() {
			return `h${this.level}`;
		},
		levelClass() {
			return `-level${this.level}`;
		}
	}
};
</script>
