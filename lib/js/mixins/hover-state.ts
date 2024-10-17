import { isTouchDevice } from '../utils/device';

export const hoverState = {
    data() {
        return {
            hovered: false,
        };
    },
    methods: {
        mouseOver() {
            if (!isTouchDevice()) {
                this.hovered = true;
            }
        },
        mouseLeave() {
            if (!isTouchDevice()) {
                this.hovered = false;
            }
        },
        touchStart() {
            if (isTouchDevice()) {
                this.hovered = true;
            }
        },
        touchEnd() {
            if (isTouchDevice()) {
                this.hovered = false;
            }
        },
    },
};
