declare const _default: import('vue').DefineComponent<{}, {}, {
    PAGE_HEADER_MOBILE_LAYOUTS: Readonly<{
        readonly VERTICAL: "vertical";
        readonly HORIZONTAL: "horizontal";
    }>;
}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {
    divider: boolean;
    mobileLayout: string;
    supportingInfo: string;
}, {}, {
    DsDivider: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        isVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        prominence: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>, {}, {
        DIVIDER_PROMINENCES: Readonly<{
            DEFAULT: string;
            STRONG: string;
            WEAK: string;
        }>;
    }, {
        sizeClass(): string;
    }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        isVertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        prominence: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    }>> & Readonly<{}>, {
        size: string;
        isVertical: boolean;
        prominence: string;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
