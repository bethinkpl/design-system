declare const _default: {
    name: string;
    components: {
        FontAwesomeIcon: import("vue").ComponentPublicInstance<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, {}, {}, {}, {}, {}, import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
    };
    props: {
        icon: {
            type: ObjectConstructor;
            required: boolean;
            validator(icon: any): boolean;
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
    };
    computed: {
        sizeClassName(): string;
        isFontawesomeIcon(): boolean;
        rotationClass(): string | null;
    };
};
export default _default;
