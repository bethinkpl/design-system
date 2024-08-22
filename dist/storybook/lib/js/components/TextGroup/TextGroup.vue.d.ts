import { PropType } from '../../../../vue/dist/vue.esm-bundler.js';
import { TextGroupState } from './TextGroup.consts';

declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    size: {
        type: PropType<string>;
        default: string;
    };
    color: {
        type: PropType<"neutral">;
        default: "neutral";
    };
    eyebrowText: {
        type: PropType<string | null>;
        default: null;
    };
    eyebrowTextEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    isEyebrowTextUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    mainText: {
        type: PropType<string | null>;
        default: null;
    };
    mainTextEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    supportingText: {
        type: PropType<string | null>;
        default: null;
    };
    supportingTextEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    isInteractive: {
        type: BooleanConstructor;
        default: boolean;
    };
    skeletonLoadingSize: {
        type: PropType<string>;
        default: string;
    };
    isSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<TextGroupState>;
        default: "default";
    };
}, unknown, {
    TEXT_GROUP_SIZES: Readonly<{
        SMALL: string;
        MEDIUM: string;
    }>;
    TEXT_GROUP_STATES: Readonly<{
        readonly DEFAULT: "default";
        readonly HOVERED: "hovered";
        readonly DISABLED: "disabled";
        readonly LOADING: "loading";
    }>;
}, {
    colorClassName(): string;
    isLoading(): boolean;
    loadingSizeClassName(): string;
}, {}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    size: {
        type: PropType<string>;
        default: string;
    };
    color: {
        type: PropType<"neutral">;
        default: "neutral";
    };
    eyebrowText: {
        type: PropType<string | null>;
        default: null;
    };
    eyebrowTextEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    isEyebrowTextUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    mainText: {
        type: PropType<string | null>;
        default: null;
    };
    mainTextEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    supportingText: {
        type: PropType<string | null>;
        default: null;
    };
    supportingTextEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    isInteractive: {
        type: BooleanConstructor;
        default: boolean;
    };
    skeletonLoadingSize: {
        type: PropType<string>;
        default: string;
    };
    isSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<TextGroupState>;
        default: "default";
    };
}>>, {
    size: string;
    color: "neutral";
    state: TextGroupState;
    eyebrowText: string | null;
    isEyebrowTextUppercase: boolean;
    isInteractive: boolean;
    supportingText: string | null;
    isSelected: boolean;
    eyebrowTextEllipsis: boolean;
    mainText: string | null;
    mainTextEllipsis: boolean;
    supportingTextEllipsis: boolean;
    skeletonLoadingSize: string;
}>;
export default _default;
