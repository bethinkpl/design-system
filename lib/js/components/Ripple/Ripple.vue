<template>
	<div>
		<div v-if="!disableRipple" v-ripple class="rippleWrapper" :class="{ [colorClass]: true }">
			<slot></slot>
		</div>
		<div v-else><slot></slot></div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';

.rippleWrapper {
	&.-color-accent::v-deep .ripple {
		background-color: $color-accent-ripple !important;
	}

	&.-color-danger::v-deep .ripple {
		background-color: $color-danger-ripple !important;
	}

	&.-color-default::v-deep .ripple {
		background-color: $color-default-ripple !important;
	}

	&.-color-fail::v-deep .ripple {
		background-color: $color-fail-ripple !important;
	}

	&.-color-info::v-deep .ripple {
		background-color: $color-info-ripple !important;
	}

	&.-color-inverted::v-deep .ripple {
		background-color: $color-default-ripple-inverted !important;
	}

	&.-color-neutral::v-deep .ripple {
		background-color: $color-neutral-ripple !important;
	}

	&.-color-primary::v-deep .ripple {
		background-color: $color-primary-ripple !important;
	}

	&.-color-success::v-deep .ripple {
		background-color: $color-success-ripple !important;
	}

	&.-color-warning::v-deep .ripple {
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
			validate(color) {
				Object.values(RIPPLE_COLORS).includes(color);
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
