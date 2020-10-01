<template>
	<component :is="tagName" :class="[levelClass, isLink && '-link']" class="a-title">
		<slot>
			{{ text }}
		</slot>
	</component>
</template>

<style lang="scss" scoped>
@import 'resources/assets/styles/styleguide/settings/colors';
@import 'resources/assets/styles/styleguide/settings/typography';

.a-title {
	&.-level1 {
		@include textLight;
		@include titleL;
	}

	&.-level2 {
		@include titleM;
	}

	&.-level3 {
		@include titleS;
	}

	&.-level4 {
		@include textBold;
		@include headlineXL;
	}

	&.-level5 {
		@include headlineL;
	}

	&.-level6 {
		@include headlineM;
	}

	&.-link {
		cursor: pointer;
		color: $color-primary;
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
				return [1, 2, 3, 4, 5, 6].includes(value);
			},
		},
		text: {
			type: String,
			default: '',
		},
		isLink: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		tagName() {
			return `h${this.level}`;
		},
		levelClass() {
			return `-level${this.level}`;
		},
	},
};
</script>
