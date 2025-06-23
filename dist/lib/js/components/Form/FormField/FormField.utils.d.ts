import { FormFieldProps } from './FormField.types';

export declare function extractFormFieldProps({ label, state, hasRequiredIndicator, labelInfo, subLabel, fieldId, messageText, }: FormFieldProps): {
    label: string | undefined;
    state: "success" | "default" | "disabled" | "error" | undefined;
    hasRequiredIndicator: boolean | undefined;
    labelInfo: string | undefined;
    subLabel: string | undefined;
    fieldId: string | undefined;
    messageText: string | undefined;
};
