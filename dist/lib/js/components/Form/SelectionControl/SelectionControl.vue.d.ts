import { PropType } from 'vue';
import { SelectionControlSize, SelectionControlState, SelectionControlType } from './SelectionControl.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    size: {
        type: PropType<SelectionControlSize>;
        default: "small";
        validator(size: unknown): boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    isSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<SelectionControlState>;
        default: "default";
        validator(state: unknown): boolean;
    };
    selectedIcon: {
        type: ObjectConstructor;
        required: true;
        validator(icon: unknown): boolean;
    };
    notSelectedIcon: {
        type: ObjectConstructor;
        required: true;
        validator(icon: unknown): boolean;
    };
    type: {
        type: PropType<SelectionControlType>;
        required: true;
        validator(type: unknown): boolean;
    };
}>, {}, {
    isFocused: boolean;
    SELECTION_CONTROL_STATE: Readonly<{
        readonly DEFAULT: "default";
        readonly DISABLED: "disabled";
        readonly LOADING: "loading";
    }>;
    SELECTION_CONTROL_TYPE: Readonly<{
        readonly RADIO_BUTTON: "radioButton";
        readonly CHECKBOX: "checkbox";
    }>;
}, {
    icon(): any;
    iconSize(): string;
}, {
    onToggle(): void;
    onFocus(): void;
    onBlur(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("update:is-selected" | "input:focus" | "input:blur")[], "update:is-selected" | "input:focus" | "input:blur", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: PropType<SelectionControlSize>;
        default: "small";
        validator(size: unknown): boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    isSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<SelectionControlState>;
        default: "default";
        validator(state: unknown): boolean;
    };
    selectedIcon: {
        type: ObjectConstructor;
        required: true;
        validator(icon: unknown): boolean;
    };
    notSelectedIcon: {
        type: ObjectConstructor;
        required: true;
        validator(icon: unknown): boolean;
    };
    type: {
        type: PropType<SelectionControlType>;
        required: true;
        validator(type: unknown): boolean;
    };
}>> & Readonly<{
    "onUpdate:is-selected"?: ((...args: any[]) => any) | undefined;
    "onInput:focus"?: ((...args: any[]) => any) | undefined;
    "onInput:blur"?: ((...args: any[]) => any) | undefined;
}>, {
    size: SelectionControlSize;
    label: string;
    state: SelectionControlState;
    isSelected: boolean;
}, {}, {
    Icon: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        icon: {
            type: ObjectConstructor;
            required: true;
            validator(icon: unknown): boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        rotation: {
            type: NumberConstructor;
            default: null;
        };
        flippedVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        flippedHorizontal: {
            type: BooleanConstructor;
            default: boolean;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        spinning: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {}, {}, {
        sizeClassName(): string;
        isFontawesomeIcon(): boolean;
    }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        icon: {
            type: ObjectConstructor;
            required: true;
            validator(icon: unknown): boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        rotation: {
            type: NumberConstructor;
            default: null;
        };
        flippedVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        flippedHorizontal: {
            type: BooleanConstructor;
            default: boolean;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        spinning: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        rotation: number;
        size: string;
        flippedVertical: boolean;
        flippedHorizontal: boolean;
        touchable: boolean;
        spinning: boolean;
    }, {}, {
        FontAwesomeIcon: import('vue').DefineComponent<import('@fortawesome/vue-fontawesome').FontAwesomeIconProps>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
