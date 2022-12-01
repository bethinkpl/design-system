<template>
	<div
		:class="{
			tagList: true,
			'-neutralWeak': color === TAG_LIST_COLORS.NEUTRAL_WEAK,
			'-neutralStrong': color === TAG_LIST_COLORS.NEUTRAL_STRONG,
			'-xSmall': size === TAG_LIST_SIZES.X_SMALL,
			'-small': size === TAG_LIST_SIZES.SMALL,
			'-medium': size === TAG_LIST_SIZES.MEDIUM,
		}"
	>
		<icon class="tagList__icon" :icon="ICONS.FA_TAGS" :size="iconSize" />
		<div>{{ tagNamesConcatenated }}</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/spacings';

.tagList {
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
		@include label-s-regular();
		#{$root}__icon {
			margin-right: $space-xxxxs;
		}
	}

	&.-small {
		@include label-m-regular();
		#{$root}__icon {
			margin-top: $space-xxxxxs;
		}
	}

	&.-medium {
		@include label-l-regular();
	}
}
</style>

<script lang="ts">
import Icon, { ICON_SIZES, ICONS } from '../Icon';
import { TAG_LIST_COLORS, TAG_LIST_SIZES } from './TagList.consts';

export default {
	name: 'TagList',
	components: {
		Icon,
	},
	props: {
		color: {
			type: String,
			default: TAG_LIST_COLORS.NEUTRAL_WEAK,
			validator(color) {
				return Object.values(TAG_LIST_COLORS).includes(color);
			},
		},
		size: {
			type: String,
			default: TAG_LIST_SIZES.X_SMALL,
			validator(size) {
				return Object.values(TAG_LIST_SIZES).includes(size);
			},
		},
		tagNames: {
			type: Array,
			required: true,
			validator(tagNames) {
				return !tagNames.some((tagName) => typeof tagName !== 'string');
			},
		},
	},
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			TAG_LIST_COLORS: Object.freeze(TAG_LIST_COLORS),
			TAG_LIST_SIZES: Object.freeze(TAG_LIST_SIZES),
		};
	},
	computed: {
		tagNamesConcatenated(): string {
			return this.tagNames.join(', ');
		},
		iconSize(): string {
			if ([TAG_LIST_SIZES.SMALL, TAG_LIST_SIZES.X_SMALL].includes(this.size)) {
				return ICON_SIZES.XX_SMALL;
			}

			return ICON_SIZES.X_SMALL;
		},
	},
};
</script>
