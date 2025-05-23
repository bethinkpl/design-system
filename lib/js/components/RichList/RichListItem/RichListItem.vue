<template>
	<div class="ds-richListItem" :class="classList" @click="$emit('click', $event)">
		<div v-if="hasMedia && isVertical" class="ds-richListItem__mediaVertical -ds-dimmable">
			<slot name="media" />
		</div>
		<div class="ds-richListItem__container -ds-dimmable">
			<div v-if="hasMedia && isHorizontal" class="ds-richListItem__mediaHorizontal">
				<slot name="media" />
			</div>
			<div
				v-if="isDraggable && hasDraggableHandler"
				class="ds-richListItem__dragAndDrop"
				:class="{ [draggableIconClassName]: !!draggableIconClassName }"
			>
				<ds-icon
					:icon="ICONS.FA_BARS"
					class="ds-richListItem__dragAndDropIcon"
					:size="
						size === RICH_LIST_ITEM_SIZE.SMALL
							? ICON_SIZES.XX_SMALL
							: ICON_SIZES.X_SMALL
					"
					@click.stop
				/>
			</div>
			<div v-if="icon" class="ds-richListItem__iconWrapper">
				<ds-icon
					:icon="icon"
					class="ds-richListItem__icon"
					:size="
						size === RICH_LIST_ITEM_SIZE.SMALL
							? ICON_SIZES.XX_SMALL
							: ICON_SIZES.X_SMALL
					"
					:class="iconColorClass"
					:style="iconColorStyle"
					@click.prevent="$emit('icon-click')"
				/>
			</div>
			<div class="ds-richListItem__content">
				<slot name="content" />
			</div>
			<div class="ds-richListItem__rightContainer">
				<div v-if="$slots.metadata && isHorizontal" class="ds-richListItem__metadata">
					<slot name="metadata" />
				</div>
				<div v-if="$slots.actions" class="ds-richListItem__actionSlot" @click.stop>
					<ds-divider
						v-if="$slots.actions && hasActionsSlotDivider && isHorizontal"
						is-vertical
					/>
					<slot name="actions" />
				</div>
				<div v-if="isSelectable" class="ds-richListItem__checkbox">
					<ds-divider v-if="isHorizontal" is-vertical />
					<ds-checkbox
						:is-selected="isSelected"
						@update:is-selected="$emit('update:is-selected', $event)"
						@click.stop
					/>
				</div>
			</div>
		</div>

		<div v-if="$slots.metadata && isVertical" class="ds-richListItem__metadata -ds-dimmable">
			<slot name="metadata" />
		</div>
		<div
			v-if="borderColorClass || borderColorStyle"
			class="ds-richListItem__border"
			:class="borderColorClass"
			:style="borderColorStyle"
		/>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/animations';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/media-queries';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/borders';
@import '../../../../styles/settings/shadows';
@import '../../../../styles/settings/icons';
@import './border-colors';

$rich-list-item-background-colors: (
	neutral: (
		default: $color-neutral-background,
		hover: $color-neutral-background-hovered,
		loading: $color-neutral-background,
		drag: $color-neutral-background-hovered,
	),
	neutral-weak: (
		default: $color-neutral-background-weak,
		hover: $color-neutral-background-weak-hovered,
		loading: $color-neutral-background-weak,
		drag: $color-neutral-background-weak-hovered,
	),
);

// Keep in sync with RICH_LIST_ITEM_MEDIA_HORIZONTAL_WIDTH and _HEIGHT
$rich-list-item-media-horizontal-width: 100px;
$rich-list-item-media-horizontal-height: 80px;

