<template>
	<div class="o-expandableOverlay" :class="{'-expanded': isExpanded, '-collapsed': !isExpanded}">
		<div class="o-expandableOverlay__bar">
			<span v-if="!isExpanded" class="o-expandableOverlay__bar__message">{{shortMessage}}</span>
			<a class="a-button -text" @click.prevent="toggleIsExpanded">
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

<style lang="scss" scoped>
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
			align-items: center;
			display: flex;
			height: $bar-height;
			justify-content: flex-end;
			text-align: center;
			width: 100%;

			.-collapsed &__text {
				display: none;

				@media #{$breakpoint-s} {
					display: initial;
				}
			}

			&__message {
				position: absolute;
				width: 100%;
				color: $color-firefly;
				font-family: $font-family-sans-serif;
				font-size: $font-size-base;
				letter-spacing: 0;
				line-height: $line-height-base;
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
