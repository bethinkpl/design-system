<template>
	<div
		class="sectionHeader"
		:class="{
			'-expandable': isExpandable,
			'-horizontal': mobileLayout === SECTION_HEADER_MOBILE_LAYOUTS.HORIZONTAL,
			[sizeClass]: true,
		}"
	>
		<div class="sectionHeader__wrapper">
			<div class="sectionHeader__main">
				<div class="sectionHeader__header">
					<div class="sectionHeader__titleWrapper" @click="onTitleWrapperClicked">
						<ds-icon
							v-if="iconLeft"
							class="sectionHeader__icon"
							:class="{
								[`-${iconLeftColor}`]: iconLeftColor,
							}"
							:icon="iconLeft"
							:size="iconSize"
						/>
						<div class="sectionHeader__titleContainer">
							<div v-if="eyebrow" class="sectionHeader__eyebrow">{{ eyebrow }}</div>
							<div class="sectionHeader__title">{{ title }}</div>
						</div>
						<ds-icon
							v-if="iconRight"
							class="sectionHeader__icon"
							:class="{
								[`-${iconRightColor}`]: iconRightColor,
							}"
							:icon="iconRight"
							:size="iconSize"
						/>
						<ds-icon
							v-if="isExpandable"
							class="sectionHeader__icon"
							:icon="ICONS.FA_CHEVRON_DOWN"
							:rotation="chevronRotation"
							:size="iconSize"
						/>
					</div>
					<div v-if="info" class="sectionHeader__info">
						<ds-icon-button
							:icon="ICONS.FA_CIRCLE_QUESTION"
							:size="ICON_BUTTON_SIZES.X_SMALL"
							:color="ICON_BUTTON_COLORS.NEUTRAL_WEAK"
							:touchable="false"
							@click.prevent.stop="onInfoClicked"
						/>
					</div>
				</div>
				<div v-if="$slots.default && showSlot" class="sectionHeader__slotHorizontal">
					<slot />
				</div>
			</div>

			<div
				v-if="supportingText"
				class="sectionHeader__supportingText"
				:class="{
					'-withoutPadding':
						!hasDivider ||
						(!hasDivider && mobileLayout === SECTION_HEADER_MOBILE_LAYOUTS.HORIZONTAL),
				}"
				>{{ supportingText }}
			</div>

			<div
				v-if="$slots.default && showSlot"
				class="sectionHeader__slotVertical"
				:class="{ '-withoutPadding': !hasDivider }"
			>
				<slot />
			</div>
		</div>
		<ds-divider v-if="hasDivider" />
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/icons';
@import '../../../../styles/settings/media-queries';
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';

