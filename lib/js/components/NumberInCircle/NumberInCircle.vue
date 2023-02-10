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
	border-width: 1px;
	border-style: solid;
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
