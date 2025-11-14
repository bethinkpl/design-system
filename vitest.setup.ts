import { config } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';
import pl from './lib/js/i18n/pl';
import en from './lib/js/i18n/en';

const i18n = createI18n({
	locale: 'pl',
	fallbackLocale: 'en',
	messages: {
		en,
		pl,
	},
});

config.global.plugins = [i18n];
