export function localWeekdayName(date: Date): string {
	return date.toLocaleDateString(undefined, {
		dateStyle: undefined,
		timeStyle: undefined,
		weekday: 'long',
	});
}

export function localFullDateWithShortMonthName(date: Date): string {
	return date.toLocaleDateString(undefined, {
		dateStyle: 'medium',
		timeStyle: undefined,
	});
}

export function localMonthDayWithShortMonthDay(date: Date): string {
	return date.toLocaleDateString(undefined, {
		month: 'short',
		day: '2-digit',
	});
}
