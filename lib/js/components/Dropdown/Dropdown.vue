<template>
	<span>
		<popover-root v-model:open="open">
			<popover-trigger :as="PopoverTriggerReference">
				<!--
					`toggle` is for controls inside the reference that stop their click from reaching it,
					e.g. DsRichListItem's `actions` slot.
				-->
				<slot name="reference" :is-open="open" :toggle="toggle" />
			</popover-trigger>

			<popover-portal :disabled="!appendToBody">
				<popover-content
					class="ds-dropdown"
					:class="{
						'-ds-radiusSingle': radius === DROPDOWN_RADIUSES.SINGLE,
						'-ds-radiusBoth': radius === DROPDOWN_RADIUSES.BOTH,
						'-ds-sameWidth': sameWidth,
					}"
					side="bottom"
					:align="align"
					:side-offset="SIDE_OFFSET"
					:collision-boundary="collisionBoundary ?? undefined"
					position-strategy="fixed"
					hide-when-detached
				>
					<div class="ds-dropdown__scrollableWrapper" :style="scrollableWrapperStyles">
						<slot :close="close" />
					</div>
				</popover-content>
			</popover-portal>
		</popover-root>
	</span>
</template>

<!--
	Styled unscoped on purpose: PopoverContent renders the panel through Presence's slot rather than
	as its root, so Vue never forwards this component's scope id to it and a scoped rule would not
	match. Same approach as SelectField.vue.
-->
<style lang="scss">
@import '../../../../lib/styles/settings/z-indexes';
@import '../../../../lib/styles/mixins/dropdown-surface';

.ds-dropdown {
	@include dropdownSurface;

	border-radius: 0;
	display: flex;
	flex-direction: column;
	// Shrinks to the space left beside the reference, so a long or wide panel scrolls inside
	// instead of running off the screen.
	max-height: var(--reka-popover-content-available-height);
	max-width: var(--reka-popover-content-available-width);
	min-width: 128px;
	z-index: $z-index-top-layer;

	&.-ds-radiusBoth,
	&.-ds-radiusSingle[data-side='bottom'] {
		@include dropdownSurfaceRadiusBottom;
	}

	&.-ds-radiusBoth,
	&.-ds-radiusSingle[data-side='top'] {
		@include dropdownSurfaceRadiusTop;
	}

	&.-ds-sameWidth {
		width: var(--reka-popover-trigger-width);
	}

	&__scrollableWrapper {
		min-height: 0;
		overflow-y: auto;
	}
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui';

import PopoverTriggerReference from '../shared/PopoverTriggerReference.vue';

import {
	DROPDOWN_ALIGNS,
	DROPDOWN_RADIUSES,
	DropdownAlign,
	DropdownRadius,
} from './Dropdown.consts';

// $space-2: the gap between the reference and the panel.
const SIDE_OFFSET = 4;

const {
	appendToBody = true,
	collisionBoundary = null,
	sameWidth = false,
	radius = DROPDOWN_RADIUSES.BOTH,
	align = DROPDOWN_ALIGNS.START,
	maxHeight = null,
} = defineProps<{
	appendToBody?: boolean;
	// The element the panel stays within; the viewport when not set.
	collisionBoundary?: Element | null;
	sameWidth?: boolean;
	// Single rounds the edge away from the trigger, following the actual flipped side.
	radius?: DropdownRadius;
	align?: DropdownAlign;
	maxHeight?: string | null;
}>();

const open = defineModel<boolean>('open', { default: false });

const scrollableWrapperStyles = computed(() => (maxHeight ? { maxHeight } : {}));

function toggle() {
	open.value = !open.value;
}

function close() {
	open.value = false;
}

defineExpose({ close });
</script>
