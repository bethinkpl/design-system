import { Meta, StoryFn } from '@storybook/vue';
declare const _default: Meta<{
    name: string;
    props: {
        label: {
            type: StringConstructor;
            required: boolean;
        };
        color: {
            type: StringConstructor;
            required: boolean;
            validator(value: "neutral"): boolean;
        };
    };
    data(): {
        BADGE_COLORS: Readonly<{
            readonly NEUTRAL: "neutral";
        }>;
    };
}>;
export default _default;
export declare const Interactive: StoryFn<{
    name: string;
    props: {
        label: {
            type: StringConstructor;
            required: boolean;
        };
        color: {
            type: StringConstructor;
            required: boolean;
            validator(value: "neutral"): boolean;
        };
    };
    data(): {
        BADGE_COLORS: Readonly<{
            readonly NEUTRAL: "neutral";
        }>;
    };
}>;
