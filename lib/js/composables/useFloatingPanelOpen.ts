import { Ref, watch } from 'vue';

interface FloatingPanelOpen {
	// Changes the open state from inside the panel: its trigger, slot functions, Escape or an
	// outside click. Pass `takesFocus: false` for openings the user didn't ask for, e.g. on hover.
	setOpen: (value: boolean, options?: { takesFocus?: boolean }) => void;
	// Bind to PopoverContent's `open-auto-focus` and `close-auto-focus`.
	onAutoFocus: (event: Event) => void;
}

// Focus handling shared by the floating panels built on Reka's Popover (DsDropdown, DsPopOver).
// Reka moves focus into the panel when it opens and back to the trigger when it closes. That is
// right when the user opened it from the trigger, but not when the consumer opened it through
// `v-model:open` or it opened on hover: focus then stays where the user is.
export function useFloatingPanelOpen(open: Ref<boolean>): FloatingPanelOpen {
	let isFocusTaken = false;
	let pendingTakesFocus = false;

	watch(open, (value) => {
		if (value) {
			isFocusTaken = pendingTakesFocus;
		}
		pendingTakesFocus = false;
	});

	function setOpen(value: boolean, { takesFocus = true } = {}) {
		if (value === open.value) {
			return;
		}
		pendingTakesFocus = value && takesFocus;
		open.value = value;
	}

	function onAutoFocus(event: Event) {
		if (!isFocusTaken) {
			event.preventDefault();
		}
	}

	return { setOpen, onAutoFocus };
}
