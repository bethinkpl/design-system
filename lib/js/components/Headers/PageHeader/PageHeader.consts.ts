import { Value } from '../../../utils/type.utils';

export const PAGE_HEADER_MOBILE_LAYOUTS = {
	VERTICAL: 'vertical',
	HORIZONTAL: 'horizontal',
} as const;

export type PageHeaderMobileLayout = Value<typeof PAGE_HEADER_MOBILE_LAYOUTS>;
