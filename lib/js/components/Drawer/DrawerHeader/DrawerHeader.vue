<template>
	<div class="drawerHeader">
		<div class="drawerHeader__titleWrapper">
			<ds-button
				v-if="isSecondLevel"
				:icon-left="ICONS.FA_CHEVRON_LEFT"
				:type="BUTTON_TYPES.TEXT"
				class="drawerHeader__secondLevel"
			>
				Wróć
			</ds-button>
			<div :class="{ '-hidden': isSecondLevel }" class="drawerHeader__firstLevel">
				<span
					v-if="eyebrowText"
					:class="{
						'-isInteractive': isInteractiveEyebrow,
						'-ellipsis': eyebrowEllipsis,
					}"
					class="drawerHeader__eyebrow"
					@click="isInteractiveEyebrow && $emit('eyebrowClicked')"
				>
					{{ eyebrowText }}
				</span>
				<div class="drawerHeader__title" :title="title">
					<icon
						v-if="leftIcon"
						:icon="leftIcon"
						:size="ICON_SIZES.X_SMALL"
						class="drawerHeader__leftIcon"
					/>
					<span v-if="title" :class="{ '-ellipsis': titleEllipsis }">{{ title }}</span>
					<pill v-if="pillLabel" :label="pillLabel" />
				</div>
			</div>
			<icon-button
				v-if="isClosable"
				:icon="ICONS.FA_XMARK"
				:size="ICON_BUTTON_SIZES.MEDIUM"
				:touchable="false"
				@click="$emit('close')"
			/>
		</div>
		<divider v-if="hasDivider" :size="DIVIDER_SIZES.L" />
	</div>
</template>

<style lang="scss" scoped>
@import '../../../../styles/settings/spacings';
@import '../../../../styles/settings/typography/tokens';
@import '../../../../styles/settings/colors/tokens';

$minimal-drawer-header-height: 82px;

.drawerHeader {
	display: flex;
	flex-direction: column;

	&__secondLevel {
		position: absolute !important; //it is required so firstLevel content does not make component wider when hidden, and important is needed so component does not change its width when button was clicked
	}

	&__leftIcon {
		color: $color-neutral-icon;
	}

	&__firstLevel {
		display: flex;
		flex-direction: column;
		min-width: 0;
		row-gap: $space-xxxxs;

		&.-hidden {
			visibility: hidden; //by this we make sure that height does not change when switching to second level
		}
	}

	&__eyebrow {
		@include info-s-extensive-bold-uppercase;

		color: $color-neutral-text-weak;

		&.-isInteractive:hover {
			color: $color-neutral-text;
			cursor: pointer;
		}

		&.-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	&__title {
		@include heading-s-default-bold-uppercase;

		align-items: center;
		color: $color-neutral-text-strong;
		column-gap: $space-xxxs;
		display: flex;

		.-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	&__titleWrapper {
		align-items: center;
		column-gap: $space-xxxxs;
		display: flex;
		justify-content: space-between;
		min-height: $minimal-drawer-header-height;
		padding: $space-m $space-xs $space-m $space-s;
	}
}
</style>

<script>
import Button from '../../Buttons/Button/Button.vue';
import Divider from '../../Divider/Divider.vue';
import IconButton from '../../Buttons/IconButton/IconButton.vue';
import Pill from '../../Pill/Pill.vue';
import Icon from '../../Icons/Icon/Icon.vue';
import { BUTTON_TYPES } from '../../Buttons/Button';
import { ICONS, ICON_SIZES } from '../../Icons/Icon';
import { DIVIDER_SIZES } from '../../Divider';
import { ICON_BUTTON_SIZES } from '../../Buttons/IconButton';

export default {
	name: 'DrawerHeader',
	components: {
		DsButton: Button,
		Divider,
		Icon,
		IconButton,
		Pill,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		eyebrowText: {
			type: String,
			default: null,
		},
		pillLabel: {
			type: String,
			default: null,
		},
		leftIcon: {
			type: [Object, null],
			default: null,
		},
		isClosable: {
			type: Boolean,
			default: true,
		},
		isSecondLevel: {
			type: Boolean,
			default: false,
		},
		isInteractiveEyebrow: {
			type: Boolean,
			default: false,
		},
		hasDivider: {
			type: Boolean,
			default: false,
		},
		eyebrowEllipsis: {
			type: Boolean,
			default: false,
		},
		titleEllipsis: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['close', 'eyebrowClicked'],
	data() {
		return {
			BUTTON_TYPES: Object.freeze(BUTTON_TYPES),
			DIVIDER_SIZES: Object.freeze(DIVIDER_SIZES),
			ICONS: Object.freeze(ICONS),
			ICON_BUTTON_SIZES: Object.freeze(ICON_BUTTON_SIZES),
			ICON_SIZES: Object.freeze(ICON_SIZES),
		};
	},
};
</script>
