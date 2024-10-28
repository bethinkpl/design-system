import { Ref } from 'vue';

interface HoverState {
    hovered: Ref<boolean>;
    mouseOver: () => void;
    mouseLeave: () => void;
    touchStart: () => void;
    touchEnd: () => void;
}
export declare function useHoverState(): HoverState;
export {};
