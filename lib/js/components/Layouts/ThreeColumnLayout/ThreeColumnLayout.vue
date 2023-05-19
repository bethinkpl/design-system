<template>
	<div class="threeColumnLayout">
		<div
			class="threeColumnLayout__overlay"
			:class="{
				'-visible': rightColumnVisibleMobile || leftColumnVisibleMobile,
			}"
		/>
		<div
			class="threeColumnLayout__leftColumn"
			:class="{
				'-desktopVisible': leftColumnVisible || leftColumnVisibleMobile,
				'-mobileVisible': leftColumnVisibleMobile,
			}"
		>
			<slot name="leftColumn" />
		</div>
		<div class="threeColumnLayout__contentColumn">
			<div
				class="threeColumnLayout__content"
				:class="{
					'-noPadding': contentWithoutPadding,
				}"
			>
				<slot />
			</div>
		</div>
		<div
			class="threeColumnLayout__rightColumn"
			:class="{
				'-medium': rightColumnSize === THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
				'-large': rightColumnSize === THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.LARGE,
				'-desktopVisible': rightColumnVisible || rightColumnVisibleMobile,
				'-mobileVisible': rightColumnVisibleMobile,
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
$left-column-min-width: 200px;
$left-column-max-width: 400px;

$content-column-max-width: 900px;

$right-column-medium-max-width: 400px;
$right-column-medium-l-width: 30vw;
$right-column-medium-l-min-width: 320px;
$right-column-medium-l-max-width: 400px;
$right-column-large-max-width: 560px;
$right-column-large-l-width: 30vw;
$right-column-large-l-min-width: 320px;
$right-column-large-l-max-width: 560px;

.threeColumnLayout {
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
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: $z-index-overlay;

		@media #{breakpoint-s()} {
			&.-visible {
				display: block;
			}
		}

		@media #{breakpoint-l()} {
			&.-visible {
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

			&.-desktopVisible {
				display: initial;
			}
		}

		&.-mobileVisible {
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

		&.-noPadding {
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

			&.-desktopVisible {
				display: initial;
			}
		}

		&.-mobileVisible {
			display: initial;
		}

		&.-medium {
			@media #{breakpoint-s()} {
				max-width: $right-column-medium-max-width;
			}

			@media #{breakpoint-l()} {
				max-width: $right-column-medium-l-max-width;
				min-width: $right-column-medium-l-min-width;
				width: $right-column-medium-l-width;
			}
		}

		&.-large {
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
import { PropType } from 'vue';
import {
	THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE,
	ThreeColumnLayoutRightColumnSize,
} from './ThreeColumnLayout.consts';

export default {
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
};
</script>
