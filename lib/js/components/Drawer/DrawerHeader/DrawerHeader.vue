<template>
	<div class="ds-drawerHeader">
		<div class="ds-drawerHeader__titleWrapper">
			<ds-button
				v-if="isSecondLevel"
				:icon-left="ICONS.FA_CHEVRON_LEFT"
				:type="BUTTON_TYPES.TEXT"
				class="ds-drawerHeader__secondLevel"
				@click="$emit('backClicked')"
			>
				Wróć
			</ds-button>
			<div :class="{ '-ds-hidden': isSecondLevel }" class="ds-drawerHeader__firstLevel">
				<span
					v-if="eyebrowText"
					:class="{
						'-ds-isInteractive': isInteractiveEyebrow,
						'-ds-ellipsis': eyebrowEllipsis,
					}"
					class="ds-drawerHeader__eyebrow"
					@click="isInteractiveEyebrow && $emit('eyebrowClicked')"
				>
					{{ eyebrowText }}
				</span>
				<div class="ds-drawerHeader__title">
					<icon
						v-if="leftIcon"
						:icon="leftIcon"
						:size="ICON_SIZES.X_SMALL"
						class="ds-drawerHeader__leftIcon"
					/>
					<span
						v-if="title"
						class="ds-drawerHeader__titleText"
						:class="{ '-ds-ellipsis': titleEllipsis, [`-ds-${titleColor}`]: true }"
						:title="titleEllipsis ? title : undefined"
						>{{ title }}</span
					>
					<chip v-if="chipLabel" :label="chipLabel" />
					<div v-if="$slots.titleTrailing">
						<slot name="titleTrailing" />
					</div>
				</div>
			</div>
			<div v-if="$slots.actions" class="ds-drawerHeader__actions">
				<slot name="actions" />
			</div>
			<icon-button
				v-if="isClosable"
				:icon="ICONS.FA_XMARK"
				:size="ICON_BUTTON_SIZES.MEDIUM"
				:touchable="false"
				@click="$emit('close')"
			/>
		</div>
		<divider v-if="hasDivider" :size="DIVIDER_SIZES.L" :prominence="DIVIDER_PROMINENCES.WEAK" />
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/colors/tokens';

$minimal-drawer-header-height: 82px;

.ds-drawerHeader {
	display: flex;
	flex-direction: column;

	&__secondLevel {
		position: absolute !important; // it is required so firstLevel content does not make component wider when hidden, and important is needed so component does not change its width when button was clicked
	}

	&__leftIcon {
		color: $color-neutral-icon;
	}

	&__firstLevel {
		display: flex;
		flex-direction: column;
		min-width: 0;
		row-gap: $space-4xs;

		&.-ds-hidden {
			visibility: hidden; // by this we make sure that height does not change when switching to second level
		}
	}

	&__eyebrow {
		@include info-s-extensive-bold-uppercase;

		color: $color-neutral-text-weak;

		&.-ds-isInteractive:hover {
			color: $color-neutral-text-weak-hovered;
			cursor: pointer;
		}

		&.-ds-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	&__title {
		align-items: center;
		column-gap: $space-3xs;
		display: flex;
	}

	&__titleText {
		@include heading-s-default-bold-uppercase;

		&.-ds-neutralStrong {
			color: $color-neutral-text-strong;
		}

		&.-ds-neutralWeak {
			color: $color-neutral-text-weak;
		}

		&.-ds-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	&__titleWrapper {
		align-items: center;
		column-gap: $space-4xs;
		display: flex;
		justify-content: space-between;
		min-height: $minimal-drawer-header-height;
		padding: $space-m $space-xs $space-m $space-s;
	}

	&__actions {
		margin-left: auto;
	}
}
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import Button from '../../Buttons/Button/Button.vue';
import Divider from '../../Divider/Divider.vue';
import IconButton from '../../Buttons/IconButton/IconButton.vue';
import Chip from '../../Chip/Chip.vue';
import Icon from '../../Icons/Icon/Icon.vue';
import { BUTTON_TYPES } from '../../Buttons/Button';
import { ICON_SIZES, ICONS } from '../../Icons/Icon';
import { DIVIDER_PROMINENCES, DIVIDER_SIZES } from '../../Divider';
import { ICON_BUTTON_SIZES } from '../../Buttons/IconButton';
import { DRAWER_HEADER_TITLE_COLORS, DrawerHeaderTitleColor } from './DrawerHeader.consts';

export default defineComponent({
	name: 'DrawerHeader',
	components: {
		DsButton: Button,
		Divider,
		Icon,
		IconButton,
		Chip,
	},
	props: {
		eyebrowText: {
			type: String,
			default: null,
		},
		isInteractiveEyebrow: {
			type: Boolean,
			default: false,
		},
		eyebrowEllipsis: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: null,
		},
		titleEllipsis: {
			type: Boolean,
			default: false,
		},
		titleColor: {
			type: String as PropType<DrawerHeaderTitleColor>,
			default: DRAWER_HEADER_TITLE_COLORS.NEUTRAL_STRONG,
		},
		leftIcon: {
			type: [Object, null],
			default: null,
		},
		chipLabel: {
			type: String,
			default: null,
		},
		isClosable: {
			type: Boolean,
			default: true,
		},
		hasDivider: {
			type: Boolean,
			default: false,
		},
		isSecondLevel: {
			type: Boolean,
			default: false,
		},
	},
	// TODO fix me when touching this file
	// eslint-disable-next-line vue/require-emit-validator
	emits: ['backClicked', 'close', 'eyebrowClicked'],
	data() {
		return {
			BUTTON_TYPES: Object.freeze(BUTTON_TYPES),
			DIVIDER_SIZES: Object.freeze(DIVIDER_SIZES),
			DIVIDER_PROMINENCES: Object.freeze(DIVIDER_PROMINENCES),
			ICONS: Object.freeze(ICONS),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
});
</script>
