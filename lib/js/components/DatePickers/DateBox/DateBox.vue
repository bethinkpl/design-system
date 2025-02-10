<template>
	<div
		class="ds-dateBox"
		:class="{
			'-ds-disabled': state === DATE_PICKER_STATES.DISABLED,
			'-ds-loading': state === DATE_PICKER_STATES.LOADING,
			'-ds-interactive': isInteractive,
			'-ds-warning': color === DATE_PICKER_COLORS.WARNING,
			'-ds-neutralWeak': DATE_PICKER_COLORS.NEUTRAL_WEAK === color,
			'-ds-neutral': DATE_PICKER_COLORS.NEUTRAL === color,
			'-ds-danger': color === DATE_PICKER_COLORS.DANGER,
			'-ds-isOpen': isOpen,
		}"
	>
		<div
			class="ds-dateBox__widthWrapper"
			:class="{ '-ds-has-icon': startIcon, '-ds-iconHiddenOnMobile': areIconsHiddenOnMobile }"
		>
			<div class="ds-dateBox__dateWrapper">
				<span v-if="startDateEyebrowText" class="ds-dateBox__eyebrow">{{
					startDateEyebrowText
				}}</span>
				<div class="ds-dateBox__date">
					<ds-icon
						v-if="startIcon"
						class="ds-dateBox__icon"
						:class="{ '-ds-hiddenOnMobile': areIconsHiddenOnMobile }"
						:icon="startIcon"
						:size="ICON_SIZES.XX_SMALL"
					></ds-icon>
					<span class="ds-dateBox__dateText">{{ startDateText }}</span>
				</div>
			</div>
		</div>
		<template v-if="startDate && endDate">
			<span class="ds-dateBox__separator">–</span>
			<div
				class="ds-dateBox__widthWrapper -ds-justify-to-end"
				:class="{
					'-ds-has-icon': endIcon,
					'-ds-iconHiddenOnMobile': areIconsHiddenOnMobile,
				}"
			>
				<div class="ds-dateBox__dateWrapper">
					<span v-if="endDateEyebrowText" class="ds-dateBox__eyebrow">{{
						endDateEyebrowText
					}}</span>
					<div class="ds-dateBox__date">
						<ds-icon
							v-if="endIcon"
							class="ds-dateBox__icon"
							:class="{ '-ds-hiddenOnMobile': areIconsHiddenOnMobile }"
							:icon="endIcon"
							:size="ICON_SIZES.XX_SMALL"
						></ds-icon>
						<span class="ds-dateBox__dateText">{{ endDateText }}</span>
					</div>
				</div>
			</div>
		</template>

		<div v-if="state === DATE_PICKER_STATES.LOADING" class="ds-dateBox__loader">
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
	$color-background,
	$color-background-hovered,
	$color-background-disabled,
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
		background-color: $color-background;

		&:hover {
			#{$self}__icon {
				color: $color-icon-hovered;
			}

			#{$self}__dateWrapper {
				color: $color-date-hovered;
			}
		}
	}

	&.-ds-disabled {
		background-color: $color-background-disabled;

		#{$self}__eyebrow {
			color: $color-eyebrow-disabled;
		}

		#{$self}__dateWrapper {
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

			#{$self}__dateWrapper {
				color: $color-date;
			}
		}
	}

	#{$self}__eyebrow {
		color: $color-eyebrow;
	}

	#{$self}__dateWrapper {
		color: $color-date;
	}

	#{$self}__icon {
		color: $color-icon;
	}

	#{$self}__loader {
		color: $color-icon;
	}

	&:not(.-ds-loading) {
		&:not(.-ds-disabled) {
			&.-ds-interactive {
				&:hover:not(.-ds-isOpen) {
					background-color: $color-background-hovered;
				}
			}
		}
	}
}

