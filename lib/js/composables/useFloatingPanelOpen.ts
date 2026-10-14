import { computed, ComputedRef, ref, Ref, watch } from 'vue';

interface FloatingPanelOpenOptions {
	// While true the panel stays open: closing it from inside (outside click, Escape, trigger
	// toggle) is ignored and only `document-click` is reported, so the consumer decides.
	forceShow: () => boolean;
	// Element wrapping the panel's reference; pointer-downs inside it aren't outside clicks.
	referenceElement: Ref<HTMLElement | null>;
	onShow?: () => void;
	onHide?: () => void;
	onDocumentClick?: () => void;
}

interface FloatingPanelOpen {
	isOpen: ComputedRef<boolean>;
	setOpen: (isOpen: boolean) => void;
	onPointerDownOutside: (event: CustomEvent<{ originalEvent: PointerEvent }>) => void;
}

// Open state shared by the floating panels built on Reka's Popover (DsDropdown, DsPopOver).
// Keeps the event contract they had on vue-popperjs: `show` / `hide` follow the visible state, and
// `document-click` fires for every pointer-down outside both the reference and the panel.
export function useFloatingPanelOpen({
	forceShow,
	referenceElement,
	onShow,
	onHide,
	onDocumentClick,
}: FloatingPanelOpenOptions): FloatingPanelOpen {
	const internalOpen = ref(false);
	const isOpen = computed(() => forceShow() || internalOpen.value);

	watch(
		isOpen,
		(value, oldValue) => {
			if (value) {
				onShow?.();
			} else if (oldValue) {
				onHide?.();
			}
		},
		{ immediate: true },
	);

	function setOpen(value: boolean) {
		internalOpen.value = value;
	}

	function onPointerDownOutside(event: CustomEvent<{ originalEvent: PointerEvent }>) {
		const target = event.detail.originalEvent.target as Node | null;
		if (target && referenceElement.value?.contains(target)) {
			// The reference handles its own toggling; Reka would otherwise close the panel here
			// when the reference is a plain anchor rather than a PopoverTrigger.
			event.preventDefault();
			return;
		}

		onDocumentClick?.();
	}

	return { isOpen, setOpen, onPointerDownOutside };
}
