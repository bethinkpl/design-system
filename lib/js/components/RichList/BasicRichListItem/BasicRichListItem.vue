<template>
	<rich-list-item
		:size="size"
		:type="type"
		:layout="layout"
		:is-interactive="isInteractive"
		:is-draggable="isDraggable"
		:icon="icon"
		:icon-color="iconColor"
		:icon-color-hex="iconColorHex"
		:is-dimmed="isDimmed"
		:border-color="borderColor"
		:border-color-hex="borderColorHex"
		:state="state"
		:background-color="backgroundColor"
		:elevation="elevation"
		:has-draggable-handler="hasDraggableHandler"
		:has-actions-slot-divider="hasActionsSlotDivider"
		:is-selectable="isSelectable"
		:is-selected="isSelected"
		class="ds-basicRichListItem"
		:class="{
			'-ds-loading': state === RICH_LIST_ITEM_STATE.LOADING,
			'-ds-small': size === RICH_LIST_ITEM_SIZE.SMALL,
		}"
		@mouseover="hovered = true"
		@mouseleave="hovered = false"
		@update:is-selected="$emit('update:is-selected', $event)"
	>
		<template v-if="$slots.media" #media>
			<slot name="media" />
		</template>
		<template #content>
			<div class="ds-basicRichListItem__content">
				<ds-text-group
					:eyebrow-text="eyebrow"
					:eyebrow-text-ellipsis="eyebrowEllipsis"
					:is-eyebrow-text-uppercase="isEyebrowUppercase"
					:is-selected="isTextGroupSelected"
					:is-interactive="false"
					:main-text="text"
					:main-text-ellipsis="textEllipsis"
					:supporting-text="supportingText"
					:supporting-text-ellipsis="supportingTextEllipsis"
					:size="textGroupSize"
					:state="textGroupState"
					:is-supporting-text-tooltip-enabled="isSupportingTextTooltipEnabled"
				/>
			</div>
		</template>
		<template v-if="$slots.metadata" #metadata>
			<slot name="metadata" />
		</template>
		<template v-if="$slots.actions" #actions>
			<slot name="actions" />
		</template>
	</rich-list-item>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';

.ds-basicRichListItem {
	$root: &;

	max-width: 100%;

	&__content {
		display: flex;
		flex-direction: column;
		gap: $space-4xs;
		justify-content: center;
		min-width: 0; // to prevent the component from being pushed by the ellipses
		padding: $space-xs 0;
	}

	&.-ds-small {
		#{$root}__content {
			padding: $space-2xs 0;
		}
	}

	&.-ds-loading {
		#{$root}__content {
			flex: 1;
		}
	}
}
</style>

<script lang="ts">
import { defineComponent, PropType, toRaw } from 'vue';
import { ICON_COLORS, IconColor, IconItem, ICONS } from '../../Icons/Icon';
import {
	TEXT_GROUP_SIZES,
	TEXT_GROUP_STATES,
	TextGroupSize,
	TextGroupState,
} from '../../TextGroup';
import DsTextGroup from '../../TextGroup/TextGroup.vue';
import RichListItem, {
	RICH_LIST_ITEM_BACKGROUND_COLOR,
	RICH_LIST_ITEM_BORDER_COLOR,
	RICH_LIST_ITEM_ELEVATION,
	RICH_LIST_ITEM_LAYOUT,
	RICH_LIST_ITEM_SIZE,
	RICH_LIST_ITEM_STATE,
	RICH_LIST_ITEM_TYPE,
	RichListItemBackgroundColor,
	RichListItemBorderColor,
	RichListItemElevation,
	RichListItemLayout,
	RichListItemSize,
	RichListItemState,
	RichListItemType,
} from '../RichListItem';

