import WnlIcon from '../Icons/Icon';
declare const _default: {
    name: string;
    components: {
        WnlIcon: typeof WnlIcon;
    };
    props: {
        icon: {
            type: ObjectConstructor;
            required: boolean;
            validator(icon: any): boolean;
        };
        isActive: {
            type: BooleanConstructor;
            required: boolean;
        };
        title: {
            type: StringConstructor;
            required: boolean;
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
};
export default _default;
