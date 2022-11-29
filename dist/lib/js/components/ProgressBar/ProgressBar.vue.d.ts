import { PropType } from 'vue';
import { ProgressBarRange } from './ProgressBar.consts';
declare const _default: {
    name: string;
    props: {
        numberOfLayers: {
            type: NumberConstructor;
            default: number;
            validator(size: any): boolean;
        };
        colorScheme: {
            type: StringConstructor;
            default: string;
            validator(size: any): boolean;
        };
        color: {
            type: StringConstructor;
            default: "info";
            validator(color: any): boolean;
        };
        size: {
            type: StringConstructor;
            default: "medium";
            validator(size: any): boolean;
        };
        ranges: {
            type: PropType<ProgressBarRange[]>;
            required: boolean;
        };
        radius: {
            type: StringConstructor;
            default: string;
            validator(size: any): boolean;
        };
        layout: {
            type: StringConstructor;
            default: string;
            validator(size: any): boolean;
        };
        labelText: {
            type: StringConstructor;
            default: null;
        };
        labelData: {
            type: StringConstructor;
            default: null;
        };
        labelDataSupporting: {
            type: StringConstructor;
            default: null;
        };
        labelDataSuffix: {
            type: StringConstructor;
            default: null;
        };
    };
    data(): {
        PROGRESS_BAR_COLORS: Readonly<{
            readonly NEUTRAL: "neutral";
            readonly INFO: "info";
            readonly PRIMARY: "primary";
            readonly SUCCESS: "success";
            readonly WARNING: "warning";
            readonly FAIL: "fail";
        }>;
        PROGRESS_BAR_SIZES: Readonly<{
            readonly MEDIUM: "medium";
            readonly SMALL: "small";
            readonly XSMALL: "extra small";
        }>;
        PROGRESS_BAR_RADII: Readonly<{
            DEFAULT: string;
            NONE: string;
        }>;
        PROGRESS_BAR_LAYOUTS: Readonly<{
            DEFAULT: string;
            COMPACT: string;
        }>;
        PROGRESS_BAR_LAYERS: Readonly<{
            ONE: number;
            TWO: number;
        }>;
        PROGRESS_BAR_COLOR_SCHEMES: Readonly<{
            DEFAULT: string;
            MEDIUM: string;
            MEDIUM_NEUTRAL: string;
        }>;
    };
    computed: {
        labelDataExists(): any;
    };
};
export default _default;
