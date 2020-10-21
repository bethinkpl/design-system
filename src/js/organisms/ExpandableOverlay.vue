<template>
	<div class="o-expandableOverlay" :class="{ '-expanded': isExpanded }">
		<div class="o-expandableOverlay__bar" @click="toggleIsExpanded">
			<span v-if="!isExpanded" class="o-expandableOverlay__bar__message">
				{{ shortMessage }}
			</span>
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
@import 'resources/assets/styles/styleguide/modifiers/media-queries';
@import 'resources/assets/styles/styleguide/settings/spacings';
@import 'resources/assets/styles/styleguide/settings/typography';

.o-expandableOverlay {
	$bar-min-height: 56px;

	z-index: $z-index-critical-info-overlay;
	background-color: $color-athens-gray;

	&.-expanded {
		align-items: center;
		background-image: linear-gradient($color-athens-gray, white);
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
			display: none;

			@media #{$breakpoint-s} {
				display: initial;
			}
		}

		&__message {
			@include textL;

			grid-column: 2;
			text-align: center;
			color: $color-firefly-black;
			padding: $space-s 0;
		}

		&__toggle {
			grid-column: 3;
			height: $bar-min-height;
			justify-self: end;
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
			margin-bottom: $space-s;
		}

		/deep/ &__subtitle {
			@include textXL;

			margin-bottom: $space-s;
		}

		/deep/ &__text {
			@include textL;
			@include textBold;

			color: $color-storm-gray;
			margin-bottom: $space-s;
		}

		/deep/ &__textSmall {
			@include textM;

			color: $color-storm-gray;
			margin-bottom: $space-m;
		}

		/deep/ &__button {
			display: block;
			margin-bottom: $space-m;
		}

		/deep/ &__title,
		/deep/ &__subtitle,
		/deep/ &__text,
		/deep/ &__textSmall,
		/deep/ &__button {
			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	&__footer {
		@include textM;

		color: $color-storm-gray;
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
	},
};
</script>
