import RichListItem, { RichListItemBackgroundColor, RichListItemBorderColor, RichListItemIconColor, RichListItemSize, RichListItemState, RichListItemType } from '../RichListItem';
import { PropType } from 'vue';
declare const _default: {
    name: string;
    components: {
        RichListItem: typeof RichListItem;
    };
    props: {
        type: {
            type: PropType<RichListItemType>;
            default: "default";
            validator(type: any): boolean;
        };
        state: {
            type: PropType<RichListItemState>;
            default: "default";
            validator(state: any): boolean;
        };
        size: {
            type: PropType<RichListItemSize>;
            default: "medium";
            validator(size: any): boolean;
        };
        isInteractive: {
            type: BooleanConstructor;
            default: boolean;
        };
        isDimmed: {
            type: BooleanConstructor;
            default: boolean;
        };
        isDraggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        icon: {
            type: StringConstructor;
            default: null;
        };
        iconColor: {
            type: PropType<RichListItemIconColor>;
            default: null;
            validator(iconColor: any): boolean;
        };
        iconColorHex: {
            type: StringConstructor;
            default: null;
        };
        borderColor: {
            type: PropType<RichListItemBorderColor>;
            default: null;
            validator(borderColor: any): boolean;
        };
        borderColorHex: {
            type: StringConstructor;
            default: null;
        };
        text: {
            type: StringConstructor;
            required: boolean;
        };
        eyebrow: {
            type: StringConstructor;
            required: boolean;
        };
        isEyebrowUppercase: {
            type: BooleanConstructor;
            default: boolean;
        };
        backgroundColor: {
            type: PropType<RichListItemBackgroundColor>;
            default: "neutral";
            validator(backgroundColor: any): boolean;
        };
        elevation: {
            type: PropType<"small">;
            default: null;
            validator(evolution: any): boolean;
        };
        hasDraggableHandler: {
            type: BooleanConstructor;
            default: boolean;
        };
        hasActionsSlotDivider: {
            type: BooleanConstructor;
            default: boolean;
        };
        isSelectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        isSelected: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    emits: string[];
};
export default _default;
