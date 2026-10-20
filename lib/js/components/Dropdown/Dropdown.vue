<template>
	<span>
		<popover-root :open="open" @update:open="setOpen">
			<!--
				The slot's own element is the anchor. Reka's Primitive treats `as="template"` like
				`as-child`: no wrapper, the trigger's attrs and listeners go onto the slot's root. It is
				used instead of `as-child` because PopoverTrigger adds `type="button"` whenever `as` is
				"button" (its default, kept under `as-child`), and that attr would land on a `type` prop
				of the reference component (e.g. DsIconButton's) and override it.
			-->
			<popover-trigger as="template">
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
						'-ds-radiusBottom': radius === DROPDOWN_RADIUSES.BOTTOM,
						'-ds-radiusTop': radius === DROPDOWN_RADIUSES.TOP,
						'-ds-radiusBottom -ds-radiusTop': radius === DROPDOWN_RADIUSES.BOTH,
						'-ds-sameWidth': sameWidth,
					}"
					side="bottom"
					:align="align"
					:side-offset="SIDE_OFFSET"
					:collision-boundary="collisionBoundary ?? undefined"
					position-strategy="fixed"
					hide-when-detached
					@open-auto-focus="onAutoFocus"
					@close-auto-focus="onAutoFocus"
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

	display: flex;
	flex-direction: column;
	// Shrinks to the space left on its side of the reference, so a long panel scrolls inside
	// instead of running off the screen.
	max-height: var(--reka-popover-content-available-height);
	max-width: 100%;
	min-width: 128px;
	z-index: $z-index-top-layer;

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
		min-height: 0;
		overflow-y: auto;
	}
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui';

import {
	DROPDOWN_ALIGNS,
	DROPDOWN_RADIUSES,
	DropdownAlign,
	DropdownRadius,
} from './Dropdown.consts';
import { useFloatingPanelOpen } from '../../composables/useFloatingPanelOpen';

// $space-2: the gap between the reference and the panel.
const SIDE_OFFSET = 4;

const {
	appendToBody = false,
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
	radius?: DropdownRadius;
	align?: DropdownAlign;
	maxHeight?: string | null;
}>();

const open = defineModel<boolean>('open', { default: false });

const { setOpen, onAutoFocus } = useFloatingPanelOpen(open);

const scrollableWrapperStyles = computed(() => (maxHeight ? { maxHeight } : {}));

function toggle() {
	setOpen(!open.value);
}

function close() {
	setOpen(false);
}

defineExpose({ close });
</script>
