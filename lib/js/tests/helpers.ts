import waitForExpect from 'wait-for-expect';
import { config } from '@vue/test-utils';
import type { SupportedLocale } from '../i18n';

export const waitForExpectShort = (fn: () => void | Promise<void>) => {
	return waitForExpect(fn, 500, 5);
};

/**
 * Switches the locale of the i18n instance `vitest.setup.ts` installs. It is shared by every
 * mounted component, so a test that changes it has to set it back (see `SUPPORTED_LOCALE.pl`,
 * the default).
 */
export const setTestLocale = (locale: SupportedLocale) => {
	const [i18n] = config.global.plugins as unknown as [{ global: { locale: string } }];

	i18n.global.locale = locale;
};
