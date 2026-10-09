import { describe, expect, it } from 'vitest';
import {
	areCalendarDates,
	CalendarDate,
	formatCalendarDate,
	isCalendarDateOrNull,
	parseCalendarDate,
	parseCalendarDateOrNull,
} from './calendarDate';

const REPRESENTATIVE_DAYS: Array<CalendarDate> = [
	'2026-08-05', // mid-month
	'2026-01-01', // first day of the year
	'2026-12-31', // last day of the year
	'2026-02-28', // last day of a short month
	'2026-03-01', // first day after a short month
	'2024-02-29', // leap day
];

describe('calendarDate', () => {
	describe('parseCalendarDate', () => {
		it.each(REPRESENTATIVE_DAYS)('should parse %s as browser-local midnight', (day) => {
			const date = parseCalendarDate(day);
			const [year, month, dayOfMonth] = day.split('-').map(Number);

			expect(date.getFullYear()).toBe(year);
			expect(date.getMonth()).toBe(month - 1);
			expect(date.getDate()).toBe(dayOfMonth);
			expect([date.getHours(), date.getMinutes(), date.getSeconds()]).toEqual([0, 0, 0]);
		});

		it('should return null for a missing day', () => {
			expect(parseCalendarDateOrNull(null)).toBeNull();
			expect(parseCalendarDateOrNull(undefined)).toBeNull();
		});
	});

	describe('formatCalendarDate', () => {
		it('should zero-pad the month and the day of month', () => {
			expect(formatCalendarDate(new Date(2026, 0, 9))).toBe('2026-01-09');
		});
	});

	// This is what holds in any host timezone — the numeric constructor writes local and
	// getFullYear/getMonth/getDate read local, so the day never shifts.
	it.each(REPRESENTATIVE_DAYS)('should round trip %s', (day) => {
		expect(formatCalendarDate(parseCalendarDate(day))).toBe(day);
	});

	describe('isCalendarDateOrNull', () => {
		it.each([...REPRESENTATIVE_DAYS, null, undefined])('should accept %s', (value) => {
			expect(isCalendarDateOrNull(value)).toBe(true);
		});

		it.each([
			'2026-08-05T00:00:00.000Z',
			'2026-8-5',
			'2026-08-05 ',
			'05-08-2026',
			'',
			new Date(2026, 7, 5),
			1754344800000,
		])('should reject %s', (value) => {
			expect(isCalendarDateOrNull(value)).toBe(false);
		});
	});

	describe('areCalendarDates', () => {
		it('should accept a list of calendar days', () => {
			expect(areCalendarDates([])).toBe(true);
			expect(areCalendarDates(REPRESENTATIVE_DAYS)).toBe(true);
		});

		it('should reject anything that is not a list of calendar days', () => {
			expect(areCalendarDates(['2026-08-05', '2026-8-5'])).toBe(false);
			expect(areCalendarDates([new Date(2026, 7, 5)])).toBe(false);
			expect(areCalendarDates(null)).toBe(false);
			expect(areCalendarDates('2026-08-05')).toBe(false);
		});
	});
});
