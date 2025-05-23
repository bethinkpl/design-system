<template>
	<div
		class="ds-overlayHeader"
		:class="{
			'-ds-borderNeutral': borderColor === OVERLAY_HEADER_BORDER_COLORS.NEUTRAL,
			'-ds-borderSuccess': borderColor === OVERLAY_HEADER_BORDER_COLORS.SUCCESS,
			'-ds-borderFail': borderColor === OVERLAY_HEADER_BORDER_COLORS.FAIL,
			'-ds-borderWarning': borderColor === OVERLAY_HEADER_BORDER_COLORS.WARNING,
		}"
	>
		<div v-if="isLoading" class="ds-overlayHeader__loadingWrapper">
			<ds-skeleton width="50%" height="12px" />
			<ds-skeleton
				class="ds-overlayHeader__loadingBar -ds-desktop"
				width="100%"
				height="20px"
			/>
			<ds-skeleton
				class="ds-overlayHeader__loadingBar -ds-mobile"
				width="100%"
				height="18px"
			/>
		</div>
		<div v-if="!isLoading && $slots.accessory" class="ds-overlayHeader__accessory">
			<slot name="accessory" />
		</div>
		<div v-if="!isLoading" class="ds-overlayHeader__content">
			<div v-if="eyebrowText || $slots.eyebrowAccessory" class="ds-overlayHeader__eyebrow">
				<div
					v-if="eyebrowText"
					class="ds-overlayHeader__eyebrowText"
					:title="eyebrowText"
					:class="{ '-ds-withRightMargin': $slots.eyebrowAccessory }"
				>
					{{ eyebrowText }}
				</div>
				<div v-if="$slots.eyebrowAccessory" class="ds-overlayHeader__eyebrowAccessory">
					<slot name="eyebrowAccessory"></slot>
				</div>
			</div>
			<div class="ds-overlayHeader__main">
				<div v-if="$slots.titleLeading" class="ds-overlayHeader__titleLeading">
					<slot name="titleLeading" />
				</div>
				<div
					v-if="title || shortTitle"
					class="ds-overlayHeader__titleWrapper"
					:title="title"
					:class="{ '-ds-interactive': isTitleInteractive }"
					@click="onTitleClick"
				>
					<div class="ds-overlayHeader__title -ds-desktop">
						{{ title }}
					</div>
					<div class="ds-overlayHeader__title -ds-mobile">
						{{ shortTitle || title }}
					</div>
				</div>
				<div v-if="$slots.titleTrailing" class="ds-overlayHeader__titleTrailingWrapper">
					<div class="ds-overlayHeader__titleTrailing">
						<slot name="titleTrailing" />
					</div>
				</div>
			</div>
		</div>

		<template v-if="!isLoading && $slots.actions">
			<div class="ds-overlayHeader__actions">
				<slot name="actions" />
			</div>
			<ds-divider
				class="ds-overlayHeader__divider -ds-mobileHidden"
				:prominence="DIVIDER_PROMINENCES.STRONG"
				is-vertical
			/>
		</template>
		<template v-if="!isLoading && $slots.dropdown">
			<ds-dropdown
				boundaries-selector="body"
				:placement="DROPDOWN_PLACEMENTS.BOTTOM_END"
				@show="isDropdownOpen = true"
				@hide="isDropdownOpen = false"
			>
				<template #reference>
					<ds-icon-button
						:icon="dropdownIcon"
						:size="ICON_BUTTON_SIZES.MEDIUM"
						:color="ICON_BUTTON_COLORS.NEUTRAL"
						:state="
							isDropdownOpen ? ICON_BUTTON_STATES.HOVERED : ICON_BUTTON_STATES.DEFAULT
						"
					/>
				</template>
				<template #default="{ close }">
					<slot name="dropdown" :close="close" />
				</template>
			</ds-dropdown>
			<ds-divider
				class="ds-overlayHeader__divider"
				:prominence="DIVIDER_PROMINENCES.STRONG"
				is-vertical
			/>
		</template>
		<ds-tooltip
			:is-pointer-visible="false"
			:placement="TOOLTIP_PLACEMENTS.LEFT"
			text="Zamknij — Q"
		>
			<ds-icon-button
				data-test-selector="overlay-header-close-button"
				:icon="ICONS.FA_XMARK"
				:size="ICON_BUTTON_SIZES.MEDIUM"
				:color="ICON_BUTTON_COLORS.NEUTRAL"
				@click="$emit('close')"
			/>
		</ds-tooltip>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/media-queries';
