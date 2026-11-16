import { InjectionKey, MaybeRefOrGetter } from 'vue';

export type FloatingPanelTarget = HTMLElement | string | null;
export declare const FLOATING_PANEL_TARGET_INJECTION_KEY: InjectionKey<() => FloatingPanelTarget>;
export declare function provideFloatingPanelTarget(target: MaybeRefOrGetter<FloatingPanelTarget>): void;
export declare function useFloatingPanelTarget(teleportTo: () => FloatingPanelTarget, isTeleported?: () => boolean): {
    to: import('vue').ComputedRef<string | HTMLElement>;
    getCollisionBoundary: () => Element | null;
};
