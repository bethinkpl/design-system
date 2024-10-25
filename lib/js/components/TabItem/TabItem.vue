<template>
	<div
		class="ds-tabItem"
		:title="label"
		:class="{
			'-ds-sizeMedium': size === TAB_ITEM_SIZES.MEDIUM,
			'-ds-sizeSmall': size === TAB_ITEM_SIZES.SMALL,
			'-ds-isSelected': isSelected,
		}"
		@click="$emit('click')"
	>
		<ds-icon
			v-if="icon !== null"
			class="ds-tabItem__icon"
			:icon="icon"
			:size="ICON_SIZES.X_SMALL"
		/>
		<span v-if="label" class="ds-tabItem__label" :class="{ '-ds-ellipsis': labelEllipsis }">{{
			label
		}}</span>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/animations';

.ds-tabItem {
	$self: &;

	align-items: center;
	box-shadow: inset 0 -1px 0 $color-neutral-border;
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	min-height: 40px;
	transition: box-shadow ease-in-out $default-transition-time;

	&__icon {
		color: $color-neutral-icon;
		transition: color ease-in-out $default-transition-time;
	}

	&__label {
		color: $color-neutral-text;
		transition: color ease-in-out $default-transition-time;

		&.-ds-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	&:hover {
		box-shadow: inset 0 -1px 0 $color-default-border;
		#{$self}__icon {
			color: $color-default-icon;
		}

		#{$self}__label {
			color: $color-default-text;
		}
	}

	&.-ds-isSelected {
		box-shadow: inset 0 -1px 0 $color-primary-border;

		#{$self}__icon {
			color: $color-primary-icon;
		}

		#{$self}__label {
			color: $color-primary-text;
		}
	}

	&.-ds-sizeSmall {
		@include label-m-default-bold;

		column-gap: $space-4xs;
		padding: $space-xs;
	}

	&.-ds-sizeMedium {
		@include label-l-default-bold;

		column-gap: $space-2xs;
		padding: $space-xs $space-s;
	}
}
</style>

<script lang="ts">
import DsIcon, { ICON_SIZES, ICONS } from '../Icons/Icon';
import { defineComponent, toRaw } from 'vue';
import { TAB_ITEM_SIZES } from './TabItem.consts';

export default defineComponent({
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
		labelEllipsis: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: TAB_ITEM_SIZES.MEDIUM,
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['click'],
	data() {
		return {
			TAB_ITEM_SIZES: Object.freeze(TAB_ITEM_SIZES),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
});
</script>
