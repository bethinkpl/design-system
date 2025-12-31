<template>
	<ul
		:class="[
			'ds-menu',
			{
				'-ds-extensive': layout === MENU_LAYOUTS.EXTENSIVE,
			},
		]"
	>
		<slot />
	</ul>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';

.ds-menu {
	display: flex;
	flex-direction: column;
	gap: $space-5xs;
	margin: 0;
	padding: 0;

	&.-ds-extensive {
		gap: $space-2xs;
	}
}
</style>

<script setup lang="ts">
import { MENU_LAYOUT_INJECTION_KEY, MENU_LAYOUTS, MenuLayout } from './Menu.consts';
import { computed, inject, provide } from 'vue';

const props = withDefaults(
	defineProps<{
		layout?: MenuLayout | null;
	}>(),
	{
		layout: null,
	},
);

const slots = defineSlots<{
	default?: () => any;
}>();

const layout = computed(() => {
	if (props.layout !== null) {
		return props.layout;
	}

	const injectedLayout = inject(MENU_LAYOUT_INJECTION_KEY, null);
	if (injectedLayout !== null) {
		return injectedLayout;
	}

	return MENU_LAYOUTS.DEFAULT;
});

provide(MENU_LAYOUT_INJECTION_KEY, layout.value);
</script>
