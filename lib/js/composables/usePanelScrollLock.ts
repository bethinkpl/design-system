import { onScopeDispose, watchEffect } from 'vue';
import { useBodyScrollLock } from 'reka-ui';

// $space-4: keeps a scroll-locked panel off the viewport's edges.
export const PANEL_COLLISION_PADDING = 8;

// Panels holding the lock on <html>, so it is released only when the last one closes.
let htmlLockCount = 0;
let htmlInitialOverflow = '';

function lockHtml() {
	if (htmlLockCount === 0) {
		htmlInitialOverflow = document.documentElement.style.overflow;
		document.documentElement.style.overflow = 'hidden';
	}
	htmlLockCount++;
}

function unlockHtml() {
	htmlLockCount--;
	if (htmlLockCount === 0) {
		document.documentElement.style.overflow = htmlInitialOverflow;
	}
}

// Locks page scrolling while `isLocked()` returns true, with Reka's lock rather than modal mode, so
// the panel keeps its non-modal focus and screen reader behaviour.
// Reka's lock is shared with its own modal components (SelectField, a modal PopoverRoot), so stacked
// locks release only when the last one does. It pads the body by the scrollbar's width to avoid a
// layout jump, and on iOS blocks touch scrolling outside scrollable elements.
// It also sets `pointer-events: none` on the body, so clicks outside only close the panel, and the
// panel must set `pointer-events: auto` itself (Reka does that only for modal content).
// Reka hides the overflow of <body> only, which doesn't stop the page: the design system's global
// styles make <html> the scrolling element (`overflow-y: auto`), so its overflow is hidden too.
export function usePanelScrollLock(isLocked: () => boolean): void {
	const locked = useBodyScrollLock(false);
	let holdsHtml = false;

	function setHtmlLock(value: boolean) {
		if (value === holdsHtml) return;
		holdsHtml = value;
		if (value) lockHtml();
		else unlockHtml();
	}

	watchEffect(() => {
		const value = isLocked();
		locked.value = value;
		setHtmlLock(value);
	});

	onScopeDispose(() => setHtmlLock(false));
}
