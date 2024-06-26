<template>
	<div
		class="ds-datePickerBox"
		:class="{
			'-disabled': state === DATE_PICKER_STATES.DISABLED,
			'-interactive': isInteractive,
			'-warning': color === DATE_PICKER_COLORS.WARNING,
			'-neutral': color === DATE_PICKER_COLORS.NEUTRAL,
			'-isOpen': isOpen,
		}"
	>
		<span v-if="eyebrowText" class="ds-datePickerBox__eyebrow">{{ eyebrowText }}</span>
		<div class="ds-datePickerBox__dateWrapper">
			<ds-icon
				v-if="icon"
				class="ds-datePickerBox__icon"
				:class="{ '-hiddenOnMobile': isIconHiddenOnMobile }"
				:icon="icon"
				:size="ICON_SIZES.XX_SMALL"
			></ds-icon>
			<span class="ds-datePickerBox__date">{{ date || placeholder }}</span>
		</div>

		<div v-if="state === DATE_PICKER_STATES.LOADING" class="ds-datePickerBox__loader">
			<ds-icon :icon="ICONS.FAD_SPINNER_THIRD" :size="ICON_SIZES.SMALL" spinning />
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/media-queries';
@import '../../../../styles/settings/borders';
@import '../../../../styles/settings/radiuses';

@mixin color-scheme(
	$color-eyebrow,
	$color-date,
	$color-icon,
	$color-icon-hovered,
	$color-date-hovered,
	$color-icon-disabled,
	$color-eyebrow-disabled,
	$color-date-disabled,
	$self
) {
	&.-interactive {
		&:hover {
			#{$self}__icon {
				color: $color-icon-hovered;
			}

			#{$self}__date {
				color: $color-date-hovered;
			}
		}
	}

	&.-disabled {
		#{$self}__eyebrow {
			color: $color-eyebrow-disabled;
		}

		#{$self}__date {
			color: $color-date-disabled;
		}

		#{$self}__icon {
			color: $color-icon-disabled;
		}
	}

	&.-isOpen {
		&:hover {
			#{$self}__icon {
				color: $color-icon;
			}

			#{$self}__date {
				color: $color-date;
			}
		}
	}
	#{$self}__eyebrow {
		color: $color-eyebrow;
	}

	#{$self}__date {
		color: $color-date;
	}

	#{$self}__icon {
		color: $color-icon;
	}

	#{$self}__loader {
		color: $color-icon;
	}
}

.ds-datePickerBox {
	$self: &;

	border: $border-xs solid transparent;
	display: flex;
	flex-direction: column;
	padding: $space-2xs $space-xs;
	pointer-events: none;
	position: relative;

	&.-interactive {
		background-color: $color-neutral-background-weak;
		border-color: $color-neutral-background;
		border-radius: $radius-m;
		cursor: pointer;
		pointer-events: all;

		&:hover {
			background-color: $color-neutral-background-weak-hovered;
		}
	}

	&.-disabled {
		background-color: $color-neutral-background-weak-disabled;
		pointer-events: none;
	}

	&.-isOpen {
		background-color: $color-neutral-background-medium;

		&:hover {
			background-color: $color-neutral-background-medium;
		}
	}

	&__eyebrow {
		@include info-xs-default-regular;
	}

	&__dateWrapper {
		column-gap: $space-4xs;
		display: flex;
	}

	&__date {
		@include text-s-default-regular;
	}

	&__icon {
		&.-hiddenOnMobile {
			display: none;

			@media (#{breakpoint-s()}) {
				display: flex;
			}
		}
	}

	&__loader {
		align-items: center;
		background-color: inherit;
		border-radius: $radius-m;
		display: flex;
		height: calc(100% - $border-s * 2);
		justify-content: center;
		left: 0;
		position: absolute;
		top: 0;
		width: calc(100% - $border-s * 2);
	}

	&.-neutral {
		@include color-scheme(
			$color-neutral-text-weak,
			$color-neutral-text-heavy,
			$color-neutral-icon,
			$color-neutral-icon-hovered,
			$color-neutral-text-heavy,
			$color-neutral-icon-disabled,
			$color-neutral-text-disabled,
			$color-neutral-text-heavy-disabled,
			$self
		);
	}

	&.-warning {
		@include color-scheme(
			$color-warning-text,
			$color-warning-text,
			$color-warning-icon,
			$color-warning-icon-hovered,
			$color-warning-text-hovered,
			$color-warning-icon-disabled,
			$color-warning-text-disabled,
			$color-warning-text-disabled,
			$self
		);
	}
}
</style>

<script lang="ts">
import DsIcon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
import {
	DATE_PICKER_COLORS,
	DATE_PICKER_STATES,
	DatePickerColors,
	DatePickerStates,
} from './DatePicker.consts';
import { PropType, toRaw } from 'vue';

export default {
	name: 'DatePickerBox',
	components: {
		DsIcon,
	},
	props: {
		isInteractive: {
			type: Boolean,
			default: true,
		},
		placeholder: {
			type: String,
			default: 'Wybierz datę',
		},
		date: {
			type: String,
			default: '',
		},
		icon: {
			type: Object,
			default: null,
			validate: (icon) => icon === null || Object.values(ICONS).includes(toRaw(icon)),
		},
		isIconHiddenOnMobile: {
			type: Boolean,
			default: false,
		},
		state: {
			type: (String as PropType<DatePickerStates>) || null,
			default: DATE_PICKER_STATES.DEFAULT,
		},
		color: {
			type: String as PropType<DatePickerColors>,
			default: DATE_PICKER_COLORS.NEUTRAL,
		},
		eyebrowText: {
			type: String,
			default: '',
		},
		isOpen: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			DATE_PICKER_STATES: Object.freeze(DATE_PICKER_STATES),
			DATE_PICKER_COLORS: Object.freeze(DATE_PICKER_COLORS),
		};
	},
};
</script>
