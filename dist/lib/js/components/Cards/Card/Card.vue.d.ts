import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<{
    headerHasPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    dividerUnderHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderPosition: {
        type: PropType<string>;
        default: string;
    };
    borderSize: {
        type: PropType<string>;
        default: string;
    };
    borderColor: {
        type: PropType<string>;
        default: string;
    };
    hasLoadingBar: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingBarColor: {
        type: PropType<string>;
        default: string;
    };
    loadingBarTime: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    hasLeftBoarder(): any;
    hasTopBoarder(): any;
    borderColorClass(): string;
    borderSizeClass(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    headerHasPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    dividerUnderHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderPosition: {
        type: PropType<string>;
        default: string;
    };
    borderSize: {
        type: PropType<string>;
        default: string;
    };
    borderColor: {
        type: PropType<string>;
        default: string;
    };
    hasLoadingBar: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingBarColor: {
        type: PropType<string>;
        default: string;
    };
    loadingBarTime: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    borderColor: string;
    headerHasPadding: boolean;
    dividerUnderHeader: boolean;
    hasBorder: boolean;
    borderPosition: string;
    borderSize: string;
    hasLoadingBar: boolean;
    loadingBarColor: string;
    loadingBarTime: string;
}>;
export default _default;
