const fsT = require('fs');
const axios = require('axios');
const tokensFilesConfig = require('./configs/SynchronizeTypographyTokensConfig.json');
const typographyPrefix = 'typography-';
const tokensKey = 'TypographyTokens';
const variablesExcludedKeys = ['fontFamilies', 'TypographyTokens'];

const fontFamilyProperty = 'font-families';
const transformCssProperty = {
	'text-case': 'text-transform',
	'-regular': '-normal',
};

const jsonKeyToCssProperty = {
	lineHeight: 'line-height',
	fontWeight: 'font-weight',
	fontSize: 'font-size',
	letterSpacing: 'letter-spacing',
	textCase: 'text-transform',
	textDecoration: 'text-decoration',
};

interface configFileObject {
	destinationVariables: string;
	destinationVariablesCss: string;
	destinationJson: string;
}

const ImportTypographyRaw = (
	name: string,
	binValues: configFileObject,
	jsonTypography: any,
	isTheme: boolean,
) => {
	let resultCss: Array<string> = [];
	let resultScss: Array<string> = [];

	if (isTheme) {
		resultCss.push('.theme-' + name + ' {');
	} else {
		resultCss.push(':root {');
	}

	for (let key in jsonTypography) {
		if (!variablesExcludedKeys.includes(key)) {
			let value = jsonTypography[key];

			for (let variableKey in value) {
				let propertyName = typographyPrefix + jsonKeyToCssProperty[key] + '-' + variableKey;
				let propertyValue;

				switch (key) {
					case 'fontSize':
					case 'lineHeight':
						const valueBase = value.base.value.replace(/[^0-9]/g, '');
						const valueSplit = value[variableKey].value.split('*');
						const valueMultiplier = valueSplit[1];
						propertyValue = valueMultiplier ? valueBase * valueMultiplier : valueBase;
						propertyValue += 'px';
						break;
					case 'letterSpacing':
						propertyValue = value[variableKey].value.replace(/[^0-9/.]/g, '') * 0.01;
						if (value[variableKey].value != 0) {
							propertyValue += 'em';
						}
						break;
					case 'textCase':
					case 'textDecoration':
						propertyValue = value[variableKey].value;
						break;
				}
				if (propertyValue !== undefined) {
					resultCss.push('--' + propertyName + ': ' + propertyValue + ';');
					resultScss.push('$' + propertyName + ': var(--' + propertyName + ');');
				}
			}
		}
	}
	resultCss.push('--typography-font-weight-normal: normal;');
	resultCss.push('--typography-font-weight-bold: bold;');
	resultCss.push('--typography-font-weight-light: lighter;');
	resultCss.push('--typography-font-style-normal: normal;');
	resultCss.push('--typography-font-style-italic: italic;');
	resultCss.push('}');

	resultScss.push('$typography-font-weight-normal: var(--typography-font-weight-normal);');
	resultScss.push('$typography-font-weight-bold: var(--typography-font-weight-bold);');
	resultScss.push('$typography-font-weight-light: var(--typography-font-weight-light);');
	resultScss.push('$typography-font-style-normal: var(--typography-font-style-normal);');
	resultScss.push('$typography-font-style-italic: var(--typography-font-style-italic);');

	arrayToFile(tokensFilesConfig.destinationPath + binValues.destinationVariablesCss, resultCss);
	arrayToFile(tokensFilesConfig.destinationPath + binValues.destinationVariables, resultScss);
};

const ImportTypographyTokensRaw = (binValues: configFileObject, jsonTypography: any) => {
	let resultScss: Array<string> = [];

	for (let key in jsonTypography[tokensKey]) {
		resultScss.push(iterateObject(jsonTypography[tokensKey][key], key, []));
	}

	resultScss = resultScss.flat();
	const tempTokens = buildTokenMixins(resultScss);

	const finalTokens: Array<string> = [];
	finalTokens.push("@import 'variables';");
	let finalTokens2 = finalTokens.concat(tempTokens);
	arrayToMixinFile(
		tokensFilesConfig.destinationPath + binValues.destinationVariables,
		finalTokens2,
	);
};

function buildTokenMixins(tokens: Object): Array<string> {
	let result: Array<string> = [];
	for (let key in tokens) {
		result.push('\n@mixin ' + tokens[key].tokenCamelCase + '() {');
		tokens[key].attributes.forEach((attribute) => {
			let [cssAttributePartOne, cssAttributePartTwo] = attribute.split('-');
			result.push(
				cssAttributePartOne +
					'-' +
					cssAttributePartTwo +
					': $typography-' +
					attribute +
					';',
			);
		});
		result.push('}');
	}

	return result;
}

function iterateObject(obj, keyResult, result) {
	if ('value' in obj) {
		return;
	}

	for (let key in obj) {
		let temporaryKey = keyResult + ' ' + key;
		let resultToPush = iterateObject(obj[key], temporaryKey, result);

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
					attributes.push(attrValue);
				}
			}
			result.push({
				token: temporaryKey
					.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
					.replace(/\s+/g, '-')
					.toLowerCase(),
				tokenCamelCase: camelize(temporaryKey),
				attributes,
			});
		}
	}

	return result;
}

function camelize(str) {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		})
		.replace(/\s+/g, '');
}

const arrayToMixinFile = (filepath: string, content: Array<string>) => {
	let file = fsT.createWriteStream(filepath);
	file.on('error', function (err) {
		console.log(err);
	});

	const patternTheme = /@mixin|@import|}/i;

	content.forEach(function (v) {
		let hasLineIndentation = true;
		if (v.match(patternTheme)) {
			hasLineIndentation = false;
		}
		console.log(v);
		file.write(hasLineIndentation ? '\t' + v + '\n' : v + '\n');
	});
	file.end();
};

const arrayToFile = (filepath: string, content: Array<string>) => {
	let file = fsT.createWriteStream(filepath);
	file.on('error', function (err) {
		console.log(err);
	});

	const patternTheme = /root|}/i;
	let hasFileIndentation = false;
	content.forEach(function (v) {
		if (v.match(patternTheme)) {
			hasFileIndentation = true;
			file.write(v.toLowerCase() + '\n');
		} else {
			const hasLineIndentation = hasFileIndentation ? '\t' : '';
			file.write(hasLineIndentation + v.toLowerCase() + '\n');
		}
	});
	file.end();
};

const SynchronizeSingleBin = async (bin) => {
	const requestConfig = {
		headers: {
			'X-Master-Key': tokensFilesConfig.xMasterKey,
		},
	};
	const response = await axios.get(
		tokensFilesConfig.jsonBinApiUrl + bin.id + '/latest',
		requestConfig,
	);

	if (!response.data.record.values.LMSDesignSystemTypography) {
		throw new TypeError('Response structure has no content!');
	}

	ImportTypographyRaw(
		bin.name,
		bin.files.variablesRaw,
		response.data.record.values.LMSDesignSystemTypography,
		bin.isTheme,
	);
	ImportTypographyTokensRaw(
		bin.files.tokens,
		response.data.record.values.LMSDesignSystemTypography,
	);
};

const SynchronizeTypographyTokens = async () => {
	tokensFilesConfig.bins.forEach((bin) => {
		SynchronizeSingleBin(bin);
	});
};

SynchronizeTypographyTokens();
