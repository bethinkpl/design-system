<template>
	<div
		class="tabItem"
		:title="label"
		:class="{
			'-sizeMedium': size === TAB_ITEM_SIZES.MEDIUM,
			'-sizeSmall': size === TAB_ITEM_SIZES.SMALL,
			'-isSelected': isSelected,
		}"
		@click="$emit('click')"
	>
		<wnl-icon class="tabItem__icon" :icon="icon" :size="iconSize" />
		<span class="tabItem__label">{{ label }}</span>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';

.tabItem {
	$self: &;

	align-items: center;
	border-bottom: 1px solid $color-neutral-border;
	cursor: pointer;
	display: inline-flex;
	justify-content: center;

	&__icon {
		color: $color-neutral-icon;
	}

	&__label {
		color: $color-neutral-text;
	}

	&:hover {
		border-bottom-color: $color-default-border;

		#{$self}__icon {
			color: $color-default-icon;
		}

		#{$self}__label {
			color: $color-default-text;
		}
	}

	&.-isSelected {
		border-bottom-color: $color-primary-border;

		#{$self}__icon {
			color: $color-primary-icon;
		}

		#{$self}__label {
			color: $color-primary-text;
		}
	}

	&.-sizeSmall {
		@include label-m-default-bold;

		column-gap: $space-xxxxs;
		padding: $space-xs;
	}

	&.-sizeMedium {
		@include label-l-default-bold;

		column-gap: $space-xxs;
		padding: $space-xs $space-s;
	}
}
</style>

<script lang="ts">
import WnlIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';
import { toRaw } from 'vue';
import { TAB_ITEM_SIZES } from './TabItem.consts';

export default {
	name: 'TabItem',
	components: {
		WnlIcon,
	},
	props: {
		icon: {
			type: Object,
			required: true,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
		isSelected: {
			type: Boolean,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			default: TAB_ITEM_SIZES.MEDIUM,
		},
	},
	data() {
		return {
			iconSize:
				this.size === TAB_ITEM_SIZES.MEDIUM ? ICON_SIZES.X_SMALL : ICON_SIZES.XX_SMALL,
			TAB_ITEM_SIZES: Object.freeze(TAB_ITEM_SIZES),
		};
	},
};
</script>
