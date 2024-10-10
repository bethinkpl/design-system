export function localWeekdayName(date: Date): string {
	return date.toLocaleDateString(undefined, {
		dateStyle: undefined,
		timeStyle: undefined,
		weekday: 'long',
	});
}
