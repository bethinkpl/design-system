<template>
	<div class="ds-threeColumnLayout">
		<div
			class="ds-threeColumnLayout__overlay"
			:class="{
				'-ds-visible': rightColumnVisibleMobile || leftColumnVisibleMobile,
			}"
			@click="$emit('overlay-clicked')"
		/>
		<div
			class="ds-threeColumnLayout__leftColumn"
			:class="{
				'-ds-desktopVisible': leftColumnVisible || leftColumnVisibleMobile,
				'-ds-mobileVisible': leftColumnVisibleMobile,
			}"
		>
			<slot name="leftColumn" />
		</div>
		<div class="ds-threeColumnLayout__contentColumn">
			<div
				class="ds-threeColumnLayout__content"
				:class="{
					'-ds-noPadding': contentWithoutPadding,
				}"
			>
				<slot />
			</div>
		</div>
		<div
			class="ds-threeColumnLayout__rightColumn"
			:class="{
				'-ds-medium': rightColumnSize === THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
				'-ds-large': rightColumnSize === THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.LARGE,
				'-ds-desktopVisible': rightColumnVisible || rightColumnVisibleMobile,
				'-ds-mobileVisible': rightColumnVisibleMobile,
			}"
		>
			<slot name="rightColumn" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/media-queries';
@import '../../../../styles/settings/z-indexes';

$left-column-width: 23vw;
$left-column-min-width: 250px;
$left-column-max-width: 400px;

$content-column-max-width: 900px;

$right-column-min-width: 320px;
$right-column-medium-max-width: 400px;
$right-column-medium-l-width: 30vw;
$right-column-medium-l-min-width: $right-column-min-width;
$right-column-medium-l-max-width: $right-column-medium-max-width;

$right-column-large-max-width: 500px;
$right-column-large-l-width: 30vw;
$right-column-large-l-min-width: $right-column-min-width;
$right-column-large-l-max-width: $right-column-large-max-width;

.ds-threeColumnLayout {
	$root: &;

	display: flex;
	flex-wrap: nowrap;
	height: 100%;
	overflow: hidden;
	position: relative;
	width: 100%;

	&__overlay {
		background: $color-default-overlay;
		display: none;
		height: 100%;
		left: 0;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: $z-index-overlay;

		@media #{breakpoint-s()} {
			&.-ds-visible {
				display: block;
			}
		}

		@media #{breakpoint-l()} {
			&.-ds-visible {
				display: none;
			}
		}
	}

	&__leftColumn {
		display: none;
		height: 100%;
		left: 0;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: $z-index-overlay + 1;

		@media #{breakpoint-s()} {
			max-width: $left-column-max-width;
			min-width: $left-column-min-width;
			width: $left-column-width;
		}

		@media #{breakpoint-l()} {
			height: auto;
			left: initial;
			position: initial;
			top: initial;

			&.-ds-desktopVisible {
				display: initial;
			}
		}

		&.-ds-mobileVisible {
			display: initial;
		}
	}

	&__contentColumn {
		flex: 1;
		overflow-x: auto;
		width: auto;
	}

	&__content {
		margin: 0 auto;
		max-width: $content-column-max-width;
		padding: $space-s;

		&.-ds-noPadding {
			padding: 0;
		}
	}

	&__rightColumn {
		display: none;
		height: 100%;
		position: fixed;
		right: 0;
		top: 0;
		width: 100%;
		z-index: $z-index-overlay + 1;

		@media #{breakpoint-l()} {
			height: auto;
			position: initial;
			right: initial;
			top: initial;
			z-index: initial;

			&.-ds-desktopVisible {
				display: initial;
			}
		}

		&.-ds-mobileVisible {
			display: initial;
		}

		&.-ds-medium {
			@media #{breakpoint-s()} {
				max-width: $right-column-medium-max-width;
			}

			@media #{breakpoint-l()} {
				max-width: $right-column-medium-l-max-width;
				min-width: $right-column-medium-l-min-width;
				width: $right-column-medium-l-width;
			}
		}

		&.-ds-large {
			@media #{breakpoint-s()} {
				max-width: $right-column-large-max-width;
			}

			@media #{breakpoint-l()} {
				max-width: $right-column-large-l-max-width;
				min-width: $right-column-large-l-min-width;
				width: $right-column-large-l-width;
			}
		}
	}
}
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
	THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE,
	ThreeColumnLayoutRightColumnSize,
} from './ThreeColumnLayout.consts';

export default defineComponent({
	name: 'ThreeColumnLayout',
	props: {
		rightColumnSize: {
			type: String as PropType<ThreeColumnLayoutRightColumnSize>,
			default: THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
			validator(rightColumnSize) {
				return Object.values(THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE).includes(
					rightColumnSize,
				);
			},
		},
		rightColumnVisible: {
			type: Boolean,
			default: true,
		},
		leftColumnVisible: {
			type: Boolean,
			default: true,
		},
		initialMobileRightColumnVisibleState: {
			type: Boolean,
			default: false,
		},
		initialMobileLeftColumnVisibleState: {
			type: Boolean,
			default: false,
		},
		contentWithoutPadding: {
			type: Boolean,
			default: false,
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['overlay-clicked'],
	data() {
		return {
			THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE: Object.freeze(
				THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE,
			),

			leftColumnVisibleMobile: false,
			rightColumnVisibleMobile: false,
		};
	},
	watch: {
		leftColumnVisible(state) {
			if (this.leftColumnVisibleMobile !== state) {
				this.leftColumnVisibleMobile = state;
			}
		},
		rightColumnVisible(state) {
			if (this.rightColumnVisibleMobile !== state) {
				this.rightColumnVisibleMobile = state;
			}
		},
	},
	created() {
		this.leftColumnVisibleMobile = this.initialMobileLeftColumnVisibleState;
		this.rightColumnVisibleMobile = this.initialMobileRightColumnVisibleState;
	},
});
</script>
