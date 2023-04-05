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
@import '../../../styles/settings/icons';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

.a-numberInCircle {
	@include label-2xl-default-regular;

	align-items: center;
	border-radius: 50%;
	border-style: solid;
	border-width: 1px;
	display: inline-flex;
	height: $icon-xl;
	justify-content: center;
	min-width: $icon-xl;
	padding: 0 $space-xxxs;
	text-align: center;

	@media #{breakpoint-s()} {
		height: $icon-xxl;
		min-width: $icon-xxl;
	}

	&.-is1,
	&.-is6,
	&.-primary {
		border-color: $color-primary-border;
		color: $color-primary-text;
	}

	&.-is5,
	&.-is10,
	&.-neutral {
		border-color: $color-neutral-border-heavy;
		color: $color-neutral-text;
	}

	&.-is2,
	&.-is7,
	&.-success {
		border-color: $color-success-border;
		color: $color-success-text;
	}

	&.-danger {
		border-color: $color-danger-border;
		color: $color-danger-text;
	}

	&.-is4,
	&.-is9,
	&.-info {
		border-color: $color-info-border;
		color: $color-info-text;
	}

	&.-is3,
	&.-is8,
	&.-accent {
		border-color: $color-accent-border;
		color: $color-accent-text;
	}

	&.-medium {
		@include label-m-default-regular;

		height: $icon-l;
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
				[NUMBER_IN_CIRCLE_COLORS.DEFAULT]: `-is${this.index}`,
				[NUMBER_IN_CIRCLE_COLORS.PRIMARY]: '-primary',
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
