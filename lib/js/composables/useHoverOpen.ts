import { onBeforeUnmount } from 'vue';

interface HoverOpenOptions {
	isOpen: () => boolean;
	setOpen: (isOpen: boolean) => void;
	delay?: number;
}

interface HoverOpen {
	onPointerEnter: (event: PointerEvent) => void;
	onPointerLeave: (event: PointerEvent) => void;
	onReferencePointerDown: (event: PointerEvent) => void;
	onReferenceClick: () => void;
}

// Opens a floating panel on hover. Bind the pointer enter/leave handlers to both the reference
// and the panel: they share one timer, so moving from one to the other within `delay` keeps the
// panel open. Touch has no hover, so a tap on the reference toggles the panel instead.
//
// Reka's HoverCard isn't used for this: it makes the panel's content unreachable by keyboard
// (sets `tabindex="-1"` on it) and ignores touch entirely.
export function useHoverOpen({ isOpen, setOpen, delay = 300 }: HoverOpenOptions): HoverOpen {
	let timer: ReturnType<typeof setTimeout> | undefined;
	let lastReferencePointerType = '';

	function schedule(value: boolean) {
		clearTimeout(timer);
		timer = setTimeout(() => setOpen(value), delay);
	}

	onBeforeUnmount(() => clearTimeout(timer));

	return {
		onPointerEnter(event) {
			if (event.pointerType !== 'touch') {
				schedule(true);
			}
		},
		onPointerLeave(event) {
			if (event.pointerType !== 'touch') {
				schedule(false);
			}
		},
		onReferencePointerDown(event) {
			lastReferencePointerType = event.pointerType;
		},
		onReferenceClick() {
			if (lastReferencePointerType === 'touch') {
				clearTimeout(timer);
				setOpen(!isOpen());
			}
		},
	};
}
