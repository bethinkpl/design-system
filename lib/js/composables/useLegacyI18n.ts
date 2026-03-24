import { computed, ComputedRef, getCurrentInstance } from 'vue';
import { SupportedLocale, TranslateFunction } from '../i18n';

interface IUseLegacyI18n {
	t: TranslateFunction;
	locale: ComputedRef<SupportedLocale | undefined>;
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

	const t = internalInstance.root.proxy.$t;
	const locale = computed(() => internalInstance.root.proxy?.$i18n.locale);

	return {
		t,
		locale,
	};
};
