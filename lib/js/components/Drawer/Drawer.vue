<template>
	<div
		class="ds-drawer scrollable-container"
		:class="[positionClassName, backgroundColorClassName]"
	>
		<div v-if="$slots.header && stickyHeader" class="ds-drawer__header -ds-sticky">
			<slot name="header" />
		</div>
		<div
			class="ds-drawer__content"
			:class="{
				'scrollable-container': stickyHeader || stickyFooter,
				'-ds-scrollable': stickyHeader || stickyFooter,
				'-ds-fullHeight': stickyFooter,
			}"
		>
			<div v-if="$slots.header && !stickyHeader" class="ds-drawer__header">
				<slot name="header" />
			</div>
			<slot />
			<div v-if="$slots.footer && !stickyFooter" class="ds-drawer__footer">
				<slot name="footer" />
			</div>
		</div>
		<div v-if="$slots.footer && stickyFooter" class="ds-drawer__footer -ds-sticky">
			<slot name="footer" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/media-queries';

.ds-drawer {
	border-color: $color-neutral-border-weak;
	border-style: solid;
	border-width: 0;
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow-y: auto;

	@media #{breakpoint-s()} {
		&.-ds-positionLeft {
			border-right-width: 1px;
		}

		&.-ds-positionRight {
			border-left-width: 1px;
		}
	}

	&.-ds-backgroundDefault {
		background-color: $color-default-background;
	}

	&.-ds-backgroundNeutral {
		background-color: $color-neutral-background;
	}

	&__header,
	&__footer {
		flex-shrink: 0;

		&.-ds-sticky {
			// Display above __content to correctly show shadows in __header and __footer
			z-index: 1;
		}
	}

	&__content {
		&.-ds-scrollable {
			overflow-y: auto;
		}

		&.-ds-fullHeight {
			flex-grow: 1;
		}
	}
}
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import {
	DRAWER_BACKGROUND_COLORS,
	DRAWER_POSITIONS,
	DrawerBackgroundColor,
	DrawerPosition,
} from './Drawer.consts';

export default defineComponent({
	name: 'Drawer',
	props: {
		position: {
			type: String as PropType<DrawerPosition>,
			default: DRAWER_POSITIONS.RIGHT,
			validator(position: DrawerPosition) {
				return Object.values(DRAWER_POSITIONS).includes(position);
			},
		},
		stickyHeader: {
			type: Boolean,
			default: true,
		},
		stickyFooter: {
			type: Boolean,
			default: true,
		},
		backgroundColor: {
			type: String as PropType<DrawerBackgroundColor>,
			default: DRAWER_BACKGROUND_COLORS.NONE,
			validator(backgroundColor: DrawerBackgroundColor) {
				return Object.values(DRAWER_BACKGROUND_COLORS).includes(backgroundColor);
			},
		},
	},
	computed: {
		positionClassName(): string {
			if (this.position === DRAWER_POSITIONS.LEFT) {
				return '-ds-positionLeft';
			}

			return '-ds-positionRight';
		},
		backgroundColorClassName(): string | null {
			switch (this.backgroundColor) {
				case DRAWER_BACKGROUND_COLORS.DEFAULT:
					return '-ds-backgroundDefault';
				case DRAWER_BACKGROUND_COLORS.NEUTRAL:
					return '-ds-backgroundNeutral';
				default:
					return null;
			}
		},
	},
});
</script>