export default defineComponent({
	name: 'BasicRichListItem',
	components: {
		DsTextGroup,
		RichListItem,
	},
	props: {
		type: {
			type: String as PropType<RichListItemType>,
			default: RICH_LIST_ITEM_TYPE.DEFAULT,
			validator(type: RichListItemType) {
				return Object.values(RICH_LIST_ITEM_TYPE).includes(type);
			},
		},
		state: {
			type: String as PropType<RichListItemState>,
			default: RICH_LIST_ITEM_STATE.DEFAULT,
			validator(state: RichListItemState) {
				return Object.values(RICH_LIST_ITEM_STATE).includes(state);
			},
		},
		layout: {
			type: String as PropType<RichListItemLayout>,
			default: RICH_LIST_ITEM_LAYOUT.HORIZONTAL,
			validator(layout: RichListItemLayout) {
				return Object.values(RICH_LIST_ITEM_LAYOUT).includes(layout);
			},
		},
		size: {
			type: String as PropType<RichListItemSize>,
			default: RICH_LIST_ITEM_SIZE.MEDIUM,
			validator(size: RichListItemSize) {
				return Object.values(RICH_LIST_ITEM_SIZE).includes(size);
			},
		},
		isInteractive: {
			type: Boolean,
			default: true,
		},
		isDimmed: {
			type: Boolean,
			default: false,
		},
		isDraggable: {
			type: Boolean,
			default: true,
		},
		icon: {
			type: Object as PropType<IconItem>,
			default: null,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		iconColor: {
			type: String as PropType<IconColor>,
			default: null,
			validator(iconColor: IconColor) {
				return Object.values(ICON_COLORS).includes(iconColor);
			},
		},
		iconColorHex: {
			type: String,
			default: null,
		},
		borderColor: {
			type: String as PropType<RichListItemBorderColor>,
			default: null,
			validator(borderColor: RichListItemBorderColor) {
				return Object.values(RICH_LIST_ITEM_BORDER_COLOR).includes(borderColor);
			},
		},
		borderColorHex: {
			type: String,
			default: null,
		},
		text: {
			type: String,
			required: true,
		},
		textEllipsis: {
			type: Boolean,
			default: false,
		},
		eyebrow: {
			type: String,
			default: null,
		},
		eyebrowEllipsis: {
			type: Boolean,
			default: false,
		},
		isEyebrowUppercase: {
			type: Boolean,
			default: false,
		},
		supportingText: {
			type: String,
			default: null,
		},
		supportingTextEllipsis: {
			type: Boolean,
			default: false,
		},
		isSupportingTextTooltipEnabled: {
			type: Boolean,
			default: false,
		},
		backgroundColor: {
			type: String as PropType<RichListItemBackgroundColor>,
			default: RICH_LIST_ITEM_BACKGROUND_COLOR.NEUTRAL,
			validator(backgroundColor: RichListItemBackgroundColor) {
				return Object.values(RICH_LIST_ITEM_BACKGROUND_COLOR).includes(backgroundColor);
			},
		},
		elevation: {
			type: String as PropType<RichListItemElevation>,
			default: null,
			validator(evolution: RichListItemElevation) {
				return Object.values(RICH_LIST_ITEM_ELEVATION).includes(evolution);
			},
		},
		hasDraggableHandler: {
			type: Boolean,
			default: true,
		},
		hasActionsSlotDivider: {
			type: Boolean,
			default: true,
		},
		isSelectable: {
			type: Boolean,
			default: true,
		},
		isSelected: {
			type: Boolean,
			default: false,
		},
		isTextGroupSelected: {
			type: Boolean,
			default: false,
		},
	},
	emits: {
		'update:is-selected': (value: boolean) => true,
	},
	data() {
		return {
			hovered: false,
			RICH_LIST_ITEM_SIZE: Object.freeze(RICH_LIST_ITEM_SIZE),
			RICH_LIST_ITEM_STATE: Object.freeze(RICH_LIST_ITEM_STATE),
		};
	},
	computed: {
		textGroupSize(): TextGroupSize {
			const map = {
				[RICH_LIST_ITEM_SIZE.SMALL]: TEXT_GROUP_SIZES.SMALL,
				[RICH_LIST_ITEM_SIZE.MEDIUM]: TEXT_GROUP_SIZES.MEDIUM,
			};

			return map[this.size];
		},
		textGroupState(): TextGroupState {
			if (this.state === RICH_LIST_ITEM_STATE.LOADING) {
				return TEXT_GROUP_STATES.LOADING;
			}
			if (this.hovered && this.isInteractive) {
				return TEXT_GROUP_STATES.HOVERED;
			}
			return TEXT_GROUP_STATES.DEFAULT;
		},
	},
});
</script>
