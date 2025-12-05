<template>
	<ds-banner
		:title="t('ds.statsLayout.statsErrorBanner.title')"
		:button-text="t('ds.statsLayout.statsErrorBanner.buttonText')"
		:icon="ICONS.FA_CIRCLE_EXCLAMATION"
		:color="BANNER_COLORS.DANGER"
		@button-clicked="$emit('button-clicked')"
	>
		<template #defaultText> {{ t('ds.statsLayout.statsErrorBanner.message') }} </template>
	</ds-banner>
</template>

<script setup lang="ts">
import { ICONS } from '../../Icons/Icon';
import { BANNER_COLORS } from '../../Banner/Banner.consts';
import DsBanner from '../../Banner/Banner.vue';
import { useLegacyI18n } from '../../../composables/useLegacyI18n';

const { t } = useLegacyI18n();

defineEmits<{
	(e: 'button-clicked'): void;
}>();
</script>
