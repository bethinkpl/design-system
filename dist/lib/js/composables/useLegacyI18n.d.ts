import { ComputedRef } from 'vue';
import { TranslateFunction } from '../i18n';

interface IUseLegacyI18n {
    t: TranslateFunction;
    locale: ComputedRef<string | undefined>;
}
export declare const useLegacyI18n: () => IUseLegacyI18n;
export {};
