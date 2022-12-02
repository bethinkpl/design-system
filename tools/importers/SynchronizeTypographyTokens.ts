const axios = require('axios');

import { arrayToMixinFile, arrayToFile, jsonToFile } from './helpers/fileWriter';
import { recursiveTokensReader } from './helpers/tokensReader';
import {
	excludedKeys,
	fontFamilyKey,
	fontStyleKey,
	fontWeightKey,
	importVariables,
	jsonAttributeToCssProperty,
	resultCssAdditionalLines,
	resultScssAdditionalLines,
	tokensKey,
	tokensTypographyInputAttributes,
	tokensTypographyMissingJsonFontFamilyVariable,
	tokensTypographyMissingJsonFontStyleVariables,
	tokensTypographyMissingJsonFontWeightVariables,
	typographyPrefix,
} from './helpers/typographyVariables';
import {
	mixinNameLine,
	tokenAsCssPropertyLine,
	closeBracketLine,
	cssFileRootFirstLine,
	capitalizeFirstLetter,
} from './helpers/modifiers';
import * as dotenv from 'dotenv';
import {
	Dict,
	ITokenJsonObject,
	IResultJsonObject,
	ITypographyToken,
	TypographyConfigFile,
	TypographyConfigFileBin,
	JsonAttribute,
	JsonAttributeValues,
} from './helpers/structures';

dotenv.config();

export const ImportTypographyVariables = (
	typographyConfigFile: TypographyConfigFile,
	jsonTypography: Object,
) => {
	let resultCss: Array<string> = [];
	let resultScss: Array<string> = [];
	let resultJsonCss: Dict<Array<IResultJsonObject>> = {};

	resultCss.push(cssFileRootFirstLine());

	for (let key in jsonTypography) {
		if (!excludedKeys.includes(key)) {
			const propertyOptions: JsonAttribute<JsonAttributeValues> = jsonTypography[key];

			for (let variableKey in propertyOptions) {
				const propertyName: string =
					typographyPrefix + jsonAttributeToCssProperty[key] + '-' + variableKey;
				let propertyValue: string | undefined;
				let propertyBase: number | null = null;
				let valueMultiplier: number | null = null;

				switch (key) {
					case tokensTypographyInputAttributes.fontSize:
					case tokensTypographyInputAttributes.lineHeight:
						propertyBase = parseInt(propertyOptions.base.value.replace(/[^0-9]/g, ''));
						const valueSplit: Array<string> =
							propertyOptions[variableKey].value.split('*');
						valueMultiplier = +valueSplit[1];
						propertyValue = valueMultiplier
							? propertyBase * valueMultiplier + 'px'
							: propertyBase + 'px';
						break;
					case tokensTypographyInputAttributes.letterSpacing:
						const temporaryValueAsString: string = propertyOptions[
							variableKey
						].value.replace(/[^0-9/.]/g, '');
						const temporaryValueAsNumber: number = +temporaryValueAsString * 0.01;
						propertyValue = temporaryValueAsNumber.toString();
						if (propertyOptions[variableKey].value !== '0') {
							propertyValue += 'em';
						}
						break;
					case tokensTypographyInputAttributes.textTransform:
					case tokensTypographyInputAttributes.textDecoration:
						propertyValue = propertyOptions[variableKey].value;
						break;
				}

				if (propertyValue !== undefined) {
					resultCss.push('--' + propertyName + ': ' + propertyValue + ';');
					resultScss.push('$' + propertyName + ': var(--' + propertyName + ');');

					const propertyNameSplit = propertyName.split('-');
					const resultJsonObject: ITokenJsonObject = {
						id: (
							typographyConfigFile.bin.files.tokens.destinationJson +
							'_' +
							propertyName
						).replace(/[^a-zA-Z0-9 ]/g, ''),
						label: propertyNameSplit.slice(-1).pop() || '',
						labelFull: propertyName,
						value: propertyValue,
						base: propertyBase,
						ratio: valueMultiplier,
					};

					if (resultJsonCss[key] === undefined) {
						resultJsonCss[key] = [];
					}
					resultJsonCss[key].push(resultJsonObject);
				}
			}
		}
	}

	resultCssAdditionalLines.forEach((item) => {
		resultCss.push(item);
	});
	resultScssAdditionalLines.forEach((item) => {
		resultScss.push(item);
	});

	resultJsonCss[fontFamilyKey] = [];
	resultJsonCss[fontFamilyKey].push(tokensTypographyMissingJsonFontFamilyVariable);
	resultJsonCss[fontWeightKey] = [];
	tokensTypographyMissingJsonFontWeightVariables.forEach(function (item) {
		resultJsonCss[fontWeightKey].push(item);
	});
	resultJsonCss[fontStyleKey] = [];
	tokensTypographyMissingJsonFontStyleVariables.forEach(function (item) {
		resultJsonCss[fontStyleKey].push(item);
	});

	arrayToFile(
		typographyConfigFile.destinationPath +
			typographyConfigFile.bin.files.variablesRaw.destinationVariablesCss,
		resultCss,
	);
	arrayToFile(
		typographyConfigFile.destinationPath +
			typographyConfigFile.bin.files.variablesRaw.destinationVariables,
		resultScss,
	);
	jsonToFile(
		typographyConfigFile.destinationPath +
			typographyConfigFile.bin.files.variablesRaw.destinationVariablesCssJson,
		resultJsonCss,
	);
};

