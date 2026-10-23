import { afterEach, describe, expect, it } from 'vitest';
import { enableAutoUnmount, mount } from '@vue/test-utils';
import DateRangePicker from './DateRangePicker.vue';
import { parseCalendarDate } from '../calendarDate';

const createComponent = (props = {}) =>
	mount(DateRangePicker, {
		props: { isInteractive: true, ...props },
		attachTo: document.body,
	});

/** Mounts, opens the calendar and hands back the flatpickr instance it created. */
const openCalendar = async (props = {}) => {
	const component = createComponent(props);

	await component.vm.toggle();

	const flatpickr = component.vm.flatpickrInstance;

	if (!flatpickr) {
		throw new Error('The calendar did not create a flatpickr instance');
	}

	return { component, flatpickr };
};

// The calendars mount into the document body — tear them down so their flatpickr instances stop
// listening on it.
enableAutoUnmount(afterEach);

describe('DateRangePicker', () => {
	it('should emit the picked range as a pair of calendar dates', async () => {
		const { component, flatpickr } = await openCalendar({
			startDate: '2026-08-05',
			endDate: '2026-08-17',
		});

		flatpickr.setDate([new Date(2026, 7, 10), new Date(2026, 8, 1)], true);

		expect(component.emitted('update:date')).toEqual([
			[{ startDate: '2026-08-10', endDate: '2026-09-01' }],
		]);
	});

	it('should open the calendar on the selected range', async () => {
		const { flatpickr } = await openCalendar({
			startDate: '2026-08-05',
			endDate: '2026-08-17',
		});

		expect(flatpickr.config.defaultDate).toEqual([
			parseCalendarDate('2026-08-05'),
			parseCalendarDate('2026-08-17'),
		]);
	});

	it('should hand flatpickr the local midnight of today', async () => {
		const { flatpickr } = await openCalendar({ today: '2026-08-05' });

		expect(flatpickr.config.now).toEqual(parseCalendarDate('2026-08-05'));
		expect(flatpickr.now).toEqual(parseCalendarDate('2026-08-05'));
	});

	it('should select nothing when neither end of the range is set', async () => {
		const { flatpickr } = await openCalendar({ today: '2026-08-05' });

		expect(flatpickr.config.defaultDate).toEqual([]);
		expect(flatpickr.selectedDates).toEqual([]);
	});

	it('should hand flatpickr parsed dates when the boundaries change after mount', async () => {
		const { component, flatpickr } = await openCalendar({
			startDate: '2026-08-05',
			endDate: '2026-08-17',
		});

		await component.setProps({
			minDate: '2026-08-03',
			maxDate: '2026-08-28',
			disableDates: ['2026-08-11'],
		});

		expect(flatpickr.config.minDate).toEqual(parseCalendarDate('2026-08-03'));
		expect(flatpickr.config.maxDate).toEqual(parseCalendarDate('2026-08-28'));
		expect(flatpickr.config.disable).toEqual([parseCalendarDate('2026-08-11')]);
	});

	it('should hand flatpickr the parsed range when the dates change after mount', async () => {
		const { component, flatpickr } = await openCalendar({
			startDate: '2026-08-05',
			endDate: '2026-08-17',
		});

		await component.setProps({ startDate: '2026-09-01', endDate: '2026-09-08' });

		expect(flatpickr.selectedDates).toEqual([
			parseCalendarDate('2026-09-01'),
			parseCalendarDate('2026-09-08'),
		]);
	});
});
