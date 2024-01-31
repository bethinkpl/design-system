<template>
	<div
		class="richListItem"
		:class="{
			'-default': type === RICH_LIST_ITEM_TYPE.DEFAULT,
			'-flat': type === RICH_LIST_ITEM_TYPE.FLAT,
			'-loading': state === RICH_LIST_ITEM_STATE.LOADING,
			'-dimmed': isDimmed,
			'-interactive': isInteractive,
			'-small': size === RICH_LIST_ITEM_SIZE.SMALL,
		}"
		@click="$emit('click')"
	>
		<div class="richListItem__container -dimmable">
			<div v-if="isDraggable" class="richListItem__dragAndDrop">
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
			<div v-if="$slots.meta" class="richListItem__metaData -hideOnMobile">
				<slot name="meta" />
			</div>
			<div v-if="$slots.trailing" class="richListItem__trailingSlot">
				<slot name="trailing" />
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

$rich-list-item-border-colors: (
	default: $color-default-border,
	inverted: $color-inverted-border,
	primary: $color-primary-border,
	primary-weak: $color-primary-border-weak,
	neutral-heavy: $color-neutral-border-heavy,
	neutral-strong: $color-neutral-border-strong,
	neutral: $color-neutral-border,
	neutral-weak: $color-neutral-border-weak,
	neutral-ghost: $color-neutral-border-ghost,
	danger: $color-danger-border,
	danger-weak: $color-danger-border-weak,
	fail: $color-fail-border,
	fail-weak: $color-fail-border-weak,
	warning: $color-warning-border,
	warning-weak: $color-warning-border-weak,
	success: $color-success-border,
	success-weak: $color-success-border-weak,
	info: $color-info-border,
	info-weak: $color-info-border-weak,
	accent: $color-accent-border,
	accent-weak: $color-accent-border-weak,
);

$rich-list-item-icon-colors: (
	default: $color-default-icon,
	primary: $color-primary-icon,
	primary-weak: $color-primary-icon-weak,
	neutral: $color-neutral-icon,
	neutral-weak: $color-neutral-icon-weak,
	danger: $color-danger-icon,
	fail: $color-fail-icon,
	warning: $color-warning-icon,
	success: $color-success-icon,
	info: $color-info-icon,
	accent: $color-accent-icon,
);

.richListItem {
	$root: &;

	background: $color-neutral-background;
	cursor: default;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	min-height: 62px;
	padding: $space-xxxxs;
	pointer-events: none;
	position: relative;

	@media #{breakpoint-s()} {
		padding: 0 $space-xxxxs;
	}

	&.-interactive {
		cursor: pointer;
		pointer-events: initial;
	}

	&.-dimmed {
		.-dimmable {
			opacity: 0.65;
		}
	}

	&.-loading {
		background-color: $color-neutral-background-hovered;
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

		&:not(.-dimmed):hover {
			background: $color-neutral-background-ghost-hovered;
		}

		#{$root}__wrapper {
			border: none;
		}
	}

	&.-default {
		border: 1px solid $color-neutral-border-weak;
		border-radius: $radius-s;

		&:hover {
			.-dimmable {
				opacity: 1;
			}
		}

		&:not(.-dimmed):hover {
			background: $color-neutral-background-hovered;
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
		padding: $space-xs $space-xxxs 0 $space-xs;

		@media #{breakpoint-s()} {
			align-items: center;
			padding: $space-xxxs $space-xxxs $space-xxxs $space-s;
		}
	}

	&__content {
		align-items: center;
		display: flex;
		flex: 2 0 0;
		min-width: 0;
		padding: 0 $space-xxs 0 $space-xxxs;

		@media #{breakpoint-s()} {
			padding: 0 $space-xxs;
		}
	}

	&__metaData {
		align-items: center;
		padding-left: $space-xs;

		@media #{breakpoint-s()} {
			justify-content: flex-start;
			padding: 0;
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

	&__trailingSlot {
		align-items: center;
		display: flex;
		justify-content: flex-end;
		padding: 0;

		@media #{breakpoint-s()} {
			padding-left: $space-xxs;
		}
	}

	&__icon {
		@each $color, $value in $rich-list-item-icon-colors {
			&.-icon-color-#{$color} {
				color: $value;
			}
		}

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
		min-height: 44px;
		padding: $space-xxxxs $space-xxxs $space-xxxxs $space-xxxxs;

		@media #{breakpoint-s()} {
			padding: 0 $space-xxxxs 0 0;
		}

		#{$root}__dragAndDrop,
		#{$root}__iconWrapper {
			padding: 0 0 0 $space-xs;

			@media #{breakpoint-s()} {
				padding: $space-xxxs 0 $space-xxxs $space-xs;
			}
		}

		#{$root}__content {
			padding: 0 $space-xxxs 0 $space-xxs;
		}

		#{$root}__metaData {
			padding-left: $space-xs;

			@media #{breakpoint-s()} {
				padding-left: 0;
				padding-right: $space-xxxs;
			}
		}

		#{$root}__trailingSlot {
			padding: 0;
		}
	}
}
</style>

<script lang="ts">
import DsIcon, { ICON_SIZES, ICONS } from '../../../components/Icons/Icon';
import { PropType } from 'vue';
import {
	RICH_LIST_ITEM_BORDER_COLOR,
	RICH_LIST_ITEM_ICON_COLOR,
	RICH_LIST_ITEM_SIZE,
	RICH_LIST_ITEM_STATE,
	RICH_LIST_ITEM_TYPE,
	RichListItemBorderColor,
	RichListItemIconColor,
	RichListItemSize,
	RichListItemState,
	RichListItemType,
} from './RichListItem.consts';

export default {
	name: 'RichListItem',
	components: {
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
		draggableIconClassName: {
			type: String,
			default: null,
		},
	},
	emits: ['icon-click', 'click'],
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
		iconColorClass() {
			if (!this.iconColor || (this.iconColor && this.iconColorHex)) {
				return;
			}
			return `-icon-color-${this.iconColor}`;
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
