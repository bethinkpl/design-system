<template>
	<div class="ds-overlayHeader">
		<div v-if="$slots.accessory" class="ds-overlayHeader__accessory">
			<slot name="accessory" />
		</div>
		<div class="ds-overlayHeader__content">
			<div v-if="eyebrowText" class="ds-overlayHeader__eyebrow">
				{{ eyebrowText }}
				<div v-if="$slots.eyebrowAccessory">
					<slot name="eyebrowAccessory"></slot>
				</div>
			</div>
			<div class="ds-overlayHeader__main">
				<div v-if="$slots.leading">
					<slot name="leading" />
				</div>
				{{ title }}
				<div v-if="$slots.trailing">
					<slot name="trailing" />
				</div>
			</div>
		</div>

		<template v-if="$slots.actions">
			<slot name="actions" />
			<ds-divider :prominence="DIVIDER_PROMINENCES.STRONG" is-vertical />
		</template>
		<template v-if="$slots.dropdownMenu">
			<ds-dropdown boundaries-selector="body">
				<template #reference>
					<icon-button
						:icon="ICONS.FA_ELLIPSIS_VERTICAL"
						:size="ICON_BUTTON_SIZES.MEDIUM"
						:color="ICON_BUTTON_COLORS.NEUTRAL"
					/>
				</template>
				<template #default="{ close }">
					<slot name="dropdownMenu" :close="close" />
				</template>
			</ds-dropdown>
			<ds-divider :prominence="DIVIDER_PROMINENCES.STRONG" is-vertical />
		</template>
		<icon-button
			:icon="ICONS.FA_XMARK"
			:size="ICON_BUTTON_SIZES.MEDIUM"
			:color="ICON_BUTTON_COLORS.NEUTRAL"
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
	display: flex;

	&__content {
		flex-grow: 1;
	}

	&__eyebrow {
		display: flex;
	}

	&__main {
		display: flex;
	}
}

// TODO background
</style>

<script lang="ts">
import IconButton from '../Buttons/IconButton/IconButton.vue';
import DsDivider, { DIVIDER_PROMINENCES } from '../Divider';
import DsDropdown from '../Dropdown';
import { ICON_BUTTON_COLORS, ICON_BUTTON_SIZES } from '../Buttons/IconButton';
import { ICONS } from '../Icons/Icon';

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
	},
	data() {
		return {
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICON_BUTTON_COLORS: Object.freeze(ICON_BUTTON_COLORS),
			ICONS: Object.freeze(ICONS),
			DIVIDER_PROMINENCES: Object.freeze(DIVIDER_PROMINENCES),
		};
	},
};
</script>
