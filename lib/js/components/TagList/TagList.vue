<template>
	<div
		:class="{
			tagList: true,
			'-neutral': color === TAG_LIST_COLORS.NEUTRAL,
			'-neutralHeavy': color === TAG_LIST_COLORS.NEUTRAL_HEAVY,
			'-xSmall': size === TAG_LIST_SIZES.X_SMALL,
			'-small': size === TAG_LIST_SIZES.SMALL,
			'-medium': size === TAG_LIST_SIZES.MEDIUM,
		}"
	>
		<icon class="tagList__icon" :icon="ICONS.FA_TAGS" :size="ICON_SIZES.X_SMALL" />
		<div>{{ tagsConcatenated }}</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.tagList {
	$root: &;

	align-items: flex-start;
	display: flex;

	&.-neutral {
		color: $color-neutral-text-weak;

		#{$root}__icon {
			color: $color-neutral-icon-weak;
		}
	}

	&.-neutralHeavy {
		color: $color-neutral-text-heavy;

		#{$root}__icon {
			color: $color-neutral-icon;
		}
	}

	&.-xSmall {
		@include textInfoM();
	}

	&.-small {
		@include textS();
	}

	&.-medium {
		@include textM();
	}

	&__icon {
		margin-right: $space-xxs;
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
			default: TAG_LIST_COLORS.NEUTRAL,
			validate(color) {
				return Object.values(TAG_LIST_COLORS).includes(color);
			},
		},
		size: {
			type: String,
			default: TAG_LIST_SIZES.X_SMALL,
			validate(size) {
				return Object.values(TAG_LIST_SIZES).includes(size);
			},
		},
		tags: {
			type: Array,
			required: true,
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
		tagsConcatenated(): string {
			return this.tags.join(', ');
		},
	},
};
</script>
