import { SelectListItemSize, SelectListItemState } from '../SelectListItem/SelectListItem.consts';
import { IconItem } from '../../Icons/Icon';
import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    iconOff: {
        type: ObjectConstructor;
        default: null;
        validator(icon: unknown): boolean;
    };
    iconOn: {
        type: ObjectConstructor;
        default: null;
        validator(icon: unknown): boolean;
    };
    isOn: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelOff: {
        type: StringConstructor;
        required: true;
    };
    labelOn: {
        type: StringConstructor;
        required: true;
    };
    size: {
        type: PropType<SelectListItemSize>;
        default: "small";
        validator(size: SelectListItemSize): boolean;
    };
    state: {
        type: PropType<SelectListItemState>;
        default: "default";
        validator(state: SelectListItemState): boolean;
    };
}>, {}, {
    SELECT_LIST_ITEM_SELECTION_MODE: Readonly<{
        readonly SELECT_ONLY: "selectOnly";
        readonly TOGGLE: "toggle";
    }>;
    SELECT_LIST_ITEM_STATES: Readonly<{
        readonly DEFAULT: "default";
        readonly LOADING: "loading";
        readonly DISABLED: "disabled";
    }>;
}, {
    icon(): IconItem | null;
    label(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    iconOff: {
        type: ObjectConstructor;
        default: null;
        validator(icon: unknown): boolean;
    };
    iconOn: {
        type: ObjectConstructor;
        default: null;
        validator(icon: unknown): boolean;
    };
    isOn: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelOff: {
        type: StringConstructor;
        required: true;
    };
    labelOn: {
        type: StringConstructor;
        required: true;
    };
    size: {
        type: PropType<SelectListItemSize>;
        default: "small";
        validator(size: SelectListItemSize): boolean;
    };
    state: {
        type: PropType<SelectListItemState>;
        default: "default";
        validator(state: SelectListItemState): boolean;
    };
}>> & Readonly<{}>, {
    size: SelectListItemSize;
    state: SelectListItemState;
    iconOff: Record<string, any>;
    iconOn: Record<string, any>;
    isOn: boolean;
}, {}, {
    SelectListItem: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            iconLeft: IconItem | null;
            isSelected: {
                type: PropType<boolean>;
            };
            label: {
                type: PropType<string>;
                required: true;
            };
            eyebrowText: {
                type: PropType<string>;
            };
            isEyebrowTextUppercase: {
                type: PropType<boolean>;
            };
            selectionMode: {
                type: PropType<import('../SelectListItem/SelectListItem.consts').SelectListItemSelectionMode>;
            };
            size: {
                type: PropType<SelectListItemSize>;
            };
            state: {
                type: PropType<SelectListItemState>;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            iconLeft: IconItem | null;
            isSelected: {
                type: PropType<boolean>;
            };
            label: {
                type: PropType<string>;
                required: true;
            };
            eyebrowText: {
                type: PropType<string>;
            };
            isEyebrowTextUppercase: {
                type: PropType<boolean>;
            };
            selectionMode: {
                type: PropType<import('../SelectListItem/SelectListItem.consts').SelectListItemSelectionMode>;
            };
            size: {
                type: PropType<SelectListItemSize>;
            };
            state: {
                type: PropType<SelectListItemState>;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        iconLeft: IconItem | null;
        isSelected: {
            type: PropType<boolean>;
        };
        label: {
            type: PropType<string>;
            required: true;
        };
        eyebrowText: {
            type: PropType<string>;
        };
        isEyebrowTextUppercase: {
            type: PropType<boolean>;
        };
        selectionMode: {
            type: PropType<import('../SelectListItem/SelectListItem.consts').SelectListItemSelectionMode>;
        };
        size: {
            type: PropType<SelectListItemSize>;
        };
        state: {
            type: PropType<SelectListItemState>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            accessory?(_: {}): any;
        };
    });
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
