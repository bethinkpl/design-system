import { ITypographyToken } from './structures';

import { camelize } from './modifiers';
import { fontFamilyProperty, fontWeightKey, transformCssProperty } from './typographyVariables';

export const recursiveTokensReader = (obj, keyResult: string): Array<ITypographyToken> => {
	if ('value' in obj) {
		let attributes: string[] = [];
		for (let attrKey in obj.value) {
			let attrValue = obj.value[attrKey]
				.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
				.replace(/\.+/g, '-')
				.slice(1, -1)
				.toLowerCase();

			attrValue = attrValue.replace('-regular', transformCssProperty['-regular']);

			if (attrValue && !attrValue.includes(fontFamilyProperty)) {
				if (attrKey === fontWeightKey) {
					if (attrValue.includes('bold')) {
						attributes.push('font-weight-bold');
					} else if (attrValue.includes('light')) {
						attributes.push('font-weight-light');
					} else {
						attributes.push('font-weight-normal');
					}
					if (attrValue.includes('italic')) {
						attributes.push('font-style-italic');
					} else {
						attributes.push('font-style-normal');
					}
				} else {
					attributes.push(attrValue);
				}
			}
		}

		return [
			{
				token: keyResult
					.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
					.replace(/\s+/g, '-')
					.toLowerCase(),
				tokenCamelCase: camelize(keyResult),
				attributes,
			},
		];
	}

	let results: Array<ITypographyToken> = [];
	for (let key in obj) {
		let temporaryKey: string = (keyResult + ' ' + key).replace(/\-+/g, ' ');
		let result: Array<ITypographyToken> = recursiveTokensReader(obj[key], temporaryKey);
		results.push(...result);
	}

	return results;
};
