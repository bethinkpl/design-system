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

// jsdom does not implement ResizeObserver, which floating-ui's `autoUpdate` (used by
// reka-ui's popper-based components, e.g. SelectField) requires.
global.ResizeObserver = class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
};
