export type Value<T extends {}> = T[keyof T];

/**
 * Marks a renamed/removed prop so any leftover usage fails type-checking.
 *
 * Using `never` directly inside `defineProps<{...}>()` breaks Vue's reactive
 * props destructure inference, so this incompatible marker type is used instead:
 * passing any real value (boolean, string, enum) to such a prop is a type error,
 * and the message documents the migration.
 *
 * NOTE: the name `RemovedProp` is matched verbatim against the docgen `type.name`
 * in `.storybook/disable-removed-props.ts` to hide these props from Storybook
 * controls. Renaming this type requires updating that matcher too.
 */
export interface RemovedProp<TMessage extends string> {
	__removed?: TMessage;
}
