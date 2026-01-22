import { IconItem } from '../Icons/Icon';
import { BannerColor } from './Banner.consts';

declare function __VLS_template(): {
    defaultText?(_: {}): any;
    rightSlot?(_: {}): any;
    expandedText?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    isExpanded: import('vue').PropType<boolean>;
    icon: IconItem | null;
    buttonText: {
        type: import('vue').PropType<string>;
    };
    closable: {
        type: import('vue').PropType<boolean>;
    };
    color: {
        type: import('vue').PropType<BannerColor>;
    };
    title: {
        type: import('vue').PropType<string>;
        required: true;
    };
    isIconHiddenOnMobile: {
        type: import('vue').PropType<boolean>;
    };
    size: {
        type: import('vue').PropType<string>;
    };
    titleInColor: {
        type: import('vue').PropType<boolean>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => void;
    "button-clicked": () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    isExpanded: import('vue').PropType<boolean>;
    icon: IconItem | null;
    buttonText: {
        type: import('vue').PropType<string>;
    };
    closable: {
        type: import('vue').PropType<boolean>;
    };
    color: {
        type: import('vue').PropType<BannerColor>;
    };
    title: {
        type: import('vue').PropType<string>;
        required: true;
    };
    isIconHiddenOnMobile: {
        type: import('vue').PropType<boolean>;
    };
    size: {
        type: import('vue').PropType<string>;
    };
    titleInColor: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{
    onClose?: (() => any) | undefined;
    "onButton-clicked"?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
