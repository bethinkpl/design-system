import { ITypographyToken } from './structures';

const modifiers = require('./modifiers');

const {
	fontFamilyProperty,
	fontWeightKey,
	transformCssProperty,
} = require('../helpers/typographyVariables');

export const recursiveTokenReader = (obj, keyResult: string, result: Array<ITypographyToken>) => {
	if ('value' in obj) {
		return;
	}

	for (let key in obj) {
		let temporaryKey = (keyResult + ' ' + key).replace(/\-+/g, ' ');

		let resultToPush = recursiveTokenReader(obj[key], temporaryKey, result);

		if (resultToPush === undefined) {
			let attributes: string[] = [];
			for (let attrKey in obj[key].value) {
				let attrValue = obj[key].value[attrKey]
					.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
					.replace(/\.+/g, '-')
					.slice(1, -1)
					.toLowerCase();

				attrValue = attrValue
					.replace('text-case', transformCssProperty['text-case'])
					.replace('-regular', transformCssProperty['-regular']);

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
			result.push({
				token: temporaryKey
					.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
					.replace(/\s+/g, '-')
					.toLowerCase(),
				tokenCamelCase: modifiers.camelize(temporaryKey),
				attributes,
			});
		}
	}

	return result;
};
