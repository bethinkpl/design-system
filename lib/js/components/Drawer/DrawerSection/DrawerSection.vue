<template>
	<div class="drawerSection">
		<ds-section-header
			:icon-left="iconLeft"
			:icon-left-color="iconLeftColor"
			:icon-right="iconRight"
			:icon-right-color="iconRightColor"
			:is-expandable="isExpandable"
			:is-expanded="isExpanded"
			:info="info"
			:size="size"
			:title="title"
			:eyebrow="eyebrow"
			:supporting-text="supportingText"
			:has-divider="hasDivider"
			@infoClick="onInfoClick"
			@update:isExpanded="onExpandableHeaderClick"
		/>

		<div v-if="isExpandedInternal || !isExpandable">
			<slot />
		</div>
		<div v-if="$slots.uncollapsible"><slot name="uncollapsible" /></div>
	</div>
</template>

<script lang="ts">
import { IconItem, ICONS } from '../../Icons/Icon';
import { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../../Buttons/IconButton';
import SectionHeader, {
	SECTION_HEADER_ICON_COLORS,
	SECTION_HEADER_SIZES,
	SectionHeaderIconColor,
} from '../../Headers/SectionHeader';
import { toRaw } from 'vue';

export default {
	name: 'DrawerSection',
	components: {
		DsSectionHeader: SectionHeader,
	},
	props: {
		isExpandable: {
			type: Boolean,
			default: false,
		},
		iconLeft: {
			type: Object as () => IconItem,
			default: null,
			validator(iconLeft: IconItem) {
				return Object.values(ICONS).includes(toRaw(iconLeft));
			},
		},
		iconLeftColor: {
			type: String as () => SectionHeaderIconColor,
			default: SECTION_HEADER_ICON_COLORS.NEUTRAL_WEAK,
			validator(iconLeftColor: SectionHeaderIconColor) {
				return Object.values(SECTION_HEADER_ICON_COLORS).includes(toRaw(iconLeftColor));
			},
		},
		iconRight: {
			type: Object as () => IconItem,
			default: null,
			validator(iconRight: IconItem) {
				return Object.values(ICONS).includes(toRaw(iconRight));
			},
		},
		iconRightColor: {
			type: String as () => SectionHeaderIconColor,
			default: SECTION_HEADER_ICON_COLORS.NEUTRAL_WEAK,
			validator(iconRightColor: SectionHeaderIconColor) {
				return Object.values(SECTION_HEADER_ICON_COLORS).includes(toRaw(iconRightColor));
			},
		},
		isExpanded: {
			type: Boolean,
			default: true,
		},
		info: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: SECTION_HEADER_SIZES.XX_SMALL,
			validator(size) {
				return Object.values(SECTION_HEADER_SIZES).includes(size);
			},
		},
		title: {
			type: String,
			required: true,
		},
		eyebrow: {
			type: String,
			default: '',
		},
		supportingText: {
			type: String,
			default: null,
		},
		hasDivider: {
			type: Boolean,
			default: true,
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['info-click', 'update:isExpanded'],
	data() {
		return {
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICONS: Object.freeze(ICONS),
			isExpandedInternal: false,
		};
	},
	watch: {
		isExpanded: {
			handler(isExpanded) {
				if (isExpanded !== this.isExpandedInternal) {
					this.isExpandedInternal = isExpanded;
				}
			},
			immediate: true,
		},
	},
	methods: {
		onExpandableHeaderClick(value): void {
			this.isExpandedInternal = value;
			this.$emit('update:isExpanded', value);
		},
		onInfoClick(): void {
			this.$emit('info-click');
		},
	},
};
</script>
