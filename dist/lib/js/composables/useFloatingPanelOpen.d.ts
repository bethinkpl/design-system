import { ComputedRef, Ref } from 'vue';

interface FloatingPanelOpenOptions {
    forceShow: () => boolean;
    referenceElement: Ref<HTMLElement | null>;
    onShow?: () => void;
    onHide?: () => void;
    onDocumentClick?: () => void;
}
interface FloatingPanelOpen {
    isOpen: ComputedRef<boolean>;
    setOpen: (isOpen: boolean) => void;
    onPointerDownOutside: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }>) => void;
}
export declare function useFloatingPanelOpen({ forceShow, referenceElement, onShow, onHide, onDocumentClick, }: FloatingPanelOpenOptions): FloatingPanelOpen;
export {};
