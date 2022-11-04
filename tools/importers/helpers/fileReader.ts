const modifiers = require('./modifiers');

const recursiveTokenReader = (obj, keyResult: string, result: Array<any>, importerVariables) => {
	if ('value' in obj) {
		return;
	}

	for (let key in obj) {
		let temporaryKey = (keyResult + ' ' + key).replace(/\-+/g, ' ');
		console.log(temporaryKey);
		let resultToPush = recursiveTokenReader(obj[key], temporaryKey, result, importerVariables);

		if (resultToPush === undefined) {
			let attributes: string[] = [];
			for (let attrKey in obj[key].value) {
				let attrValue = obj[key].value[attrKey]
					.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
					.replace(/\.+/g, '-')
					.slice(1, -1)
					.toLowerCase();

				attrValue = attrValue
					.replace('text-case', importerVariables.transformCssProperty['text-case'])
					.replace('-regular', importerVariables.transformCssProperty['-regular']);

				if (attrValue && !attrValue.includes(importerVariables.fontFamilyProperty)) {
					attributes.push(attrValue);
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

exports.recursiveTokenReader = recursiveTokenReader;
