import { createI18n } from 'vue-i18n';
import { messages, MessageSchema, SUPPORTED_LOCALE } from '../lib/js/i18n';

export const i18n = createI18n<[MessageSchema], typeof SUPPORTED_LOCALE.pl>({
	fallbackLocale: SUPPORTED_LOCALE.pl,
	locale: SUPPORTED_LOCALE.pl,
	messages,
});
