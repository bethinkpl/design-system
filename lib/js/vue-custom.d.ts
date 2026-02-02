import { TranslateFunction, ValidI18nKey } from './i18n';

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$t: TranslateFunction<ValidI18nKey | string>;
	}
}
