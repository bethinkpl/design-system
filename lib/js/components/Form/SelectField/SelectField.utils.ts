import { SelectFieldOption, SelectFieldOptionGroup } from './SelectField.types';

export function isSelectFieldOptionGroup(
	option: SelectFieldOption | SelectFieldOptionGroup,
): option is SelectFieldOptionGroup {
	return 'options' in option;
}

/**
 * Normalises the mixed options prop into a list of groups, preserving order.
 * Consecutive ungrouped options collapse into a single group without a label — such a group
 * renders its options as direct children of the listbox, because an unlabelled reka-ui
 * `SelectGroup` emits `role="group"` with a dangling `aria-labelledby`.
 *
 * Never mutates the `options` prop: synthesised groups own their arrays, and groups passed in
 * by the consumer are copied before anything is appended to them.
 */
export function normalizeOptions(
	options: Array<SelectFieldOption | SelectFieldOptionGroup>,
): Array<SelectFieldOptionGroup> {
	const groups: Array<SelectFieldOptionGroup> = [];
	// Only a group synthesised here may absorb following ungrouped options.
	let openGroup: SelectFieldOptionGroup | null = null;

	options.forEach((option) => {
		if (isSelectFieldOptionGroup(option)) {
			groups.push({ ...option, options: [...option.options] });
			openGroup = null;

			return;
		}

		if (openGroup) {
			openGroup.options.push(option);

			return;
		}

		openGroup = { options: [option] };
		groups.push(openGroup);
	});

	return groups;
}

/**
 * reka-ui throws an opaque error when a `SelectItem` receives an empty string value.
 * Fail earlier with a message that names the component.
 */
export function assertOptionValues(groups: Array<SelectFieldOptionGroup>): void {
	const hasEmptyValue = groups.some(({ options }) => options.some(({ value }) => value === ''));

	if (hasEmptyValue) {
		throw new Error(
			'[SelectField]: An option value must not be an empty string, because an empty string clears the selection.',
		);
	}
}

/**
 * Resolves a CSS length prop: a `number` is treated as pixels, a string is passed through.
 * Returns `undefined` for anything that must not reach the style attribute, so `0` still
 * produces a usable `0px`.
 */
export function toCssLength(value: string | number | undefined): string | undefined {
	if (typeof value === 'number') {
		return `${value}px`;
	}

	return value || undefined;
}

/**
 * reka-ui names an option after its `SelectItemText`, which only wraps the label, so the
 * eyebrow text would be dropped from the accessible name. Prepend it so assistive technology
 * announces everything that is visible.
 *
 * Deliberately *not* used for reka-ui's `textValue`: typeahead matches on a prefix, and users
 * type the label rather than the eyebrow.
 */
export function getOptionAccessibleName(option: SelectFieldOption): string {
	return option.eyebrowText ? `${option.eyebrowText} ${option.label}` : option.label;
}
