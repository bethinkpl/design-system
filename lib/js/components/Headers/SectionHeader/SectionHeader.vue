<template>
	<div
		class="sectionHeader"
		:class="{
			'-expandable': expandable,
			'-horizontal': mobileLayout === SECTION_HEADER_MOBILE_LAYOUTS.HORIZONTAL,
			[sizeClass]: true,
		}"
	>
		<div class="sectionHeader__wrapper">
			<div class="sectionHeader__main">
				<div class="sectionHeader__titleWrapper" @click="onTitleWrapperClicked">
					<div v-if="iconLeft" class="sectionHeader__iconWrapper sectionHeader__iconLeft">
						<ds-icon :icon="iconLeft" :size="iconSize" />
					</div>
					<span class="sectionHeader__title">{{ title }}</span>
					<div
						v-if="iconRight"
						class="sectionHeader__iconWrapper sectionHeader__iconRight"
					>
						<ds-icon :icon="iconRight" :size="iconSize" />
					</div>
					<div
						v-if="expandable"
						class="sectionHeader__iconWrapper sectionHeader__chevron"
					>
						<ds-icon
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

			<div v-if="supportingText" class="sectionHeader__supportingText"
				>{{ supportingText }}
			</div>

			<div v-if="$slots.default && showSlot" class="sectionHeader__slotVertical">
				<slot />
			</div>
		</div>
		<ds-divider v-if="divider" />
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/media-queries';
@import '../../../../styles/settings/spacings';

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
		gap: $space-xxs;
		justify-content: space-between;
		padding: $space-xxxxs 0;
	}

	&__supportingText {
		@include text-s-compact-regular;

		color: $color-neutral-text;
		gap: $space-xxs;
		padding: 0 0 $space-xs;
	}

	&__titleWrapper {
		align-items: center;
		display: flex;
		width: 100%;

		@media #{breakpoint-s()} {
			width: auto;
		}
	}

	&.-expandable &__titleWrapper {
		cursor: pointer;
	}

	&.-expandable &__titleWrapper:hover {
		#{$root}__iconLeft,
		#{$root}__iconRight,
		#{$root}__chevron {
			color: $color-neutral-icon-hovered;
		}

		#{$root}__title {
			color: $color-neutral-text-hovered;
		}
	}

	&__iconLeft,
	&__iconRight,
	&__chevron {
		color: $color-neutral-icon;
	}

	&__title {
		color: $color-neutral-text-strong;
		padding: $space-xxs 0;
	}

	&__info {
		padding: $space-xxxs $space-xxs;
	}

	&.-size-l {
		#{$root}__main {
			padding: $space-xxxxxs 0;
		}

		#{$root}__titleWrapper {
			@include heading-l-default-bold;
		}

		#{$root}__iconLeft {
			margin-right: $space-xxs;
		}

		#{$root}__iconRight,
		#{$root}__chevron {
			margin-left: $space-xxs;
		}
	}

	&.-size-m {
		#{$root}__titleWrapper {
			@include heading-m-default-bold;
		}

		#{$root}__iconLeft {
			margin-right: $space-xxs;
		}

		#{$root}__iconRight,
		#{$root}__chevron {
			margin-left: $space-xxs;
		}
	}

	&.-size-s {
		#{$root}__main {
			padding: $space-xxxxxs 0;
		}

		#{$root}__titleWrapper {
			@include heading-s-default-bold;
		}

		#{$root}__iconLeft {
			margin-right: $space-xxxs;
		}

		#{$root}__iconRight,
		#{$root}__chevron {
			margin-left: $space-xxxs;
		}
	}

	&.-size-xs {
		#{$root}__main {
			padding: 0 0;
		}

		#{$root}__title {
			padding: $space-xxxs 0;
		}

		#{$root}__titleWrapper {
			@include heading-xs-default-bold-uppercase;
		}

		#{$root}__iconLeft {
			margin-right: $space-xxxs;
		}

		#{$root}__iconRight,
		#{$root}__chevron {
			margin-left: $space-xxxs;
		}
	}

	&__slotHorizontal {
		display: none;

		@media #{breakpoint-s()} {
			display: block;
		}
	}

	&__slotVertical {
		display: block;
		padding: 0 0 $space-xxxs;

		@media #{breakpoint-s()} {
			display: none;
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
import { SECTION_HEADER_MOBILE_LAYOUTS, SECTION_HEADER_SIZES } from './SectionHeader.consts';
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
				return Object.values(ICONS).includes(toRaw(iconLeft));
			},
		},
		iconRight: {
			type: Object as () => IconItem,
			default: null,
			validator(iconRight: IconItem) {
				return Object.values(ICONS).includes(toRaw(iconRight));
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
			default: SECTION_HEADER_SIZES.M,
			validator(size) {
				return Object.values(SECTION_HEADER_SIZES).includes(size);
			},
		},
		title: {
			type: String,
			required: true,
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
	data() {
		return {
			ICONS: Object.freeze(ICONS),
			ICON_SIZES: Object.freeze(ICON_SIZES),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			SECTION_HEADER_MOBILE_LAYOUTS: Object.freeze(SECTION_HEADER_MOBILE_LAYOUTS),
		};
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
		iconSize(): string {
			if (this.size === SECTION_HEADER_SIZES.M || this.size === SECTION_HEADER_SIZES.L) {
				return ICON_SIZES.X_SMALL;
			}

			return ICON_SIZES.XX_SMALL;
		},
	},
	methods: {
		onInfoClicked(): void {
			this.$emit('info-click');
		},
		onTitleWrapperClicked(): void {
			if (!this.expandable) {
				return;
			}
			this.$emit('update:isExpanded', !this.isExpanded);
		},
	},
};
</script>
