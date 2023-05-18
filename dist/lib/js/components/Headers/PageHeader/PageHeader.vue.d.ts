import DsDivider from '../../Divider';
declare const _default: {
    name: string;
    components: {
        DsDivider: typeof DsDivider;
    };
    props: {
        pageTitle: {
            type: StringConstructor;
            required: boolean;
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
            validator: (value: any) => boolean;
        };
    };
    data(): {
        PAGE_HEADER_MOBILE_LAYOUTS: Readonly<{
            readonly VERTICAL: "vertical";
            readonly HORIZONTAL: "horizontal";
        }>;
    };
};
export default _default;
