import type { StoryContext } from '@storybook/vue3';

/**
 * Props marked with the `RemovedProp` type (see `lib/js/utils/type.utils.ts`) are
 * kept only as compile-time removal markers, but the Vue compiler still emits them
 * as runtime props, so Storybook auto-generates Controls rows for them.
 *
 * This detects such props from the component's docgen metadata so we don't have to
 * disable each one by hand in every story.
 */
const isRemovedProp = (prop: any): boolean => {
	// vue-docgen-api keeps the type alias, so a RemovedProp shows up verbatim as
	// `type.name === 'RemovedProp'`.
	return prop?.type?.name === 'RemovedProp';
};

/**
 * Global enhancer that hides `RemovedProp`-typed props from the Controls tab (and
 * the Docs args table) for every story. `table.disable` removes the row entirely;
 * `control: false` is kept as a safeguard.
 *
 * Marked `secondPass` so it runs after Storybook's own control inference and wins.
 */
export const disableRemovedProps = (context: StoryContext) => {
	const props = (context.component as any)?.__docgenInfo?.props ?? [];
	const argTypes = { ...context.argTypes };

	for (const prop of props) {
		if (!isRemovedProp(prop)) {
			continue;
		}

		const existing = argTypes[prop.name] ?? {};
		argTypes[prop.name] = {
			...existing,
			control: false,
			table: { ...existing.table, disable: true },
		};
	}

	return argTypes;
};
disableRemovedProps.secondPass = true;
