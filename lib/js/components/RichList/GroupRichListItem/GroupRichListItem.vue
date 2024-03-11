<template>
	<div class="groupRichListItem">
		<div class="groupRichListItem__wrapper">
			<div class="groupRichListItem__parent" :class="{ '-expanded': isExpanded }">
				<slot name="parent" />
			</div>
			<div v-if="isExpanded">
				<slot name="children" />
			</div>
		</div>
		<div
			v-if="borderColorClass || borderColorStyle"
			class="groupRichListItem__border"
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

.groupRichListItem {
	$root: &;

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

	&__parent.-expanded {
		background: $color-neutral-background;
	}

	&__border {
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
</style>

<script lang="ts">
import { PropType } from 'vue';
import {
	GROUP_RICH_LIST_ITEM_BORDER_COLOR,
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
	},
	computed: {
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
