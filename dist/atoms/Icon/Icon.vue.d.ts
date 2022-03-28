import { VueConstructor } from 'vue';
declare const _default: {
    name: string;
    components: {
        FontAwesomeIcon: import("vue").FunctionalComponentOptions<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps, import("vue/types/options").PropsDefinition<import("@fortawesome/vue-fontawesome").FontAwesomeIconProps>> & VueConstructor<import("vue").default>;
    };
    props: {
        icon: {
            type: ObjectConstructor;
            required: boolean;
            validate(icon: VueConstructor): boolean;
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
