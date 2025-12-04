<template>
	<div class="spinnerLoading">
		<ds-icon :icon="ICONS.FAD_SPINNER_THIRD" :size="ICON_SIZES.SMALL" spinning />
		<div class="spinnerLoading__message">{{ message || t('ds.globals.loading') }}</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';

.spinnerLoading {
	@include text-m-default-regular();

	display: inline-flex;
	align-items: center;
	gap: $space-2xs;
	color: $color-neutral-text;
}
</style>

<script setup lang="ts">
import { ICON_SIZES, ICONS } from '../Icons/Icon/Icon.consts';
import DsIcon from '../Icons/Icon/Icon.vue';
import { useLegacyI18n } from '../../composables/useLegacyI18n';

const { t } = useLegacyI18n();

const { message } = defineProps<{
	message?: string;
}>();
</script>
