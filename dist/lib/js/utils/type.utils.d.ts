export type Value<T extends {}> = T[keyof T];
export interface RemovedProp<TMessage extends string> {
    __removed?: TMessage;
}
//# sourceMappingURL=type.utils.d.ts.map