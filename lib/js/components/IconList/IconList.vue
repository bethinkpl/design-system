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
		<icon v-if="icon" class="iconList__icon" :icon="icon" :size="ICON_SIZES.X_SMALL" />
		<div>{{ tagNamesConcatenated }}</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

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
import { ICON_LIST_COLORS, ICON_LIST_SIZES } from './IconList.consts';
import { VueConstructor } from 'vue';
import { Prop } from 'vue/types/options';

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
			type: Object as Prop<VueConstructor>,
			required: true,
			validate: (icon: VueConstructor) => Object.values(ICONS).includes(icon),
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
	},
};
</script>
