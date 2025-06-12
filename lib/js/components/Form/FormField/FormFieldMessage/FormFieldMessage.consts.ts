import { Value } from '../../../../utils/type.utils';

export const FORM_FIELD_MESSAGE_VARIANTS = {
	DEFAULT: 'default',
	DISABLED: 'disabled',
	ERROR: 'error',
	SUCCESS: 'success',
};

export type FormFieldMessageVariant = Value<typeof FORM_FIELD_MESSAGE_VARIANTS>;
