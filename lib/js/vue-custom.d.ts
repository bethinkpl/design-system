import { TranslateFunction, ValidI18nKey } from './i18n';
import { VueI18nInstance } from 'vue-i18n';

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$t: TranslateFunction<ValidI18nKey | string>;
		$i18n: VueI18nInstance;
	}
}
