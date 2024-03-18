<template>
	<div class="drawerSection">
		<ds-section-header
			:is-expandable="isExpandable"
			:hide-slot-when-collapsed="hideSlotWhenCollapsed"
			:icon-left="iconLeft"
			:icon-left-color="iconLeftColor"
			:icon-right="iconRight"
			:icon-right-color="iconRightColor"
			:is-expanded="isSectionHeaderExpanded"
			:info="info"
			:size="size"
			:title="title"
			:eyebrow="eyebrow"
			:supporting-text="supportingText"
			:divider="divider"
			:mobile-layout="mobileLayout"
			@infoClick="onInfoClick"
			@update:isExpanded="onExpandableHeaderClick"
		/>

		<div v-if="isSectionHeaderExpanded || !isExpandable">
			<slot />
		</div>
		<div v-if="$slots.uncollapsible"><slot name="uncollapsible" /></div>
	</div>
</template>

<script lang="ts">
import { ICON_COLORS, IconColor, IconItem, ICONS } from '../../Icons/Icon';
import { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../../Buttons/IconButton';
import SectionHeader, {
	SECTION_HEADER_MOBILE_LAYOUTS,
	SECTION_HEADER_SIZES,
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
		hideSlotWhenCollapsed: {
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
			type: String as () => IconColor,
			default: ICON_COLORS.NEUTRAL_WEAK,
			validator(iconLeftColor: IconColor) {
				return Object.values(ICON_COLORS).includes(toRaw(iconLeftColor));
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
			type: String as () => IconColor,
			default: ICON_COLORS.NEUTRAL_WEAK,
			validator(iconRightColor: IconColor) {
				return Object.values(ICON_COLORS).includes(toRaw(iconRightColor));
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
		divider: {
			type: Boolean,
			default: true,
		},
		mobileLayout: {
			type: String,
			default: SECTION_HEADER_MOBILE_LAYOUTS.VERTICAL,
			validator: (value) => Object.values(SECTION_HEADER_MOBILE_LAYOUTS).includes(value),
		},
	},
	emits: ['info-click', 'update:isExpanded'],
	data() {
		return {
			isSectionHeaderExpanded: this.isExpanded,
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICONS: Object.freeze(ICONS),
		};
	},
	methods: {
		onExpandableHeaderClick(): void {
			this.isSectionHeaderExpanded = !this.isSectionHeaderExpanded;
			this.$emit('update:isExpanded', this.isSectionHeaderExpanded);
		},
		onInfoClick(): void {
			this.$emit('info-click');
		},
	},
};
</script>
