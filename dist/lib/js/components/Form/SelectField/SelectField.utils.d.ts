import { SelectFieldOption, SelectFieldOptionGroup } from './SelectField.types';

export declare function isSelectFieldOptionGroup(option: SelectFieldOption | SelectFieldOptionGroup): option is SelectFieldOptionGroup;
export declare function normalizeOptions(options: Array<SelectFieldOption | SelectFieldOptionGroup>): Array<SelectFieldOptionGroup>;
export declare function assertOptionValues(groups: Array<SelectFieldOptionGroup>): void;
export declare function toCssLength(value: string | number | undefined): string | undefined;
export declare function getOptionAccessibleName(option: SelectFieldOption): string;
