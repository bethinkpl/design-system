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
			<div v-if="rightColumVisible" class="layout__rightColumn -medium">right</div>
			<div v-else class="layout__sideBar">sidebar</div>
		</template>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/media-queries';

.layout {
	width: 100%;
	height: auto;
	padding: 0;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;

	// remove
	font-size: 12px;
	color: #fff;

	&__leftColumn {
		background: lightpink;
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		width: 23vw;
		min-width: 200px;
		max-width: 400px;
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
import { LAYOUT_CONTENT, LayoutContent } from './Layout.consts';

export default {
	name: 'Layout',
	props: {
		content: {
			type: String as PropType<LayoutContent>,
			default: LAYOUT_CONTENT.MAX_900,
			validator(content) {
				return Object.values(LAYOUT_CONTENT).includes(content);
			},
		},
	},
	computed: {
		rightColumVisible() {
			return true;
		},
		isContentFullWidth() {
			return this.content === LAYOUT_CONTENT.FULL_WIDTH;
		},
	},
};
</script>
