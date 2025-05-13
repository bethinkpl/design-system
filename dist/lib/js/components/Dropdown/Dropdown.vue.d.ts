
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    boundariesSelector: {
        type: StringConstructor;
        default: null;
    };
    forceShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    sameWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerAction: {
        type: StringConstructor;
        default: "click";
        validator(triggerAction: unknown): boolean;
    };
    radius: {
        type: StringConstructor;
        default: "both";
        validate(radius: any): boolean;
    };
    placement: {
        type: StringConstructor;
        default: "bottom-start";
        validate(placement: any): boolean;
    };
    maxHeight: {
        type: StringConstructor;
        default: null;
    };
}>, {}, {
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
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("show" | "hide" | "document-click")[], "show" | "hide" | "document-click", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    boundariesSelector: {
        type: StringConstructor;
        default: null;
    };
    forceShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    sameWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerAction: {
        type: StringConstructor;
        default: "click";
        validator(triggerAction: unknown): boolean;
    };
    radius: {
        type: StringConstructor;
        default: "both";
        validate(radius: any): boolean;
    };
    placement: {
        type: StringConstructor;
        default: "bottom-start";
        validate(placement: any): boolean;
    };
    maxHeight: {
        type: StringConstructor;
        default: null;
    };
}>> & Readonly<{
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    "onDocument-click"?: ((...args: any[]) => any) | undefined;
}>, {
    placement: string;
    radius: string;
    boundariesSelector: string;
    forceShow: boolean;
    sameWidth: boolean;
    triggerAction: string;
    maxHeight: string;
}, {}, {
    VuePopper: any;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
