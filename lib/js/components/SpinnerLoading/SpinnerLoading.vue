<template>
	<div class="ds-spinnerLoading">
		<ds-icon :icon="ICONS.FAD_SPINNER_THIRD" :size="ICON_SIZES.SMALL" spinning />
		<div>{{ message || t('ds.globals.loading') }}</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../styles/settings/typography/tokens';
@import '../../../styles/settings/colors/tokens';
@import '../../../styles/settings/spacings';

.ds-spinnerLoading {
	@include text-m-default-regular();

	align-items: center;
	color: $color-neutral-text;
	display: inline-flex;
	gap: $space-2xs;
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
