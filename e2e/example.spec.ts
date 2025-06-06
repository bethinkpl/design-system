import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	test.slow();
	const data = await fetch('http://localhost:6006/index.json').then((r) => r.json());

	const stories = Object.entries(data.entries)
		.filter(([storyId]) => storyId.startsWith('components'))
		.slice(0, 5);

	for (const [storyId, story] of stories) {
		// iframe.html?viewMode=story&id=components-avatar--interactive
		await page.goto(`http://localhost:6006/iframe.html?viewMode=story&id=${storyId}`);

		await page.waitForSelector('[data-v-app]');

		await expect(page).toHaveScreenshot(`${storyId}.png`);
	}
});