.ds-richListItem {
	$root: &;

	@each $color, $value in $rich-list-item-background-colors {
		&.-ds-background-#{$color} {
			background-color: map-get($value, 'default');

			&.-ds-loading {
				background-color: map-get($value, 'loading');
			}
		}
	}

	cursor: default;
	display: flex;
	flex: 1;
	position: relative;
	transition: background-color ease-in-out $default-transition-time;

	&.-ds-horizontal {
		align-items: center;
		flex-direction: initial;
		justify-content: initial;
		padding: 0 $space-4xs 0 calc($space-4xs - $border-xs);

		#{$root}__container {
			align-self: initial;
		}

		#{$root}__dragAndDrop,
		#{$root}__iconWrapper {
			align-items: center;
			padding: $space-3xs $space-5xs $space-3xs $space-s;
		}

		#{$root}__content {
			padding: 0 $space-4xs 0 $space-s;
		}

		#{$root}__metadata {
			justify-content: flex-start;
			padding-left: $space-4xs;
		}

		#{$root}__rightContainer {
			align-items: center;
			justify-content: initial;
			padding: $space-xs 0;
		}

		#{$root}__actionSlot {
			align-items: center;
			justify-content: initial;
			padding: 0 $space-4xs;
		}

		#{$root}__checkbox {
			align-items: center;
			padding: 0 $space-s 0 $space-4xs;
		}

		&.-ds-small {
			padding: 0 $space-4xs 0 0;

			#{$root}__dragAndDrop,
			#{$root}__iconWrapper {
				padding: $space-3xs 0 $space-3xs $space-xs;
			}

			#{$root}__content {
				padding: 0 $space-4xs 0 $space-xs;
			}

			#{$root}__checkbox {
				gap: $space-xs;
				padding: 0 $space-xs 0 $space-4xs;
			}

			#{$root}__rightContainer {
				padding: $space-2xs 0;
			}

			#{$root}__actionSlot {
				padding: 0 $space-4xs;
			}

			#{$root}__metadata {
				justify-content: flex-start;
				padding-left: $space-4xs;
			}
		}
	}

	&.-ds-vertical {
		align-items: flex-start;
		flex-direction: column;
		justify-content: center;
		padding-bottom: $space-4xs;

		#{$root}__container {
			align-self: stretch;
			padding: $space-4xs $space-4xs 0;
		}

		#{$root}__dragAndDrop,
		#{$root}__iconWrapper {
			align-items: flex-start;
			padding: $space-xs 0 0 $space-xs;
		}

		#{$root}__content {
			padding: 0 $space-4xs 0 $space-xs;
		}

		#{$root}__metadata {
			padding-left: $space-s;
			padding-right: $space-2xs;
			width: 100%;
		}

		#{$root}__rightContainer {
			align-items: flex-start;
			justify-content: flex-end;
		}

		#{$root}__actionSlot {
			align-items: flex-start;
			justify-content: flex-end;
			padding: $space-4xs $space-4xs 0 $space-4xs;
		}

		#{$root}__checkbox {
			align-items: flex-start;
			padding: $space-3xs $space-xs 0 $space-xs;
		}

		&.-ds-small {
			#{$root}__dragAndDrop,
			#{$root}__iconWrapper {
				padding: $space-2xs $space-4xs 0 $space-2xs;
			}

			#{$root}__content {
				padding: 0 $space-4xs 0 $space-2xs;
			}

			#{$root}__checkbox {
				gap: $space-s;
				padding: $space-5xs $space-2xs 0 $space-2xs;
			}

			#{$root}__actionSlot {
				padding: 0 $space-4xs 0 $space-5xs;
			}

			#{$root}__metadata {
				padding-left: $space-xs;
			}
		}
	}

	&.-ds-verticalWithMedia {
		padding-right: 0;
		padding-top: 0;
	}

	&.-ds-has-media {
		// Make sure media doesn't cover the border.
		// If you use a dropdown in one of the slots and it's being cut,
		// you need to figure out an alternative solution here.
		overflow: hidden;
		padding-left: 0;
	}

	&.-ds-dimmed {
		.-ds-dimmable {
			opacity: 0.65;
		}
	}

	&.-ds-loading {
		cursor: initial;
		pointer-events: none;

		.-ds-dimmable {
			opacity: 0.5;
		}
	}

	&.-ds-interactive {
		cursor: pointer;
		pointer-events: initial;

		@media #{breakpoint-s()} {
			&.-ds-flat {
				&:hover {
					opacity: 1;

					.-ds-dimmable {
						opacity: 1;
					}
				}
			}

			&:not(.-ds-dimmed):hover {
				&.-ds-default {
					@each $color, $value in $rich-list-item-background-colors {
						&.-ds-background-#{$color} {
							background-color: map-get($value, 'hover');
						}
					}
				}

				&.-ds-flat {
					background: $color-neutral-background-ghost-hovered;
				}
			}
		}

		&.-ds-draggable-without-handler {
			&:hover {
				cursor: grab;
			}

			&:active {
				cursor: grabbing;
			}
		}
	}

	&.-ds-elevation-small {
		box-shadow: $shadow-s;
	}

	&.-ds-flat {
		background: $color-neutral-background-ghost;

		&.-ds-loading {
			background: $color-neutral-background-ghost;
		}

		#{$root}__wrapper {
			border: none;
		}

		&.-ds-interactive.-ds-draggable.-ds-drag {
			background: $color-neutral-background-ghost-hovered;
		}
	}

	&.-ds-default {
		border: 1px solid $color-neutral-border-weak;
		border-radius: $radius-s;

		&.-ds-interactive:hover {
			.-ds-dimmable {
				opacity: 1;
			}
		}

		&.-ds-interactive.-ds-draggable.-ds-drag {
			@each $color, $value in $rich-list-item-background-colors {
				&.-ds-background-#{$color} {
					background-color: map-get($value, 'drag');
				}
			}
		}

		#{$root}__border {
			@each $color, $value in $rich-list-item-border-colors {
				&.-ds-border-#{$color} {
					background-color: $value;
				}
			}

			border-radius: $radius-s 0 0 $radius-s;
			height: calc(100% + 2px);
			left: -1px;
			position: absolute;
			top: -1px;
			width: $space-4xs;
		}
	}

	&__container {
		align-items: center;
		display: flex;
		flex: 1;
		width: 100%;
	}

	&__mediaHorizontal {
		height: $rich-list-item-media-horizontal-height;
		margin-right: $space-3xs;
		width: $rich-list-item-media-horizontal-width;
	}

	&__mediaVertical {
		aspect-ratio: 4 / 3;
		overflow: hidden;
	}

	&__dragAndDrop,
	&__iconWrapper {
		align-self: stretch;
		display: flex;
	}

	&__content {
		align-items: center;
		display: flex;
		flex: 1 0 0;
		min-width: 0;
	}

	&__metadata {
		align-items: center;
		gap: $space-xs;
		padding-right: $space-4xs;
	}

	&__rightContainer {
		align-self: stretch;
		display: flex;
	}

	&__actionSlot {
		align-self: stretch;
		display: flex;
		gap: $space-2xs;
	}

	&__checkbox {
		align-self: stretch;
		display: flex;
		gap: $space-s;
		justify-content: flex-end;
	}

	&__icon {
		@include coloredIcon();

		color: $color-neutral-icon-weak;
	}

	&__dragAndDrop {
		#{$root}__dragAndDropIcon {
			color: $color-neutral-icon-weak;
		}

		&:hover {
			cursor: grab;

			#{$root}__dragAndDropIcon {
				color: $color-neutral-icon-weak-hovered;
			}
		}

		&:active {
			cursor: grabbing;
		}
	}

	&.-ds-small {
		#{$root}__actionSlot {
			gap: $space-2xs;
		}
	}
}
</style>

