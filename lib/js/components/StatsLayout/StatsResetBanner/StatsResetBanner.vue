<template>
	<ds-banner
		:title="t('ds.statsLayout.statsResetBanner.title')"
		:button-text="t('ds.statsLayout.statsResetBanner.buttonText')"
		:color="BANNER_COLORS.NEUTRAL"
		@button-clicked="$emit('button-clicked')"
	>
		<template #defaultText>
			<span
				>{{ t('ds.statsLayout.statsResetBanner.message') }}
				<strong>{{ props.timeMarker }}</strong></span
			>
		</template>
		<template v-if="$slots.infoModalContent" #rightSlot>
			<ds-help-button :size="ICON_BUTTON_SIZES.SMALL" :modal-title="infoModalTitle">
				<template #modalContent>
					<slot name="infoModalContent" />
				</template>
			</ds-help-button>
		</template>
	</ds-banner>
</template>

<script setup lang="ts">
import { BANNER_COLORS } from '../../Banner/Banner.consts';
import DsBanner from '../../Banner/Banner.vue';
import DsHelpButton from '../../Buttons/HelpButton/HelpButton.vue';
import { useLegacyI18n } from '../../../composables/useLegacyI18n';
import { ICON_BUTTON_SIZES } from '../../Buttons/IconButton';

const { t } = useLegacyI18n();

const props = defineProps<{
	timeMarker: string;
	infoModalTitle?: string;
}>();

defineSlots<{
	infoModalContent?: () => any;
}>();

defineEmits<{
	(e: 'button-clicked'): void;
}>();
</script>
