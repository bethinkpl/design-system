import { ITypographyToken } from './structures';

import { camelize, kebabize } from './modifiers';
import {
	fontFamilyProperty,
	fontWeightKey,
	transformCssProperty,
	tokenPartDisabled,
	textCaseProperty,
	textTransformProperty,
} from './typographyVariables';

export const recursiveTokensReader = (obj, keyResult: string): Array<ITypographyToken> => {
	if ('value' in obj) {
		let attributes: string[] = [];
		let attributesRaw: Array<Object> = [];
		for (let attrKey in obj.value) {
			let attrValue = obj.value[attrKey]
				.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
				.replace(/\.+/g, '-')
				.slice(1, -1)
				.toLowerCase();
			let attrKeyRaw = attrKey
				.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
				.replace(/\.+/g, '-')
				.toLowerCase()
				.replace(textCaseProperty, textTransformProperty);

			attrValue = attrValue.replace('-regular', transformCssProperty['-regular']);

			if (attrValue && !attrValue.includes(fontFamilyProperty)) {
				if (attrKey === fontWeightKey) {
					if (attrValue.includes('bold')) {
						attributes.push('font-weight-bold');
						attributesRaw.push({ property: 'font-weight', value: 'font-weight-bold' });
					} else if (attrValue.includes('light')) {
						attributes.push('font-weight-light');
						attributesRaw.push({ property: 'font-weight', value: 'font-weight-light' });
					} else {
						attributes.push('font-weight-normal');
						attributesRaw.push({
							property: 'font-weight',
							value: 'font-weight-normal',
						});
					}
					if (attrValue.includes('italic')) {
						attributes.push('font-style-italic');
						attributesRaw.push({ property: 'font-style', value: 'font-style-italic' });
					} else {
						attributes.push('font-style-normal');
						attributesRaw.push({ property: 'font-style', value: 'font-style-normal' });
					}
				} else {
					attributesRaw.push({ property: attrKeyRaw, value: attrValue });
					attributes.push(attrValue);
				}
			}
		}

		let tokenSplit = keyResult.replace(/\s+/g, '-').split('-');
		let tokenUsage = tokenSplit.shift() + '';
		tokenSplit = tokenSplit.map(kebabize);
		let token = camelize(tokenUsage) + '-' + tokenSplit.join('-').toLowerCase();

		return [
			{
				id: token.replace(/\-+/g, ''),
				category: '',
				token,
				attributes,
				attributesRaw,
			},
		];
	}

	let results: Array<ITypographyToken> = [];
	for (let key in obj) {
		let newSuffix: string = !key.includes(tokenPartDisabled) ? key : '';
		let temporaryKey: string = (keyResult ? keyResult + ' ' + newSuffix : newSuffix).replace(
			/\-+/g,
			' ',
		);
		let result: Array<ITypographyToken> = recursiveTokensReader(obj[key], temporaryKey);
		results.push(...result);
	}

	return results;
};
