<template>
	<div class="ds-drawerSection">
		<ds-section-header
			v-if="title"
			:icon-left="iconLeft"
			:icon-left-color="iconLeftColor"
			:icon-right="iconRight"
			:icon-right-color="iconRightColor"
			:is-expandable="isExpandable"
			:is-expanded="isExpandedInternal"
			:info="info"
			:size="size"
			:title="title"
			:title-ellipsis="titleEllipsis"
			:eyebrow="eyebrow"
			:supporting-text="supportingText"
			:has-divider="hasDivider"
			@info-click="onInfoClick"
			@update:is-expanded="onExpandableHeaderClick"
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
	SectionHeaderSize,
} from '../../Headers/SectionHeader';
import { defineComponent, toRaw } from 'vue';

export default defineComponent({
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
			validator(size: SectionHeaderSize) {
				return Object.values(SECTION_HEADER_SIZES).includes(size);
			},
		},
		title: {
			type: String,
			default: null,
		},
		titleEllipsis: {
			type: Boolean,
			default: false,
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
			isExpandedInternal: this.isExpanded,
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
});
</script>
