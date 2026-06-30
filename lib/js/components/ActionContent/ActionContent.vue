<template>
	<div class="ds-actionContent">
		<div class="ds-actionContent__content">
			<ds-feature-icon
				v-if="icon"
				class="ds-actionContent__icon"
				:icon="icon"
				:color="FEATURE_ICON_COLOR.PRIMARY"
				:size="FEATURE_ICON_SIZES.MEDIUM"
				double-background
			/>
			<ds-text-group
				class="ds-actionContent__text"
				:eyebrow-text="null"
				:main-text="mainText"
				:supporting-text="supportingText"
				:size="TEXT_GROUP_SIZES.LARGE"
				:align="TEXT_GROUP_ALIGNS.CENTER"
				:main-text-color="TEXT_GROUP_MAIN_TEXT_COLORS.PRIMARY"
				:is-interactive="false"
			/>
		</div>
		<div class="ds-actionContent__actions" :class="{ '-ds-vertical': isActionVertical }">
			<slot name="actions">
				<ds-button
					:color="BUTTON_COLORS.PRIMARY"
					:type="BUTTON_TYPES.FILLED"
					:size="BUTTON_SIZES.SMALL"
					:radius="BUTTON_RADIUSES.ROUNDED"
					:icon-left="buttonIcon"
					@click="$emit('button-clicked')"
					>{{ buttonLabel }}</ds-button
				>
			</slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../../styles/settings/spacings';

.ds-actionContent {
	display: flex;
	flex-direction: column;
	gap: $space-8;
	width: 100%;

	&__content {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: $space-4;
	}

	&__actions {
		display: flex;
		gap: $space-8;
		justify-content: center;

		&.-ds-vertical {
			align-items: stretch;
			flex-direction: column;
		}
	}
}
</style>

<script setup lang="ts">
import DsFeatureIcon from '../Icons/FeatureIcon';
import { FEATURE_ICON_COLOR, FEATURE_ICON_SIZES } from '../Icons/FeatureIcon/FeatureIcon.consts';
import DsTextGroup from '../TextGroup/TextGroup.vue';
import {
	TEXT_GROUP_ALIGNS,
	TEXT_GROUP_MAIN_TEXT_COLORS,
	TEXT_GROUP_SIZES,
} from '../TextGroup/TextGroup.consts';
import DsButton, { BUTTON_RADIUSES } from '../Buttons/Button';
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES } from '../Buttons/Button/Button.consts';
import { IconItem } from '../Icons/Icon';

const {
	icon = null,
	mainText = null,
	supportingText = null,
	buttonLabel,
	buttonIcon = null,
	isActionVertical = false,
} = defineProps<{
	icon?: IconItem | null;
	mainText?: string | null;
	supportingText?: string | null;
	buttonLabel?: string;
	buttonIcon?: IconItem | null;
	isActionVertical?: boolean;
}>();

defineEmits<{
	(e: 'button-clicked'): void;
}>();

defineSlots<{
	actions?: () => any;
}>();
</script>
