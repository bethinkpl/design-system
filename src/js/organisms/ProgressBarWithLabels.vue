<template>
	<div class="o-progressBarWithLabels">
		<div class="o-progressBarWithLabels__left">
			<div class="o-progressBarWithLabels__left__labels">
				<div class="o-progressBarWithLabels__left__labels__label">{{label}}</div>
				<div class="o-progressBarWithLabels__left__labels__progressData">{{progressData}}</div>
			</div>
			<div><wnl-progress-bar :ranges="[{ color: color, percentValue: percentValue }]" /></div>
		</div>
		<div class="o-progressBarWithLabels__score">{{formattedPercentValue}}</div>
	</div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/styleguide/settings/colors';
	@import 'resources/assets/styles/styleguide/settings/icons';
	@import 'resources/assets/styles/styleguide/settings/spacings';
	@import 'resources/assets/styles/styleguide/settings/typography';

	.o-progressBarWithLabels {
		align-items: flex-end;
		display: flex;
		width: 100%;

		&__left {
			flex-grow: 1;

			&__labels {
				display: flex;
				justify-content: space-between;
				margin-bottom: $space-xxxs;

				&__label {
					@include textXS;

					color: $color-ebony-clay;
					font-weight: bold;
				}

				&__progressData {
					@include textS;

					color: $color-storm-grey;
					font-weight: bold;
					text-align: right;
				}
			}
		}

		&__score {
			@include textM;

			color: $color-storm-grey;
			font-weight: bold;
			margin-left: $space-m;
			min-width: 40px;
			text-align: right;
		}
	}
</style>

<script>
import WnlProgressBar from 'js/components/global/ProgressBar';
import { COLORS } from 'js/consts/colors';

export default {
	components: {
		WnlProgressBar
	},
	props: {
		label: {
			type: String,
			required: true,
		},
		percentValue: {
			type: Number,
			required: true,
		},
		color: {
			type: String,
			default: COLORS.NAVY_BLUE,
		},
		progressData: {
			type: String,
			default: ''
		}
	},
	computed: {
		formattedPercentValue() {
			return `${Math.round(this.percentValue)}%`;
		},
	},
};
</script>
