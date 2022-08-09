<template>
	<div class="drawer" :class="{ [positionClassName]: true }">
		<slot name="header" />
		<slot />
		<slot name="footer" />
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/media-queries';

.drawer {
	border-color: $color-neutral-border-weak;
	border-style: solid;
	border-width: 0;
	height: 100%;

	@media #{breakpoint-s()} {
		&.-positionLeft {
			border-right-width: 1px;
		}

		&.-positionRight {
			border-left-width: 1px;
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
				Object.values(DRAWER_POSITIONS).includes(position);
			},
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
