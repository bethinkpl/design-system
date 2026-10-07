<template>
	<span ref="referenceElement">
		<popover-root :open="isOpen" @update:open="onOpenChange">
			<!-- The slot's own element is the anchor, as it was with vue-popperjs. -->
			<popover-trigger as-child>
				<slot name="reference" :is-opened="isOpen" />
			</popover-trigger>

			<popover-content
				class="ds-dropdown"
				:class="{
					'-ds-radiusBottom': radius === DROPDOWN_RADIUSES.BOTTOM,
					'-ds-radiusTop': radius === DROPDOWN_RADIUSES.TOP,
					'-ds-radiusBottom -ds-radiusTop': radius === DROPDOWN_RADIUSES.BOTH,
					'-ds-sameWidth': sameWidth,
				}"
				:side="side"
				:align="align"
				:side-offset="SIDE_OFFSET"
				:collision-boundary="collisionBoundary"
				position-strategy="absolute"
				@pointer-down-outside="onPointerDownOutside"
				@open-auto-focus="forceShow && $event.preventDefault()"
				@close-auto-focus="forceShow && $event.preventDefault()"
			>
				<div
					class="ds-dropdown__scrollableWrapper"
					:class="{ '-ds-heightLimited': !!maxHeight }"
					:style="scrollableWrapperStyles"
				>
					<slot :close="close" />
				</div>
			</popover-content>
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

	max-width: 100%;
	min-width: 128px;
	z-index: $z-index-floating-panel;

	&.-ds-radiusBottom {
		@include dropdownSurfaceRadiusBottom;
	}

	&.-ds-radiusTop {
		@include dropdownSurfaceRadiusTop;
	}

	&.-ds-sameWidth {
		width: var(--reka-popover-trigger-width);
	}

	&__scrollableWrapper {
		&.-ds-heightLimited {
			overflow-y: auto;
		}
	}
}
</style>

<script setup lang="ts">
import { computed, useTemplateRef } from 'vue';
import { PopoverContent, PopoverRoot, PopoverTrigger } from 'reka-ui';

import {
	DROPDOWN_PLACEMENTS,
	DROPDOWN_RADIUSES,
	DropdownPlacement,
	DropdownRadius,
} from './Dropdown.consts';
import { useFloatingPanelOpen } from '../../composables/useFloatingPanelOpen';
import { resolveCollisionBoundary, splitPlacement } from '../../utils/placement';

// Panels use `position-strategy="absolute"` (Reka defaults to fixed), as vue-popperjs did: a
// panel that runs past the bottom of the page extends it, so the page can scroll to it.
// $space-2: the gap between the reference and the panel.
const SIDE_OFFSET = 4;

const {
	boundariesSelector = null,
	forceShow = false,
	sameWidth = false,
	radius = DROPDOWN_RADIUSES.BOTH,
	placement = DROPDOWN_PLACEMENTS.BOTTOM_START,
	maxHeight = null,
} = defineProps<{
	boundariesSelector?: string | null;
	forceShow?: boolean;
	sameWidth?: boolean;
	radius?: DropdownRadius;
	placement?: DropdownPlacement;
	maxHeight?: string | null;
}>();

const emit = defineEmits<{
	'document-click': [];
	hide: [];
	show: [];
}>();

const referenceElement = useTemplateRef<HTMLElement>('referenceElement');

const { isOpen, setOpen, onPointerDownOutside } = useFloatingPanelOpen({
	forceShow: () => forceShow,
	referenceElement,
	onShow: () => emit('show'),
	onHide: () => emit('hide'),
	onDocumentClick: () => emit('document-click'),
});

const side = computed(() => splitPlacement(placement).side);
const align = computed(() => splitPlacement(placement).align);
const collisionBoundary = computed(() =>
	isOpen.value ? resolveCollisionBoundary(boundariesSelector) : undefined,
);
const scrollableWrapperStyles = computed(() => (maxHeight ? { maxHeight } : {}));

function onOpenChange(value: boolean) {
	setOpen(value);
}

function close() {
	setOpen(false);
}

defineExpose({ close });
</script>
