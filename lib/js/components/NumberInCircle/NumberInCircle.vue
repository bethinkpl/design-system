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
@import '../../../styles/settings/colors';
@import '../../../styles/settings/icons';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';
@import '../../../styles/settings/colors/tokens';

.a-numberInCircle {
	align-items: center;
	border-radius: 50%;
	border-width: 1px;
	border-style: solid;
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

	&.-is1,
	&.-is6,
	&.-primary {
		color: $color-primary-text;
		border-color: $color-primary-border;
	}

	&.-is5,
	&.-is10,
	&.-neutral {
		color: $color-neutral-text;
		border-color: $color-neutral-border-heavy;
	}

	&.-is2,
	&.-is7,
	&.-success {
		color: $color-success-text;
		border-color: $color-success-border;
	}

	&.-danger {
		color: $color-danger-text;
		border-color: $color-danger-border;
	}

	&.-is4,
	&.-is9,
	&.-info {
		color: $color-info-text;
		border-color: $color-info-border;
	}

	&.-is3,
	&.-is8,
	&.-accent {
		color: $color-accent-text;
		border-color: $color-accent-border;
	}

	&.-medium {
		height: $icon-l;
		font-size: $font-size-text-m;
		min-width: $icon-l;
	}
}
</style>

<script>
import { NUMBER_IN_CIRCLE_COLORS } from './NumberInCircle.consts';

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
			default: NUMBER_IN_CIRCLE_COLORS.DEFAULT,
			validator(value) {
				return Object.values(NUMBER_IN_CIRCLE_COLORS).includes(value);
			},
		},
	},
	computed: {
		colorClass() {
			const colorToClassMap = {
				[NUMBER_IN_CIRCLE_COLORS.PRIMARY]: `-is${this.index}`,
				[NUMBER_IN_CIRCLE_COLORS.NEUTRAL]: '-neutral',
				[NUMBER_IN_CIRCLE_COLORS.SUCCESS]: '-success',
				[NUMBER_IN_CIRCLE_COLORS.DANGER]: '-danger',
				[NUMBER_IN_CIRCLE_COLORS.INFO]: '-info',
				[NUMBER_IN_CIRCLE_COLORS.ACCENT]: '-accent',
			};
			return colorToClassMap[this.color];
		},
	},
};
</script>