.sectionHeader {
	$root: &;

	padding: 0;

	&__wrapper {
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	&__main {
		align-items: center;
		display: flex;
		flex-direction: row;
		gap: $space-2xs;
		justify-content: space-between;
		padding: $space-4xs 0;
	}

	&__supportingText {
		@include text-s-compact-regular;

		color: $color-neutral-text;
		padding: 0 0 $space-xs;

		&.-withoutPadding {
			padding: 0;
		}
	}

	&__header {
		align-items: center;
		display: flex;
		gap: $space-2xs;
		width: 100%;

		@media #{breakpoint-s()} {
			width: auto;
		}
	}

	&__icon {
		color: $color-neutral-icon;
	}

	&.-expandable &__header {
		cursor: pointer;

		&:hover {
			#{$root}__icon {
				color: $color-neutral-icon-hovered;
			}

			#{$root}__title {
				color: $color-neutral-text-strong-hovered;
			}
		}
	}

	&__icon,
	&.-size-xx-small &__icon {
		@include coloredIcon();
	}

	&.-expandable &__header:hover &__icon,
	&.-expandable.-size-xx-small &__header:hover &__icon {
		@include coloredIcon('hovered');
	}

	&__titleWrapper {
		align-items: center;
		display: flex;
	}

	&__titleContainer {
		display: flex;
		flex-direction: column;
		gap: $space-5xs;
		padding: $space-2xs 0;
	}

	&__title {
		color: $color-neutral-text-strong;
	}

	&__info {
		line-height: 0;
		padding: $space-3xs 0;
	}

	&__eyebrow {
		@include info-xs-extensive-bold-uppercase;

		color: $color-neutral-text-weak;
	}

	&.-size-large {
		#{$root}__main {
			padding: $space-5xs 0;
		}

		#{$root}__header {
			@include heading-l-default-bold;
		}

		#{$root}__titleWrapper {
			gap: $space-2xs;
		}

		#{$root}__info {
			padding: $space-2xs 0;
		}

		#{$root}__eyebrow {
			@include info-s-extensive-bold-uppercase;
		}
	}

	&.-size-medium {
		#{$root}__header {
			@include heading-m-default-bold;
		}

		#{$root}__titleWrapper {
			gap: $space-2xs;
		}

		#{$root}__info {
			padding: $space-2xs 0;
		}

		#{$root}__eyebrow {
			@include info-s-extensive-bold-uppercase;
		}
	}

	&.-size-small {
		#{$root}__main {
			padding: $space-5xs 0;
		}

		#{$root}__header {
			@include heading-s-default-bold;
		}

		#{$root}__titleWrapper {
			gap: $space-3xs;
		}

		#{$root}__info {
			padding: $space-2xs 0;
		}
	}

	&.-size-x-small {
		#{$root}__main {
			padding: $space-5xs 0;
		}

		#{$root}__titleWrapper {
			gap: $space-3xs;
		}

		#{$root}__header {
			@include heading-xs-default-bold-uppercase;
		}
	}

	&.-size-xx-small {
		#{$root}__main {
			padding: $space-5xs 0;
		}

		#{$root}__titleWrapper {
			gap: $space-3xs;
		}

		#{$root}__header {
			@include info-s-extensive-bold-uppercase;
		}

		#{$root}__icon {
			color: $color-neutral-icon-weak;
		}

		#{$root}__title {
			color: $color-neutral-text-weak;
		}

		&.-expandable #{$root}__header:hover {
			#{$root}__icon {
				color: $color-neutral-icon-weak-hovered;
			}

			#{$root}__title {
				color: $color-neutral-text-weak-hovered;
			}
		}
	}

	&__slotHorizontal {
		display: none;
		flex-shrink: 0;

		@media #{breakpoint-s()} {
			display: block;
		}
	}

	&__slotVertical {
		display: block;
		padding: 0 0 $space-3xs;

		@media #{breakpoint-s()} {
			display: none;
		}

		&.-withoutPadding {
			padding: 0;
		}
	}

	&.-horizontal {
		#{$root}__slotHorizontal {
			display: block;
		}

		#{$root}__slotVertical {
			display: none;
		}
	}
}
</style>

<script lang="ts">
import {
	SECTION_HEADER_MOBILE_LAYOUTS,
	SECTION_HEADER_SIZES,
	SECTION_HEADER_ICON_COLORS,
	SectionHeaderIconColor,
} from './SectionHeader.consts';
import DsIcon, { ICON_SIZES, IconItem, ICONS } from '../../Icons/Icon';
import DsIconButton, { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../../Buttons/IconButton';
import DsDivider from '../../Divider';
import { toRaw } from 'vue';

export default {
	name: 'SectionHeader',
	components: {
		DsIcon,
		DsIconButton,
		DsDivider,
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
			type: String as () => SectionHeaderIconColor,
			default: null,
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
			default: null,
			validator(iconRightColor: SectionHeaderIconColor) {
				return Object.values(SECTION_HEADER_ICON_COLORS).includes(toRaw(iconRightColor));
			},
		},
		isExpanded: {
			type: Boolean,
			default: false,
		},
		info: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: SECTION_HEADER_SIZES.MEDIUM,
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
		mobileLayout: {
			type: String,
			default: SECTION_HEADER_MOBILE_LAYOUTS.VERTICAL,
			validator: (value) => Object.values(SECTION_HEADER_MOBILE_LAYOUTS).includes(value),
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['info-click', 'update:isExpanded'],
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			SECTION_HEADER_MOBILE_LAYOUTS: Object.freeze(SECTION_HEADER_MOBILE_LAYOUTS),
			isExpandedInternal: false,
		};
	},
	computed: {
		chevronRotation(): number | undefined {
			return this.isExpanded ? 180 : undefined;
		},
		showSlot(): boolean {
			return this.isExpanded || !this.hideSlotWhenCollapsed;
		},
		sizeClass(): string {
			return `-size-${this.size}`;
		},
		iconSize(): string {
			if (
				this.size === SECTION_HEADER_SIZES.MEDIUM ||
				this.size === SECTION_HEADER_SIZES.LARGE
			) {
				return ICON_SIZES.X_SMALL;
			}

			return ICON_SIZES.XX_SMALL;
		},
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
		onInfoClicked(): void {
			this.$emit('info-click');
		},
		onTitleWrapperClicked(): void {
			if (!this.isExpandable) {
				return;
			}
			this.isExpandedInternal = !this.isExpandedInternal;
			this.$emit('update:isExpanded', this.isExpandedInternal);
		},
	},
};
</script>
