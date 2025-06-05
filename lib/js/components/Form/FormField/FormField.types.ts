export interface FormFieldProps {
	label?: string;
	state?: 'default' | 'disabled' | 'error' | 'success';
	hasRequiredIndicator?: boolean;
	labelInfo?: string;
	subLabel?: string;
	fieldId?: string;
	messageText?: string;
}

export interface FormFieldSlots {
	labelAside?: () => any;
	help?: () => any;
	field: (props: { fieldId: string; messageId: string }) => any;
	message?: (props: { messageId: string }) => any;
	fieldStatus?: () => any;
}
