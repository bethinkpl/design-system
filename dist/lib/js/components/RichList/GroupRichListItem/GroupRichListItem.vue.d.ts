import { PropType } from 'vue';
declare const _default: {
    name: string;
    props: {
        isExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        borderColor: {
            type: PropType<import("../RichListItem").RichListItemBorderColor>;
            default: null;
            validator(borderColor: any): boolean;
        };
        borderColorHex: {
            type: StringConstructor;
            default: null;
        };
        backgroundColor: {
            type: PropType<import("../RichListItem").RichListItemBackgroundColor>;
            default: "neutral";
            validator(backgroundColor: any): boolean;
        };
    };
    computed: {
        classList(): any;
        borderColorClass(): string | undefined;
        borderColorStyle(): {
            backgroundColor: any;
        } | undefined;
    };
};
export default _default;
