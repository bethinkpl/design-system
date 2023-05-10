import DsIcon from '../Icons/Icon';
declare const _default: {
    name: string;
    components: {
        DsIcon: typeof DsIcon;
    };
    props: {
        icon: {
            type: (ObjectConstructor | null)[];
            default: null;
            validator(icon: any): boolean;
        };
        isSelected: {
            type: BooleanConstructor;
            required: boolean;
        };
        label: {
            type: (StringConstructor | null)[];
            default: null;
        };
        labelEllipsis: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: StringConstructor;
            default: "M";
        };
    };
    data(): {
        TAB_ITEM_SIZES: Readonly<{
            readonly SMALL: "S";
            readonly MEDIUM: "M";
        }>;
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
