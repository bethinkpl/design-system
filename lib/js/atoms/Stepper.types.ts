import { IconValue } from './Icon.types';

export interface Step {
	label: string;
	icon: IconValue;
	isFilled: boolean;
	name: string;
	isClickable: boolean;
}
