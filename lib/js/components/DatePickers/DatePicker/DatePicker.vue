<template>
	<div
		ref="datePickerRef"
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
				:additional-text="additionalText"
				:color="tileColor"
				:border-color="borderColor"
				:state="tileState"
				:icon-right="tileIcon"
				:is-icon-right-hidden-on-mobile="isIconHiddenOnMobile"
				:eyebrow-text="eyebrowText"
				:additional-text-max-width="TILE_ADDITIONAL_TEXT_MAX_WIDTHS.MEDIUM"
				has-border
				@click="toggle"
			/>
		</template>
		<date-box
			v-else
			:is-interactive="isInteractive"
			:placeholder="placeholder"
			:start-date="date"
			:start-icon="icon"
			:are-icons-hidden-on-mobile="isIconHiddenOnMobile"
			:state="state"
			:color="color"
			:is-open="isOpen"
			@click="toggle"
		/>

		<span v-if="showErrorMessage" class="ds-datePicker__errorMessage">
			{{ errorMessage }}
		</span>
		<span v-else-if="showHelpMessage" class="ds-datePicker__helpMessage">
			{{ helpMessage }}
		</span>
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
		// In case we have two date pickers in a row, we want them to have the same height.
		// When one have a message visible, the second should get an empty string in a prop in such case
		min-height: $space-xs;
	}

	&__helpMessage {
		@include info-s-default-regular;

		color: $color-neutral-text;
		// In case we have two date pickers in a row, we want them to have the same height.
		// When one have a message visible, the second should get an empty string in a prop in such case
		min-height: $space-xs;
	}
}
</style>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, toRaw, watch } from 'vue';

import DsTile, {
	TILE_ADDITIONAL_TEXT_MAX_WIDTHS,
	TILE_BORDER_COLORS,
	TileColors,
	TileStates,
} from '../../Tile';
import { IconItem, ICONS } from '../../Icons/Icon';
import DateBox from '../DateBox';

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
import { DatePickerComposablesProps, initFlatpickr } from './DatePicker.composables';
import {
	localFullDateWithShortMonthName,
	localWeekdayName,
} from '../../../../../tools/importers/helpers/dates';

export default defineComponent({
	name: 'DatePicker',
	components: {
		DsTile,
		DateBox,
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
		additionalText: {
			type: String,
			default: '',
		},
		helpMessage: {
			type: String,
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
			default: ICONS.FA_CALENDAR_DAYS,
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
			default: null,
		},
		state: {
			type: String as PropType<DatePickerStates>,
			default: DATE_PICKER_STATES.DEFAULT,
		},
		color: {
			type: String as PropType<DatePickerColors>,
			default: DATE_PICKER_COLORS.NEUTRAL_WEAK,
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
		updatePositionBasedOnScrollableSelector: {
			type: String,
			default: '',
		},
	},
	emits: {
		'update:date': (date: Date) => true,
	},
	setup(
		props: DatePickerComposablesProps & {
			isInteractive: boolean;
			state: DatePickerStates;
			updatePositionBasedOnScrollableSelector: string;
		},
		{ emit },
	) {
		const flatpickrInputRef = ref<HTMLInputElement>() as Ref<HTMLInputElement>;
		const datePickerRef = ref<HTMLDivElement>() as Ref<HTMLDivElement>;

		const onChange = (event: Array<Date>) => {
			emit('update:date', event[0]);
		};

		const {
			isOpen,
			toggle: toggleDatePicker,
			createDatePicker,
		} = initFlatpickr({
			props,
			onChange,
			defaultDates: props.date ?? new Date(),
			mode: 'single',
		});
		watch([() => props.isInteractive, () => props.state], async () => {
			if (props.isInteractive && props.state === DATE_PICKER_STATES.DEFAULT) {
				await createDatePicker(
					flatpickrInputRef.value,
					datePickerRef.value,
					props.updatePositionBasedOnScrollableSelector,
				);
			}
		});

		return {
			flatpickrInputRef,
			datePickerRef,
			isOpen,
			toggleDatePicker,
			createDatePicker,
			DATE_PICKER_CALENDAR_POSITIONS: Object.freeze(DATE_PICKER_CALENDAR_POSITIONS),
			DATE_PICKER_COLORS: Object.freeze(DATE_PICKER_COLORS),
			DATE_PICKER_STATES: Object.freeze(DATE_PICKER_STATES),
			DATE_PICKER_TRIGGER_TYPES: Object.freeze(DATE_PICKER_TRIGGER_TYPES),
			TILE_ADDITIONAL_TEXT_MAX_WIDTHS: Object.freeze(TILE_ADDITIONAL_TEXT_MAX_WIDTHS),
		};
	},
	computed: {
		borderColor() {
			return {
				[DATE_PICKER_COLORS.NEUTRAL]: this.isInteractive
					? TILE_BORDER_COLORS.PRIMARY
					: TILE_BORDER_COLORS.NEUTRAL_WEAK,
				[DATE_PICKER_COLORS.NEUTRAL_WEAK]: this.isInteractive
					? TILE_BORDER_COLORS.PRIMARY
					: TILE_BORDER_COLORS.NEUTRAL_WEAK,
				[DATE_PICKER_COLORS.DANGER]: this.isInteractive
					? TILE_BORDER_COLORS.DANGER
					: TILE_BORDER_COLORS.DANGER_WEAK,
				[DATE_PICKER_COLORS.WARNING]: this.isInteractive
					? TILE_BORDER_COLORS.WARNING
					: TILE_BORDER_COLORS.WARNING_WEAK,
			}[this.color];
		},
		eyebrowText() {
			if (!this.date) {
				return '';
			}
			return capitalizeFirstLetter(localWeekdayName(this.date));
		},
		text() {
			if (!this.date) {
				return this.placeholder;
			}
			return localFullDateWithShortMonthName(this.date);
		},
		tileIcon() {
			if (this.additionalText) {
				return null;
			}
			if (!this.icon) {
				return null;
			}
			return this.isOpen ? ICONS.FA_CHEVRON_UP : this.icon;
		},
		showErrorMessage() {
			return this.errorMessage !== null;
		},
		showHelpMessage() {
			return this.helpMessage !== null;
		},
		tileState() {
			return this.state as TileStates;
		},
		tileColor() {
			return this.color as TileColors;
		},
	},
	async mounted() {
		if (this.isInteractive && this.state === DATE_PICKER_STATES.DEFAULT) {
			await this.createDatePicker(
				this.flatpickrInputRef,
				this.datePickerRef,
				this.updatePositionBasedOnScrollableSelector,
			);
		}
	},
	methods: {
		toggle() {
			if (this.isInteractive && this.state === DATE_PICKER_STATES.DEFAULT) {
				this.toggleDatePicker();
			}
		},
	},
});
</script>
