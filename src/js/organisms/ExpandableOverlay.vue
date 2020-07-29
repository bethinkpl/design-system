<template>
	<div class="o-expandableOverlay" :class="{'-expanded': isExpanded}">
		<div class="o-expandableOverlay__bar" @click="toggleIsExpanded">
			<span v-if="!isExpanded" class="o-expandableOverlay__bar__message">{{shortMessage}}</span>
			<wnl-button-with-icon class="o-expandableOverlay__bar__toggle" text>
				<span v-if="isExpanded" class="o-expandableOverlay__bar__text">Zwiń</span>
				<span v-else class="o-expandableOverlay__bar__text">Czytaj więcej</span>
				<template #icon>
					<wnl-icon
						:fa-icon-class="isExpanded ? 'fa-angle-up' : 'fa-angle-down'"
						size="medium"
					/>
				</template>
			</wnl-button-with-icon>
		</div>
		<template v-if="isExpanded">
			<div class="o-expandableOverlay__body">
				<div class="o-expandableOverlay__body__content">
					<slot name="body" :collapse="collapse" />
				</div>
			</div>
			<div class="o-expandableOverlay__footer">
				<slot name="footer" />
			</div>
		</template>
	</div>
</template>

<style lang="scss" scoped>
	@import 'resources/assets/styles/variables';
	@import 'resources/assets/styles/styleguide/settings/colors';
	@import 'resources/assets/styles/styleguide/settings/media-queries';
	@import "resources/assets/styles/styleguide/modifiers/media-queries";
	@import 'resources/assets/styles/styleguide/settings/spacings';
	@import 'resources/assets/styles/styleguide/settings/typography';

	.o-expandableOverlay {
		$bar-min-height: 56px;
		z-index: $z-index-critical-info-overlay;
		background-color: $color-athens-grey;

		&.-expanded {
			align-items: center;
			background-image: linear-gradient($color-athens-grey, white);
			bottom: 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			left: 0;
			position: fixed;
			right: 0;
			top: $navbar-height;
		}

		&__bar {
			cursor: pointer;
			display: grid;
			grid-template-columns: 21% 58% 21%;
			min-height: $bar-min-height;
			width: 100%;

			&__text {
				@media #{$breakpoint-s} {
					display: initial;
				}
				display: none;
			}

			&__message {
				@include textBase;
				grid-column: 2;
				place-self: center;
				text-align: center;
				color: $color-firefly;
				padding: $space-s 0;
			}

			&__toggle {
				grid-column: 3;
				height: $bar-min-height;
				place-self: start end;
			}
		}

		&__body {
			align-items: center;
			display: flex;
			justify-content: center;
			overflow-y: auto;
			text-align: center;
			width: 100%;

			&__content {
				margin: auto $space-m;
			}

			/deep/ &__title {
				margin: $space-s 0;
			}

			/deep/ &__subtitle {
				margin: $space-s 0;
			}

			/deep/ &__text {
				@include textBase;
				@include textBold;
				color: $color-storm-grey;
				margin: $space-s 0;
			}

			/deep/ &__textSmall {
				@include textMinus1;
				color: $color-storm-grey;
				margin: $space-s 0;
			}

			/deep/ &__button {
				margin: $space-xxs 0;
			}
		}

		&__footer {
			@include textMinus1;
			color: $color-storm-grey;
			margin-top: $space-xl;
			padding: $space-m $space-l $space-m $space-s;
			text-align: right;
			width: 100%;
		}
	}
</style>

<script>
import WnlButtonWithIcon from 'js/components/global/styleguide/molecules/ButtonWithIcon';
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';

export default {
	name: 'ExpandableOverlay',
	components: {
		WnlButtonWithIcon,
		WnlIcon,
	},
	props: {
		shortMessage: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isExpanded: true,
		};
	},
	methods: {
		collapse() {
			this.isExpanded = false;
		},
		toggleIsExpanded() {
			this.isExpanded = !this.isExpanded;
		},
	}
};
</script>
