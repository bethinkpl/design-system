<template>
	<primitive :ref="forwardRef" as-child v-bind="$attrs">
		<slot />
	</primitive>
</template>

<script setup lang="ts">
import { Primitive, useForwardExpose } from 'reka-ui';

defineOptions({ inheritAttrs: false });

// PopoverTrigger always supplies a native `type`, including undefined when `as`
// is a component. Several DS components (DsButton, DsIconButton, DsRichListItem,
// DsSelectionTile, ...) use a `type` prop for their visual variant, and even an
// undefined attr would replace it, e.g. `<ds-button type="outlined">` would render
// with the default type. Consume it here, and keep the reference's own type,
// listeners and geometry via Reka's public Primitive.
//
// Once those components rename their `type` prop (e.g. to `variant`), this wrapper
// can likely go and Dropdown/Popover can use `<popover-trigger as-child>` directly.
// The "should not override a type prop" tests in Dropdown.spec.ts and
// Popover.spec.ts will tell whether it is safe to remove.
defineProps<{ type?: string }>();

const { forwardRef } = useForwardExpose();
</script>
