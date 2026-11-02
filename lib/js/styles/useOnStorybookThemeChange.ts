import { onBeforeUnmount, onMounted } from 'vue';

/**
 * Calls `callback` on mount and after every Brand / Color scheme switch in the Storybook toolbar.
 *
 * The toolbar switches are applied by the decorator in `.storybook/preview.ts`, which toggles
 * `.-ds-theme-<brand>` / `.-ds-dark` on `<html>` without re-rendering the story. Watching those
 * classes (rather than the toolbar globals) guarantees the new CSS already applies when `callback` runs.
 */
export function useOnStorybookThemeChange(callback: () => void): void {
	const htmlClassObserver = new MutationObserver(callback);

	onMounted(() => {
		callback();
		htmlClassObserver.observe(document.documentElement, { attributeFilter: ['class'] });
	});
	onBeforeUnmount(() => htmlClassObserver.disconnect());
}
