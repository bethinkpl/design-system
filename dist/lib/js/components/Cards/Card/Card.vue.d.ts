import { LoadingBarColors } from '../../LoadingBar';
import { CardBackgroundColor, CardRibbonColors, CardRibbonPositions, CardRibbonSizes, CardPaddingSize } from './Card.consts';

declare function __VLS_template(): Readonly<{
    header?: () => any;
    content?: () => any;
    footer?: () => any;
    experimentalContent?: () => any;
}> & {
    header?: () => any;
    content?: () => any;
    footer?: () => any;
    experimentalContent?: () => any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    contentHasPadding?: boolean;
    headerHasPadding?: boolean;
    footerHasPadding?: boolean;
    paddingSize?: CardPaddingSize;
    dividerUnderHeader?: boolean;
    hasRibbon?: boolean;
    hasRadius?: boolean;
    backgroundColor?: CardBackgroundColor;
    ribbonPosition?: CardRibbonPositions;
    ribbonSize?: CardRibbonSizes;
    ribbonColor?: CardRibbonColors;
    hasRibbonRadius?: boolean;
    hasLoadingBar?: boolean;
    loadingBarColor?: LoadingBarColors;
    loadingBarTime?: string;
    isFlat?: boolean;
    isContentScrollable?: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    contentHasPadding?: boolean;
    headerHasPadding?: boolean;
    footerHasPadding?: boolean;
    paddingSize?: CardPaddingSize;
    dividerUnderHeader?: boolean;
    hasRibbon?: boolean;
    hasRadius?: boolean;
    backgroundColor?: CardBackgroundColor;
    ribbonPosition?: CardRibbonPositions;
    ribbonSize?: CardRibbonSizes;
    ribbonColor?: CardRibbonColors;
    hasRibbonRadius?: boolean;
    hasLoadingBar?: boolean;
    loadingBarColor?: LoadingBarColors;
    loadingBarTime?: string;
    isFlat?: boolean;
    isContentScrollable?: boolean;
}>>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
