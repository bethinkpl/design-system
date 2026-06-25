export type Value<T extends {}> = T[keyof T];

/**
 * Marks a renamed/removed prop so any leftover usage fails type-checking.
 *
 * Using `never` directly inside `defineProps<{...}>()` breaks Vue's reactive
 * props destructure inference, so this incompatible marker type is used instead:
 * passing any real value (boolean, string, enum) to such a prop is a type error,
 * and the message documents the migration.
 */
export interface RemovedProp<TMessage extends string> {
	__removed?: TMessage;
}
