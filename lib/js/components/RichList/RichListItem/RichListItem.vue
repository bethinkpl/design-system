<template>
	<div
		class="richListItem"
		:class="{
			'-flat': type === RICH_LIST_ITEM_TYPE.FLAT,
			'-loading': state === RICH_LIST_ITEM_STATE.LOADING,
			'-dimmed': isDimmed,
			'-interactive': isInteractive,
			'-small': size === RICH_LIST_ITEM_SIZE.SMALL,
			[borderColorClass]: !!borderColor,
		}"
		:style="{
			borderColor: borderColorHex ? borderColorHex : null,
		}"
	>
		<div class="richListItem__wrapper">
			<div class="richListItem__container">
				<div v-if="isDraggable" class="richListItem__dragAndDrop">
					<ds-icon
						:icon="ICONS.FA_BARS"
						class="richListItem__dragAndDropIcon"
						:size="ICON_SIZES.X_SMALL"
					/>
				</div>
				<div v-if="icon" class="richListItem__iconWrapper">
					<ds-icon
						:icon="icon"
						class="richListItem__icon"
						:size="ICON_SIZES.X_SMALL"
						:class="{
							[iconColorClass]: !!iconColor,
						}"
						:style="{
							color: iconColorHex ? iconColorHex : null,
						}"
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

			<div v-if="$slots.meta" class="richListItem__metaData -visibleOnMobile">
				<slot name="meta" />
			</div>
		</div>
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
	inverted: $color-inverted-icon,
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
	border-radius: $radius-s;
	display: flex;
	min-height: 62px;
	flex: 1;
	cursor: pointer;

	&:not(.-interactive) {
		cursor: default;
		pointer-events: none;
	}

	&.-dimmed {
		opacity: 50%;
	}

	&:hover {
		background: $color-neutral-background-hovered;
	}

	&:not(.-flat) {
		border-left: 4px solid $color-default-border;

		@each $color, $value in $rich-list-item-border-colors {
			&.-border-#{$color} {
				border-left-color: $value;
			}
		}
	}

	&__wrapper {
		display: flex;
		flex: 1;
		border-radius: 0 $radius-s $radius-s 0;
		padding: $space-xxxxs $space-xxxxs $space-xxxxs 0;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		border-top: 1px solid $color-neutral-border-weak;
		border-bottom: 1px solid $color-neutral-border-weak;
		border-right: 1px solid $color-neutral-border-weak;

		@media #{breakpoint-s()} {
			padding: 0 $space-xxxxs;
		}
	}

	&__container {
		width: 100%;
		display: flex;
		align-items: center;
	}

	&__dragAndDrop,
	&__iconWrapper {
		display: flex;
		padding: $space-xs $space-xxxs 0 $space-xs;
		align-items: center;

		@media #{breakpoint-s()} {
			padding: $space-xxxs $space-xxxs $space-xxxs $space-s;
		}
	}

	&__content {
		flex: 2 0 0;
		padding: 0 $space-xxs;
	}

	&__metaData {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		padding-left: $space-xs;

		@media #{breakpoint-s()} {
			padding-left: 0;
			justify-content: flex-start;
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
		display: flex;
		padding-left: $space-xxs;
		align-items: center;
	}

	&__icon {
		color: $color-neutral-icon-weak;

		@each $color, $value in $rich-list-item-icon-colors {
			&.-icon-color-#{$color} {
				color: $value;
			}
		}
	}

	&__dragAndDropIcon {
		color: $color-neutral-icon-weak;

		&:hover {
			cursor: grab;
			color: $color-neutral-icon-weak-hovered;
		}

		&:active {
			cursor: grabbing;
		}
	}

	&.-flat {
		background: $color-neutral-background-ghost;

		#{$root}__wrapper {
			border: none;
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
		iconColorClass() {
			if (!this.iconColor || this.iconColorHex) {
				return;
			}
			return `-icon-color-${this.iconColor}`;
		},
		borderColorClass() {
			if (!this.borderColor || this.borderColorHex) {
				return;
			}
			return `-border-${this.borderColor}`;
		},
	},
};
</script>