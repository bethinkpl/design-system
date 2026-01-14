import { Ref, ref, watch } from 'vue';

export interface ExpandedEmits {
	(event: 'update:isExpanded', value: boolean): void;
}

export default function useExpanded(isExpanded: Ref<boolean>, emit: ExpandedEmits) {
	const isExpandedInternal = ref(false);

	watch(
		isExpanded,
		(newValue) => {
			if (newValue !== isExpandedInternal.value) {
				isExpandedInternal.value = newValue;
			}
		},
		{ immediate: true },
	);

	const toggleExpanded = () => {
		isExpandedInternal.value = !isExpandedInternal.value;
		emit('update:isExpanded', isExpandedInternal.value);
	};

	return {
		isExpandedInternal,
		toggleExpanded,
	};
}