<script lang="ts">
import { defineComponent, PropType, toRaw } from 'vue';
import DsDivider from '../../../components/Divider';
import DsCheckbox from '../../../components/Form/Checkbox/Checkbox.vue';
import DsIcon, {
	ICON_COLORS,
	ICON_SIZES,
	IconColor,
	IconItem,
	ICONS,
} from '../../../components/Icons/Icon';
import {
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
} from './RichListItem.consts';

export default defineComponent({
	name: 'RichListItem',
	components: {
		DsCheckbox,
		DsDivider,
		DsIcon,
	},
	props: {
		type: {
			type: String as PropType<RichListItemType>,
			default: RICH_LIST_ITEM_TYPE.DEFAULT,
			validator(type: RichListItemType) {
				return Object.values(RICH_LIST_ITEM_TYPE).includes(type);
			},
		},
		layout: {
			type: String as PropType<RichListItemLayout>,
			default: RICH_LIST_ITEM_LAYOUT.HORIZONTAL,
			validator(layout: RichListItemLayout) {
				return Object.values(RICH_LIST_ITEM_LAYOUT).includes(layout);
			},
		},
		state: {
			type: String as PropType<RichListItemState>,
			default: RICH_LIST_ITEM_STATE.DEFAULT,
			validator(state: RichListItemState) {
				return Object.values(RICH_LIST_ITEM_STATE).includes(state);
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
		draggableIconClassName: {
			type: String,
			default: null,
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
			validator(elevation: RichListItemElevation) {
				return Object.values(RICH_LIST_ITEM_ELEVATION).includes(elevation);
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
	emits: {
		'icon-click': () => true,
		click: (event: Event) => true,
		'update:is-selected': (isSelected: boolean) => true,
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			RICH_LIST_ITEM_TYPE: Object.freeze(RICH_LIST_ITEM_TYPE),
			RICH_LIST_ITEM_STATE: Object.freeze(RICH_LIST_ITEM_STATE),
			RICH_LIST_ITEM_SIZE: Object.freeze(RICH_LIST_ITEM_SIZE),
		};
	},
	computed: {
		classList() {
			return {
				'-ds-default': this.type === RICH_LIST_ITEM_TYPE.DEFAULT,
				'-ds-flat': this.type === RICH_LIST_ITEM_TYPE.FLAT,
				'-ds-horizontal': this.isHorizontal,
				'-ds-verticalWithMedia': this.isVertical && this.hasMedia,
				'-ds-vertical': this.isVertical,
				'-ds-loading': this.state === RICH_LIST_ITEM_STATE.LOADING,
				'-ds-dimmed': this.isDimmed,
				'-ds-interactive': this.isInteractive,
				'-ds-small': this.size === RICH_LIST_ITEM_SIZE.SMALL,
				...(this.backgroundColor &&
					this.type !== RICH_LIST_ITEM_TYPE.FLAT && {
						[`-ds-background-${this.backgroundColor}`]: true,
					}),
				...(this.elevation &&
					this.type !== RICH_LIST_ITEM_TYPE.FLAT && {
						[`-ds-elevation-${this.elevation}`]: true,
					}),
				'-ds-draggable': this.isDraggable,
				'-ds-draggable-without-handler': this.isDraggable && !this.hasDraggableHandler,
				'-ds-has-media': this.hasMedia,
				'-ds-drag': this.isDragging,
			};
		},
		isHorizontal() {
			return this.layout === RICH_LIST_ITEM_LAYOUT.HORIZONTAL;
		},
		isVertical() {
			return this.layout === RICH_LIST_ITEM_LAYOUT.VERTICAL;
		},
		iconColorClass() {
			if (!this.iconColor || (this.iconColor && this.iconColorHex)) {
				return;
			}
			return `-ds-${this.iconColor}`;
		},
		iconColorStyle() {
			if (!this.iconColor || !this.iconColorHex) {
				return;
			}
			return {
				color: this.iconColorHex,
			};
		},
		borderColorClass() {
			if (!this.borderColor || this.borderColorHex) {
				return;
			}
			return `-ds-border-${this.borderColor}`;
		},
		borderColorStyle() {
			if (!this.borderColorHex) {
				return;
			}
			return {
				backgroundColor: this.borderColorHex,
			};
		},
		hasMedia() {
			return !!this.$slots.media;
		},
		isDragging() {
			return this.isDraggable && this.state === RICH_LIST_ITEM_STATE.DRAG;
		},
	},
});
</script>
