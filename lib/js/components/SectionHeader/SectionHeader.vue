<template>
	<div class="sectionHeader" :class="{ '-expandable': expandable, [sizeClass]: true }">
		<div class="sectionHeader__textWrapper" @click="onTextWrapperClicked">
			<ds-icon
				v-if="iconLeft"
				class="sectionHeader__iconLeft"
				:icon="iconLeft"
				:size="ICON_SIZES.SMALL"
			/>
			<span class="sectionHeader__text">{{ text }}</span>
			<ds-icon
				v-if="expandable"
				class="sectionHeader__chevron"
				:icon="ICONS.FA_CHEVRON_DOWN"
				:rotation="chevronRotation"
				:size="ICON_SIZES.SMALL"
			/>
		</div>
		<slot></slot>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.sectionHeader {
	$self: &;

	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media #{breakpoint-s()} {
		flex-wrap: nowrap;
	}

	&__textWrapper {
		@include textBold();

		align-items: center;
		color: $color-neutral-text;
		display: flex;
		overflow: hidden;

		#{$self}.-expandable &:hover {
			color: $color-neutral-text-hovered;
			cursor: pointer;
		}
	}

	&.-size-l &__textWrapper {
		@include headlineL();

		padding: $space-xs 0;
	}

	&.-size-m &__textWrapper {
		@include headlineM();

		padding: $space-xxs 0;
	}

	&__iconLeft {
		margin-right: $space-xxs;
	}

	&__text {
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&__chevron {
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
		isExpanded: {
			type: Boolean,
			default: false,
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
		chevronRotation(): number | null {
			return this.isExpanded ? 180 : null;
		},
		sizeClass(): string {
			return `-size-${this.size}`;
		},
	},
	created() {
		this.ICON_SIZES = ICON_SIZES;
		this.ICONS = ICONS;
	},
	methods: {
		onTextWrapperClicked(): void {
			if (!this.expandable) {
				return;
			}
			this.$emit('update:isExpanded', !this.isExpanded);
		},
	},
};
</script>
