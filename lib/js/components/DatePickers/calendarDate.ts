/** A calendar day, 'YYYY-MM-DD'. No time of day, no timezone. */
export type CalendarDate = string;

const CALENDAR_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export function isCalendarDate(value: unknown): value is CalendarDate {
	return typeof value === 'string' && CALENDAR_DATE_PATTERN.test(value);
}

/** Prop validator for a single calendar day: `null` is allowed, anything else must be 'YYYY-MM-DD'. */
export function isCalendarDateOrNull(value: unknown): boolean {
	return value === null || value === undefined || isCalendarDate(value);
}

/** Prop validator for a list of calendar days. */
export function areCalendarDates(value: unknown): boolean {
	return Array.isArray(value) && value.every(isCalendarDate);
}

/**
 * Browser-local midnight of the day the string names.
 *
 * The numeric constructor is deliberate: `new Date('2026-08-05')` parses as UTC midnight, which is
 * the previous day in every zone west of UTC. Writing local and reading local (`getFullYear` etc.,
 * `toLocaleDateString`) keeps the day stable in every browser timezone.
 */
export function parseCalendarDate(day: CalendarDate): Date {
	const [year, month, dayOfMonth] = day.split('-').map(Number);
	return new Date(year, month - 1, dayOfMonth);
}

export function parseCalendarDateOrNull(day: CalendarDate | null | undefined): Date | null {
	return day ? parseCalendarDate(day) : null;
}

export function formatCalendarDate(date: Date): CalendarDate {
	const year = String(date.getFullYear()).padStart(4, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const dayOfMonth = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${dayOfMonth}`;
}
