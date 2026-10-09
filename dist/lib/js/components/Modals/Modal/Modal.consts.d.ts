import { Value } from '../../../utils/type.utils';

export declare const MODAL_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export type ModalSize = Value<typeof MODAL_SIZES>;
export declare const MODAL_HEADER_TITLE_SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
};
export type ModalHeaderTitleSize = Value<typeof MODAL_HEADER_TITLE_SIZES>;
export declare const MODAL_FOOTER_LAYOUTS: {
    readonly HORIZONTAL: "horizontal";
    readonly VERTICAL: "vertical";
};
export type ModalFooterLayout = Value<typeof MODAL_FOOTER_LAYOUTS>;