.ds-dateBox {
	$self: &;

	align-items: center;
	border: $border-xs solid transparent;
	column-gap: $space-2xs;
	display: flex;
	justify-content: space-between;
	min-height: 46px;
	min-width: 76px;
	padding: $space-2xs $space-xs;
	pointer-events: none;
	position: relative;

	&__dateWrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	/**
	 * setting a width for a component solves a problem with unaligned separators for many boxes in a column
	 * 46px comes from the minimum component width, not minimum content width
	 * 52px comes from the maximum content width with an icon
	 */
	&__widthWrapper {
		display: inline-flex;
		min-width: 46px;

		&.-ds-has-icon {
			min-width: 52px;
		}

		&.-ds-justify-to-end {
			justify-content: flex-end;
		}

		&.-ds-iconHiddenOnMobile {
			&.-ds-has-icon {
				min-width: 46px;

				@media (#{breakpoint-s()}) {
					min-width: 52px;
				}
			}
		}
	}

	&__separator {
		@include text-s-default-regular;

		color: $color-neutral-text-heavy;
	}

	&.-ds-loading,
	&.-ds-interactive {
		border-color: $color-neutral-border-weak;
		border-radius: $radius-s;
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

	&__date {
		column-gap: $space-4xs;
		display: inline-flex;

		/* Prevent text select */
		-webkit-user-select: none; /* Safari */
		user-select: none;
	}

	&__dateText {
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
	&.-ds-neutralWeak {
		@include color-scheme(
			$color-neutral-background-weak,
			$color-neutral-background-weak-hovered,
			$color-neutral-background-weak-disabled,
			$color-neutral-text-weak,
			$color-neutral-text-heavy,
			$color-neutral-icon,
			$color-neutral-icon-hovered,
			$color-neutral-text-heavy-hovered,
			$color-neutral-icon-disabled,
			$color-neutral-text-weak-disabled,
			$color-neutral-text-heavy-disabled,
			$self
		);
	}

	&.-ds-neutral {
		@include color-scheme(
			$color-neutral-background,
			$color-neutral-background-hovered,
			$color-neutral-background-disabled,
			$color-neutral-text-weak,
			$color-neutral-text-heavy,
			$color-neutral-icon,
			$color-neutral-icon-hovered,
			$color-neutral-text-heavy-hovered,
			$color-neutral-icon-disabled,
			$color-neutral-text-weak-disabled,
			$color-neutral-text-heavy-disabled,
			$self
		);
	}

	&:not(.-ds-loading) {
		&:not(.-ds-disabled) {
			&.-ds-interactive {
				cursor: pointer;
				pointer-events: all;
			}
		}

		&.-ds-warning {
			@include color-scheme(
				$color-neutral-background-weak,
				$color-neutral-background-weak-hovered,
				$color-neutral-background-weak-disabled,
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

		&.-ds-danger {
			@include color-scheme(
				$color-neutral-background-weak,
				$color-neutral-background-weak-hovered,
				$color-neutral-background-weak-disabled,
				$color-danger-text,
				$color-danger-text,
				$color-danger-icon,
				$color-danger-icon-hovered,
				$color-danger-text-hovered,
				$color-danger-icon-disabled,
				$color-danger-text-disabled,
				$color-danger-text-disabled,
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
import { defineComponent, PropType, toRaw } from 'vue';
import {
	localMonthDayWithShortMonthDay,
	localWeekdayName,
} from '../../../../../tools/importers/helpers/dates';
import { capitalizeFirstLetter } from '../../../../../tools/importers/helpers/modifiers';

export default defineComponent({
	name: 'DateBox',
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
		startDate: {
			type: Date,
			default: null,
		},
		endDate: {
			type: Date,
			default: null,
		},
		startIcon: {
			type: Object,
			default: null,
			validate: (icon) => icon === null || Object.values(ICONS).includes(toRaw(icon)),
		},
		endIcon: {
			type: Object,
			default: null,
			validate: (icon) => icon === null || Object.values(ICONS).includes(toRaw(icon)),
		},
		areIconsHiddenOnMobile: {
			type: Boolean,
			default: false,
		},
		state: {
			type: (String as PropType<DatePickerStates>) || null,
			default: DATE_PICKER_STATES.DEFAULT,
		},
		color: {
			type: String as PropType<DatePickerColors>,
			default: DATE_PICKER_COLORS.NEUTRAL_WEAK,
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
		startDateText() {
			if (this.startDate) {
				return localMonthDayWithShortMonthDay(this.startDate);
			}
			return this.placeholder;
		},
		endDateText() {
			return localMonthDayWithShortMonthDay(this.endDate);
		},
		startDateEyebrowText() {
			if (!this.startDate) {
				return '';
			}
			return capitalizeFirstLetter(localWeekdayName(this.startDate));
		},
		endDateEyebrowText() {
			if (!this.endDate) {
				return '';
			}
			return capitalizeFirstLetter(localWeekdayName(this.endDate));
		},
	},
});
</script>
