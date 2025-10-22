import { getCurrentInstance } from 'vue';

export function useLegacyI18n() {
	const internalInstance = getCurrentInstance();

	if (!internalInstance || !internalInstance.root.proxy) {
		throw new Error('useLegacyI18n must be called within a Vue component');
	}

	// @ts-expect-error
	const t = internalInstance.root.proxy.$t;

	return {
		t,
	};
}
