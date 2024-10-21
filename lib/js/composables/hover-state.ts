import { Ref, ref } from 'vue';
import { isTouchDevice } from '../utils/device';

interface HoverState {
	hovered: Ref<boolean>;
	mouseOver: () => void;
	mouseLeave: () => void;
	touchStart: () => void;
	touchEnd: () => void;

}

export function useHoverState(): HoverState {
	const hovered = ref(false);

	return {
		hovered,
		mouseOver() {
			if (!isTouchDevice()) {
				hovered.value = true;
			}
		},
		mouseLeave() {
			if (!isTouchDevice()) {
				hovered.value = false;
			}
		},
		touchStart() {
			if (isTouchDevice()) {
				hovered.value = true;
			}
		},
		touchEnd() {
			if (isTouchDevice()) {
				hovered.value = false;
			}
		},
	};
}
