import { getCurrentInstance } from 'vue';
import { TranslateFunction } from '../i18n';

interface IUseLegacyI18n {
	t: TranslateFunction;
}

/**
 * Remove that functions and references when change to legacy:false
 * https://vue-i18n.intlify.dev/guide/advanced/composition
 */
export const useLegacyI18n = (): IUseLegacyI18n => {
	const internalInstance = getCurrentInstance();

	if (!internalInstance || !internalInstance.root.proxy) {
		throw new Error('useLegacyI18n must be called within a Vue component');
	}

	// @ts-expect-error
	const t = internalInstance.root.proxy.$t;

	return {
		t,
	};
};
