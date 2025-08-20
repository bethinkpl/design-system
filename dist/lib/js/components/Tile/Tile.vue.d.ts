declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
        default: null;
    };
    additionalText: {
        type: StringConstructor;
        default: null;
    };
    color: {
        type: import('vue').PropType<import('./Tile.consts').TileColor>;
        default: "neutral";
        validator(color: import('./Tile.consts').TileColor): boolean;
    };
    isEyebrowTextUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: import('vue').PropType<import('./Tile.consts').TileState>;
        default: "default";
        validator(value: import('./Tile.consts').TileState): boolean;
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
        type: import('vue').PropType<import('./Tile.consts').TileBorderColors>;
        default: null;
    };
    additionalTextMaxWidth: {
        type: import('vue').PropType<import('./Tile.consts').TileAdditionalTextMaxWidth>;
        default: "small";
        validator(value: import('./Tile.consts').TileAdditionalTextMaxWidth): boolean;
    };
    compactLayout: {
        type: import('vue').PropType<import('./Tile.consts').TileCompactLayout>;
        default: "default";
        validator(value: import('./Tile.consts').TileCompactLayout): boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
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
        default: null;
    };
    additionalText: {
        type: StringConstructor;
        default: null;
    };
    color: {
        type: import('vue').PropType<import('./Tile.consts').TileColor>;
        default: "neutral";
        validator(color: import('./Tile.consts').TileColor): boolean;
    };
    isEyebrowTextUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: import('vue').PropType<import('./Tile.consts').TileState>;
        default: "default";
        validator(value: import('./Tile.consts').TileState): boolean;
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
        type: import('vue').PropType<import('./Tile.consts').TileBorderColors>;
        default: null;
    };
    additionalTextMaxWidth: {
        type: import('vue').PropType<import('./Tile.consts').TileAdditionalTextMaxWidth>;
        default: "small";
        validator(value: import('./Tile.consts').TileAdditionalTextMaxWidth): boolean;
    };
    compactLayout: {
        type: import('vue').PropType<import('./Tile.consts').TileCompactLayout>;
        default: "default";
        validator(value: import('./Tile.consts').TileCompactLayout): boolean;
    };
}>> & Readonly<{}>, {
    color: import('./Tile.consts').TileColor;
    state: import('./Tile.consts').TileState;
    iconLeft: Record<string, any>;
    iconRight: Record<string, any>;
    borderColor: import('./Tile.consts').TileBorderColors;
    interactive: boolean;
    eyebrowText: string;
    additionalText: string;
    isEyebrowTextUppercase: boolean;
    eyebrowEllipsis: boolean;
    textEllipsis: boolean;
    additionalTextMaxWidth: import('./Tile.consts').TileAdditionalTextMaxWidth;
    compactLayout: import('./Tile.consts').TileCompactLayout;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
