<template>
	<div
		class="ds-overlayHeader"
		:class="{
			'-borderNeutral': borderColor === OVERLAY_HEADER_BORDER_COLORS.NEUTRAL,
			'-borderSuccess': borderColor === OVERLAY_HEADER_BORDER_COLORS.SUCCESS,
			'-borderFail': borderColor === OVERLAY_HEADER_BORDER_COLORS.FAIL,
			'-borderWarning': borderColor === OVERLAY_HEADER_BORDER_COLORS.WARNING,
		}"
	>
		<div v-if="$slots.accessory" class="ds-overlayHeader__accessory">
			<slot name="accessory" />
		</div>
		<div class="ds-overlayHeader__content">
			<div v-if="eyebrowText" class="ds-overlayHeader__eyebrow">
				<div class="ds-overlayHeader__eyebrowText">
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
				<div class="ds-overlayHeader__title">
					{{ title }}
				</div>
				<div v-if="$slots.titleTrailing" class="ds-overlayHeader__titleTrailing">
					<slot name="titleTrailing" />
				</div>
			</div>
		</div>

		<template v-if="$slots.actions">
			<div class="ds-overlayHeader__actions">
				<slot name="actions" />
			</div>
			<ds-divider
				class="ds-overlayHeader__divider"
				:prominence="DIVIDER_PROMINENCES.STRONG"
				is-vertical
			/>
		</template>
		<template v-if="$slots.dropdown">
			<ds-dropdown boundaries-selector="body">
				<template #reference>
					<icon-button
						:icon="ICONS.FA_ELLIPSIS_VERTICAL"
						:size="ICON_BUTTON_SIZES.MEDIUM"
						:color="ICON_BUTTON_COLORS.NEUTRAL"
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
		<icon-button
			:icon="ICONS.FA_XMARK"
			:size="ICON_BUTTON_SIZES.MEDIUM"
			:color="ICON_BUTTON_COLORS.NEUTRAL"
			@click.native="$emit('close')"
		/>
	</div>
</template>

<style scoped lang="scss">
// TODO clean imports
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/media-queries';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/shadows';
@import '../../../styles/settings/radiuses';
@import '../../../styles/mixins/layout';

.ds-overlayHeader {
	align-items: center;
	background: $color-neutral-background;
	border-bottom: 2px solid $color-neutral-border-ghost;
	display: flex;
	padding: $space-xs $space-xxs $space-xs 0;

	&__accessory {
		align-self: stretch;
		margin-left: $space-xs;
	}

	&__content {
		flex-grow: 1;
		margin-left: $space-s;
	}

	&__eyebrow {
		align-items: center;
		display: flex;
		margin-bottom: $space-xxs;
	}

	&__eyebrowText {
		@include info-s-extensive-bold-uppercase;

		color: $color-neutral-text;
	}

	&__eyebrowAccessory {
		margin-left: $space-xxs;
	}

	&__main {
		align-items: center;
		display: flex;
	}

	&__titleLeading {
		margin-right: $space-xxs;
	}

	&__title {
		@include heading-m-default-bold;

		color: $color-neutral-text-heavy;
	}

	&__titleTrailing {
		margin-left: $space-xxs;
	}

	&__actions {
		align-self: stretch;
	}

	&__divider {
		align-self: stretch;
		height: auto !important;
		margin: $space-xxxxs $space-xxs;
	}

	&.-borderNeutral {
		border-bottom-color: $color-neutral-border;
	}

	&.-borderSuccess {
		border-bottom-color: $color-success-border;
	}

	&.-borderFail {
		border-bottom-color: $color-fail-border;
	}

	&.-borderWarning {
		border-bottom-color: $color-warning-border;
	}
}
</style>

<script lang="ts">
import IconButton from '../Buttons/IconButton/IconButton.vue';
import DsDivider, { DIVIDER_PROMINENCES, DIVIDER_SIZES } from '../Divider';
import DsDropdown from '../Dropdown';
import { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../Buttons/IconButton';
import { ICONS } from '../Icons/Icon';
import { OVERLAY_HEADER_BORDER_COLORS } from './OverlayHeader.consts';

export default {
	name: 'OverlayHeader',
	components: { IconButton, DsDivider, DsDropdown },
	props: {
		title: {
			type: String,
			required: true,
		},
		eyebrowText: {
			type: String,
			default: null,
		},
		borderColor: {
			type: String,
			default: OVERLAY_HEADER_BORDER_COLORS.NEUTRAL_GHOST,
			validator: (value) => Object.values(OVERLAY_HEADER_BORDER_COLORS).includes(value),
		},
	},
	data() {
		return {
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICONS: Object.freeze(ICONS),
			DIVIDER_PROMINENCES: Object.freeze(DIVIDER_PROMINENCES),
			OVERLAY_HEADER_BORDER_COLORS: Object.freeze(OVERLAY_HEADER_BORDER_COLORS),
		};
	},
};
</script>
