import { PropType } from 'vue';
import { TILE_STATES, TileAdditionalTextMaxWidth, TileBorderColors, TileColor, TileState } from './Tile.consts';
import { Value } from '../../utils/type.utils';

export declare const props: {
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
        type: PropType<TileColor>;
        default: "neutral";
        validator(color: any): boolean;
    };
    isEyebrowTextUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: PropType<TileState>;
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
    borderColor: {
        type: PropType<TileBorderColors>;
        default: null;
    };
    additionalTextMaxWidth: {
        type: PropType<TileAdditionalTextMaxWidth>;
        default: "small";
        validator(value: TileAdditionalTextMaxWidth): boolean;
    };
};
