import { IconItem } from '../../Icons/Icon';

type RouterLocation = string | Record<string, unknown>;
declare function __VLS_template(): Readonly<{
    children?: () => any;
    labelSlot?: () => any;
    default?: () => any;
}> & {
    children?: () => any;
    labelSlot?: () => any;
    default?: () => any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    isExpanded: import('vue').PropType<boolean>;
    href: {
        type: import('vue').PropType<string>;
    };
    to: {
        type: import('vue').PropType<RouterLocation>;
    };
    size: {
        type: import('vue').PropType<string>;
    };
    backgroundColor: {
        type: import('vue').PropType<string>;
    };
    iconLeft: IconItem | null;
    iconRight: IconItem | null;
    iconRightRotation: {
        type: import('vue').PropType<90 | 180 | 270 | null>;
    };
    index: {
        type: import('vue').PropType<number | null>;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    isLabelUppercase: {
        type: import('vue').PropType<boolean>;
    };
    additionalText: {
        type: import('vue').PropType<string>;
    };
    state: {
        type: import('vue').PropType<string>;
    };
    isExpandable: {
        type: import('vue').PropType<boolean>;
    };
    isSelected: {
        type: import('vue').PropType<boolean>;
    };
    isDone: {
        type: import('vue').PropType<boolean>;
    };
    hasSelectedAccessoriesPrimary: {
        type: import('vue').PropType<boolean>;
    };
    isSelectedInteractive: {
        type: import('vue').PropType<boolean>;
    };
    level: {
        type: import('vue').PropType<number | null>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    isExpanded: import('vue').PropType<boolean>;
    href: {
        type: import('vue').PropType<string>;
    };
    to: {
        type: import('vue').PropType<RouterLocation>;
    };
    size: {
        type: import('vue').PropType<string>;
    };
    backgroundColor: {
        type: import('vue').PropType<string>;
    };
    iconLeft: IconItem | null;
    iconRight: IconItem | null;
    iconRightRotation: {
        type: import('vue').PropType<90 | 180 | 270 | null>;
    };
    index: {
        type: import('vue').PropType<number | null>;
    };
    label: {
        type: import('vue').PropType<string>;
    };
    isLabelUppercase: {
        type: import('vue').PropType<boolean>;
    };
    additionalText: {
        type: import('vue').PropType<string>;
    };
    state: {
        type: import('vue').PropType<string>;
    };
    isExpandable: {
        type: import('vue').PropType<boolean>;
    };
    isSelected: {
        type: import('vue').PropType<boolean>;
    };
    isDone: {
        type: import('vue').PropType<boolean>;
    };
    hasSelectedAccessoriesPrimary: {
        type: import('vue').PropType<boolean>;
    };
    isSelectedInteractive: {
        type: import('vue').PropType<boolean>;
    };
    level: {
        type: import('vue').PropType<number | null>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
