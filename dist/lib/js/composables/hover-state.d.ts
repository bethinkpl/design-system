import { Ref } from 'vue';

interface HoverState {
    isHovered: Ref<boolean>;
    mouseOver: () => void;
    mouseLeave: () => void;
    touchStart: () => void;
    touchEnd: () => void;
}
export declare function useHoverState(): HoverState;
export {};
//# sourceMappingURL=hover-state.d.ts.map