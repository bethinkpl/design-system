import { NamedValue, TranslateOptions } from 'vue-i18n';
import pl from './pl';
import en from './en';

export type MessageSchema = typeof pl;

export const messages = {
	pl,
	en,
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
