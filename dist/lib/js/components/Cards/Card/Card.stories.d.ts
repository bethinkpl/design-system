import { Meta, StoryFn } from '@storybook/vue';
declare const _default: Meta<{
    name: string;
    components: {
        DsDivider: {
            name: string;
            props: {
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
            };
            computed: {
                sizeClass(): string;
            };
            created(): void;
        };
    };
    props: {
        headerHasPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        dividerUnderHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
}>;
export default _default;
export declare const Interactive: StoryFn<{
    name: string;
    components: {
        DsDivider: {
            name: string;
            props: {
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
            };
            computed: {
                sizeClass(): string;
            };
            created(): void;
        };
    };
    props: {
        headerHasPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        dividerUnderHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
}>;
