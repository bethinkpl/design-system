<template>
	<div class="richListItem" :class="classList" @click="$emit('click')">
		<div class="richListItem__container -dimmable">
			<div v-if="isDraggable && hasDraggableHandler" class="richListItem__dragAndDrop">
				<ds-icon
					:icon="ICONS.FA_BARS"
					class="richListItem__dragAndDropIcon"
					:class="{ [draggableIconClassName]: !!draggableIconClassName }"
					:size="
						size === RICH_LIST_ITEM_SIZE.SMALL
							? ICON_SIZES.XX_SMALL
							: ICON_SIZES.X_SMALL
					"
				/>
			</div>
			<div v-if="icon" class="richListItem__iconWrapper">
				<ds-icon
					:icon="icon"
					class="richListItem__icon"
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
			<div class="richListItem__content">
				<slot name="content" />
			</div>
			<div class="richListItem__rightContainer">
				<div v-if="$slots.meta" class="richListItem__metaData -hideOnMobile">
					<slot name="meta" />
				</div>
				<div v-if="$slots.actions" class="richListItem__actionSlot">
					<ds-divider
						v-if="$slots.actions && hasActionsSlotDivider"
						is-vertical
						class="-hideOnMobile"
					/>
					<slot name="actions" />
				</div>
				<div v-if="isSelectable" class="richListItem__checkbox">
					<ds-divider is-vertical class="-hideOnMobile" />
					<ds-checkbox
						:is-selected="isSelected"
						@update:is-selected="$emit('update:isSelected', $event)"
					/>
				</div>
			</div>
		</div>

		<div v-if="$slots.meta" class="richListItem__metaData -dimmable -visibleOnMobile">
			<slot name="meta" />
		</div>
		<div
			v-if="borderColorClass || borderColorStyle"
			class="richListItem__border"
			:class="borderColorClass"
			:style="borderColorStyle"
		/>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/media-queries';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/shadows';
@import '../../../../styles/settings/icons';
@import './border-colors';

$rich-list-item-background-colors: (
	neutral: (
		default: $color-neutral-background,
		hover: $color-neutral-background-hovered,
		loading: $color-neutral-background,
	),
	neutral-weak: (
		default: $color-neutral-background-weak,
		hover: $color-neutral-background-weak-hovered,
		loading: $color-neutral-background-weak,
	),
);

.richListItem {
	$root: &;

	@each $color, $value in $rich-list-item-background-colors {
		&.-background-#{$color} {
			background-color: map-get($value, 'default');

			&.-loading {
				background-color: map-get($value, 'loading');
			}
		}
	}

	align-items: flex-start;
	cursor: default;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	padding: $space-xxxxs;
	position: relative;

	@media #{breakpoint-s()} {
		align-items: center;
		flex-direction: initial;
		justify-content: initial;
		padding: 0 $space-xxxxs;
	}

	&.-interactive {
		cursor: pointer;
		pointer-events: initial;

		&:not(.-dimmed):hover {
			&.-default {
				@each $color, $value in $rich-list-item-background-colors {
					&.-background-#{$color} {
						background-color: map-get($value, 'hover');
					}
				}
			}

			&.-flat {
				background: $color-neutral-background-ghost-hovered;
			}
		}

		&.-draggable {
			&:hover {
				cursor: grab;
			}

			&:active {
				cursor: grabbing;
			}
		}
	}

	&.-dimmed {
		.-dimmable {
			opacity: 0.65;
		}
	}

	&.-elevation-small {
		box-shadow: $shadow-s;
	}

	&.-loading {
		cursor: initial;
		pointer-events: none;

		.-dimmable {
			opacity: 0.5;
		}
	}

	&.-flat {
		background: $color-neutral-background-ghost;

		&:hover {
			opacity: 1;

			.-dimmable {
				opacity: 1;
			}
		}

		#{$root}__wrapper {
			border: none;
		}
	}

	&.-default {
		border: 1px solid $color-neutral-border-weak;
		border-radius: $radius-s;

		&.-interactive:hover {
			.-dimmable {
				opacity: 1;
			}
		}

		#{$root}__border {
			@each $color, $value in $rich-list-item-border-colors {
				&.-border-#{$color} {
					background-color: $value;
				}
			}

			border-radius: $radius-s 0 0 $radius-s;
			height: calc(100% + 2px);
			left: -1px;
			position: absolute;
			top: -1px;
			width: $space-xxxxs;
		}
	}

	&__container {
		align-items: center;
		align-self: stretch;
		display: flex;
		flex: 1;
		width: 100%;

		@media #{breakpoint-s()} {
			align-self: initial;
		}
	}

	&__dragAndDrop,
	&__iconWrapper {
		align-items: flex-start;
		align-self: stretch;
		display: flex;
		padding: $space-xs 0 0 $space-xs;

		@media #{breakpoint-s()} {
			align-items: center;
			padding: $space-xxxs $space-xxxs $space-xxxs $space-s;
		}
	}

	&__content {
		align-items: center;
		display: flex;
		flex: 1 0 0;
		min-width: 0;
		padding: 0 $space-xxxxs 0 $space-xs;

		@media #{breakpoint-s()} {
			padding: 0 $space-xxxxs 0 $space-xxs;
		}
	}

	&__metaData {
		align-items: center;
		gap: $space-xs;
		padding-left: $space-xs;
		padding-right: $space-xxxxs;

		@media #{breakpoint-s()} {
			justify-content: flex-start;
			padding-left: 0;
		}

		&.-hideOnMobile {
			display: none;

			@media #{breakpoint-s()} {
				display: flex;
			}
		}

		&.-visibleOnMobile {
			display: flex;

			@media #{breakpoint-s()} {
				display: none;
			}
		}
	}

	&__rightContainer {
		align-items: flex-start;
		align-self: stretch;
		display: flex;
		justify-content: flex-end;

		@media #{breakpoint-s()} {
			align-items: center;
			justify-content: initial;
			padding: $space-xs 0;
		}
	}

	&__actionSlot {
		align-items: flex-start;
		align-self: stretch;
		display: flex;
		gap: $space-xxs;
		justify-content: flex-end;
		padding: $space-xxxxs $space-xxxxs 0 $space-xxxxs;

		@media #{breakpoint-s()} {
			align-items: center;
			justify-content: initial;
			padding: 0 $space-xxxxs;
		}
	}

	&__checkbox {
		align-items: flex-start;
		align-self: stretch;
		display: flex;
		gap: $space-s;
		justify-content: flex-end;
		padding: $space-xxxxxs $space-xs 0 $space-xs;

		@media #{breakpoint-s()} {
			align-items: center;
			padding: 0 $space-s 0 $space-xxxxs;
		}
	}

	&__icon {
		@include coloredIcon();

		color: $color-neutral-icon-weak;
	}

	&__dragAndDropIcon {
		color: $color-neutral-icon-weak;

		&:hover {
			color: $color-neutral-icon-weak-hovered;
			cursor: grab;
		}

		&:active {
			cursor: grabbing;
		}
	}

	&.-small {
		padding: $space-xxxxs;

		@media #{breakpoint-s()} {
			padding: 0 $space-xxxxs 0 0;
		}

		#{$root}__dragAndDrop,
		#{$root}__iconWrapper {
			padding: $space-xxs $space-xxxxs 0 $space-xxs;

			@media #{breakpoint-s()} {
				padding: $space-xxxs 0 $space-xxxs $space-xs;
			}
		}

		#{$root}__checkbox {
			gap: $space-s;
			padding: $space-xxxxxs $space-xxs 0 $space-xxs;

			@media #{breakpoint-s()} {
				gap: $space-xs;
				padding: 0 $space-xs 0 $space-xxxxs;
			}
		}

		#{$root}__content {
			align-items: center;
			padding: 0 $space-xxxxs 0 $space-xxs;
		}

		#{$root}__actionSlot {
			gap: $space-xxs;
			padding: 0 $space-xxxxs 0 $space-xxxxxs;

			@media #{breakpoint-s()} {
				padding: 0 $space-xxxxs;
			}
		}

		#{$root}__metaData {
			padding-left: $space-xxs;
			padding-right: $space-xxxxs;

			@media #{breakpoint-s()} {
				justify-content: flex-start;
				padding-left: 0;
			}
		}
	}
}

