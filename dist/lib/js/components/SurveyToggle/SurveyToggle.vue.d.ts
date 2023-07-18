import DsIcon from '../Icons/Icon';
declare const _default: {
    name: string;
    components: {
        DsIcon: typeof DsIcon;
    };
    props: {
        label: {
            type: StringConstructor;
            default: null;
        };
        contentText: {
            type: StringConstructor;
            default: null;
        };
        meaning: {
            type: StringConstructor;
            default: "primary";
            validator(meaning: any): boolean;
        };
        status: {
            type: StringConstructor;
            default: "default";
            validator(status: any): boolean;
        };
        state: {
            type: StringConstructor;
            default: "default";
            validator(state: any): boolean;
        };
        selectedIcon: {
            type: ObjectConstructor;
            default(): import("@fortawesome/fontawesome-common-types").IconDefinition;
            validator(selectedIcon: any): boolean;
        };
    };
    data(): {
        hovered: boolean;
        ICON_SIZES: Readonly<{
            XXX_SMALL: string;
            XX_SMALL: string;
            X_SMALL: string;
            SMALL: string;
            MEDIUM: string;
            LARGE: string;
            X_LARGE: string;
            XX_LARGE: string;
        }>;
        SURVEY_TOGGLE_MEANING: Readonly<{
            readonly PRIMARY: "primary";
            readonly NEUTRAL: "neutral";
        }>;
        SURVEY_TOGGLE_STATUSES: Readonly<{
            readonly DEFAULT: "default";
            readonly SELECTED: "selected";
        }>;
        SURVEY_TOGGLE_STATES: Readonly<{
            readonly DEFAULT: "default";
            readonly HOVERED: "hovered";
            readonly DISABLED: "disabled";
        }>;
    };
    computed: {
        isPrimarySelected(): boolean;
        isPrimary(): boolean;
        isNeutral(): boolean;
        isNeutralSelected(): boolean;
        isHoveredState(): any;
    };
};
export default _default;