@import '../../../../styles/settings/colors/tokens';
@import '../../../../styles/settings/shadows';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/mixins/flex-overflow-mask';

.ds-overlayHeader {
	align-items: center;
	background: $color-neutral-background;
	border-bottom: 2px solid $color-neutral-border-ghost;
	box-shadow: $shadow-s;
	display: flex;
	padding: $space-2xs $space-3xs $space-2xs 0;

	@media #{breakpoint-s()} {
		padding: $space-xs $space-2xs $space-xs 0;
	}

	&__accessory {
		align-self: stretch;
		margin-left: $space-xs;
	}

	&__loadingWrapper {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		gap: $space-3xs;
		margin: 0 $space-4xs 0 $space-xs;

		@media #{breakpoint-s()} {
			gap: $space-2xs;
			margin: 0 $space-2xs 0 $space-s;
		}
	}

	&__loadingBar {
		&.-ds-desktop {
			display: none;

			@media #{breakpoint-s()} {
				display: flex;
			}
		}

		&.-ds-mobile {
			@media #{breakpoint-s()} {
				display: none;
			}
		}
	}

	&__content {
		flex-grow: 1;
		margin: 0 $space-4xs 0 $space-xs;
		// We need to set min-width to allow children to apply ellipsis
		min-width: 0;

		@media #{breakpoint-s()} {
			margin: 0 $space-2xs 0 $space-s;
		}
	}

	&__eyebrow {
		align-items: center;
		display: flex;
		margin-bottom: $space-3xs;

		@media #{breakpoint-s()} {
			margin-bottom: $space-2xs;
		}
	}

	&__eyebrowText {
		@include info-s-extensive-bold-uppercase;

		color: $color-neutral-text;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		&.-ds-withRightMargin {
			margin-right: $space-2xs;
		}
	}

	&__eyebrowAccessory {
		// We need to set flex and min-width to allow children to apply ellipsis
		display: flex;
		min-width: 0;
	}

	&__main {
		align-items: center;
		display: flex;
		gap: $space-2xs;
		// title is required, but in some edge-cases we don't render it. We need to set min-height to avoid jumping
		// Keep value in sync with &__title line-height
		min-height: $typography-line-height-s;
	}

	&__titleLeading {
		display: flex;
	}

	&__titleWrapper {
		overflow: hidden;

		&.-ds-interactive {
			cursor: pointer;
		}
	}

	&__title {
		@include heading-m-default-bold;

		color: $color-neutral-text-heavy;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		&.-ds-desktop {
			display: none;

			@media #{breakpoint-s()} {
				display: block;
			}
		}

		&.-ds-mobile {
			@media #{breakpoint-s()} {
				display: none;
			}
		}
	}

	&__titleTrailingWrapper {
		@include flexOverflowMask($color-neutral-background, 20px);

		display: flex;
		// flex-shrink: 100000 is big enough, so the title will not shrink
		flex-shrink: 100000;
	}

	&__titleTrailing {
		display: flex;
	}

	&__actions {
		align-self: stretch;
		display: none;
		flex-shrink: 0;

		@media #{breakpoint-s()} {
			display: flex;
		}
	}

	&__divider {
		align-self: stretch;
		height: auto !important;
		margin: $space-4xs $space-3xs;

		@media #{breakpoint-s()} {
			margin: $space-4xs $space-2xs;
		}

		&.-ds-mobileHidden {
			display: none;

			@media #{breakpoint-s()} {
				display: block;
			}
		}
	}

	&.-ds-borderNeutral {
		border-bottom-color: $color-neutral-border;
	}

	&.-ds-borderSuccess {
		border-bottom-color: $color-success-border;
	}

	&.-ds-borderFail {
		border-bottom-color: $color-fail-border;
	}

	&.-ds-borderWarning {
		border-bottom-color: $color-warning-border;
	}
}
</style>

