<template>
	<div
		class="a-numberInCircle"
		:class="{
			'-medium': medium,
			[colorClass]: true,
		}"
	>
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import '../../styles/settings/colors';
@import '../../styles/settings/icons';
@import '../../styles/settings/media-queries';
@import '../../styles/settings/spacings';
@import '../../styles/settings/typography';

.a-numberInCircle {
	align-items: center;
	border-radius: 50%;
	border: 1px solid currentColor;
	display: inline-flex;
	font-size: $font-size-headline-m;
	height: $icon-xl;
	justify-content: center;
	line-height: 1;
	min-width: $icon-xl;
	padding: 0 $space-xxxs;
	text-align: center;

	@media #{breakpoint-s()} {
		font-size: $font-size-headline-xl;
		height: $icon-xxl;
		min-width: $icon-xxl;
	}

	&.-is1 {
		color: $color-primary;
	}

	&.-is2 {
		color: $color-salad-green;
	}

	&.-is3 {
		color: $color-deluge-violet;
	}

	&.-is4 {
		color: $color-cobalt-blue;
	}

	&.-danger {
		color: $color-crimson-red;
	}

	&.-primary {
		color: $color-primary;
	}

	&.-secondary {
		color: $color-storm-gray;
	}

	&.-medium {
		height: $icon-l;
		font-size: $font-size-text-m;
		min-width: $icon-l;
	}
}
</style>

<script>
export const COLORS = {
	DEFAULT: 'DEFAULT',
	PRIMARY: 'PRIMARY',
	DANGER: 'DANGER',
	SECONDARY: 'SECONDARY',
};

export default {
	name: 'NumberInCircle',
	props: {
		index: {
			type: Number,
			default: 1,
		},
		medium: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: COLORS.DEFAULT,
			validator(value) {
				return Object.values(COLORS).includes(value);
			},
		},
	},
	computed: {
		colorClass() {
			const colorToClassMap = {
				[COLORS.DEFAULT]: `-is${this.index}`,
				[COLORS.PRIMARY]: '-primary',
				[COLORS.DANGER]: '-danger',
				[COLORS.SECONDARY]: '-secondary',
			};
			return colorToClassMap[this.color];
		},
	},
};
</script>
