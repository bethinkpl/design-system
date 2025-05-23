import { SectionTitleSize } from './SectionTitle.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    size: {
        type: StringConstructor;
        default: string;
        validator(size: SectionTitleSize): boolean;
    };
    supportingText: {
        type: StringConstructor;
        default: null;
    };
    titleText: {
        type: StringConstructor;
        required: true;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: StringConstructor;
        default: string;
        validator(size: SectionTitleSize): boolean;
    };
    supportingText: {
        type: StringConstructor;
        default: null;
    };
    titleText: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{}>, {
    size: string;
    supportingText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
