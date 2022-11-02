const fsT = require('fs');
const axios = require('axios');
const tokensFilesConfig = require('./configs/SynchronizeTypographyTokensConfig.json');
const typographyPrefix = 'typography-';
const variablesExcludedKeys = ['fontFamilies', 'TypographyTokens'];

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
};

const SynchronizeTypographyTokens = async () => {
	tokensFilesConfig.bins.forEach((bin) => {
		SynchronizeSingleBin(bin);
	});
};

SynchronizeTypographyTokens();
