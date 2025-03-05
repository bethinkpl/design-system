export function localWeekdayName(date: Date): string {
	return date.toLocaleDateString('pl-PL', {
		dateStyle: undefined,
		timeStyle: undefined,
		weekday: 'long',
	});
}

export function localFullDateWithShortMonthName(date: Date): string {
	return date.toLocaleDateString('pl-PL', {
		dateStyle: 'medium',
		timeStyle: undefined,
	});
}

export function localMonthDayWithShortMonthDay(date: Date): string {
	return date.toLocaleDateString('pl-PL', {
		month: 'short',
		day: '2-digit',
	});
}
