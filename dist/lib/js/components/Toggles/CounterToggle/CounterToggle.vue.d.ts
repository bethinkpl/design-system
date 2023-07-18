import Icon from '../../Icons/Icon';
declare const _default: {
    name: string;
    components: {
        Icon: typeof Icon;
    };
    props: {
        counter: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
        color: {
            type: StringConstructor;
            default: string;
            validator(color: any): boolean;
        };
        icon: {
            type: ObjectConstructor;
            required: boolean;
            validator(icon: any): boolean;
        };
        isSelected: {
            type: BooleanConstructor;
            default: boolean;
        };
        isDisabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
        ICON_SIZES: Readonly<{
            XXX_SMALL: string;
            XX_SMALL: string;
            X_SMALL: string;
            SMALL: string;
            MEDIUM: string;
            LARGE: string;
            X_LARGE: string;
            XX_LARGE: string;
        }>;
    };
    computed: {
        colorClass(): string;
        hasCounter(): boolean;
    };
};
export default _default;
