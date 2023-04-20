<template>
	<div>
		<div v-if="!disableRipple" v-ripple class="rippleWrapper" :class="{ [colorClass]: true }">
			<slot />
		</div>
		<div v-else><slot /></div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';

.rippleWrapper {
	&.-color-accent:deep(.ripple) {
		background-color: $color-accent-ripple !important;
	}

	&.-color-danger:deep(.ripple) {
		background-color: $color-danger-ripple !important;
	}

	&.-color-default:deep(.ripple) {
		background-color: $color-default-ripple !important;
	}

	&.-color-fail:deep(.ripple) {
		background-color: $color-fail-ripple !important;
	}

	&.-color-info:deep(.ripple) {
		background-color: $color-info-ripple !important;
	}

	&.-color-inverted:deep(.ripple) {
		background-color: $color-inverted-ripple !important;
	}

	&.-color-neutral:deep(.ripple) {
		background-color: $color-neutral-ripple !important;
	}

	&.-color-primary:deep(.ripple) {
		background-color: $color-primary-ripple !important;
	}

	&.-color-success:deep(.ripple) {
		background-color: $color-success-ripple !important;
	}

	&.-color-warning:deep(.ripple) {
		background-color: $color-warning-ripple !important;
	}
}
</style>

<script lang="ts">
import RippleDirective from 'vue-ripple-directive';

import { RIPPLE_COLORS } from './Ripple.consts';

export default {
	name: 'Ripple',
	directives: {
		ripple: RippleDirective,
	},
	props: {
		color: {
			type: String,
			default: RIPPLE_COLORS.DEFAULT,
			validator(color) {
				return Object.values(RIPPLE_COLORS).includes(color);
			},
		},
		disable: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return { disableRipple: false };
	},
	computed: {
		colorClass(): string {
			return `-color-${this.color}`;
		},
	},
	watch: {
		disable: {
			handler(value: boolean) {
				setTimeout(() => {
					this.disableRipple = value;
				}, 600);
			},
			immediate: true,
		},
	},
};
</script>
