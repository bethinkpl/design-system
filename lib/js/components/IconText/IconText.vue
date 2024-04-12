<template>
	<div
		class="iconText"
		:class="{
			'-neutralWeak': color === ICON_TEXT_COLORS.NEUTRAL_WEAK,
			'-neutral': color === ICON_TEXT_COLORS.NEUTRAL,
			'-xSmall': size === ICON_TEXT_SIZES.X_SMALL,
			'-small': size === ICON_TEXT_SIZES.SMALL,
			'-medium': size === ICON_TEXT_SIZES.MEDIUM,
			'-bold': isLabelBold,
			'-interactive': isInteractive && state !== ICON_TEXT_STATES.DISABLED,
			'-disabled': state === ICON_TEXT_STATES.DISABLED,
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
	pointer-events: none;

	&.-neutralWeak {
		color: $color-neutral-text-weak;

		&:hover {
			color: $color-neutral-text-weak-hovered;

			#{$root}__icon {
				color: $color-neutral-icon-weak-hovered;
			}
		}

		&.-disabled {
			color: $color-neutral-text-weak-disabled;

			#{$root}__icon {
				color: $color-neutral-icon-weak-disabled;
			}
		}

		#{$root}__icon {
			color: $color-neutral-icon-weak;
		}
	}

	&.-neutral {
		color: $color-neutral-text;

		&:hover {
			color: $color-neutral-text-hovered;

			#{$root}__icon {
				color: $color-neutral-icon-hovered;
			}
		}

		&.-disabled {
			color: $color-neutral-text-disabled;

			#{$root}__icon {
				color: $color-neutral-icon-disabled;
			}
		}

		#{$root}__icon {
			color: $color-neutral-icon;
		}
	}

	&.-xSmall {
		@include label-s-default-regular;

		&.-bold {
			@include label-s-default-bold;
		}

		#{$root}__icon {
			margin-right: $space-4xs;
		}
	}

	&.-small {
		@include label-m-default-regular;

		&.-bold {
			@include label-m-default-bold;
		}

		#{$root}__icon {
			padding-top: $space-5xs;
		}
	}

	&.-medium {
		@include label-l-default-regular;

		&.-bold {
			@include label-l-default-bold;
		}
	}

	&.-interactive {
		cursor: pointer;
		pointer-events: auto;
	}

	&__icon {
		margin-right: $space-3xs;
	}
}
</style>

<script lang="ts">
import Icon, { ICON_SIZES, ICONS } from '../Icons/Icon';
import { ICON_TEXT_COLORS, ICON_TEXT_SIZES, ICON_TEXT_STATES } from './IconText.consts';
import { Value } from '../../utils/type.utils';
import { toRaw } from 'vue';

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
			validate: (icon) => Object.values(ICONS).includes(toRaw(icon)),
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
		state: {
			type: String,
			default: ICON_TEXT_STATES.DEFAULT,
			validator(value: Value<typeof ICON_TEXT_STATES>) {
				return Object.values(ICON_TEXT_STATES).includes(value);
			},
		},
	},
	data() {
		return {
			ICON_SIZES: Object.freeze(ICON_SIZES),
			ICON_TEXT_COLORS: Object.freeze(ICON_TEXT_COLORS),
			ICON_TEXT_SIZES: Object.freeze(ICON_TEXT_SIZES),
			ICON_TEXT_STATES: Object.freeze(ICON_TEXT_STATES),
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
