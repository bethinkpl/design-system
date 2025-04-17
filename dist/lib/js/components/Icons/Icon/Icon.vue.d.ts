declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
export default _default;
