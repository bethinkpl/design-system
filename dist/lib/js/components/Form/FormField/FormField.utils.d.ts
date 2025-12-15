import { FormFieldProps } from './FormField.types';

export declare function extractFormFieldProps({ label, state, hasRequiredIndicator, labelInfo, subLabel, fieldId, messageText, }: FormFieldProps, errors?: Array<string>): {
    label: string | undefined;
    state: "success" | "default" | "error" | "disabled" | undefined;
    hasRequiredIndicator: boolean | undefined;
    labelInfo: string | undefined;
    subLabel: string | undefined;
    fieldId: string | undefined;
    messageText: string;
};
