import type { SupportedLocale } from '../../../lib/js/i18n';

const LOCALE_MAP: Record<SupportedLocale, string> = {
	pl: 'pl-PL',
	en: 'en-US',
};

function toBCP47(locale: string): string {
	return LOCALE_MAP[locale] ?? locale;
}

export function localWeekdayName(date: Date, locale = 'pl-PL'): string {
	return date.toLocaleDateString(toBCP47(locale), {
		dateStyle: undefined,
		timeStyle: undefined,
		weekday: 'long',
	});
}

export function localFullDateWithShortMonthName(date: Date, locale = 'pl-PL'): string {
	return date.toLocaleDateString(toBCP47(locale), {
		dateStyle: 'medium',
		timeStyle: undefined,
	});
}

export function localMonthDayWithShortMonthDay(date: Date, locale = 'pl-PL'): string {
	return date.toLocaleDateString(toBCP47(locale), {
		month: 'short',
		day: '2-digit',
	});
}
