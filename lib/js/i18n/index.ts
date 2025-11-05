import { createI18n } from 'vue-i18n';
import pl from './pl/index';
import en from './en/index';

export type MessageSchema = typeof pl;

export const messages = {
	pl,
	en,
};

export const i18n = createI18n<[MessageSchema], 'pl'>({
	fallbackLocale: 'pl',
	locale: 'pl',
	messages,
});
