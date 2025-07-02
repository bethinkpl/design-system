import { ToastColors, ToastPositions, ToastSizes } from './Toast.consts';
import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    size: {
        type: PropType<ToastSizes>;
        default: "medium";
    };
    position: {
        type: PropType<ToastPositions>;
        default: string;
    };
    boundariesSelector: {
        type: (StringConstructor | {
            new (): HTMLElement;
            prototype: HTMLElement;
        })[];
        default: null;
    };
    color: {
        type: PropType<ToastColors>;
        default: string;
    };
    footerPrimaryButtonText: {
        type: StringConstructor;
        default: string;
    };
    footerPrimaryButtonIcon: {
        type: ObjectConstructor;
        default: null;
        validator(footerPrimaryButtonIcon: any): boolean;
    };
    footerSecondaryButtonText: {
        type: StringConstructor;
        default: string;
    };
    footerSecondaryButtonIcon: {
        type: ObjectConstructor;
        default: null;
        validator(footerSecondaryButtonIcon: any): boolean;
    };
    isDisappearing: {
        type: BooleanConstructor;
        default: boolean;
    };
    disappearingTimeout: {
        type: StringConstructor;
        default: string;
        validator(disappearingTimeout: string): boolean;
    };
}>, {}, {
    boundariesSelectorElement: null;
    boundariesSelectorElementResizeObserver: null;
    styles: {};
    BUTTON_COLORS: Readonly<{
        readonly PRIMARY: "primary";
        readonly NEUTRAL: "neutral";
        readonly DANGER: "danger";
        readonly SUCCESS: "success";
        readonly INVERTED: "inverted";
    }>;
    BUTTON_RADIUSES: Readonly<{
        readonly CAPSULE: "capsule";
        readonly ROUNDED: "rounded";
    }>;
    BUTTON_TYPES: Readonly<{
        readonly FILLED: "filled";
        readonly OUTLINED: "outlined";
        readonly TEXT: "text";
    }>;
    TOAST_SIZES: Readonly<{
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
    }>;
    TOAST_POSITIONS: Readonly<{
        LEFT: string;
        CENTER: string;
        RIGHT: string;
    }>;
}, {
    buttonPrimaryColor(): "primary" | "neutral";
    buttonSecondaryColor(): "danger" | "neutral";
    toastPosition(): string;
    toastSize(): string;
}, {
    calculateStyles(): void;
    setBoundariesSelectorElement(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => true;
    'primary-button-click': () => true;
    'secondary-button-click': () => true;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: PropType<ToastSizes>;
        default: "medium";
    };
    position: {
        type: PropType<ToastPositions>;
        default: string;
    };
    boundariesSelector: {
        type: (StringConstructor | {
            new (): HTMLElement;
            prototype: HTMLElement;
        })[];
        default: null;
    };
    color: {
        type: PropType<ToastColors>;
        default: string;
    };
    footerPrimaryButtonText: {
        type: StringConstructor;
        default: string;
    };
    footerPrimaryButtonIcon: {
        type: ObjectConstructor;
        default: null;
        validator(footerPrimaryButtonIcon: any): boolean;
    };
    footerSecondaryButtonText: {
        type: StringConstructor;
        default: string;
    };
    footerSecondaryButtonIcon: {
        type: ObjectConstructor;
        default: null;
        validator(footerSecondaryButtonIcon: any): boolean;
    };
    isDisappearing: {
        type: BooleanConstructor;
        default: boolean;
    };
    disappearingTimeout: {
        type: StringConstructor;
        default: string;
        validator(disappearingTimeout: string): boolean;
    };
}>> & Readonly<{
    onClose?: (() => any) | undefined;
    "onSecondary-button-click"?: (() => any) | undefined;
    "onPrimary-button-click"?: (() => any) | undefined;
}>, {
    size: ToastSizes;
    color: string;
    footerPrimaryButtonText: string;
    footerPrimaryButtonIcon: Record<string, any>;
    footerSecondaryButtonText: string;
    footerSecondaryButtonIcon: Record<string, any>;
    position: string;
    boundariesSelector: string | HTMLElement;
    isDisappearing: boolean;
    disappearingTimeout: string;
}, {}, {
    DsButton: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            size: {
                type: PropType<string>;
            };
            type: {
                type: PropType<string>;
            };
            color: {
                type: PropType<string | null>;
            };
            radius: {
                type: PropType<string>;
            };
            state: {
                type: PropType<string>;
            };
            iconLeft: import('../Icons/Icon').IconItem | null;
            iconRight: import('../Icons/Icon').IconItem | null;
            elevation: {
                type: PropType<string>;
            };
            as: {
                type: PropType<"a" | "button" | "span">;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            size: {
                type: PropType<string>;
            };
            type: {
                type: PropType<string>;
            };
            color: {
                type: PropType<string | null>;
            };
            radius: {
                type: PropType<string>;
            };
            state: {
                type: PropType<string>;
            };
            iconLeft: import('../Icons/Icon').IconItem | null;
            iconRight: import('../Icons/Icon').IconItem | null;
            elevation: {
                type: PropType<string>;
            };
            as: {
                type: PropType<"a" | "button" | "span">;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: PropType<string>;
        };
        type: {
            type: PropType<string>;
        };
        color: {
            type: PropType<string | null>;
        };
        radius: {
            type: PropType<string>;
        };
        state: {
            type: PropType<string>;
        };
        iconLeft: import('../Icons/Icon').IconItem | null;
        iconRight: import('../Icons/Icon').IconItem | null;
        elevation: {
            type: PropType<string>;
        };
        as: {
            type: PropType<"a" | "button" | "span">;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    DsCard: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            headerHasPadding: {
                type: PropType<boolean>;
            };
            footerHasPadding: {
                type: PropType<boolean>;
            };
            paddingSize: {
                type: PropType<string>;
            };
            dividerUnderHeader: {
                type: PropType<boolean>;
            };
            hasBorder: {
                type: PropType<boolean>;
            };
            borderPosition: {
                type: PropType<string>;
            };
            borderSize: {
                type: PropType<string>;
            };
            borderColor: {
                type: PropType<string>;
            };
            hasLoadingBar: {
                type: PropType<boolean>;
            };
            loadingBarColor: {
                type: PropType<string>;
            };
            loadingBarTime: {
                type: PropType<string>;
            };
            isFlat: {
                type: PropType<boolean>;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            headerHasPadding: {
                type: PropType<boolean>;
            };
            footerHasPadding: {
                type: PropType<boolean>;
            };
            paddingSize: {
                type: PropType<string>;
            };
            dividerUnderHeader: {
                type: PropType<boolean>;
            };
            hasBorder: {
                type: PropType<boolean>;
            };
            borderPosition: {
                type: PropType<string>;
            };
            borderSize: {
                type: PropType<string>;
            };
            borderColor: {
                type: PropType<string>;
            };
            hasLoadingBar: {
                type: PropType<boolean>;
            };
            loadingBarColor: {
                type: PropType<string>;
            };
            loadingBarTime: {
                type: PropType<string>;
            };
            isFlat: {
                type: PropType<boolean>;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        headerHasPadding: {
            type: PropType<boolean>;
        };
        footerHasPadding: {
            type: PropType<boolean>;
        };
        paddingSize: {
            type: PropType<string>;
        };
        dividerUnderHeader: {
            type: PropType<boolean>;
        };
        hasBorder: {
            type: PropType<boolean>;
        };
        borderPosition: {
            type: PropType<string>;
        };
        borderSize: {
            type: PropType<string>;
        };
        borderColor: {
            type: PropType<string>;
        };
        hasLoadingBar: {
            type: PropType<boolean>;
        };
        loadingBarColor: {
            type: PropType<string>;
        };
        loadingBarTime: {
            type: PropType<string>;
        };
        isFlat: {
            type: PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: Readonly<{
            header?: () => any;
            content?: () => any;
            footer?: () => any;
        }> & {
            header?: () => any;
            content?: () => any;
            footer?: () => any;
        };
    });
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
