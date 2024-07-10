<template>
	<div
		class="ds-datePickerBox"
		:class="{
			'-ds-disabled': state === DATE_PICKER_STATES.DISABLED,
			'-ds-loading': state === DATE_PICKER_STATES.LOADING,
			'-ds-interactive': isInteractive,
			'-ds-warning': color === DATE_PICKER_COLORS.WARNING,
			'-ds-neutral': color === DATE_PICKER_COLORS.NEUTRAL,
			'-ds-isOpen': isOpen,
		}"
	>
		<span v-if="eyebrowText" class="ds-datePickerBox__eyebrow">{{ eyebrowText }}</span>
		<div class="ds-datePickerBox__dateWrapper">
			<ds-icon
				v-if="icon"
				class="ds-datePickerBox__icon"
				:class="{ '-ds-hiddenOnMobile': isIconHiddenOnMobile }"
				:icon="icon"
				:size="ICON_SIZES.XX_SMALL"
			></ds-icon>
			<span class="ds-datePickerBox__date">{{ text }}</span>
		</div>

		<div v-if="state === DATE_PICKER_STATES.LOADING" class="ds-datePickerBox__loader">
			<ds-icon :icon="ICONS.FAD_SPINNER_THIRD" :size="ICON_SIZES.X_SMALL" spinning />
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
	&.-ds-interactive {
		&:hover {
			#{$self}__icon {
				color: $color-icon-hovered;
			}

			#{$self}__date {
				color: $color-date-hovered;
			}
		}
	}

	&.-ds-disabled {
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

	&.-ds-isOpen {
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
	justify-content: center;
	min-height: 44px;
	min-width: 76px;
	padding: $space-2xs $space-xs;
	pointer-events: none;
	position: relative;

	&.-ds-loading,
	&.-ds-interactive {
		background-color: $color-neutral-background-weak;
		border-color: $color-neutral-border-weak;
		border-radius: $radius-s;
	}

	&.-ds-disabled {
		background-color: $color-neutral-background-weak-disabled;
		pointer-events: none;
	}

	&.-ds-isOpen {
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
		display: inline-flex;
	}

	&__date {
		@include text-s-default-regular;
	}

	&__icon {
		&.-ds-hiddenOnMobile {
			display: none;

			@media (#{breakpoint-s()}) {
				display: flex;
			}
		}
	}

	&__loader {
		background-color: inherit;
		display: flex;
		height: calc(100% - $border-s * 2);
		justify-content: center;
		left: $space-5xs;
		position: absolute;
		top: $space-5xs;
		width: calc(100% - $border-s * 2);
	}

	&.-ds-loading,
	&.-ds-neutral {
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

	&:not(.-ds-loading) {
		&.-ds-interactive {
			cursor: pointer;
			pointer-events: all;

			&:hover {
				background-color: $color-neutral-background-weak-hovered;
			}
		}

		&.-ds-warning {
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
}
</style>

<script lang="ts">
import DsIcon, { ICON_SIZES, ICONS } from '../../Icons/Icon';
import {
	DATE_PICKER_COLORS,
	DATE_PICKER_STATES,
	DatePickerColors,
	DatePickerStates,
} from '../DatePicker/DatePicker.consts';
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
			default: 'Ustaw',
		},
		date: {
			type: [String, Date, Number],
			default: null,
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
	computed: {
		text() {
			if (this.date) {
				return new Date(this.date).toLocaleDateString(undefined, {
					month: 'short',
					day: '2-digit',
				});
			}
			return this.placeholder;
		},
	},
};
</script>
