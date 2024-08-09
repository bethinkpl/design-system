import RichListItem, { RichListItemBackgroundColor, RichListItemBorderColor, RichListItemSize, RichListItemState, RichListItemType } from '../RichListItem';
import { PropType } from 'vue';
import { TextGroupSize, TextGroupState } from '../../TextGroup';
declare const _default: {
    name: string;
    components: {
        DsTextGroup: typeof RichListItem;
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
            type: PropType<any>;
            default: null;
            validator(icon: any): boolean;
        };
        iconColor: {
            type: PropType<string>;
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
        textEllipsis: {
            type: BooleanConstructor;
            default: boolean;
        };
        eyebrow: {
            type: StringConstructor;
            default: null;
        };
        eyebrowEllipsis: {
            type: BooleanConstructor;
            default: boolean;
        };
        isEyebrowUppercase: {
            type: BooleanConstructor;
            default: boolean;
        };
        supportingText: {
            type: StringConstructor;
            default: null;
        };
        supportingTextEllipsis: {
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
    emits: {
        'update:is-selected': (value: boolean) => boolean;
    };
    data(): {
        hovered: boolean;
        RICH_LIST_ITEM_SIZE: Readonly<{
            readonly SMALL: "small";
            readonly MEDIUM: "medium";
        }>;
    };
    computed: {
        textGroupSize(): TextGroupSize;
        textGroupState(): TextGroupState;
    };
};
export default _default;
