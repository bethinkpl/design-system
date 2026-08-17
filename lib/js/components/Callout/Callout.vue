<template>
	<div
		class="ds-callout"
		:class="{
			'-ds-layout-vertical': layout === CALLOUT_LAYOUTS.VERTICAL,
			'-ds-layout-horizontal': layout === CALLOUT_LAYOUTS.HORIZONTAL,
			'-ds-actions-vertical': isActionVertical,
		}"
	>
		<div class="ds-callout__content">
			<ds-feature-icon
				class="ds-callout__icon"
				:icon="icon"
				:color="color"
				:size="featureIconSize"
				double-background
			/>
			<ds-text-group
				class="ds-callout__text"
				:eyebrow-text="eyebrowText"
				:is-eyebrow-text-uppercase="false"
				:main-text="mainText"
				:supporting-text="supportingText"
				:size="textGroupSize"
				:align="textGroupAlign"
				:main-text-color="textGroupMainTextColor"
				:is-interactive="false"
			/>
		</div>
		<div v-if="$slots.actions || buttonLabel" class="ds-callout__actions">
			<slot name="actions">
				<ds-button
					:color="buttonColor"
					:type="buttonType"
					:size="BUTTON_SIZES.SMALL"
					:radius="BUTTON_RADIUSES.ROUNDED"
					:icon-left="buttonIcon"
					@click="$emit('button-clicked', $event)"
					>{{ buttonLabel }}</ds-button
				>
			</slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/spacings';

.ds-callout {
	$self: &;

	display: flex;
	flex-direction: column;
	gap: $space-8;
	width: 100%;

	&.-ds-layout-horizontal:not(.-ds-actions-vertical) {
		align-items: center;
		flex-direction: row;
	}

	&__content {
		display: flex;

		#{$self}.-ds-layout-vertical & {
			align-items: center;
			flex-direction: column;
			gap: $space-4;
		}

		#{$self}.-ds-layout-horizontal & {
			align-items: center;
			flex: 1 1 auto;
			gap: $space-6;
			min-width: 0;
		}
	}

	&__actions {
		display: flex;
		gap: $space-8;

		#{$self}.-ds-layout-vertical & {
			justify-content: center;
			width: 100%;
		}

		#{$self}.-ds-actions-vertical & {
			align-items: stretch;
			flex-direction: column;
			width: 100%;
		}
	}
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import DsFeatureIcon from '../Icons/FeatureIcon';
import { FEATURE_ICON_SIZES } from '../Icons/FeatureIcon/FeatureIcon.consts';
import DsTextGroup from '../TextGroup/TextGroup.vue';
import { TEXT_GROUP_ALIGNS, TEXT_GROUP_SIZES } from '../TextGroup/TextGroup.consts';
import DsButton, { BUTTON_RADIUSES } from '../Buttons/Button';
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES } from '../Buttons/Button/Button.consts';
import { IconItem } from '../Icons/Icon';
import {
	CALLOUT_COLORS,
	CALLOUT_LAYOUTS,
	CALLOUT_MAIN_TEXT_COLORS,
	CALLOUT_SIZES,
	CalloutColor,
	CalloutLayout,
	CalloutMainTextColor,
	CalloutSize,
} from './Callout.consts';

const {
	layout = CALLOUT_LAYOUTS.VERTICAL,
	size = CALLOUT_SIZES.MEDIUM,
	color = CALLOUT_COLORS.PRIMARY,
	eyebrowText = null,
	mainText = null,
	supportingText = null,
	mainTextColor = CALLOUT_MAIN_TEXT_COLORS.PRIMARY,
	buttonLabel = null,
	buttonIcon = null,
	isActionVertical = false,
} = defineProps<{
	icon: IconItem;
	layout?: CalloutLayout;
	size?: CalloutSize;
	color?: CalloutColor;
	eyebrowText?: string | null;
	mainText?: string | null;
	supportingText?: string | null;
	mainTextColor?: CalloutMainTextColor;
	buttonLabel?: string | null;
	buttonIcon?: IconItem | null;
	isActionVertical?: boolean;
}>();

defineEmits<{
	'button-clicked': [e: Event];
}>();

defineSlots<{
	actions?: () => any;
}>();

const featureIconSize = computed(() =>
	size === CALLOUT_SIZES.LARGE ? FEATURE_ICON_SIZES.LARGE : FEATURE_ICON_SIZES.MEDIUM,
);

const textGroupSize = computed(() =>
	size === CALLOUT_SIZES.SMALL ? TEXT_GROUP_SIZES.MEDIUM : TEXT_GROUP_SIZES.LARGE,
);

const textGroupAlign = computed(() =>
	layout === CALLOUT_LAYOUTS.VERTICAL ? TEXT_GROUP_ALIGNS.CENTER : TEXT_GROUP_ALIGNS.LEFT,
);

const isDanger = computed(() => color === CALLOUT_COLORS.DANGER);

const buttonColor = computed(() => (isDanger.value ? BUTTON_COLORS.DANGER : BUTTON_COLORS.PRIMARY));

const buttonType = computed(() => (isDanger.value ? BUTTON_TYPES.OUTLINED : BUTTON_TYPES.FILLED));

// Danger is always paired with neutral text, so the prop is not honoured for it.
const textGroupMainTextColor = computed(() =>
	isDanger.value ? CALLOUT_MAIN_TEXT_COLORS.NEUTRAL : mainTextColor,
);
</script>
