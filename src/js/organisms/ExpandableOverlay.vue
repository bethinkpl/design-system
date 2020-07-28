<template>
	<div class="o-expandableOverlay" :class="{'-expanded': isExpanded, '-collapsed': !isExpanded}">
		<div class="o-expandableOverlay__bar">
			<span v-if="!isExpanded" class="o-expandableOverlay__bar__message">{{shortMessage}}</span>
			<a class="a-button -text o-expandableOverlay__bar__icon" @click.prevent="toggleIsExpanded">
				<span v-if="isExpanded" class="o-expandableOverlay__bar__text">Zwiń</span>
				<span v-else class="o-expandableOverlay__bar__text">Czytaj więcej</span>
				<wnl-icon :fa-icon-class="isExpanded ? 'fa-angle-up' : 'fa-angle-down'" />
			</a>
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

<style lang="scss">
	@import 'resources/assets/styles/variables';
	@import 'resources/assets/styles/styleguide/settings/colors';
	@import 'resources/assets/styles/styleguide/settings/media-queries';
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
			grid-template-columns: 25% 50% 25%;
			grid-template-rows: 100%;
			height: $bar-height;
			width: 100%;

			.-collapsed &__text {
				display: none;

				@media #{$breakpoint-s} {
					display: initial;
				}
			}

			&__message {
				grid-column: 2;
				place-self: center;
				color: $color-firefly;
				font-family: $font-family-sans-serif;
				font-size: $font-size-base;
				line-height: $line-height-base;
			}
			&__icon {
				grid-column: 3;
				place-self: center end;
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
		}

		&__footer {
			flex-shrink: 0;
			margin-top: $space-xl;
			width: 100%;
		}
	}

	.a-title-h-3 {
		color: #0F9698;
		font-size: $font-size-plus-5;
		font-weight: bold;
		line-height: 42px;
		text-align: center;
	}

	.a-title-h-4 {
		color: $color-firefly;
		font-size: $font-size-plus-4;
		line-height: $line-height-plus-4;
		text-align: center;
	}

	.a-subtitle-h-6 {
		color: $color-firefly;
		font-size: $font-size-plus-2;
		line-height: $line-height-plus-2;
		text-align: center;
	}

	.a-text-m {
		color: $color-storm-grey;
		font-size: $font-size-base;
		line-height: $line-height-base;
		text-align: center;
	}

	.a-text-m-bold {
		color: $color-storm-grey;
		font-size: $font-size-base;
		line-height: $line-height-base;
		font-weight: bold;
		text-align: center;
	}

	.a-text-s {
		color: $color-storm-grey;
		font-size: $font-size-minus-1;
		line-height: 20px;
		text-align: center;
	}

	.a-text-s-bold {
		color: $color-storm-grey;
		font-size: $font-size-minus-1;
		line-height: 20px;
		font-family: "Apple Color Emoji", sans-serif;
		text-align: center;
	}

</style>

<script>
import WnlIcon from 'js/components/global/styleguide/atoms/Icon';

export default {
	name: 'ExpandableOverlay',
	components: {
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
