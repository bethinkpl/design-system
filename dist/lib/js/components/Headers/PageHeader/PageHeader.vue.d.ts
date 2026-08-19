import { PageHeaderMobileLayout } from './PageHeader.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    pageTitle: {
        type: StringConstructor;
        required: true;
    };
    supportingInfo: {
        type: StringConstructor;
        default: null;
    };
    divider: {
        type: BooleanConstructor;
        default: boolean;
    };
    mobileLayout: {
        type: StringConstructor;
        default: "vertical";
        validator: (value: PageHeaderMobileLayout) => boolean;
    };
}>, {}, {
    PAGE_HEADER_MOBILE_LAYOUTS: Readonly<{
        readonly VERTICAL: "vertical";
        readonly HORIZONTAL: "horizontal";
    }>;
}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    pageTitle: {
        type: StringConstructor;
        required: true;
    };
    supportingInfo: {
        type: StringConstructor;
        default: null;
    };
    divider: {
        type: BooleanConstructor;
        default: boolean;
    };
    mobileLayout: {
        type: StringConstructor;
        default: "vertical";
        validator: (value: PageHeaderMobileLayout) => boolean;
    };
}>> & Readonly<{}>, {
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
