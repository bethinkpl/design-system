<template>
	<div class="ds-groupRichListItem" :class="classList">
		<div class="ds-groupRichListItem__wrapper">
			<div class="ds-groupRichListItem__parent">
				<slot name="parent" />
			</div>
			<div v-if="isExpanded" class="ds-groupRichListItem__children">
				<slot name="children" />
			</div>
		</div>
		<div
			v-if="borderColorClass || borderColorStyle"
			class="ds-groupRichListItem__border"
			:class="borderColorClass"
			:style="borderColorStyle"
		/>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/radiuses';
@import '../../../../styles/settings/spacings';
@import '../RichListItem/border-colors';

$group-rich-list-background-colors: (
	neutral: (
		parent: $color-neutral-background,
		children: transparent,
	),
	neutral-weak: (
		parent: $color-neutral-background-weak,
		children: $color-neutral-background,
	),
);

.ds-groupRichListItem {
	$root: &;

	@each $color, $value in $group-rich-list-background-colors {
		&.-ds-background-#{$color} {
			#{$root}__children {
				background-color: map-get($value, 'children');
			}

			#{$root}__parent {
				background-color: map-get($value, 'parent');
			}

			&.-ds-loading {
				#{$root}__children {
					background-color: map-get($value, 'children');
				}

				#{$root}__parent {
					background-color: map-get($value, 'parent');
				}
			}
		}
	}

	border-radius: $radius-s;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	position: relative;

	&__wrapper {
		border: 1px solid $color-neutral-border-weak;
		border-radius: $radius-s;
		overflow: hidden;
	}

	&__border {
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
</style>

<script lang="ts">
import { PropType } from 'vue';
import {
	GROUP_RICH_LIST_ITEM_BACKGROUND_COLOR,
	GROUP_RICH_LIST_ITEM_BORDER_COLOR,
	GroupRichListItemBackgroundColor,
	GroupRichListItemBorderColor,
} from './GroupRichListItem.consts';

export default {
	name: 'GroupRichListItem',
	props: {
		isExpanded: {
			type: Boolean,
			default: false,
		},
		borderColor: {
			type: String as PropType<GroupRichListItemBorderColor>,
			default: null,
			validator(borderColor) {
				return Object.values(GROUP_RICH_LIST_ITEM_BORDER_COLOR).includes(borderColor);
			},
		},
		borderColorHex: {
			type: String,
			default: null,
		},
		backgroundColor: {
			type: String as PropType<GroupRichListItemBackgroundColor>,
			default: GROUP_RICH_LIST_ITEM_BACKGROUND_COLOR.NEUTRAL,
			validator(backgroundColor) {
				return Object.values(GROUP_RICH_LIST_ITEM_BACKGROUND_COLOR).includes(
					backgroundColor,
				);
			},
		},
	},
	computed: {
		classList() {
			return {
				...(this.backgroundColor && {
					[`-ds-background-${this.backgroundColor}`]: true,
				}),
			};
		},
		borderColorClass() {
			if (!this.borderColor || (this.borderColor && this.borderColorHex)) {
				return;
			}
			return `-ds-border-${this.borderColor}`;
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
