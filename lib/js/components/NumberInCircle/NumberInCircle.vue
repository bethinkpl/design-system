<template>
	<div
		class="ds-numberInCircle"
		:class="{
			'-ds-medium': medium,
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

.ds-numberInCircle {
	@include label-2xl-default-regular;

	align-items: center;
	border-radius: 50%;
	border-style: solid;
	border-width: 1px;
	display: inline-flex;
	height: $icon-xl;
	justify-content: center;
	min-width: $icon-xl;
	padding: 0 $space-3xs;
	text-align: center;

	@media #{breakpoint-s()} {
		height: $icon-xxl;
		min-width: $icon-xxl;
	}

	&.-ds-is1,
	&.-ds-is6,
	&.-ds-primary {
		border-color: $color-primary-border;
		color: $color-primary-text;
	}

	&.-ds-is5,
	&.-ds-is10,
	&.-ds-neutral {
		border-color: $color-neutral-border-heavy;
		color: $color-neutral-text;
	}

	&.-ds-is2,
	&.-ds-is7,
	&.-ds-success {
		border-color: $color-success-border;
		color: $color-success-text;
	}

	&.-ds-danger {
		border-color: $color-danger-border;
		color: $color-danger-text;
	}

	&.-ds-is4,
	&.-ds-is9,
	&.-ds-info {
		border-color: $color-info-border;
		color: $color-info-text;
	}

	&.-ds-is3,
	&.-ds-is8,
	&.-ds-accent {
		border-color: $color-accent-border;
		color: $color-accent-text;
	}

	&.-ds-medium {
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
				[NUMBER_IN_CIRCLE_COLORS.DEFAULT]: `-ds-is${this.index}`,
				[NUMBER_IN_CIRCLE_COLORS.PRIMARY]: '-ds-primary',
				[NUMBER_IN_CIRCLE_COLORS.NEUTRAL]: '-ds-neutral',
				[NUMBER_IN_CIRCLE_COLORS.SUCCESS]: '-ds-success',
				[NUMBER_IN_CIRCLE_COLORS.DANGER]: '-ds-danger',
				[NUMBER_IN_CIRCLE_COLORS.INFO]: '-ds-info',
				[NUMBER_IN_CIRCLE_COLORS.ACCENT]: '-ds-accent',
			};
			return colorToClassMap[this.color];
		},
	},
};
</script>
