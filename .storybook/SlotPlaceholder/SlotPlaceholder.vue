<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<div
		:class="[
			'ds-slotPlaceholder',
			{
				'-ds-small': size === SLOT_PLACEHOLDER_SIZES.SMALL,
			},
		]"
		>{{ label || 'Slot' }}</div
	>
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
	padding: $space-4xs $space-2xs;

	&.-ds-small {
		@include label-s-default-bold();
		padding: $space-5xs $space-4xs;
	}
}
</style>
<script lang="ts">
export const SLOT_PLACEHOLDER_SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
} as const;
</script>

<script setup lang="ts">
const { size = SLOT_PLACEHOLDER_SIZES.MEDIUM } = defineProps<{
	label?: string;
	size: string;
}>();
</script>
