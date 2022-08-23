<template>
	<vue-popper
		:boundaries-selector="boundariesSelector"
		:force-show="forceShow"
		:options="{ placement }"
		:trigger="trigger"
	>
		<div class="popper o-popper" :class="{ '-alabaster-grey': isBackgroundAlabasterGrey }">
			<div class="o-popper__content">
				<slot />
			</div>
		</div>

		<slot slot="reference" name="reference" />
	</vue-popper>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/colors';
@import '../../../styles/settings/radiuses';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/spacings';

.o-popper {
	background-color: $color-total-white;
	border-radius: $radius-m;
	box-shadow: $default-shadow;
	padding: 0;
	max-width: 320px;

	&.-alabaster-grey ::v-deep .popper__arrow {
		border-color: $color-alabaster-gray transparent !important;
	}

	&.-alabaster-grey {
		background-color: $color-alabaster-gray;
	}

	&[x-placement^='bottom'] {
		margin-top: $space-s;

		::v-deep .popper__arrow {
			border-color: transparent transparent $color-total-white transparent;
			border-width: 0 $space-xs $space-s $space-xs;
			left: calc(50% - #{$space-xs});
			margin-bottom: 0;
			margin-top: 0;
			top: -$space-s;
		}
	}

	&[x-placement^='top'] {
		margin-bottom: $space-s;

		::v-deep .popper__arrow {
			border-color: $color-total-white transparent transparent transparent;
			border-width: $space-s $space-xs 0 $space-xs;
			bottom: -$space-s;
			left: calc(50% - #{$space-xs});
			margin-bottom: 0;
			margin-top: 0;
		}
	}

	&[x-placement^='right'] {
		margin-left: $space-s;

		::v-deep .popper__arrow {
			border-color: transparent $color-total-white transparent transparent;
			border-width: $space-xs $space-s $space-xs 0;
			left: -$space-s;
			margin-left: 0;
			margin-right: 0;
			top: calc(50% - #{$space-xs});
		}
	}

	&[x-placement^='left'] {
		margin-right: $space-s;

		::v-deep .popper__arrow {
			border-color: transparent transparent transparent $color-total-white;
			border-width: $space-xs 0 $space-xs $space-s;
			margin-left: 0;
			margin-right: 0;
			right: -$space-s;
			top: calc(50% - #{$space-xs});
		}
	}

	&__content {
		padding: $space-m;
	}
}
</style>

<script>
import VuePopper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
	name: 'PopOver',
	components: {
		VuePopper,
	},
	props: {
		boundariesSelector: {
			type: String,
			default: null,
		},
		trigger: {
			type: String,
			default: 'click',
		},
		placement: {
			type: String,
			default: 'bottom',
			validate(placement) {
				return ['top', 'bottom', 'left', 'right'].includes(placement);
			},
		},
		forceShow: {
			type: Boolean,
			default: false,
		},
		isBackgroundAlabasterGrey: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
