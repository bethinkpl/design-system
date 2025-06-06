import { test, expect, Page } from '@playwright/test';

function waitForImages(page: Page) {
	return page.evaluate(() => {
		return Promise.all(
			Array.from(document.images)
				.filter((img) => !img.complete)
				.map(
					(img) =>
						new Promise<void>((resolve) => {
							img.onload = img.onerror = () => resolve();
						}),
				),
		);
	});
}

test.describe('Visual Regression Tests for Components', async () => {
	const data = JSON.parse(process.env.STORIES_DATA);
	console.log({ data });

	const stories = Object.entries(data.entries)
		.filter(([storyId]) => storyId.startsWith('components'))
		.slice(0, 5);

	for (const [storyId, story] of stories) {
		test(`component ${story.title}: ${story.name}`, async ({ page }) => {
			await page.goto(`http://localhost:6006/iframe.html?viewMode=story&id=${storyId}`);

			await page.waitForSelector('[data-v-app]');

			await waitForImages(page);

			await expect(page).toHaveScreenshot(`${storyId}.png`);
		});
	}
});
