<template>
	<primitive :ref="forwardRef" as-child v-bind="$attrs">
		<slot />
	</primitive>
</template>

<script setup lang="ts">
import { Primitive, useForwardExpose } from 'reka-ui';

defineOptions({ inheritAttrs: false });

// PopoverTrigger always supplies a native `type`, including undefined when `as`
// is a component. Consume it here: even an undefined attr overrides an explicit
// DS button type when a reference wrapper falls through to its root component.
// Keep the reference's own type, listeners and geometry via Reka's public Primitive.
defineProps<{ type?: string }>();

const { forwardRef } = useForwardExpose();
</script>
