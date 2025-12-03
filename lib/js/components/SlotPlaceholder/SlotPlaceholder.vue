<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<div class="slotPlaceholder">Slot placeholder</div>
</template>

<style lang="scss" scoped>
// this is a placeholder component for demo purposes only in the design system
@import '../../../../lib/styles/settings/spacings';
.slotPlaceholder {
	display: flex;
	padding: $space-4xs $space-2xs;
	align-items: center;
	align-self: stretch;
	background: rgba(226, 40, 189, 0.1);
	color: #e228bd;
	font-family: Lato;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 28px; /* 140% */
}
</style>
