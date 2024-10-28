import { Ref, ref } from 'vue';
import { isTouchDevice } from '../utils/device';

interface HoverState {
	isHovered: Ref<boolean>;
	mouseOver: () => void;
	mouseLeave: () => void;
	touchStart: () => void;
	touchEnd: () => void;
}

export function useHoverState(): HoverState {
	const isHovered = ref(false);
	const isTouchDeviceDetected = isTouchDevice();

	return {
		isHovered,
		mouseOver() {
			if (!isTouchDeviceDetected) {
				isHovered.value = true;
			}
		},
		mouseLeave() {
			if (!isTouchDeviceDetected) {
				isHovered.value = false;
			}
		},
		touchStart() {
			if (isTouchDeviceDetected) {
				isHovered.value = true;
			}
		},
		touchEnd() {
			if (isTouchDeviceDetected) {
				isHovered.value = false;
			}
		},
	};
}
