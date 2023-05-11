<template>
	<div class="layout">
		<div class="layout__leftColumn">
			<div class="layout__mainMenu">mainMenu</div>
			<div class="layout__sideNav">sideNav</div>
		</div>
		<div
			class="layout__contentColumn"
			:class="{ '-fullWidth': isContentFullWidth, '-max900': !isContentFullWidth }"
			>content
		</div>
		<template v-if="!isContentFullWidth">
			<div class="layout__overlay" />
			<div
				v-if="rightColumVisible"
				class="layout__rightColumn"
				:class="{
					'-medium': rightColumnSize === LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
					'-large': rightColumnSize === LAYOUT_RIGHT_COLUMN_SIZE.LARGE,
				}"
			>
				right
			</div>
			<div v-else class="layout__sideBar">sidebar</div>
		</template>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/media-queries';

.layout {
	$root: &;

	width: 100%;
	height: auto;
	padding: 0;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	position: relative;

	// remove
	font-size: 12px;
	color: #fff;

	&__overlay {
		//display: block;
		display: none;
		background: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100%;
		position: absolute;

		@media #{breakpoint-s()} {
			display: block;
		}
		@media #{breakpoint-m()} {
			display: block;
		}
		@media #{breakpoint-l()} {
			display: none;
		}
	}

	&__leftColumn {
		background: lightpink;
		flex-wrap: nowrap;
		justify-content: flex-start;
		width: 23vw;
		min-width: 200px;
		max-width: 400px;

		display: none;

		@media #{breakpoint-s()} {
		}
		@media #{breakpoint-m()} {
			display: flex;
		}
		@media #{breakpoint-l()} {
		}
	}

	&__mainMenu {
		background: rgba(red(#f91bd6), green(#f91bd6), blue(#f91bd6), 0.5);
		width: 80px;
		height: 100%;
	}

	&__sideNav {
		background: #f91bd6;
		width: 100%;
		height: 100%;
	}

	&__contentColumn {
		flex: 1;
		width: auto;
		padding: 16px;

		&.-max900 {
			background: #9133c2;
			max-width: 900px;
		}

		&.-fullWidth {
			background: #25a77a;
			width: 100%;
		}
	}

	&__rightColumn {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;

		@media #{breakpoint-s()} {
		}
		@media #{breakpoint-m()} {
		}
		@media #{breakpoint-l()} {
			position: initial;
			top: initial;
			right: initial;
		}

		&.-medium {
			background: #2c7bfb;
			width: 100%;
			max-width: 400px;

			@media #{breakpoint-l()} {
				width: 30vw;
				min-width: 320px;
				max-width: 400px;
			}
		}

		&.-large {
			background: #817c81;
			width: 100%;
			max-width: 560px;

			@media #{breakpoint-l()} {
				width: 30vw;
				min-width: 320px;
				max-width: 560px;
			}
		}
	}

	&__sideBar {
		background: #ff7272;
		width: 66px;
		height: 100%;
	}
}
</style>

<script lang="ts">
import { PropType } from 'vue';
import {
	LAYOUT_CONTENT_SIZE,
	LAYOUT_RIGHT_COLUMN_SIZE,
	LayoutContentSize,
	LayoutRightColumnSize,
} from './Layout.consts';

export default {
	name: 'Layout',
	props: {
		contentSize: {
			type: String as PropType<LayoutContentSize>,
			default: LAYOUT_CONTENT_SIZE.MAX_900,
			validator(contentSize) {
				return Object.values(LAYOUT_CONTENT_SIZE).includes(contentSize);
			},
		},
		rightColumnSize: {
			type: String as PropType<LayoutRightColumnSize>,
			default: LAYOUT_RIGHT_COLUMN_SIZE.MEDIUM,
			validator(rightColumnSize) {
				return Object.values(LAYOUT_RIGHT_COLUMN_SIZE).includes(rightColumnSize);
			},
		},
		sideBarVisible: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			LAYOUT_RIGHT_COLUMN_SIZE: Object.freeze(LAYOUT_RIGHT_COLUMN_SIZE),
		};
	},
	computed: {
		rightColumVisible() {
			return true;
		},
		isContentFullWidth() {
			return this.contentSize === LAYOUT_CONTENT_SIZE.FULL_WIDTH;
		},
	},
};
</script>
