import { PropType } from 'vue';
import { ThreeColumnLayoutRightColumnSize } from './ThreeColumnLayout.consts';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    rightColumnSize: {
        type: PropType<ThreeColumnLayoutRightColumnSize>;
        default: "medium";
        validator(rightColumnSize: unknown): boolean;
    };
    rightColumnVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftColumnVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialMobileRightColumnVisibleState: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialMobileLeftColumnVisibleState: {
        type: BooleanConstructor;
        default: boolean;
    };
    contentWithoutPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {
    THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE: Readonly<{
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
    }>;
    leftColumnVisibleMobile: boolean;
    rightColumnVisibleMobile: boolean;
}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "overlay-clicked"[], "overlay-clicked", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    rightColumnSize: {
        type: PropType<ThreeColumnLayoutRightColumnSize>;
        default: "medium";
        validator(rightColumnSize: unknown): boolean;
    };
    rightColumnVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftColumnVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialMobileRightColumnVisibleState: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialMobileLeftColumnVisibleState: {
        type: BooleanConstructor;
        default: boolean;
    };
    contentWithoutPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onOverlay-clicked"?: ((...args: any[]) => any) | undefined;
}>, {
    rightColumnSize: ThreeColumnLayoutRightColumnSize;
    rightColumnVisible: boolean;
    leftColumnVisible: boolean;
    initialMobileRightColumnVisibleState: boolean;
    initialMobileLeftColumnVisibleState: boolean;
    contentWithoutPadding: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
