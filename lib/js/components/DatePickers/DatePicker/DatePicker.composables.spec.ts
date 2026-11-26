import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent } from 'vue';
import { BaseOptions } from 'flatpickr/dist/types/options';
import { CustomLocale } from 'flatpickr/dist/types/locale';

import { DatePickerComposablesProps, initFlatpickr } from './DatePicker.composables';
import { DATE_PICKER_CALENDAR_POSITIONS } from './DatePicker.consts';
import { SUPPORTED_LOCALE, SupportedLocale } from '../../../i18n';

const flatpickrMock = vi.hoisted(() => vi.fn(() => ({ config: {}, destroy: vi.fn() })));

vi.mock('flatpickr', () => ({ default: flatpickrMock }));

const props: DatePickerComposablesProps = {
	disableDates: [],
	minDate: null,
	maxDate: null,
	calendarPosition: DATE_PICKER_CALENDAR_POSITIONS.BOTTOM_LEFT,
};

const createDatePicker = async (locale: SupportedLocale) => {
	let datePicker: ReturnType<typeof initFlatpickr> | undefined;
	mount(
		defineComponent({
			name: 'DatePickerComposablesHost',
			setup() {
				datePicker = initFlatpickr({
					props,
					onChange: vi.fn(),
					onClose: vi.fn(),
					defaultDates: [],
					mode: 'single',
					locale,
				});
				return {};
			},
			template: '<div />',
		}),
	);

	await datePicker?.createDatePicker(
		document.createElement('input'),
		document.createElement('div'),
		'',
	);

	const [, options] = flatpickrMock.mock.calls[0] as unknown as [HTMLInputElement, BaseOptions];
	return options;
};

describe('DatePicker composables', () => {
	beforeEach(() => {
		flatpickrMock.mockClear();
	});

	it('should pass the Polish flatpickr locale for the pl locale', async () => {
		const options = await createDatePicker(SUPPORTED_LOCALE.pl);

		expect((options.locale as CustomLocale).weekdays.shorthand).toEqual([
			'Nd',
			'Pn',
			'Wt',
			'Śr',
			'Cz',
			'Pt',
			'So',
		]);
	});

	it('should pass the default English flatpickr locale for the en locale', async () => {
		const options = await createDatePicker(SUPPORTED_LOCALE.en);

		expect(options.locale).toEqual(SUPPORTED_LOCALE.en);
	});
});
