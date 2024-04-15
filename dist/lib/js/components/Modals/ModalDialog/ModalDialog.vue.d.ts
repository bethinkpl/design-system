import DsModal from '../Modal/Modal.vue';
declare const _default: {
    name: string;
    components: {
        DsModal: typeof DsModal;
    };
    props: {
        danger: {
            type: BooleanConstructor;
            default: boolean;
        };
        headerTitle: {
            type: StringConstructor;
            required: boolean;
        };
        headerSubtitle: {
            type: StringConstructor;
            default: null;
        };
        headerFeatureIcon: {
            type: ObjectConstructor;
            default: null;
            validator(icon: any): boolean;
        };
        headerFeatureIconColor: {
            type: StringConstructor;
            default: string;
            validator(color: string): boolean;
        };
        headerImage: {
            type: StringConstructor;
            default: null;
        };
        footerPrimaryButtonText: {
            type: StringConstructor;
            default: null;
        };
        footerPrimaryButtonIcon: {
            type: ObjectConstructor;
            default: null;
            validator(icon: any): boolean;
        };
        footerPrimaryButtonState: {
            type: StringConstructor;
            default: "default";
            validator(state: any): boolean;
        };
        footerSecondaryButtonText: {
            type: StringConstructor;
            default: null;
        };
        footerSecondaryButtonIcon: {
            type: ObjectConstructor;
            default: null;
            validator(icon: any): boolean;
        };
        footerSecondaryButtonState: {
            type: StringConstructor;
            default: "default";
            validator(state: any): boolean;
        };
    };
    emits: string[];
    data(): {
        MODAL_SIZES: Readonly<{
            SMALL: string;
            MEDIUM: string;
        }>;
        MODAL_HEADER_TITLE_SIZES: Readonly<{
            SMALL: string;
            MEDIUM: string;
        }>;
    };
};
export default _default;
