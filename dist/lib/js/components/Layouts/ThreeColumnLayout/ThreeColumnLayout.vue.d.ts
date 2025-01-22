import { ThreeColumnLayoutRightColumnSize } from './ThreeColumnLayout.consts';

declare const _default: import('vue').DefineComponent<{}, {}, {
    THREE_COLUMN_LAYOUT_RIGHT_COLUMN_SIZE: Readonly<{
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
    }>;
    leftColumnVisibleMobile: boolean;
    rightColumnVisibleMobile: boolean;
}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "overlay-clicked"[], "overlay-clicked", import('vue').PublicProps, Readonly<{}> & Readonly<{
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
