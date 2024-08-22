declare const _default: import('vue').DefineComponent<{
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
        validator(value: number): boolean;
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
}, unknown, unknown, {
    sizeClassName(): string;
    isFontawesomeIcon(): boolean;
    rotationClass(): string | null;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
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
        validator(value: number): boolean;
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
}>>, {
    rotation: number;
    size: string;
    flippedVertical: boolean;
    flippedHorizontal: boolean;
    touchable: boolean;
    spinning: boolean;
}>;
export default _default;
