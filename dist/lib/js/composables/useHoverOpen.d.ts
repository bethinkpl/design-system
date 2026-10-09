interface HoverOpenOptions {
    isOpen: () => boolean;
    setOpen: (isOpen: boolean) => void;
    delay?: number;
}
interface HoverOpen {
    onPointerEnter: (event: PointerEvent) => void;
    onPointerLeave: (event: PointerEvent) => void;
    onReferencePointerDown: (event: PointerEvent) => void;
    onReferenceClick: () => void;
}
export declare function useHoverOpen({ isOpen, setOpen, delay }: HoverOpenOptions): HoverOpen;
export {};
