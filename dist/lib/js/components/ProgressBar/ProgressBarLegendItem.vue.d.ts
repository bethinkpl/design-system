import { IconItem } from '../Icons/Icon';
import { ProgressBarRangeColor } from './ProgressBar.consts';
import { ProgressBarLegendSize } from './ProgressBarLegend.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    size?: ProgressBarLegendSize;
    color: ProgressBarRangeColor;
    icon?: IconItem | null;
    label?: string;
    data?: string;
    percentValue?: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    size?: ProgressBarLegendSize;
    color: ProgressBarRangeColor;
    icon?: IconItem | null;
    label?: string;
    data?: string;
    percentValue?: string;
}>>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
