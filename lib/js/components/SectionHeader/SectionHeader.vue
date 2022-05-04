<template>
	<div class="sectionHeader" :class="{ '-expandable': expandable, [sizeClass]: true }">
		<div class="sectionHeader__titleWrapper">
			<ds-icon
				v-if="iconLeft"
				class="sectionHeader__iconLeft"
				:icon="iconLeft"
				:size="ICON_SIZES.SMALL"
			/>
			<span>{{ text }}</span>
			<ds-icon
				v-if="expandable"
				class="sectionHeader__chevron"
				:icon="chevronIcon"
				:size="ICON_SIZES.SMALL"
			/>
		</div>
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.sectionHeader {
	$self: &;

	align-items: center;
	display: flex;
	justify-content: space-between;

	&__titleWrapper {
		@include textBold();

		align-items: center;
		color: $color-neutral-text;
		display: flex;

		#{$self}.-expandable &:hover {
			color: $color-neutral-text-hovered;
			cursor: pointer;
		}
	}

	&.-size-l &__titleWrapper {
		@include headlineL();
	}

	&.-size-m &__titleWrapper {
		@include headlineM();
	}

	&__iconLeft {
		// Override icon's display to center it vertically
		display: block;
		margin-right: $space-xxs;
	}

	&__chevron {
		// Override icon's display to center it vertically
		display: block;
		margin-left: $space-xxs;
	}
}
</style>

<script lang="ts">
import { SECTION_HEADER_SIZES } from './SectionHeader.consts';
import DsIcon, { IconItem, ICONS, ICON_SIZES } from '../Icon';

export default {
	name: 'SectionHeader',
	components: {
		DsIcon,
	},
	props: {
		expandable: {
			type: Boolean,
			default: false,
		},
		iconLeft: {
			type: Object as () => IconItem,
			default: null,
			validate(iconLeft: IconItem) {
				return Object.values(ICONS).includes(iconLeft);
			},
		},
		size: {
			type: String,
			default: SECTION_HEADER_SIZES.M,
			validate(size) {
				Object.values(SECTION_HEADER_SIZES).includes(size);
			},
		},
		text: {
			type: String,
			required: true,
		},
	},
	computed: {
		chevronIcon(): IconItem {
			// TODO
			return ICONS.FA_CHEVRON_DOWN;
		},
		sizeClass(): string {
			return `-size-${this.size}`;
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
	},
};
</script>
