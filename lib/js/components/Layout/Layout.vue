<template>
	<div class="layout">
		<div v-if="sideMenuVisible" class="layout__leftColumn">
			<div class="layout__mainMenu">
				<slot name="mainMenu" />
			</div>
			<div class="layout__sideNav">
				<slot name="sideNav" />
			</div>
		</div>
		<div
			class="layout__contentColumn"
			:class="{
				'-fullWidth': isContentFullWidth,
				'-max900': !isContentFullWidth,
				'-noPadding': contentWithoutPadding,
			}"
		>
			<slot />
		</div>
		<template v-if="sideBarVisible && $slots.rightColumn">
			<template
				v-if="
					!isContentFullWidth &&
					rightColumnMode === LAYOUT_RIGHT_COLUMN_MODE.COLUMN_VISIBLE
				"
			>
				<div class="layout__overlay" />
				<div
					v-if="
						rightColumVisible &&
						rightColumnMode === LAYOUT_RIGHT_COLUMN_MODE.COLUMN_VISIBLE
					"
					class="layout__rightColumn"
					:class="{
						'-medium': rightColumnSize === LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
						'-large': rightColumnSize === LAYOUT_RIGHT_COLUMN_SIZE.LARGE,
					}"
				>
					<slot name="rightColumn" />
				</div>
			</template>
			<div
				v-if="
					rightColumnMode === LAYOUT_RIGHT_COLUMN_MODE.SIDEBAR_VISIBLE &&
					!isContentFullWidth &&
					$slots.sideBar
				"
				class="layout__sideBar"
			>
				<slot name="sideBar" />
			</div>
		</template>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/media-queries';

$overlay-background-color: rgba(0, 0, 0, 0.7);

$main-menu-width: 80px;

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

$side-bar-width: 66px;

.layout {
	$root: &;

	display: flex;
	flex-wrap: nowrap;
	height: auto;
	justify-content: space-between;
	padding: 0;
	position: relative;
	width: 100%;

	&__overlay {
		background: rgba(0, 0, 0, 0.7);
		display: none;
		height: 100%;
		position: absolute;
		width: 100%;

		@media #{breakpoint-s()} {
			display: block;
		}

		@media #{breakpoint-l()} {
			display: none;
		}
	}

	&__leftColumn {
		display: none;
		flex-wrap: nowrap;
		justify-content: flex-start;
		max-width: $left-column-max-width;
		min-width: $left-column-min-width;
		width: $left-column-width;

		@media #{breakpoint-m()} {
			display: flex;
		}
	}

	&__mainMenu {
		height: 100%;
		width: $main-menu-width;
	}

	&__sideNav {
		height: 100%;
		width: 100%;
	}

	&__contentColumn {
		flex: 1;
		padding: $space-s;
		width: auto;

		&.-noPadding {
			padding: 0;
		}

		&.-max900 {
			margin: 0 auto;
			max-width: $content-column-max-width;
		}

		&.-fullWidth {
			width: 100%;
		}
	}

	&__rightColumn {
		height: 100%;
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;

		@media #{breakpoint-l()} {
			position: initial;
			right: initial;
			top: initial;
		}

		&.-medium {
			max-width: $right-column-medium-max-width;
			width: 100%;

			@media #{breakpoint-l()} {
				max-width: $right-column-medium-l-max-width;
				min-width: $right-column-medium-l-min-width;
				width: $right-column-medium-l-width;
			}
		}

		&.-large {
			max-width: $right-column-large-max-width;
			width: 100%;

			@media #{breakpoint-l()} {
				max-width: $right-column-large-l-max-width;
				min-width: $right-column-large-l-min-width;
				width: $right-column-large-l-width;
			}
		}
	}

	&__sideBar {
		height: 100%;
		width: $side-bar-width;
	}
}
</style>

<script lang="ts">
import { PropType } from 'vue';
import {
	LAYOUT_CONTENT_COLUMN_SIZE,
	LAYOUT_RIGHT_COLUMN_MODE,
	LAYOUT_RIGHT_COLUMN_SIZE,
	LayoutContentColumnSize,
	LayoutRightColumnMode,
	LayoutRightColumnSize,
} from './Layout.consts';

export default {
	name: 'Layout',
	props: {
		contentColumnSize: {
			type: String as PropType<LayoutContentColumnSize>,
			default: LAYOUT_CONTENT_COLUMN_SIZE.MAX_900,
			validator(contentColumnSize) {
				return Object.values(LAYOUT_CONTENT_COLUMN_SIZE).includes(contentColumnSize);
			},
		},
		rightColumnSize: {
			type: String as PropType<LayoutRightColumnSize>,
			default: LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
			validator(rightColumnSize) {
				return Object.values(LAYOUT_RIGHT_COLUMN_SIZE).includes(rightColumnSize);
			},
		},
		rightColumnMode: {
			type: String as PropType<LayoutRightColumnMode>,
			default: LAYOUT_RIGHT_COLUMN_MODE.COLUMN_VISIBLE,
			validator(rightColumnMode) {
				return Object.values(LAYOUT_RIGHT_COLUMN_MODE).includes(rightColumnMode);
			},
		},
		sideBarVisible: {
			type: Boolean,
			default: false,
		},
		sideMenuVisible: {
			type: Boolean,
			default: true,
		},
		contentWithoutPadding: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			LAYOUT_RIGHT_COLUMN_SIZE: Object.freeze(LAYOUT_RIGHT_COLUMN_SIZE),
			LAYOUT_RIGHT_COLUMN_MODE: Object.freeze(LAYOUT_RIGHT_COLUMN_MODE),
		};
	},
	computed: {
		rightColumVisible() {
			return true;
		},
		isContentFullWidth() {
			return this.contentColumnSize === LAYOUT_CONTENT_COLUMN_SIZE.FULL_WIDTH;
		},
	},
};
</script>
