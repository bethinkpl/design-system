<template>
	<div
		:class="{
			iconList: true,
			'-neutralWeak': color === ICON_LIST_COLORS.NEUTRAL_WEAK,
			'-neutralStrong': color === ICON_LIST_COLORS.NEUTRAL_STRONG,
			'-xSmall': size === ICON_LIST_SIZES.X_SMALL,
			'-small': size === ICON_LIST_SIZES.SMALL,
			'-medium': size === ICON_LIST_SIZES.MEDIUM,
		}"
	>
		<icon v-if="icon" class="iconList__icon" :icon="icon" :size="iconSize" />
		<div>{{ tagNamesConcatenated }}</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/spacings';

.iconList {
	$root: &;

	align-items: flex-start;
	display: flex;

	&.-neutralWeak {
		color: $color-neutral-text-weak;

		#{$root}__icon {
			color: $color-neutral-icon-weak;
		}
	}

	&.-neutralStrong {
		color: $color-neutral-text-strong;

		#{$root}__icon {
			color: $color-neutral-icon;
		}
	}

	&__icon {
		margin-right: $space-xxxs;
	}

	&.-xSmall {
		@include label-s-default-regular;

		#{$root}__icon {
			margin-right: $space-xxxxs;
		}
	}

	&.-small {
		@include label-m-default-regular;

		#{$root}__icon {
			margin-top: $space-xxxxxs;
		}
	}

	&.-medium {
		@include label-l-default-regular;
	}
}
</style>

<script lang="ts">
import Icon, { ICON_SIZES, ICONS } from '../Icons/Icon';
import { ICON_LIST_COLORS, ICON_LIST_SIZES } from './IconList.consts';

export default {
	name: 'IconList',
	components: {
		Icon,
	},
	props: {
		color: {
			type: String,
			default: ICON_LIST_COLORS.NEUTRAL_WEAK,
			validator(color) {
				return Object.values(ICON_LIST_COLORS).includes(color);
			},
		},
		size: {
			type: String,
			default: ICON_LIST_SIZES.X_SMALL,
			validator(size) {
				return Object.values(ICON_LIST_SIZES).includes(size);
			},
		},
		tagNames: {
			type: Array,
			required: true,
			validator(tagNames) {
				return !tagNames.some((tagName) => typeof tagName !== 'string');
			},
		},
		icon: {
			type: Object,
			required: true,
			validate: (icon) => Object.values(ICONS).includes(icon),
		},
	},
	data() {
		return {
			ICON_SIZES: Object.freeze(ICON_SIZES),
			ICON_LIST_COLORS: Object.freeze(ICON_LIST_COLORS),
			ICON_LIST_SIZES: Object.freeze(ICON_LIST_SIZES),
		};
	},
	computed: {
		tagNamesConcatenated(): string {
			return this.tagNames.join(', ');
		},
		iconSize(): string {
			if ([ICON_LIST_SIZES.SMALL, ICON_LIST_SIZES.X_SMALL].includes(this.size)) {
				return ICON_SIZES.XX_SMALL;
			}

			return ICON_SIZES.X_SMALL;
		},
	},
};
</script>
