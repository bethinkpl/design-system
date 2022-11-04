const axios = require('axios');
const tokensFilesConfig = require('./configs/SynchronizeTypographyTokensConfig.json');
const fileWriter = require('./helpers/fileWriter');
const fileRead = require('./helpers/fileReader');
const importerVariables = require('./helpers/typographyVariables');

interface configFileObject {
	destinationVariables: string;
	destinationVariablesCss: string;
	destinationJson: string;
}

const ImportTypographyRaw = (
	name: string,
	binValues: configFileObject,
	jsonTypography: Object,
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
		if (!importerVariables.excludedKeys.includes(key)) {
			let value = jsonTypography[key];

			for (let variableKey in value) {
				let propertyName: string =
					importerVariables.typographyPrefix +
					importerVariables.jsonKeyToCssProperty[key] +
					'-' +
					variableKey;
				let propertyValue: string | undefined;

				switch (key) {
					case 'fontSize':
					case 'lineHeight':
						const valueBase: number = parseInt(value.base.value.replace(/[^0-9]/g, ''));
						const valueSplit: Array<number> = value[variableKey].value.split('*');
						const valueMultiplier: number = valueSplit[1];
						propertyValue = valueMultiplier
							? valueBase * valueMultiplier + 'px'
							: valueBase + 'px';
						break;
					case 'letterSpacing':
						propertyValue =
							value[variableKey].value.replace(/[^0-9/.]/g, '') * 0.01 + '';
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

	fileWriter.arrayToFile(
		tokensFilesConfig.destinationPath + binValues.destinationVariablesCss,
		resultCss,
	);
	fileWriter.arrayToFile(
		tokensFilesConfig.destinationPath + binValues.destinationVariables,
		resultScss,
	);
};

const ImportTypographyTokensRaw = (binValues: configFileObject, jsonTypography: any) => {
	let resultScss: Array<string> = [];

	for (let key in jsonTypography[importerVariables.tokensKey]) {
		resultScss.push(
			fileRead.recursiveTokenReader(
				jsonTypography[importerVariables.tokensKey][key],
				key,
				[],
				importerVariables,
			),
		);
	}

	fileWriter.arrayToMixinFile(
		tokensFilesConfig.destinationPath + binValues.destinationVariables,
		[importerVariables.importVariables, ...buildTypographyTokensMixins(resultScss.flat())],
	);
};

function buildTypographyTokensMixins(tokens: Object): Array<string> {
	let result: Array<string> = [];
	for (let key in tokens) {
		result.push('\n@mixin ' + tokens[key].tokenCamelCase + '() {');
		tokens[key].attributes.forEach((attribute) => {
			let [cssAttributePartOne, cssAttributePartTwo] = attribute.split('-');
			result.push(
				cssAttributePartOne +
					'-' +
					cssAttributePartTwo +
					': $' +
					importerVariables.typographyPrefix +
					attribute +
					';',
			);
		});
		result.push('}');
	}

	return result;
}

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

// @ts-ignore
SynchronizeTypographyTokens().then({});
