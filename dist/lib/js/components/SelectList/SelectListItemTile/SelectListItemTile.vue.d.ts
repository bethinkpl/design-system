import Tile, { TILE_STATES } from '../../Tile';
import { Value } from 'utils/type.utils';
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
        text: {
            type: StringConstructor;
            required: boolean;
        };
        eyebrowText: {
            type: StringConstructor;
            required: boolean;
        };
        additionalText: {
            type: StringConstructor;
            default: null;
        };
        color: {
            type: StringConstructor;
            default: "neutral";
            validator(color: any): boolean;
        };
        isEyebrowTextUppercase: {
            type: BooleanConstructor;
            default: boolean;
        };
        state: {
            type: StringConstructor;
            default: "default";
            validator(value: Value<typeof TILE_STATES>): boolean;
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
