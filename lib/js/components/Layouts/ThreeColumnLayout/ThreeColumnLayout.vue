<template>
	<div class="layout">
		<div
			class="layout__overlay"
			:class="{
				'-visible': rightColumnVisibleLocal || sideMenuVisibleLocal,
			}"
		/>
		<div
			class="layout__sideMenu"
			:class="{
				'-desktopVisible': sideMenuVisible || sideMenuVisibleLocal,
				'-mobileVisible': sideMenuVisibleLocal,
			}"
		>
			<slot name="leftColumn" />
		</div>
		<div class="layout__contentColumn">
			<div
				class="layout__content"
				:class="{
					'-noPadding': contentWithoutPadding,
				}"
			>
				<slot />
			</div>
		</div>
		<div
			class="layout__rightColumn"
			:class="{
				'-medium': rightColumnSize === THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
				'-large': rightColumnSize === THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE.LARGE,
				'-desktopVisible': rightColumnVisible || rightColumnVisibleLocal,
				'-mobileVisible': rightColumnVisibleLocal,
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

.layout {
	$root: &;

	display: flex;
	flex-wrap: nowrap;
	height: auto;
	position: relative;
	width: 100%;

	&__overlay {
		background: $color-default-overlay;
		display: none;
		height: 100%;
		position: absolute;
		width: 100%;

		@media #{breakpoint-s()} {
			&.-visible {
				display: block;
			}
		}

		@media #{breakpoint-l()} {
			display: none;
		}
	}

	&__sideMenu {
		display: none;
		height: 100%;
		left: 0;
		max-width: $left-column-max-width;
		position: absolute;
		top: 0;
		width: 100%;

		@media #{breakpoint-l()} {
			&.-desktopVisible {
				display: initial;
			}
		}

		@media #{breakpoint-s()} {
			// TODO 23vw as min width on S looks weird
			min-width: $left-column-min-width;
			width: $left-column-width;
		}

		@media #{breakpoint-l()} {
			height: auto;
			left: initial;
			position: initial;
			top: initial;
		}

		&.-mobileVisible {
			display: initial;
		}
	}

	&__contentColumn {
		flex: 1;
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
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;

		@media #{breakpoint-l()} {
			&.-desktopVisible {
				display: initial;
			}
		}

		@media #{breakpoint-l()} {
			height: auto;
			position: initial;
			right: initial;
			top: initial;
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
		sideMenuVisible: {
			type: Boolean,
			default: true,
		},
		rightColumnVisibleLocal: {
			type: Boolean,
			default: false,
		},
		sideMenuVisibleLocal: {
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
		};
	},
};
</script>
