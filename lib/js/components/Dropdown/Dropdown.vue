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
					:side-flip="sideFlip"
					:side-offset="SIDE_OFFSET"
					:collision-boundary="collisionBoundary ?? undefined"
					position-strategy="absolute"
					:hide-when-detached="hideWhenDetached"
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
	// Shrinks to the space left beside the reference, so a wide panel scrolls inside instead of
	// running off the screen.
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
	sideFlip = true,
	hideWhenDetached = false,
} = defineProps<{
	appendToBody?: boolean;
	// The element the panel stays within; the viewport when not set.
	collisionBoundary?: Element | null;
	sameWidth?: boolean;
	// Single rounds the edge away from the trigger, following the actual flipped side.
	radius?: DropdownRadius;
	align?: DropdownAlign;
	maxHeight?: string | null;
	// Whether the panel may move to the opposite side when it doesn't fit. It still shifts along
	// its side to stay within the boundary either way. Turn it off for a panel that can be taller
	// than the space on both sides of the reference (a long list, a large max height, or a
	// reference near the top of the page): flipped above, its top would run past the page start,
	// where scrolling can't reach it. Unflipped, it stays below and the page scrolls to reveal it.
	sideFlip?: boolean;
	// On: the panel hides when the reference leaves the boundary (the viewport by default; a
	// scrolling container counts only when passed as collisionBoundary).
	// Off: it keeps following the reference, also out of view.
	hideWhenDetached?: boolean;
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
