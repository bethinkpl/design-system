<template>
	<div class="pill" :class="{ '-x-small': size === PILL_SIZES.X_SMALL }">
		<icon
			v-if="leftIcon"
			class="pill__leftIcon"
			:icon="leftIcon"
			:size="size === PILL_SIZES.X_SMALL ? ICON_SIZES.XXX_SMALL : ICON_SIZES.XX_SMALL"
		/>
		<span class="pill__label">{{ label }}</span>
		<icon-button
			v-if="hasDelete"
			:touchable="false"
			:size="ICON_BUTTON_SIZES.XX_SMALL"
			:icon="ICONS.FA_XMARK"
			:elevation="BUTTON_ELEVATIONS.X_SMALL"
		/>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/typography';
@import '../../../styles/settings/spacings';
@import '../../../styles/settings/colors/tokens';

.pill {
	$self: &;

	align-items: center;
	background-color: $color-primary-background-strong;
	border-radius: 100px;
	display: inline-flex;
	padding: $space-xxxxxs $space-xxxxxs $space-xxxxxs $space-xxs;

	&__label {
		@include textInfoM;

		font-weight: bold;
		margin: $space-xxxxxs $space-xxxs $space-xxxxxs 0;
	}

	&__leftIcon {
		margin-right: $space-xxxxs;
	}

	&.-x-small {
		padding-left: $space-xxxs;

		#{$self}__leftIcon {
			margin-right: $space-xxxxxs;
		}

		#{$self}__label {
			@include textInfoS;

			margin: 0 $space-xxxxs 0 0;
		}
	}
}
</style>

<script lang="ts">
import { PILL_SIZES } from './Pill.consts';
import IconButton, { ICON_BUTTON_SIZES } from '../Buttons/IconButton';
import Icon, { ICONS, ICON_SIZES } from '../Icon';
import { BUTTON_ELEVATIONS } from '../Buttons/Button';
import { VueConstructor } from 'vue';

export default {
	name: 'Pill',
	components: { Icon, IconButton },
	props: {
		label: {
			type: String,
			required: true,
		},
		leftIcon: {
			type: Object,
			default: null,
			validate(icon: VueConstructor) {
				return Object.values(ICONS).includes(icon);
			},
		},
		size: {
			type: String,
			default: PILL_SIZES.SMALL,
			validate(size) {
				return Object.values(PILL_SIZES).includes(size);
			},
		},
		hasDelete: {
			type: Boolean,
			default: false,
		},
	},
	created() {
		this.ICONS = ICONS;
		this.BUTTON_ELEVATIONS = BUTTON_ELEVATIONS;
		this.ICON_BUTTON_SIZES = ICON_BUTTON_SIZES;
		this.ICON_SIZES = ICON_SIZES;
		this.PILL_SIZES = PILL_SIZES;
	},
};
</script>
