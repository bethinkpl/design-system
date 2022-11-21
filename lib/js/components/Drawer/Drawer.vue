<template>
	<div class="drawer scrollable-container" :class="{ [positionClassName]: true }">
		<div v-if="$slots.header && stickyHeader" class="drawer__header">
			<slot name="header" />
		</div>
		<div
			class="drawer__content"
			:class="{
				'scrollable-container': stickyHeader || stickyFooter,
				'-scrollable': stickyHeader || stickyFooter,
				'-fullHeight': stickyFooter,
			}"
		>
			<div v-if="$slots.header && !stickyHeader" class="drawer__header">
				<slot name="header" />
			</div>
			<slot />
			<div v-if="$slots.footer && !stickyFooter" class="drawer__footer">
				<slot name="footer" />
			</div>
		</div>
		<div v-if="$slots.footer && stickyFooter" class="drawer__footer">
			<slot name="footer" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/media-queries';

.drawer {
	border-color: $color-neutral-border-weak;
	border-style: solid;
	border-width: 0;
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow-y: auto;

	@media #{breakpoint-s()} {
		&.-positionLeft {
			border-right-width: 1px;
		}

		&.-positionRight {
			border-left-width: 1px;
		}
	}

	&__header,
	&__footer {
		flex-shrink: 0;
	}

	&__content {
		&.-scrollable {
			overflow-y: auto;
		}

		&.-fullHeight {
			flex-grow: 1;
		}
	}
}
</style>

<script lang="ts">
import { PropType } from 'vue';

import { DRAWER_POSITIONS, DrawerPosition } from './Drawer.consts';

export default {
	name: 'Drawer',
	props: {
		position: {
			type: String as PropType<DrawerPosition>,
			default: DRAWER_POSITIONS.RIGHT,
			validate(position) {
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
	},
	computed: {
		positionClassName(): string {
			if (this.position === DRAWER_POSITIONS.LEFT) {
				return '-positionLeft';
			}

			return '-positionRight';
		},
	},
};
</script>
