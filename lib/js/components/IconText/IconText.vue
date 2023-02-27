<template>
	<div
		class="iconText"
		:class="{
			'-neutralWeak': color === ICON_TEXT_COLORS.NEUTRAL_WEAK,
			'-neutralStrong': color === ICON_TEXT_COLORS.NEUTRAL_STRONG,
			'-xSmall': size === ICON_TEXT_SIZES.X_SMALL,
			'-small': size === ICON_TEXT_SIZES.SMALL,
			'-medium': size === ICON_TEXT_SIZES.MEDIUM,
		}"
	>
		<icon v-if="icon" class="iconText__icon" :icon="icon" :size="iconSize" />
		<div>{{ tagNamesConcatenated }}</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/spacings';

.iconText {
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
import { ICON_TEXT_COLORS, ICON_TEXT_SIZES } from './IconText.consts';
import { VueConstructor } from 'vue';
import { Prop } from 'vue/types/options';

export default {
	name: 'IconText',
	components: {
		Icon,
	},
	props: {
		color: {
			type: String,
			default: ICON_TEXT_COLORS.NEUTRAL_WEAK,
			validator(color) {
				return Object.values(ICON_TEXT_COLORS).includes(color);
			},
		},
		size: {
			type: String,
			default: ICON_TEXT_SIZES.X_SMALL,
			validator(size) {
				return Object.values(ICON_TEXT_SIZES).includes(size);
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
			ICON_TEXT_COLORS: Object.freeze(ICON_TEXT_COLORS),
			ICON_TEXT_SIZES: Object.freeze(ICON_TEXT_SIZES),
		};
	},
	computed: {
		tagNamesConcatenated(): string {
			return this.tagNames.join(', ');
		},
		iconSize(): string {
			if ([ICON_TEXT_SIZES.SMALL, ICON_TEXT_SIZES.X_SMALL].includes(this.size)) {
				return ICON_SIZES.XX_SMALL;
			}

			return ICON_SIZES.X_SMALL;
		},
	},
};
</script>
