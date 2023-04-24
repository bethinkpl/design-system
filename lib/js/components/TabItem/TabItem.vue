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
		<ds-icon v-if="icon !== null" class="tabItem__icon" :icon="icon" :size="iconSize" />
		<span v-if="label !== null" class="tabItem__label">{{ label }}</span>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/animations';

.tabItem {
	$self: &;

	align-items: center;
	border-bottom: 1px solid $color-neutral-border;
	cursor: pointer;
	display: inline-flex;
	justify-content: center;

	&__icon {
		color: $color-neutral-icon;
		transition: color ease-in-out $default-transition-time;
	}

	&__label {
		color: $color-neutral-text;
		transition: color ease-in-out $default-transition-time;
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
		min-height: 40px;
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
import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';
import { toRaw } from 'vue';
import { TAB_ITEM_SIZES } from './TabItem.consts';

export default {
	name: 'TabItem',
	components: {
		DsIcon,
	},
	props: {
		icon: {
			type: [Object, null],
			default: null,
			validator(icon) {
				return icon === null || Object.values(ICONS).includes(toRaw(icon));
			},
		},
		isSelected: {
			type: Boolean,
			required: true,
		},
		label: {
			type: [String, null],
			default: null,
		},
		size: {
			type: String,
			default: TAB_ITEM_SIZES.MEDIUM,
		},
	},
	data() {
		return {
			TAB_ITEM_SIZES: Object.freeze(TAB_ITEM_SIZES),
		};
	},
	computed: {
		iconSize() {
			return this.size === TAB_ITEM_SIZES.MEDIUM ? ICON_SIZES.X_SMALL : ICON_SIZES.XX_SMALL;
		},
	},
};
</script>
