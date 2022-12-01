<template>
	<div class="sectionHeader" :class="{ '-expandable': expandable, [sizeClass]: true }">
		<div class="sectionHeader__titleWrapper" @click="onTitleWrapperClicked">
			<div class="sectionHeader__iconWrapper">
				<ds-icon
					v-if="iconLeft"
					class="sectionHeader__iconLeft"
					:icon="iconLeft"
					:size="ICON_SIZES.SMALL"
				/>
			</div>
			<span class="sectionHeader__title">{{ title }}</span>
			<div class="sectionHeader__iconWrapper">
				<ds-icon
					v-if="expandable"
					class="sectionHeader__chevron"
					:icon="ICONS.FA_CHEVRON_DOWN"
					:rotation="chevronRotation"
					:size="ICON_SIZES.SMALL"
				/>
			</div>
		</div>
		<div
			v-if="$slots.default && showSlot"
			class="sectionHeader__slot"
			:class="{ '-withPadding': slotPadding }"
		>
			<slot />
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/spacings';

$icons-and-slot-min-height-m: 40px;
$icons-and-slot-min-height-l: 50px;

.sectionHeader {
	$root: &;

	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: $space-xxxxxs 0;

	@media #{breakpoint-s()} {
		flex-wrap: nowrap;
	}

	&__titleWrapper {
		align-items: start;
		display: flex;
		width: 100%;

		@media #{breakpoint-s()} {
			width: auto;
		}
	}

	&.-expandable &__titleWrapper:hover {
		cursor: pointer;

		#{$root}__iconLeft,
		#{$root}__chevron {
			color: $color-neutral-icon-hovered;
		}

		#{$root}__title {
			color: $color-neutral-text-hovered;
		}
	}

	&__iconLeft,
	&__chevron {
		color: $color-neutral-icon;
	}

	&__title {
		color: $color-neutral-text;
	}

	&__slot,
	&__iconWrapper {
		display: flex;
		align-items: center;
	}

	&__iconWrapper {
		min-height: $icons-and-slot-min-height-m;
	}

	&__slot {
		min-height: auto;

		@media #{breakpoint-s()} {
			margin-left: $space-s;
			min-height: $icons-and-slot-min-height-m;
		}

		&.-withPadding {
			padding: $space-xxs 0;
		}
	}

	&.-size-l {
		#{$root}__titleWrapper {
			@include heading-xl-bold();
		}

		#{$root}__iconLeft {
			margin-right: $space-xxs;
		}

		#{$root}__title {
			padding: $space-xs 0;
		}

		#{$root}__chevron {
			margin-left: $space-xxs;
		}

		#{$root}__iconWrapper {
			min-height: $icons-and-slot-min-height-l;
		}

		#{$root}__slot {
			@media #{breakpoint-s()} {
				min-height: $icons-and-slot-min-height-l;
			}
		}
	}

	&.-size-m {
		#{$root}__titleWrapper {
			@include heading-l-bold();
		}

		#{$root}__iconLeft {
			margin: $space-xxs $space-xxs $space-xxs 0;
		}

		#{$root}__title {
			padding: $space-xxs 0;
		}

		#{$root}__chevron {
			margin: $space-xxs 0 $space-xxs $space-xxs;
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
		hideSlotWhenCollapsed: {
			type: Boolean,
			default: false,
		},
		iconLeft: {
			type: Object as () => IconItem,
			default: null,
			validator(iconLeft: IconItem) {
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
			validator(size) {
				return Object.values(SECTION_HEADER_SIZES).includes(size);
			},
		},
		slotPadding: {
			type: Boolean,
			default: true,
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
		showSlot(): boolean {
			return this.isExpanded || !this.hideSlotWhenCollapsed;
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
