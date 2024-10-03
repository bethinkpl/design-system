<template>
	<div class="ds-loadingBar" :class="[sizeClassName]">
		<span
			:class="['ds-loadingBar__loader', `-ds-border-color-${color}`]"
			:style="loadingBarStyles"
		/>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/borders';

.ds-loadingBar {
	background-color: $color-neutral-background;
	display: flex;

	&.-ds-size-small {
		height: $border-s;
	}

	&.-ds-size-medium {
		height: $border-m;
	}

	&.-ds-size-large {
		height: $border-l;
	}

	&__loader {
		width: 0;

		&.-ds-border-color-neutralHeavy {
			background-color: $color-neutral-border-heavy;
		}

		&.-ds-border-color-neutralStrong {
			background-color: $color-neutral-border-strong;
		}

		&.-ds-border-color-success {
			background-color: $color-success-border;
		}

		&.-ds-border-color-warning {
			background-color: $color-warning-border;
		}

		&.-ds-border-color-danger {
			background-color: $color-danger-border;
		}

		&.-ds-border-color-info {
			background-color: $color-info-border;
		}
	}
}
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
	LOADING_BAR_COLORS,
	LOADING_BAR_SIZES,
	LoadingBarColors,
	LoadingBarSizes,
} from './LoadingBar.consts';

export default defineComponent({
	name: 'LoadingBar',
	props: {
		color: {
			type: String as PropType<LoadingBarColors>,
			default: LOADING_BAR_COLORS.NEUTRAL_HEAVY,
		},
		size: {
			type: String as PropType<LoadingBarSizes>,
			default: LOADING_BAR_SIZES.LARGE,
		},
		time: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			intervalId: 0,
			width: 0,
		};
	},
	computed: {
		sizeClassName() {
			return `-ds-size-${this.size}`;
		},
		loadingBarStyles() {
			return {
				width: `${this.width}%`,
				transition: `width ${this.time}s linear`,
			};
		},
	},
	mounted() {
		if (this.time === '0') {
			this.width = 100;
			return;
		}
		// without postponing the width change, the transition won't work,
		// and the loading bar is 100% width right away
		setTimeout(() => {
			this.width = 100;
		}, 0);
	},
});
</script>
