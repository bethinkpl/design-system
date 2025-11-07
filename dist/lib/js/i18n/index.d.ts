import { NamedValue, TranslateOptions } from 'vue-i18n';
import { default as pl } from './pl';

export type MessageSchema = typeof pl;
export declare const messages: {
    pl: {
        "ds.pagination.from": string;
        "ds.accessStatus.status.active": string;
        "ds.accessStatus.status.awaiting": string;
        "ds.accessStatus.status.deactivated": string;
        "ds.accessStatus.status.ended": string;
        "ds.accessStatus.status.suspended": string;
        "ds.globals.back": string;
        "ds.globals.confirmation": string;
    };
    en: {
        "ds.pagination.from": string;
        "ds.accessStatus.status.active": string;
        "ds.accessStatus.status.awaiting": string;
        "ds.accessStatus.status.deactivated": string;
        "ds.accessStatus.status.ended": string;
        "ds.accessStatus.status.suspended": string;
        "ds.globals.back": string;
        "ds.globals.confirmation": string;
    };
};
export declare const i18n: import('vue-i18n').I18n<{
    pl: {
        "ds.pagination.from": string;
        "ds.accessStatus.status.active": string;
        "ds.accessStatus.status.awaiting": string;
        "ds.accessStatus.status.deactivated": string;
        "ds.accessStatus.status.ended": string;
        "ds.accessStatus.status.suspended": string;
        "ds.globals.back": string;
        "ds.globals.confirmation": string;
    };
}, {
    pl: import('vue-i18n').IntlDateTimeFormat;
}, {
    pl: import('vue-i18n').IntlNumberFormat;
}, string, true>;
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
