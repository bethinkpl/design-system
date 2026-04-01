import { config } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';
import pl from './lib/js/i18n/pl';
import en from './lib/js/i18n/en';
import { SUPPORTED_LOCALE } from './lib/js/i18n';

const i18n = createI18n({
	locale: SUPPORTED_LOCALE.pl,
	fallbackLocale: SUPPORTED_LOCALE.en,
	messages: {
		en,
		pl,
	},
});

config.global.plugins = [i18n];
