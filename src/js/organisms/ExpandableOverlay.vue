<template>
	<div class="o-expandableOverlay" :class="{ '-expanded': isExpanded }">
		<div class="o-expandableOverlay__bar" @click="toggleIsExpanded">
			<span v-if="!isExpanded" class="o-expandableOverlay__bar__message">
				{{ shortMessage }}
			</span>
			<div class="o-expandableOverlay__bar__toggle">
				<wnl-icon-button-with-label
					:fa-icon-class="isExpanded ? 'fa-times' : 'fa-chevron-down'"
					:label="isExpanded ? 'Zamknij' : 'Pokaż więcej'"
				/>
			</div>
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
	$bar-min-height: 64px;

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
		padding: 0 $space-s;
		width: 100%;

		&__text {
			display: none;

			@media #{breakpoint-s()} {
				display: initial;
			}
		}

		&__message {
			@include textL;

			align-self: center;
			grid-column: 2;
			text-align: center;
			color: $color-firefly-black;
			padding: $space-xxs 0;
		}

		&__toggle {
			align-items: center;
			display: flex;
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

		::v-deep &__title {
			margin-bottom: $space-s;
		}

		::v-deep &__subtitle {
			margin-bottom: $space-s;
		}

		::v-deep &__text {
			@include textL;
			@include textBold;

			color: $color-storm-gray;
			margin-bottom: $space-s;
		}

		::v-deep &__textSmall {
			@include textM;

			color: $color-storm-gray;
			margin-bottom: $space-m;
		}

		::v-deep &__button {
			display: block;
			margin-bottom: $space-m;
		}

		::v-deep &__title,
		::v-deep &__subtitle,
		::v-deep &__text,
		::v-deep &__textSmall,
		::v-deep &__button {
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
import WnlIconButtonWithLabel from 'js/components/global/styleguide/molecules/IconButtonWithLabel';

export default {
	name: 'ExpandableOverlay',
	components: {
		WnlIconButtonWithLabel,
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
