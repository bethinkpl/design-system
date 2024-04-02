import BadgeScore from './BadgeScore.vue';
import { Meta, StoryFn } from '@storybook/vue3';
declare const _default: Meta<typeof BadgeScore>;
export default _default;
export declare const Interactive: StoryFn<{
    text: string;
    suffix: string;
    color: string;
    size: string;
    icon: string;
    fullWidth: boolean;
}>;
export declare const MinWidth: StoryFn<{}>;
export declare const FullWidth: StoryFn<{}>;
