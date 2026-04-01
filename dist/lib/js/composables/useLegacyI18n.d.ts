import { ComputedRef } from 'vue';
import { SupportedLocale, TranslateFunction } from '../i18n';

interface IUseLegacyI18n {
    t: TranslateFunction;
    locale: ComputedRef<SupportedLocale>;
}
export declare const useLegacyI18n: () => IUseLegacyI18n;
export {};
