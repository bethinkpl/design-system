
declare const _default: import('vue').DefineComponent<{}, {}, {
    key: number;
    isOpened: boolean;
    DROPDOWN_RADIUSES: Readonly<{
        readonly TOP: "top";
        readonly BOTTOM: "bottom";
        readonly BOTH: "both";
    }>;
}, {
    scrollableWrapperStyles(): any;
    options(): any;
}, {
    close(): void;
    updateKey(): void;
    onHide(): void;
    onShow(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("document-click" | "hide" | "show")[], "show" | "hide" | "document-click", import('vue').PublicProps, Readonly<{}> & Readonly<{
    "onDocument-click"?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
}>, {
    radius: string;
    boundariesSelector: string;
    forceShow: boolean;
    sameWidth: boolean;
    triggerAction: string;
    placement: string;
    maxHeight: string;
}, {}, {
    VuePopper: any;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
