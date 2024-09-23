declare const _default: import('../../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    interactive: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconLeft: {
        type: ObjectConstructor;
        default: null;
        validator(iconLeft: any): boolean;
    };
    iconRight: {
        type: ObjectConstructor;
        default: null;
        validator(iconRight: any): boolean;
    };
    isIconRightHiddenOnMobile: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: StringConstructor;
        required: boolean;
    };
    eyebrowText: {
        type: StringConstructor;
        default: null;
    };
    additionalText: {
        type: StringConstructor;
        default: null;
    };
    color: {
        type: import('../../../../../vue/dist/vue.esm-bundler.js').PropType<import('../../Tile').TileColors>;
        default: "neutral";
        validator(color: any): boolean;
    };
    isEyebrowTextUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: import('../../../../../vue/dist/vue.esm-bundler.js').PropType<import('../../Tile').TileStates>;
        default: "default";
        validator(value: import('../../../utils/type.utils').Value<{
            readonly DEFAULT: "default";
            readonly DISABLED: "disabled";
            readonly LOADING: "loading";
        }>): boolean;
    };
    eyebrowEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    textEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import('../../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../../vue/dist/vue.esm-bundler.js').VNodeProps & import('../../../../../vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('../../../../../vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('../../../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    interactive: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconLeft: {
        type: ObjectConstructor;
        default: null;
        validator(iconLeft: any): boolean;
    };
    iconRight: {
        type: ObjectConstructor;
        default: null;
        validator(iconRight: any): boolean;
    };
    isIconRightHiddenOnMobile: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: StringConstructor;
        required: boolean;
    };
    eyebrowText: {
        type: StringConstructor;
        default: null;
    };
    additionalText: {
        type: StringConstructor;
        default: null;
    };
    color: {
        type: import('../../../../../vue/dist/vue.esm-bundler.js').PropType<import('../../Tile').TileColors>;
        default: "neutral";
        validator(color: any): boolean;
    };
    isEyebrowTextUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: import('../../../../../vue/dist/vue.esm-bundler.js').PropType<import('../../Tile').TileStates>;
        default: "default";
        validator(value: import('../../../utils/type.utils').Value<{
            readonly DEFAULT: "default";
            readonly DISABLED: "disabled";
            readonly LOADING: "loading";
        }>): boolean;
    };
    eyebrowEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    textEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    color: import('../../Tile').TileColors;
    state: import('../../Tile').TileStates;
    iconLeft: Record<string, any>;
    iconRight: Record<string, any>;
    interactive: boolean;
    isIconRightHiddenOnMobile: boolean;
    eyebrowText: string;
    additionalText: string;
    isEyebrowTextUppercase: boolean;
    eyebrowEllipsis: boolean;
    textEllipsis: boolean;
}>;
export default _default;
