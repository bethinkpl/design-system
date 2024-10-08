<template>
	<div
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
				:color="color"
				:state="state"
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
			:date="date"
			:icon="icon"
			:is-icon-hidden-on-mobile="isIconHiddenOnMobile"
			:state="state"
			:color="color"
			:eyebrow-text="eyebrowText"
			:is-open="isOpen"
			@click="toggle"
		/>

		<span v-if="errorMessage" class="ds-datePicker__errorMessage"> {{ errorMessage }} </span>
		<input ref="flatpickrInput" class="ds-datePicker__hiddenInput" />
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

<script lang="ts">
import { defineComponent, PropType, toRaw } from 'vue';

import DsTile from '../../Tile';
import { ICONS } from '../../Icons/Icon';
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

let flatpickr: Function | null = null;

const FLATPICKR_POSITIONS = {
	[DATE_PICKER_CALENDAR_POSITIONS.BOTTOM_LEFT]: 'below left',
	[DATE_PICKER_CALENDAR_POSITIONS.BOTTOM_RIGHT]: 'below right',
	[DATE_PICKER_CALENDAR_POSITIONS.BOTTOM]: 'below',
	[DATE_PICKER_CALENDAR_POSITIONS.TOP_LEFT]: 'above left',
	[DATE_PICKER_CALENDAR_POSITIONS.TOP_RIGHT]: 'above right',
	[DATE_PICKER_CALENDAR_POSITIONS.TOP]: 'above',
};

export default defineComponent({
	name: 'DatePicker',
	components: {
		DatePickerBox,
		DsTile,
	},
	props: {
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
			type: [Object, null],
			default: ICONS.FA_CALENDAR_DAY,
			validate: (icon) => icon === null || Object.values(ICONS).includes(toRaw(icon)),
		},
		isIconHiddenOnMobile: {
			type: Boolean,
			default: false,
		},
		calendarPosition: {
			type: String as PropType<DatePickerCalendarPositions>,
			default: DATE_PICKER_CALENDAR_POSITIONS.BOTTOM_LEFT,
		},
		errorMessage: {
			type: String,
			default: '',
		},
		state: {
			type: (String as PropType<DatePickerStates>) || null,
			default: DATE_PICKER_STATES.DEFAULT,
		},
		color: {
			type: String as PropType<DatePickerColors>,
			default: DATE_PICKER_COLORS.NEUTRAL,
		},
		disableDates: {
			type: Array,
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
	},
	emits: { 'update:date': () => true },
	data() {
		return {
			datePicker: null,
			isOpen: false,
			DATE_PICKER_STATES: Object.freeze(DATE_PICKER_STATES),
			DATE_PICKER_TRIGGER_TYPES: Object.freeze(DATE_PICKER_TRIGGER_TYPES),
		};
	},
	computed: {
		isDatePickerEnabled() {
			return this.isInteractive && this.state === DATE_PICKER_STATES.DEFAULT;
		},
		eyebrowText() {
			if (!this.date || this.state === DATE_PICKER_STATES.LOADING) {
				return '';
			}

			return capitalizeFirstLetter(
				this.date.toLocaleDateString(undefined, {
					dateStyle: undefined,
					timeStyle: undefined,
					weekday: 'long',
				}),
			);
		},
		text() {
			if (this.state === DATE_PICKER_STATES.LOADING || !this.date) {
				return this.placeholder;
			}

			return this.date.toLocaleDateString(undefined, {
				dateStyle: 'medium',
				timeStyle: undefined,
			});
		},
		tileIcon() {
			if (!this.icon) {
				return null;
			}

			return this.isOpen ? ICONS.FA_CHEVRON_UP : this.icon;
		},
		flatpickrConfigString() {
			return [
				this.maxDate,
				this.minDate,
				this.calendarPosition,
				this.date,
				...this.disableDates,
			].concat('|');
		},
	},
	watch: {
		flatpickrConfigString: {
			handler() {
				this.datePicker?.set({
					position: FLATPICKR_POSITIONS[this.calendarPosition],
					defaultDate: this.date,
					disable: this.disableDates.filter((date) => date instanceof Date),
					minDate: this.minDate,
					maxDate: this.maxDate,
				});
			},
			flush: 'post' as const,
		},
	},
	async mounted() {
		if (this.isDatePickerEnabled && !this.datePicker) {
			if (!flatpickr) {
				const { default: flatpickrFunction } = await import('flatpickr');

				flatpickr = flatpickrFunction;
			}

			const { Polish } = await import('flatpickr/dist/l10n/pl.js');

			this.datePicker = flatpickr(this.$refs.flatpickrInput, {
				locale: Polish,
				positionElement: this.$el,
				ignoredFocusElements: [this.$el],
				appendTo: this.$el,
				position: FLATPICKR_POSITIONS[this.calendarPosition],
				defaultDate: this.date,
				disable: this.disableDates.filter((date) => date instanceof Date),
				minDate: this.minDate,
				maxDate: this.maxDate,
				onClose: [
					() => {
						this.isOpen = false;
					},
				],
				onOpen: [
					() => {
						this.isOpen = true;
					},
				],
				onChange: (event) => {
					this.$emit('update:date', event[0]);
				},
			});
		}
	},
	unmounted() {
		this.datePicker?.destroy();
		this.datePicker = null;
	},
	methods: {
		toggle() {
			if (this.isDatePickerEnabled && this.datePicker) {
				this.datePicker.toggle();
			}
		},
	},
});
</script>
