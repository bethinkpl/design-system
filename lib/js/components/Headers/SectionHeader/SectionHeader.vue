<template>
	<div
		class="ds-sectionHeader"
		:class="{
			'-ds-expandable': isExpandable,
			'-ds-horizontal': mobileLayout === SECTION_HEADER_MOBILE_LAYOUTS.HORIZONTAL,
			[sizeClass]: true,
		}"
	>
		<div class="ds-sectionHeader__wrapper">
			<div class="ds-sectionHeader__main">
				<div class="ds-sectionHeader__header">
					<div class="ds-sectionHeader__titleWrapper" @click="onTitleWrapperClicked">
						<ds-icon
							v-if="iconLeft"
							class="ds-sectionHeader__icon"
							:class="{
								[`-ds-${iconLeftColor}`]: iconLeftColor,
							}"
							:icon="iconLeft"
							:size="iconSize"
						/>
						<div class="ds-sectionHeader__titleContainer">
							<div v-if="eyebrow" class="ds-sectionHeader__eyebrow"
								>{{ eyebrow }}
							</div>
							<div
								class="ds-sectionHeader__title"
								:class="{ '-ds-ellipsis': titleEllipsis }"
								:title="titleEllipsis ? title : undefined"
								>{{ title }}
							</div>
						</div>
						<ds-icon
							v-if="iconRight"
							class="ds-sectionHeader__icon"
							:class="{
								[`-ds-${iconRightColor}`]: iconRightColor,
							}"
							:icon="iconRight"
							:size="iconSize"
						/>
						<ds-icon
							v-if="isExpandable"
							class="ds-sectionHeader__icon"
							:icon="ICONS.FA_CHEVRON_DOWN"
							:rotation="chevronRotation"
							:size="iconSize"
						/>
					</div>
					<div v-if="info" class="ds-sectionHeader__info">
						<ds-icon-button
							:icon="ICONS.FA_CIRCLE_QUESTION"
							:size="ICON_BUTTON_SIZES.X_SMALL"
							:color="ICON_BUTTON_COLORS.NEUTRAL_WEAK"
							:touchable="false"
							@click.prevent.stop="onInfoClicked"
						/>
					</div>
				</div>
				<div v-if="$slots.default && showSlot" class="ds-sectionHeader__slotHorizontal">
					<slot />
				</div>
			</div>

			<div
				v-if="supportingText"
				class="ds-sectionHeader__supportingText"
				:class="{
					'-ds-withoutPadding':
						!hasDivider ||
						(!hasDivider && mobileLayout === SECTION_HEADER_MOBILE_LAYOUTS.HORIZONTAL),
				}"
				>{{ supportingText }}
			</div>

			<div
				v-if="$slots.default && showSlot"
				class="ds-sectionHeader__slotVertical"
				:class="{ '-ds-withoutPadding': !hasDivider }"
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

.ds-sectionHeader {
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

		&.-ds-withoutPadding {
			padding: 0;
		}
	}

	&__header {
		align-items: center;
		display: flex;
		gap: $space-2xs;
		min-width: 0;
		width: 100%;

		@media #{breakpoint-s()} {
			width: auto;
		}
	}

	&__icon {
		color: $color-neutral-icon;
	}

	&.-ds-expandable &__header {
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
	&.-ds-size-xx-small &__icon {
		@include coloredIcon();
	}

	&.-ds-expandable &__header:hover &__icon,
	&.-ds-expandable.-ds-size-xx-small &__header:hover &__icon {
		@include coloredIcon('hovered');
	}

	&__titleWrapper {
		align-items: center;
		display: flex;
		min-width: 0;
	}

	&__titleContainer {
		display: flex;
		flex-direction: column;
		gap: $space-5xs;
		min-width: 0;
		padding: $space-2xs 0;
	}

	&__title {
		color: $color-neutral-text-strong;
		min-width: 0;

		&.-ds-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	&__info {
		line-height: 0;
		padding: $space-3xs 0;
	}

	&__eyebrow {
		@include info-xs-extensive-bold-uppercase;

		color: $color-neutral-text-weak;
	}

	&.-ds-size-large {
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

	&.-ds-size-medium {
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

	&.-ds-size-small {
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

	&.-ds-size-x-small {
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

	&.-ds-size-xx-small {
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

		&.-ds-expandable #{$root}__header:hover {
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

		&.-ds-withoutPadding {
			padding: 0;
		}
	}

	&.-ds-horizontal {
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
	SECTION_HEADER_ICON_COLORS,
	SECTION_HEADER_MOBILE_LAYOUTS,
	SECTION_HEADER_SIZES,
	SectionHeaderIconColor,
	SectionHeaderMobileLayout,
	SectionHeaderSize,
} from './SectionHeader.consts';
import DsIcon, { ICON_SIZES, IconItem, ICONS } from '../../Icons/Icon';
import DsIconButton, { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../../Buttons/IconButton';
import DsDivider from '../../Divider';
import { defineComponent, toRaw } from 'vue';

export default defineComponent({
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
				return Object.values(SECTION_HEADER_SIZES).includes(size as SectionHeaderSize);
			},
		},
		title: {
			type: String,
			required: true,
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
		mobileLayout: {
			type: String,
			default: SECTION_HEADER_MOBILE_LAYOUTS.VERTICAL,
			validator: (value) =>
				Object.values(SECTION_HEADER_MOBILE_LAYOUTS).includes(
					value as SectionHeaderMobileLayout,
				),
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
			return `-ds-size-${this.size}`;
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
});
</script>
