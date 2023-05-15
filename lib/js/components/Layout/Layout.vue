<template>
	<div class="layout">
		<div v-if="sideMenuVisible" class="layout__navigation">
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
		<template
			v-if="rightColumnVisible && rightColumnMode === LAYOUT_RIGHT_COLUMN_MODE.COLUMN_VISIBLE"
		>
			<div class="layout__overlay" />
			<div
				class="layout__rightColumn"
				:class="{
					'-medium': rightColumnSize === LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
					'-large': rightColumnSize === LAYOUT_RIGHT_COLUMN_SIZE.LARGE,
				}"
			>
				<slot name="rightColumn" />
			</div>
		</template>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/media-queries';

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
			display: block;
		}

		@media #{breakpoint-l()} {
			display: none;
		}
	}

	&__navigation {
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

	&__contentColumn {
		flex: 1;
		width: auto;
	}

	&__content {
		margin: 0 auto;
		padding: $space-s;
		max-width: $content-column-max-width;

		&.-noPadding {
			padding: 0;
		}
	}

	&__rightColumn {
		height: 100%;
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;

		@media #{breakpoint-l()} {
			height: auto;
			position: initial;
			right: initial;
			top: initial;
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
	LAYOUT_RIGHT_COLUMN_MODE,
	LAYOUT_RIGHT_COLUMN_SIZE,
	LayoutRightColumnMode,
	LayoutRightColumnSize,
} from './Layout.consts';

export default {
	name: 'Layout',
	props: {
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
		rightColumnVisible: {
			type: Boolean,
			default: true,
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
};
</script>
