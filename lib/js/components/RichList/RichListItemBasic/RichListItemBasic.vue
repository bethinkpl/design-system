<template>
	<rich-list-item
		:size="size"
		:type="type"
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
		class="richListItemBasic"
		@update:is-selected="$emit('update:isSelected', $event)"
	>
		<template #content>
			<div class="richListItemBasic__content">
				<div
					class="richListItemBasic__eyebrow"
					:class="{ '-uppercase': isEyebrowUppercase }"
				>
					{{ eyebrow }}
				</div>

				<div class="richListItemBasic__text">
					{{ text }}
				</div>
			</div>
		</template>
		<template v-if="$slots.meta" #meta>
			<slot name="meta" />
		</template>
		<template v-if="$slots.actions" #actions>
			<slot name="actions" />
		</template>
	</rich-list-item>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/spacings';

.richListItemBasic {
	max-width: 100%;

	&__content {
		display: flex;
		flex-direction: column;
		gap: $space-xxxxs;
		justify-content: center;
		min-width: 0; // to prevent the component from being pushed by the ellipses
		padding: $space-xxs 0;
	}

	&__eyebrow {
		@include info-s-extensive-bold;

		color: $color-neutral-text-weak;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		&.-uppercase {
			@include info-s-extensive-bold-uppercase;
		}
	}

	&__text {
		@include text-m-compact-bold;

		color: $color-neutral-text;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
</style>

<script lang="ts">
import RichListItem, {
	RICH_LIST_ITEM_BACKGROUND_COLOR,
	RICH_LIST_ITEM_BORDER_COLOR,
	RICH_LIST_ITEM_ELEVATION,
	RICH_LIST_ITEM_ICON_COLOR,
	RICH_LIST_ITEM_SIZE,
	RICH_LIST_ITEM_STATE,
	RICH_LIST_ITEM_TYPE,
	RichListItemBackgroundColor,
	RichListItemBorderColor,
	RichListItemElevation,
	RichListItemIconColor,
	RichListItemSize,
	RichListItemState,
	RichListItemType,
} from '../RichListItem';
import { PropType } from 'vue';

export default {
	name: 'RichListItemBasic',
	components: {
		RichListItem,
	},
	props: {
		type: {
			type: String as PropType<RichListItemType>,
			default: RICH_LIST_ITEM_TYPE.DEFAULT,
			validator(type) {
				return Object.values(RICH_LIST_ITEM_TYPE).includes(type);
			},
		},
		state: {
			type: String as PropType<RichListItemState>,
			default: RICH_LIST_ITEM_STATE.DEFAULT,
			validator(state) {
				return Object.values(RICH_LIST_ITEM_STATE).includes(state);
			},
		},
		size: {
			type: String as PropType<RichListItemSize>,
			default: RICH_LIST_ITEM_SIZE.MEDIUM,
			validator(size) {
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
			type: String,
			default: null,
		},
		iconColor: {
			type: String as PropType<RichListItemIconColor>,
			default: null,
			validator(iconColor) {
				return Object.values(RICH_LIST_ITEM_ICON_COLOR).includes(iconColor);
			},
		},
		iconColorHex: {
			type: String,
			default: null,
		},
		borderColor: {
			type: String as PropType<RichListItemBorderColor>,
			default: null,
			validator(borderColor) {
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
		eyebrow: {
			type: String,
			required: true,
		},
		isEyebrowUppercase: {
			type: Boolean,
			default: false,
		},
		backgroundColor: {
			type: String as PropType<RichListItemBackgroundColor>,
			default: RICH_LIST_ITEM_BACKGROUND_COLOR.NEUTRAL,
			validator(backgroundColor) {
				return Object.values(RICH_LIST_ITEM_BACKGROUND_COLOR).includes(backgroundColor);
			},
		},
		elevation: {
			type: String as PropType<RichListItemElevation>,
			default: null,
			validator(evolution) {
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
	},
	emits: ['update:isSelected'],
};
</script>
