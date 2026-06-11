import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ref } from 'vue';

import { GRADIENT_MAGIC_ICON_ID, useMagicGradient } from './useMagicGradient';

describe('useMagicGradient', () => {
	beforeEach(() => {
		document.getElementById(GRADIENT_MAGIC_ICON_ID)?.remove();
	});
	afterEach(() => {
		document.getElementById(GRADIENT_MAGIC_ICON_ID)?.remove();
	});

	it('injects a single linearGradient with the hardcoded id when enabled', () => {
		useMagicGradient(true);

		const gradient = document.getElementById(GRADIENT_MAGIC_ICON_ID);
		expect(gradient).not.toBeNull();
		expect(gradient?.tagName.toLowerCase()).toBe('lineargradient');
	});

	it('does not inject the def when disabled', () => {
		useMagicGradient(false);

		expect(document.getElementById(GRADIENT_MAGIC_ICON_ID)).toBeNull();
	});

	it('injects the def when the reactive source becomes enabled', async () => {
		const enabled = ref(false);
		useMagicGradient(enabled);

		expect(document.getElementById(GRADIENT_MAGIC_ICON_ID)).toBeNull();

		enabled.value = true;
		await Promise.resolve();

		expect(document.getElementById(GRADIENT_MAGIC_ICON_ID)).not.toBeNull();
	});

	it('is idempotent — multiple enabled consumers leave exactly one def', () => {
		useMagicGradient(true);
		useMagicGradient(() => true);
		useMagicGradient(ref(true));

		expect(document.querySelectorAll(`#${GRADIENT_MAGIC_ICON_ID}`)).toHaveLength(1);
	});
});
