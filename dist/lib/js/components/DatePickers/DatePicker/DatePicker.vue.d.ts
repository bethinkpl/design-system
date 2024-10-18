import { PropType } from 'vue';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    triggerType: {
        type: PropType<string>;
        default: string;
    };
    isInteractive: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    date: {
        type: DateConstructor;
        default: null;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    isLabelUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: PropType<any>;
        default: import('@fortawesome/fontawesome-common-types').IconDefinition;
        validator(icon: unknown): boolean;
    };
    isIconHiddenOnMobile: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    state: {
        type: PropType<string>;
        default: string;
    };
    color: {
        type: PropType<string>;
        default: string;
    };
    calendarPosition: {
        type: PropType<string>;
        default: string;
    };
    disableDates: {
        type: PropType<Date[]>;
        default: () => never[];
    };
    minDate: {
        type: DateConstructor;
        default: null;
    };
    maxDate: {
        type: DateConstructor;
        default: null;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:date": (value: Date) => void;
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    triggerType: {
        type: PropType<string>;
        default: string;
    };
    isInteractive: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    date: {
        type: DateConstructor;
        default: null;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    isLabelUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: PropType<any>;
        default: import('@fortawesome/fontawesome-common-types').IconDefinition;
        validator(icon: unknown): boolean;
    };
    isIconHiddenOnMobile: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    state: {
        type: PropType<string>;
        default: string;
    };
    color: {
        type: PropType<string>;
        default: string;
    };
    calendarPosition: {
        type: PropType<string>;
        default: string;
    };
    disableDates: {
        type: PropType<Date[]>;
        default: () => never[];
    };
    minDate: {
        type: DateConstructor;
        default: null;
    };
    maxDate: {
        type: DateConstructor;
        default: null;
    };
}>> & {
    "onUpdate:date"?: ((value: Date) => any) | undefined;
}, {
    icon: any;
    label: string;
    color: string;
    state: string;
    isIconHiddenOnMobile: boolean;
    isLabelUppercase: boolean;
    isInteractive: boolean;
    placeholder: string;
    triggerType: string;
    date: Date;
    errorMessage: string;
    calendarPosition: string;
    disableDates: Date[];
    minDate: Date;
    maxDate: Date;
}>, {
    default?(_: {}): any;
}>;
export default _default;
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
