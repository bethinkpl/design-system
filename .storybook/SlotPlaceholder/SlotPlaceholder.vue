<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<div class="ds-slotPlaceholder">{{ label || 'Slot' }}</div>
</template>

<style lang="scss" scoped>
// this is a placeholder component for demo purposes only in the design system
@import '../../lib/styles/settings/spacings';
@import '../../lib/styles/settings/typography/tokens';

.ds-slotPlaceholder {
	@include label-2xl-default-bold();

	align-items: center;
	align-self: stretch;
	background: rgba(226, 40, 189, 0.1);
	color: #e228bd;
	display: flex;
	line-height: 28px;
	padding: $space-4xs $space-2xs;
}
</style>

<script setup lang="ts">
defineProps<{
	label?: string;
}>();
</script>
