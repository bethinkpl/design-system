<template>
	<div class="o-expandableOverlay" :class="{'-expanded': isExpanded}">
		<div class="o-expandableOverlay__bar">
			<span v-if="!isExpanded" class="o-expandableOverlay__bar__message">{{shortMessage}}</span>
			<wnl-button-with-icon
				class="o-expandableOverlay__bar__toggle"
				:text="true"
				@click.native="toggleIsExpanded"
			>
				<template #text>
					<span v-if="isExpanded" class="o-expandableOverlay__bar__text">Zwiń</span>
					<span v-else class="o-expandableOverlay__bar__text">Czytaj więcej</span>
				</template>
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
		$bar-height: 56px;
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
			overflow-x: scroll;
			position: fixed;
			right: 0;
			top: $navbar-height;
		}

		&__bar {
			display: grid;
			grid-template-columns: 21% 58% 21%;
			min-height: $bar-height;
			width: 100%;

			&__text {
				display: none;

				@media #{$breakpoint-s} {
					display: initial;
				}
			}

			&__message {
				grid-column: 2;
				place-self: center;
				text-align: center;
				color: $color-firefly;
				font-family: $font-family-sans-serif;
				font-size: $font-size-base;
				line-height: $line-height-base;
				padding: 16px 0;
			}

			&__toggle {
				grid-column: 3;
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
				margin: auto;
			}

			/deep/ &__image {
				// TODO move styles specific to the overlay from CourseLogo.vue
			}

			/deep/ &__level1 {
				margin: $space-s 0;
			}

			/deep/ &__level2 {
				margin: $space-s 0;
			}

			/deep/ &__level3 {
				@include textBase;
				@include textBold;
				color: $color-storm-grey;
				margin: $space-s 0;
			}

			/deep/ &__level4 {
				@include textMinus1;
				color: $color-storm-grey;
				margin: $space-s 0;
			}

			/deep/ &__button {
				margin: $space-xxs 0;
			}
		}

		&__footer {
			flex-shrink: 0;
			margin-top: $space-xl;
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