export const ImportTypographyTokens = (
	typographyConfigFile: TypographyConfigFile,
	jsonTypography: any,
) => {
	let resultScss: Array<ITypographyToken> = recursiveTokensReader(jsonTypography[tokensKey], '');
	let resultJsonCss: Dict<Array<ITypographyToken>> = {};

	resultScss.forEach(function (item) {
		let category = capitalizeFirstLetter(item.token.split('-', 1).slice().toString());
		if (!resultJsonCss[category]) {
			resultJsonCss[category] = [];
		}
		resultJsonCss[category].push(item);
	});

	arrayToMixinFile(
		typographyConfigFile.destinationPath + typographyConfigFile.bin.files.tokens.destination,
		[importVariables, ...buildTypographyTokensMixins(resultScss.flat())],
	);
	jsonToFile(
		typographyConfigFile.destinationPath +
			typographyConfigFile.bin.files.tokens.destinationJson,
		resultJsonCss,
	);
};

function buildTypographyTokensMixins(tokens: Array<ITypographyToken>): Array<string> {
	let result: Array<string> = [];

	for (let key in tokens) {
		result.push(mixinNameLine(tokens[key].token));
		result.push(tokenAsCssPropertyLine(tokens[key].token));
		tokens[key].attributes.forEach((attribute) => {
			let [cssAttributePartOne, cssAttributePartTwo] = attribute.split('-');
			result.push(
				cssAttributePartOne +
					'-' +
					cssAttributePartTwo +
					': $' +
					typographyPrefix +
					attribute +
					';',
			);
		});
		result.push(closeBracketLine());
	}

	return result;
}

const SynchronizeTypographyTokensBin = async () => {
	console.log('Import in progress...');
	const tokensFilesConfig = require('./configs/SynchronizeTypographyTokensConfig.json');
	let requestResponse = await requestForBin(
		tokensFilesConfig.bin,
		tokensFilesConfig.jsonBinApiUrl,
	);

	ImportTypographyVariables(
		tokensFilesConfig,
		requestResponse.data.record.values.LMSDesignSystemTypography,
	);

	ImportTypographyTokens(
		tokensFilesConfig,
		requestResponse.data.record.values.LMSDesignSystemTypography,
	);

	console.log('The import was successful for bin: ' + tokensFilesConfig.bin.id);
};

const requestForBin = async (binConfig: TypographyConfigFileBin, jsonBinApiUrl: string) => {
	const requestConfig = {
		headers: {
			'X-Access-Key': process.env.JSON_BIN_X_ACCESS_KEY,
		},
	};
	const requestResponse = await axios.get(
		jsonBinApiUrl + binConfig.id + '/latest',
		requestConfig,
	);

	if (!requestResponse.data.record.values.LMSDesignSystemTypography) {
		throw new TypeError('Response structure has no content!');
	}

	return requestResponse;
};

SynchronizeTypographyTokensBin().finally(() => {});
