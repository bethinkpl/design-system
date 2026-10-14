import { afterEach, describe, expect, it } from 'vitest';
import { resolveCollisionBoundary, splitPlacement } from './placement';

describe('splitPlacement', () => {
	it.each([
		{ placement: 'bottom-start', side: 'bottom', align: 'start' },
		{ placement: 'bottom-end', side: 'bottom', align: 'end' },
		{ placement: 'top', side: 'top', align: 'center' },
		{ placement: 'left', side: 'left', align: 'center' },
	])('should split $placement into $side / $align', ({ placement, side, align }) => {
		expect(splitPlacement(placement)).toEqual({ side, align });
	});
});

describe('resolveCollisionBoundary', () => {
	afterEach(() => {
		document.body.innerHTML = '';
	});

	it('should resolve the first element matching a selector list', () => {
		document.body.innerHTML = '<div class="b"></div><div class="a"></div>';

		expect(resolveCollisionBoundary('.a, .b')).toBe(document.querySelector('.b'));
	});

	it.each([null, '', '.missing'])('should fall back to the viewport for %s', (selector) => {
		expect(resolveCollisionBoundary(selector)).toBeUndefined();
	});
});
