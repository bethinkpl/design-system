import { PropType } from 'vue';
import { SelectionControlSize, SelectionControlState, SelectionControlType } from './SelectionControl.consts';
import Icon from '../../Icons/Icon/Icon.vue';
declare const _default: {
    name: string;
    components: {
        Icon: typeof Icon;
    };
    props: {
        size: {
            type: PropType<SelectionControlSize>;
            default: "small";
            validator(size: any): boolean;
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
            validator(state: any): boolean;
        };
        selectedIcon: {
            type: ObjectConstructor;
            required: boolean;
            validator(icon: any): boolean;
        };
        notSelectedIcon: {
            type: ObjectConstructor;
            required: boolean;
            validator(icon: any): boolean;
        };
        type: {
            type: PropType<SelectionControlType>;
            required: boolean;
            validator(type: any): boolean;
        };
    };
    emits: string[];
    data(): {
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
    };
    computed: {
        icon(): any;
        iconSize(): string;
    };
    methods: {
        onToggle(): void;
        onFocus(): void;
        onBlur(): void;
    };
};
export default _default;
