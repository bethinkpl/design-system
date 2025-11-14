import { createI18n } from 'vue-i18n';
import { messages, MessageSchema } from '../lib/js/i18n';

export const i18n = createI18n<[MessageSchema], 'pl'>({
	fallbackLocale: 'pl',
	locale: 'pl',
	messages,
});