.-hideOnMobile {
	display: none;

	@media #{breakpoint-s()} {
		display: initial;
	}
}
</style>

<script lang="ts">
import DsCheckbox from '../../../components/Form/Checkbox/Checkbox.vue';
import DsDivider from '../../../components/Divider';
import DsIcon, { ICON_COLORS, ICON_SIZES, IconColor, ICONS } from '../../../components/Icons/Icon';
import { PropType } from 'vue';
import {
	RICH_LIST_ITEM_BACKGROUND_COLOR,
	RICH_LIST_ITEM_BORDER_COLOR,
	RICH_LIST_ITEM_ELEVATION,
	RICH_LIST_ITEM_SIZE,
	RICH_LIST_ITEM_STATE,
	RICH_LIST_ITEM_TYPE,
	RichListItemBackgroundColor,
	RichListItemBorderColor,
	RichListItemElevation,
	RichListItemSize,
	RichListItemState,
	RichListItemType,
} from './RichListItem.consts';

export default {
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
			type: String as PropType<IconColor>,
			default: null,
			validator(iconColor) {
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
			validator(borderColor) {
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
	emits: ['icon-click', 'click', 'update:isSelected'],
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
				'-default': this.type === RICH_LIST_ITEM_TYPE.DEFAULT,
				'-flat': this.type === RICH_LIST_ITEM_TYPE.FLAT,
				'-loading': this.state === RICH_LIST_ITEM_STATE.LOADING,
				'-dimmed': this.isDimmed,
				'-interactive': this.isInteractive,
				'-small': this.size === RICH_LIST_ITEM_SIZE.SMALL,
				...(this.backgroundColor && {
					[`-background-${this.backgroundColor}`]: true,
				}),
				...(this.elevation &&
					this.type !== RICH_LIST_ITEM_TYPE.FLAT && {
						[`-elevation-${this.elevation}`]: true,
					}),
				'-draggable': this.isDraggable && !this.hasDraggableHandler,
			};
		},
		iconColorClass() {
			if (!this.iconColor || (this.iconColor && this.iconColorHex)) {
				return;
			}
			return `-${this.iconColor}`;
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
			if (!this.borderColor || (this.borderColor && this.borderColorHex)) {
				return;
			}
			return `-border-${this.borderColor}`;
		},
		borderColorStyle() {
			if (!this.borderColor || !this.borderColorHex) {
				return;
			}
			return {
				backgroundColor: this.borderColorHex,
			};
		},
	},
};
</script>
