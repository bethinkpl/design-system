const axios = require('axios');
const tokensFilesConfig = require('./configs/SynchronizeTypographyTokensConfig.json');
import { arrayToMixinFile, arrayToFile, jsonToFile } from './helpers/fileWriter';
import { recursiveTokensReader } from './helpers/tokensReader';
import {
	typographyPrefix,
	tokensKey,
	excludedKeys,
	importVariables,
	jsonAttributeToCssProperty,
	resultCssAdditionalLines,
	resultScssAdditionalLines,
	tokensTypographyInputAttributes,
} from './helpers/typographyVariables';
import {
	cssFileFirstLine,
	mixinNameLine,
	tokenAsCssPropertyLine,
	closeBracketLine,
} from './helpers/modifiers';
import * as dotenv from 'dotenv';
import {
	Dict,
	ITokenJsonObject,
	IResultJsonObject,
	ITypographyToken,
	TypographyConfigFileBin,
	TypographyBinFiles,
	JsonAttribute,
	JsonAttributeValues,
} from './helpers/structures';

dotenv.config();

const ImportTypographyVariables = (binFilesConfig: TypographyBinFiles, jsonTypography: Object) => {
	let resultCss: Array<string> = [];
	let resultScss: Array<string> = [];
	let resultJsonCss: Dict<Array<IResultJsonObject>> = {};

	resultCss.push(cssFileFirstLine(false, undefined));

	for (let key in jsonTypography) {
		if (!excludedKeys.includes(key)) {
			const propertyOptions: JsonAttribute<JsonAttributeValues> = jsonTypography[key];

			for (let variableKey in propertyOptions) {
				const propertyName: string =
					typographyPrefix + jsonAttributeToCssProperty[key] + '-' + variableKey;
				let propertyValue: string | undefined;

				switch (key) {
					case tokensTypographyInputAttributes.fontSize:
					case tokensTypographyInputAttributes.lineHeight:
						const valueBase: number = parseInt(
							propertyOptions.base.value.replace(/[^0-9]/g, ''),
						);
						const valueSplit: Array<string> =
							propertyOptions[variableKey].value.split('*');
						const valueMultiplier: number = +valueSplit[1];
						propertyValue = valueMultiplier
							? valueBase * valueMultiplier + 'px'
							: valueBase + 'px';
						break;
					case tokensTypographyInputAttributes.letterSpacing:
						const temporaryValueAsString: string = propertyOptions[
							variableKey
						].value.replace(/[^0-9/.]/g, '');
						const temporaryValueAsNumber: number = +temporaryValueAsString * 0.01;
						propertyValue = temporaryValueAsNumber + '';
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

					const resultJsonObject: ITokenJsonObject = {
						id: binFilesConfig.tokens.destinationJson + '_' + propertyName,
						label: propertyName,
						value: propertyValue,
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

	arrayToFile(
		tokensFilesConfig.destinationPath + binFilesConfig.variablesRaw.destinationVariablesCss,
		resultCss,
	);
	arrayToFile(
		tokensFilesConfig.destinationPath + binFilesConfig.variablesRaw.destinationVariables,
		resultScss,
	);
	jsonToFile(
		tokensFilesConfig.destinationPath + binFilesConfig.variablesRaw.destinationVariablesCssJson,
		resultJsonCss,
	);
};

const ImportTypographyTokens = (binConfig: TypographyBinFiles, jsonTypography: any) => {
	let resultScss: Array<ITypographyToken> = recursiveTokensReader(jsonTypography[tokensKey], '');
	let resultJsonCss: Dict<Array<ITypographyToken>> = { tokens: resultScss };

	arrayToMixinFile(tokensFilesConfig.destinationPath + binConfig.tokens.destination, [
		importVariables,
		...buildTypographyTokensMixins(resultScss.flat()),
	]);
	jsonToFile(tokensFilesConfig.destinationPath + binConfig.tokens.destinationJson, resultJsonCss);
};

function buildTypographyTokensMixins(tokens: Array<ITypographyToken>): Array<string> {
	let result: Array<string> = [];

	for (let key in tokens) {
		result.push(mixinNameLine(tokens[key].tokenCamelCase));
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
	let requestResponse = await requestForBin(tokensFilesConfig.bin);

	ImportTypographyVariables(
		tokensFilesConfig.bin.files,
		requestResponse.data.record.values.LMSDesignSystemTypography,
	);

	ImportTypographyTokens(
		tokensFilesConfig.bin.files,
		requestResponse.data.record.values.LMSDesignSystemTypography,
	);

	console.log('The import was successful for bin: ' + tokensFilesConfig.bin.id);
};

const requestForBin = async (binConfig: TypographyConfigFileBin) => {
	const requestConfig = {
		headers: {
			'X-Master-Key': process.env.JSON_BIN_X_MASTER_KEY,
		},
	};
	const requestResponse = await axios.get(
		tokensFilesConfig.jsonBinApiUrl + binConfig.id + '/latest',
		requestConfig,
	);

	if (!requestResponse.data.record.values.LMSDesignSystemTypography) {
		throw new TypeError('Response structure has no content!');
	}

	return requestResponse;
};

SynchronizeTypographyTokensBin().finally(() => {
	console.log('The importer has completed the work.');
});
