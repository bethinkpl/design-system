<template>
	<div class="richListGroupItem">
		<div class="richListGroupItem__header">
			<slot name="header" />
		</div>
		<div v-if="isExpanded">
			<slot name="expanded" />
		</div>
		<div
			v-if="borderColorClass || borderColorStyle"
			class="richListGroupItem__border"
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

.richListGroupItem {
	$root: &;

	border: 1px solid $color-neutral-border-weak;
	border-radius: $radius-s;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	position: relative;

	&__header {
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
	RICH_LIST_GROUP_ITEM_BORDER_COLOR,
	RichListGroupItemBorderColor,
} from './RichListGroupItem.consts';

export default {
	name: 'RichListGroupItem',
	props: {
		isExpanded: {
			type: Boolean,
			default: false,
		},
		borderColor: {
			type: String as PropType<RichListGroupItemBorderColor>,
			default: null,
			validator(borderColor) {
				return Object.values(RICH_LIST_GROUP_ITEM_BORDER_COLOR).includes(borderColor);
			},
		},
		borderColorHex: {
			type: String,
			default: null,
		},
	},
	computed: {
		borderColorClass() {
			if (!this.borderColor) {
				return;
			}
			return `-border-${this.borderColor}`;
		},
		borderColorStyle() {
			if (!this.borderColorHex || this.borderColor) {
				return;
			}
			return {
				backgroundColor: this.borderColorHex,
			};
		},
	},
};
</script>