import Tile from '../../Tile';
declare const _default: {
    name: string;
    components: {
        DsTile: typeof Tile;
    };
    props: {
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
            type: import("vue").PropType<import("../../Tile").TileColors>;
            default: "neutral";
            validator(color: any): boolean;
        };
        isEyebrowTextUppercase: {
            type: BooleanConstructor;
            default: boolean;
        };
        state: {
            type: import("vue").PropType<import("../../Tile").TileStates>;
            default: "default";
            validator(value: import("../../../utils/type.utils").Value<{
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
    };
};
export default _default;
