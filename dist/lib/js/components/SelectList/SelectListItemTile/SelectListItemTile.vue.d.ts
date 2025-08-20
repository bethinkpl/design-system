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
        type: import('vue').PropType<import('../../Tile').TileColor>;
        default: "neutral";
        validator(color: import('../../Tile').TileColor): boolean;
    };
    isEyebrowTextUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: import('vue').PropType<import('../../Tile').TileState>;
        default: "default";
        validator(value: import('../../Tile').TileState): boolean;
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
        type: import('vue').PropType<import('../../Tile').TileBorderColors>;
        default: null;
    };
    additionalTextMaxWidth: {
        type: import('vue').PropType<import('../../Tile').TileAdditionalTextMaxWidth>;
        default: "small";
        validator(value: import('../../Tile').TileAdditionalTextMaxWidth): boolean;
    };
    compactLayout: {
        type: import('vue').PropType<import('../../Tile').TileCompactLayout>;
        default: "default";
        validator(value: import('../../Tile').TileCompactLayout): boolean;
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
        type: import('vue').PropType<import('../../Tile').TileColor>;
        default: "neutral";
        validator(color: import('../../Tile').TileColor): boolean;
    };
    isEyebrowTextUppercase: {
        type: BooleanConstructor;
        default: boolean;
    };
    state: {
        type: import('vue').PropType<import('../../Tile').TileState>;
        default: "default";
        validator(value: import('../../Tile').TileState): boolean;
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
        type: import('vue').PropType<import('../../Tile').TileBorderColors>;
        default: null;
    };
    additionalTextMaxWidth: {
        type: import('vue').PropType<import('../../Tile').TileAdditionalTextMaxWidth>;
        default: "small";
        validator(value: import('../../Tile').TileAdditionalTextMaxWidth): boolean;
    };
    compactLayout: {
        type: import('vue').PropType<import('../../Tile').TileCompactLayout>;
        default: "default";
        validator(value: import('../../Tile').TileCompactLayout): boolean;
    };
}>> & Readonly<{}>, {
    color: import('../../Tile').TileColor;
    state: import('../../Tile').TileState;
    iconLeft: Record<string, any>;
    iconRight: Record<string, any>;
    borderColor: import('../../Tile').TileBorderColors;
    interactive: boolean;
    eyebrowText: string;
    additionalText: string;
    isEyebrowTextUppercase: boolean;
    eyebrowEllipsis: boolean;
    textEllipsis: boolean;
    additionalTextMaxWidth: import('../../Tile').TileAdditionalTextMaxWidth;
    compactLayout: import('../../Tile').TileCompactLayout;
}, {}, {
    DsTile: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
            type: import('vue').PropType<import('../../Tile').TileColor>;
            default: "neutral";
            validator(color: import('../../Tile').TileColor): boolean;
        };
        isEyebrowTextUppercase: {
            type: BooleanConstructor;
            default: boolean;
        };
        state: {
            type: import('vue').PropType<import('../../Tile').TileState>;
            default: "default";
            validator(value: import('../../Tile').TileState): boolean;
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
            type: import('vue').PropType<import('../../Tile').TileBorderColors>;
            default: null;
        };
        additionalTextMaxWidth: {
            type: import('vue').PropType<import('../../Tile').TileAdditionalTextMaxWidth>;
            default: "small";
            validator(value: import('../../Tile').TileAdditionalTextMaxWidth): boolean;
        };
        compactLayout: {
            type: import('vue').PropType<import('../../Tile').TileCompactLayout>;
            default: "default";
            validator(value: import('../../Tile').TileCompactLayout): boolean;
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
            type: import('vue').PropType<import('../../Tile').TileColor>;
            default: "neutral";
            validator(color: import('../../Tile').TileColor): boolean;
        };
        isEyebrowTextUppercase: {
            type: BooleanConstructor;
            default: boolean;
        };
        state: {
            type: import('vue').PropType<import('../../Tile').TileState>;
            default: "default";
            validator(value: import('../../Tile').TileState): boolean;
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
            type: import('vue').PropType<import('../../Tile').TileBorderColors>;
            default: null;
        };
        additionalTextMaxWidth: {
            type: import('vue').PropType<import('../../Tile').TileAdditionalTextMaxWidth>;
            default: "small";
            validator(value: import('../../Tile').TileAdditionalTextMaxWidth): boolean;
        };
        compactLayout: {
            type: import('vue').PropType<import('../../Tile').TileCompactLayout>;
            default: "default";
            validator(value: import('../../Tile').TileCompactLayout): boolean;
        };
    }>> & Readonly<{}>, {
        color: import('../../Tile').TileColor;
        state: import('../../Tile').TileState;
        iconLeft: Record<string, any>;
        iconRight: Record<string, any>;
        borderColor: import('../../Tile').TileBorderColors;
        interactive: boolean;
        eyebrowText: string;
        additionalText: string;
        isEyebrowTextUppercase: boolean;
        eyebrowEllipsis: boolean;
        textEllipsis: boolean;
        additionalTextMaxWidth: import('../../Tile').TileAdditionalTextMaxWidth;
        compactLayout: import('../../Tile').TileCompactLayout;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
