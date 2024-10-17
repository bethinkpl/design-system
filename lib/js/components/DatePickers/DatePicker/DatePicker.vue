<template>
	<div
		ref="dateRangePickerRef"
		class="ds-datePicker"
		:class="{ '-ds-box': triggerType === DATE_PICKER_TRIGGER_TYPES.BOX }"
	>
		<template v-if="triggerType === DATE_PICKER_TRIGGER_TYPES.TILE">
			<div class="ds-datePicker__labelWrapper">
				<span
					v-if="label"
					class="ds-datePicker__label"
					:class="{
						'-ds-isUppercase': isLabelUppercase,
						'-ds-disabled': state === DATE_PICKER_STATES.DISABLED,
					}"
					>{{ label }}</span
				>
				<template v-if="$slots.default">
					<slot />
				</template>
			</div>
			<ds-tile
				class="ds-datePicker__tile"
				:text="text"
				:interactive="isInteractive"
				:color="color as TileColors"
				:state="state as TileStates"
				:icon-right="tileIcon"
				:is-icon-right-hidden-on-mobile="isIconHiddenOnMobile"
				:eyebrow-text="eyebrowText"
				@click="toggle"
			/>
		</template>
		<date-picker-box
			v-else
			:is-interactive="isInteractive"
			:placeholder="placeholder"
			:start-date="date"
			:start-icon="icon"
			:are-icons-hidden-on-mobile="isIconHiddenOnMobile"
			:state="state"
			:color="color"
			:start-date-eyebrow-text="eyebrowText"
			:is-open="isOpen"
			@click="toggle"
		/>

		<span v-if="errorMessage" class="ds-datePicker__errorMessage"> {{ errorMessage }} </span>
		<input ref="flatpickrInputRef" class="ds-datePicker__hiddenInput" />
	</div>
</template>

<style lang="scss">
@import 'flatpickr/dist/flatpickr';
</style>

<style lang="scss" scoped>
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/spacings';

.ds-datePicker {
	$self: &;

	display: flex;
	flex-direction: column;
	row-gap: $space-4xs;

	&.-ds-box {
		display: inline-flex;
	}

	&__hiddenInput {
		display: none;
	}

	&__labelWrapper {
		align-items: flex-end;
		display: flex;
		justify-content: space-between;
		padding-bottom: $space-2xs;
	}

	&__label {
		@include label-l-default-bold;

		color: $color-neutral-text-strong;

		&.-ds-isUppercase {
			@include label-m-extensive-bold-uppercase;

			color: $color-neutral-text;
		}

		&.-ds-disabled {
			color: $color-neutral-text-strong-disabled;

			&.-ds-isUppercase {
				color: $color-neutral-text-disabled;
			}
		}
	}

	&__tile {
		min-height: 56px;

		/* Prevent text select */
		-webkit-user-select: none; /* Safari */
		user-select: none;
	}

	&__errorMessage {
		@include info-s-default-regular;

		color: $color-danger-text;
	}
}
</style>

<script setup lang="ts">
import { computed, defineEmits, PropType, Ref, ref, toRaw } from 'vue';

import DsTile, { TileColors, TileStates } from '../../Tile';
import { IconItem, ICONS } from '../../Icons/Icon';
import DatePickerBox from '../DatePickerBox';

import {
	DATE_PICKER_CALENDAR_POSITIONS,
	DATE_PICKER_COLORS,
	DATE_PICKER_STATES,
	DATE_PICKER_TRIGGER_TYPES,
	DatePickerCalendarPositions,
	DatePickerColors,
	DatePickerStates,
	DatePickerTriggerTypes,
} from './DatePicker.consts';
import { capitalizeFirstLetter } from '../../../../../tools/importers/helpers/modifiers';
import { initFlatpickr } from './DatePicker.composables';
import {
	localFullDateWithShortMonthName,
	localWeekdayName,
} from '../../../../../tools/importers/helpers/dates';

const dateRangePickerRef = ref() as Ref<HTMLDivElement>;
const flatpickrInputRef = ref() as Ref<HTMLInputElement>;

const props = defineProps({
	triggerType: {
		type: String as PropType<DatePickerTriggerTypes>,
		default: DATE_PICKER_TRIGGER_TYPES.TILE,
	},
	isInteractive: {
		type: Boolean,
		default: true,
	},
	placeholder: {
		type: String,
		default: 'Wybierz datę',
	},
	date: {
		type: Date,
		default: null,
	},
	label: {
		type: String,
		default: '',
	},
	isLabelUppercase: {
		type: Boolean,
		default: false,
	},
	icon: {
		type: [Object, null] as PropType<IconItem | null>,
		default: ICONS.FA_CALENDAR_DAY,
		validator(icon) {
			return icon === null || Object.values(ICONS).includes(toRaw(icon));
		},
	},
	isIconHiddenOnMobile: {
		type: Boolean,
		default: false,
	},
	errorMessage: {
		type: String,
		default: '',
	},
	state: {
		type: String as PropType<DatePickerStates>,
		default: DATE_PICKER_STATES.DEFAULT,
	},
	color: {
		type: String as PropType<DatePickerColors>,
		default: DATE_PICKER_COLORS.NEUTRAL,
	},
	calendarPosition: {
		type: String as PropType<DatePickerCalendarPositions>,
		default: DATE_PICKER_CALENDAR_POSITIONS.BOTTOM_LEFT,
	},
	disableDates: {
		type: Array as PropType<Array<Date>>,
		default: () => [],
	},
	minDate: {
		type: Date,
		default: null,
	},
	maxDate: {
		type: Date,
		default: null,
	},
});

const emit = defineEmits({ 'update:date': (value: Date) => true });
const onChange = (event: Array<Date>) => {
	emit('update:date', event[0]);
};

const eyebrowText = computed(() => {
	if (!props.date || props.state === DATE_PICKER_STATES.LOADING) {
		return '';
	}

	return capitalizeFirstLetter(localWeekdayName(props.date));
});

const text = computed(() => {
	if (props.state === DATE_PICKER_STATES.LOADING || !props.date) {
		return props.placeholder;
	}

	return localFullDateWithShortMonthName(props.date);
});

const { isOpen, toggle } = initFlatpickr(
	flatpickrInputRef,
	dateRangePickerRef,
	props,
	onChange,
	props.date,
);

const tileIcon = computed(() => {
	if (!props.icon) {
		return null;
	}

	return isOpen.value ? ICONS.FA_CHEVRON_UP : props.icon;
});
</script>
