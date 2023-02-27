<template>
	<div
		class="iconText"
		:class="{
			'-neutralWeak': color === ICON_TEXT_COLORS.NEUTRAL_WEAK,
			'-neutralStrong': color === ICON_TEXT_COLORS.NEUTRAL_STRONG,
			'-xSmall': size === ICON_TEXT_SIZES.X_SMALL,
			'-small': size === ICON_TEXT_SIZES.SMALL,
			'-medium': size === ICON_TEXT_SIZES.MEDIUM,
			'-bold': isLabelBold,
		}"
	>
		<icon v-if="icon" class="iconText__icon" :icon="icon" :size="iconSize" />
		<div>{{ label }}</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/spacings';

.iconText {
	$root: &;

	align-items: flex-start;
	display: flex;

	&.-neutralWeak {
		color: $color-neutral-text-weak;

		#{$root}__icon {
			color: $color-neutral-icon-weak;
		}
	}

	&.-neutralStrong {
		color: $color-neutral-text-strong;

		#{$root}__icon {
			color: $color-neutral-icon;
		}
	}

	&.-xSmall {
		@include label-s-default-regular;

		&.-bold {
			@include label-s-default-bold;
		}
	}

	&.-small {
		@include label-m-default-regular;

		&.-bold {
			@include label-m-default-bold;
		}
	}

	&.-medium {
		@include label-l-default-regular;

		&.-bold {
			@include label-l-default-bold;
		}

		#{$root}__icon {
			margin-right: $space-xxxs;
		}
	}

	&__icon {
		margin-right: $space-xxxxs;
	}
}
</style>

<script lang="ts">
import Icon, { ICON_SIZES, ICONS } from '../Icons/Icon';
import { ICON_TEXT_COLORS, ICON_TEXT_SIZES } from './IconText.consts';

export default {
	name: 'IconText',
	components: {
		Icon,
	},
	props: {
		color: {
			type: String,
			default: ICON_TEXT_COLORS.NEUTRAL_WEAK,
			validator(color) {
				return Object.values(ICON_TEXT_COLORS).includes(color);
			},
		},
		icon: {
			type: Object,
			required: true,
			validate: (icon) => Object.values(ICONS).includes(icon),
		},
		isInteractive: {
			type: Boolean,
			default: false,
		},
		isLabelBold: {
			type: Boolean,
			default: false,
		},
		label: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			default: ICON_TEXT_SIZES.X_SMALL,
			validator(size) {
				return Object.values(ICON_TEXT_SIZES).includes(size);
			},
		},
	},
	data() {
		return {
			ICON_SIZES: Object.freeze(ICON_SIZES),
			ICON_TEXT_COLORS: Object.freeze(ICON_TEXT_COLORS),
			ICON_TEXT_SIZES: Object.freeze(ICON_TEXT_SIZES),
		};
	},
	computed: {
		iconSize(): string {
			if ([ICON_TEXT_SIZES.SMALL, ICON_TEXT_SIZES.X_SMALL].includes(this.size)) {
				return ICON_SIZES.XX_SMALL;
			}

			return ICON_SIZES.X_SMALL;
		},
	},
};
</script>