<script lang="ts">
import DsIconButton from '../../Buttons/IconButton/IconButton.vue';
import DsDivider, { DIVIDER_PROMINENCES } from '../../Divider';
import DsDropdown, { DROPDOWN_PLACEMENTS } from '../../Dropdown';
import DsSkeleton from '../../Skeleton';
import DsTooltip, { TOOLTIP_PLACEMENTS } from '../../Tooltip';
import {
	ICON_BUTTON_COLORS,
	ICON_BUTTON_SIZES,
	ICON_BUTTON_STATES,
} from '../../Buttons/IconButton';
import { ICONS } from '../../Icons/Icon';
import {
	OVERLAY_HEADER_BORDER_COLORS,
	OVERLAY_HEADER_STATES,
	OverlayHeaderBorderColor,
} from './OverlayHeader.consts';
import { Value } from '../../../utils/type.utils';
import { isElementEditable } from '../../../utils/shortcut-keys';
import { toRaw } from 'vue';

import { defineComponent } from 'vue';

export default defineComponent({
	name: 'OverlayHeader',
	components: { DsIconButton, DsDivider, DsDropdown, DsSkeleton, DsTooltip },
	props: {
		title: {
			type: String,
			required: true,
		},
		shortTitle: {
			type: String,
			default: null,
		},
		eyebrowText: {
			type: String,
			default: null,
		},
		borderColor: {
			type: String,
			default: OVERLAY_HEADER_BORDER_COLORS.NEUTRAL_GHOST,
			validator: (value: OverlayHeaderBorderColor) =>
				Object.values(OVERLAY_HEADER_BORDER_COLORS).includes(value),
		},
		isTitleInteractive: {
			type: Boolean,
			default: false,
		},
		state: {
			type: String,
			default: OVERLAY_HEADER_STATES.DEFAULT,
			validator(value: Value<typeof OVERLAY_HEADER_STATES>) {
				return Object.values(OVERLAY_HEADER_STATES).includes(value);
			},
		},
		dropdownIcon: {
			type: Object,
			default: () => ICONS.FA_ELLIPSIS_VERTICAL,
			validator(icon) {
				return Object.values(ICONS).includes(toRaw(icon));
			},
		},
	},
	emits: {
		close: () => true,
		titleClick: () => true,
	},
	data() {
		return {
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICON_BUTTON_STATES: Object.freeze(ICON_BUTTON_STATES),
			ICONS: Object.freeze(ICONS),
			DIVIDER_PROMINENCES: Object.freeze(DIVIDER_PROMINENCES),
			OVERLAY_HEADER_BORDER_COLORS: Object.freeze(OVERLAY_HEADER_BORDER_COLORS),
			OVERLAY_HEADER_STATES: Object.freeze(OVERLAY_HEADER_STATES),
			DROPDOWN_PLACEMENTS: Object.freeze(DROPDOWN_PLACEMENTS),
			isDropdownOpen: false,
			TOOLTIP_PLACEMENTS: Object.freeze(TOOLTIP_PLACEMENTS),
		};
	},
	computed: {
		isLoading() {
			return this.state === OVERLAY_HEADER_STATES.LOADING;
		},
	},
	beforeUnmount() {
		window.removeEventListener('keydown', this.onKeydown);
	},
	mounted() {
		window.addEventListener('keydown', this.onKeydown);
	},
	methods: {
		onKeydown(e: KeyboardEvent) {
			if (isElementEditable(e.target as HTMLElement | null)) {
				return;
			}
			switch (e.key) {
				case 'q':
				case 'Q':
					e.stopPropagation();
					this.$emit('close');
					break;
			}
		},
		onTitleClick() {
			if (this.isTitleInteractive) {
				this.$emit('titleClick');
			}
		},
	},
});
</script>
