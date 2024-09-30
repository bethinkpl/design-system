import RichListItem, { RichListItemBackgroundColor, RichListItemBorderColor, RichListItemElevation, RichListItemLayout, RichListItemSize, RichListItemState, RichListItemType } from '../RichListItem';
import { PropType } from 'vue';
import { IconColor } from '../../Icons/Icon';
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
            validator(type: RichListItemType): boolean;
        };
        state: {
            type: PropType<RichListItemState>;
            default: "default";
            validator(state: RichListItemState): boolean;
        };
        layout: {
            type: PropType<RichListItemLayout>;
            default: "horizontal";
            validator(layout: RichListItemLayout): boolean;
        };
        size: {
            type: PropType<RichListItemSize>;
            default: "medium";
            validator(size: RichListItemSize): boolean;
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
            validator(iconColor: IconColor): boolean;
        };
        iconColorHex: {
            type: StringConstructor;
            default: null;
        };
        borderColor: {
            type: PropType<RichListItemBorderColor>;
            default: null;
            validator(borderColor: RichListItemBorderColor): boolean;
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
            validator(backgroundColor: RichListItemBackgroundColor): boolean;
        };
        elevation: {
            type: PropType<"small">;
            default: null;
            validator(evolution: RichListItemElevation): boolean;
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
