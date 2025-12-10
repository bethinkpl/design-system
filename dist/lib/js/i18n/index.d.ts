import { NamedValue, TranslateOptions } from 'vue-i18n';
import { default as pl } from './pl';

export type MessageSchema = typeof pl;
export declare const messages: {
    pl: {
        "ds.statsLayout.default.leftColumnLabel": string;
        "ds.statsLayout.default.rightColumnLabel": string;
        "ds.statsLayout.filtersDropdown.title": string;
        "ds.statsLayout.sectionHeader.title": string;
        "ds.statsLayout.statsErrorBanner.buttonText": string;
        "ds.statsLayout.statsErrorBanner.message": string;
        "ds.statsLayout.statsErrorBanner.title": string;
        "ds.statsLayout.statsResetBanner.buttonText": string;
        "ds.statsLayout.statsResetBanner.message": string;
        "ds.statsLayout.statsResetBanner.title": string;
        "ds.pagination.from": string;
        "ds.accessStatus.status.active": string;
        "ds.accessStatus.status.awaiting": string;
        "ds.accessStatus.status.deactivated": string;
        "ds.accessStatus.status.ended": string;
        "ds.accessStatus.status.suspended": string;
        "ds.globals.back": string;
        "ds.globals.confirmation": string;
        "ds.globals.loading": string;
    };
    en: {
        "ds.statsLayout.default.leftColumnLabel": string;
        "ds.statsLayout.default.rightColumnLabel": string;
        "ds.statsLayout.filtersDropdown.title": string;
        "ds.statsLayout.sectionHeader.title": string;
        "ds.statsLayout.statsErrorBanner.buttonText": string;
        "ds.statsLayout.statsErrorBanner.message": string;
        "ds.statsLayout.statsErrorBanner.title": string;
        "ds.statsLayout.statsResetBanner.buttonText": string;
        "ds.statsLayout.statsResetBanner.message": string;
        "ds.statsLayout.statsResetBanner.title": string;
        "ds.pagination.from": string;
        "ds.accessStatus.status.active": string;
        "ds.accessStatus.status.awaiting": string;
        "ds.accessStatus.status.deactivated": string;
        "ds.accessStatus.status.ended": string;
        "ds.accessStatus.status.suspended": string;
        "ds.globals.back": string;
        "ds.globals.confirmation": string;
        "ds.globals.loading": string;
    };
};
export type ValidI18nKey = keyof MessageSchema;
export interface TranslateFunction {
    (key: ValidI18nKey): string;
    (key: ValidI18nKey, plural: number, options?: TranslateOptions): string;
    (key: ValidI18nKey, defaultMsg: string, options?: TranslateOptions): string;
    (key: ValidI18nKey, list: Array<unknown>, options?: TranslateOptions): string;
    (key: ValidI18nKey, list: Array<unknown>, plural: number): string;
    (key: ValidI18nKey, list: Array<unknown>, defaultMsg: string): string;
    (key: ValidI18nKey, named: NamedValue, options?: TranslateOptions): string;
    (key: ValidI18nKey, named: NamedValue, plural: number): string;
    (key: ValidI18nKey, named: NamedValue, defaultMsg: string): string;
}
