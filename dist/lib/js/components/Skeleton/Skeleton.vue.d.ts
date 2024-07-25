import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    radius: {
        type: PropType<string>;
        default: string;
    };
}, unknown, {
    designTokens: {
        animation: {
            background: string;
        };
        background: string;
    };
    SKELETON_RADIUSES: Readonly<{
        SM: string;
        MD: string;
        XL: string;
    }>;
}, {
    radiusTranslated(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    radius: {
        type: PropType<string>;
        default: string;
    };
}>>, {
    radius: string;
}>;
export default _default;
