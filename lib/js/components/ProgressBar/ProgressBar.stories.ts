import ProgressBar from './ProgressBar.vue';
import {
    PROGRESS_BAR_COLORS,
    PROGRESS_BAR_SIZES,
    PROGRESS_BAR_LAYOUTS,
    PROGRESS_BAR_RADII,
    PROGRESS_BAR_LAYERS,
    PROGRESS_BAR_COLOR_SCHEMES
} from './ProgressBar.consts';

import { ArgTypes, Meta, StoryFn } from '@storybook/vue';

export default {
    title: 'Components/ProgressBar',
    component: ProgressBar,
} as Meta<typeof ProgressBar>;

const StoryTemplate: StoryFn<typeof ProgressBar> = (argTypes) => ({
    components: { ProgressBar },
    props: Object.keys(argTypes),
    template: `<ProgressBar v-bind=$props></ProgressBar>`,
});

export const Interactive = StoryTemplate.bind({});

const argTypes = {
    numberOfLayers: {
        control: { type: 'select', options: Object.values(PROGRESS_BAR_LAYERS) },
        defaultValue: PROGRESS_BAR_LAYERS.ONE,
    },
    colorScheme: {
        control: { type: 'select', options: Object.values(PROGRESS_BAR_COLOR_SCHEMES) },
        defaultValue: PROGRESS_BAR_COLOR_SCHEMES.DEFAULT,
    },
    color: {
        control: { type: 'select', options: Object.values(PROGRESS_BAR_COLORS) },
        defaultValue: PROGRESS_BAR_COLORS.PRIMARY,
    },
    size: {
        control: { type: 'select', options: Object.values(PROGRESS_BAR_SIZES) },
        defaultValue: PROGRESS_BAR_SIZES.MEDIUM,
    },
    ranges: {
        control: { type: 'array' },
        defaultValue: [
            {
                layer: 1,
                color: '#000',
                percentValueFrom: 0,
                length: 30,
            },
        ],
    },
    radius: {
        control: { type: 'select', options: Object.values(PROGRESS_BAR_RADII) },
        defaultValue: PROGRESS_BAR_RADII.DEFAULT,
    },
    layout: {
        control: { type: 'select', options: Object.values(PROGRESS_BAR_LAYOUTS) },
        defaultValue: PROGRESS_BAR_LAYOUTS.DEFAULT,
    },
    labelText: {
        control: { type: 'text' },
        defaultValue: '',
    },
    labelData: {
        control: { type: 'text' },
        defaultValue: '',
    },
    labelDataSupporting: {
        control: { type: 'text' },
        defaultValue: '',
    },
    labelDataSuffix: {
        control: { type: 'text' },
        defaultValue: '',
    },
} as ArgTypes;

Interactive.argTypes = argTypes;

Interactive.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/726BIQ076eFnS0ElNuPVC2/Statystyki-i-Dashboard-Bazy-zada%C5%84-na-V1?node-id=548%3A50027',
    },
};