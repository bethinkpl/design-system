<template>
	<div class="sectionHeader" :class="{ '-expandable': expandable, [sizeClass]: true }">
		<div class="sectionHeader__titleWrapper" @click="onTitleWrapperClicked">
			<ds-icon
				v-if="iconLeft"
				class="sectionHeader__iconLeft"
				:icon="iconLeft"
				:size="ICON_SIZES.SMALL"
			/>
			<span class="sectionHeader__title">{{ title }}</span>
			<ds-icon
				v-if="expandable"
				class="sectionHeader__chevron"
				:icon="ICONS.FA_CHEVRON_DOWN"
				:rotation="chevronRotation"
				:size="ICON_SIZES.SMALL"
			/>
		</div>
		<div v-if="$slots.default" class="sectionHeader__slot">
			<slot></slot>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/typography';

.sectionHeader {
	$root: &;

	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media #{breakpoint-s()} {
		flex-wrap: nowrap;
	}

	&__titleWrapper {
		@include textBold();

		align-items: start;
		color: $color-neutral-text;
		display: flex;
		width: 100%;

		@media #{breakpoint-s()} {
			width: auto;
		}

		#{$root}.-expandable &:hover {
			color: $color-neutral-text-hovered;
			cursor: pointer;
		}
	}

	&__slot {
		@media #{breakpoint-s()} {
			margin-left: $space-s;
		}
	}

	&.-size-l {
		#{$root}__titleWrapper {
			@include headlineL();
		}

		#{$root}__iconLeft {
			margin: $space-s $space-xxs $space-s 0;
		}

		#{$root}__title {
			padding: $space-xs 0;
		}

		#{$root}__chevron {
			margin: $space-s 0 $space-s $space-xxs;
		}
	}

	&.-size-m {
		#{$root}__titleWrapper {
			@include headlineM();
		}

		#{$root}__iconLeft {
			margin: $space-xs $space-xxs $space-xs 0;
		}

		#{$root}__title {
			padding: $space-xxs 0;
		}

		#{$root}__chevron {
			margin: $space-xs 0 $space-xs $space-xxs;
		}
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
		title: {
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
		onTitleWrapperClicked(): void {
			if (!this.expandable) {
				return;
			}
			this.$emit('update:isExpanded', !this.isExpanded);
		},
	},
};
</script>
