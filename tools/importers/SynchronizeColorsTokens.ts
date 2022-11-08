const axios = require('axios');
const tokensFilesConfig = require('./configs/SynchronizeColorsTokensConfig.json');
const fileWriter = require('./helpers/fileWriter');
const modifiers = require('./helpers/modifiers');
import { Dict, ITokenJsonObject, IResultJsonObject, ConfigFileObject } from './helpers/structures';

const ImportColorsRaw = (
	name: string,
	binValues: ConfigFileObject,
	jsonColors: Array<any>,
	isTheme: boolean,
) => {
	let hexToCssVariable: Object = {};

	let result: Array<string> = [];
	let temporaryColorsJson: Dict<Array<IResultJsonObject>> = {};
	let resultColorsJson: Dict<Array<IResultJsonObject>> = {};

	if (isTheme) {
		result.push('.theme-' + name + ' {');
	} else {
		result.push(':root {');
	}

	jsonColors.forEach((obj) => {
		const patternColorsToProcess = /RAW\/|theme/i;
		const patternColorsToIgnore = /deprecated|Pattern/i;
		const patternTheme = /theme/i;
		if (
			obj.name.match(patternColorsToProcess) &&
			obj.name.match(patternColorsToIgnore) === null
		) {
			const nameSplit = obj.name.split('/');
			let colorName = nameSplit[2] === undefined ? nameSplit[1] : nameSplit[2];
			obj.values.hex = modifiers.makeHexShortcut(obj.values.hex);

			const colorFinalName = obj.name.match(patternTheme)
				? '--' + colorName
				: '--raw-' + colorName;

			if (hexToCssVariable[obj.values.hex] === undefined) {
				hexToCssVariable[obj.values.hex] = colorFinalName;
			}

			const tab = isTheme ? '\t' : '';
			result.push(tab + colorFinalName + ': ' + obj.values.hex + ';');

			const rgb = hexToRgb(obj.values.hex);
			if (rgb === null) {
				throw new Error('ERROR! Cant convert this hex to rgb: ' + obj.values.hex);
			}

			if (hexToCssVariable[rgb] === undefined) {
				hexToCssVariable[rgb] = colorFinalName + '-rgb';
			}
			result.push(tab + colorFinalName + '-rgb' + ': ' + rgb + ';');

			/** JSON object structure */
			const colorNameSplitted = colorName.split('-');
			const category = colorNameSplitted[1] === undefined ? 'default' : colorNameSplitted[0];
			const resultJsonObject: IResultJsonObject = {
				id: binValues.destination + '_' + colorName,
				label: colorName,
				value: obj.values.hex,
			};

			if (temporaryColorsJson[category] === undefined) {
				temporaryColorsJson[category] = [];
			}
			temporaryColorsJson[category].push(resultJsonObject);
		}
	});

	result.push('}');

	if (result.length === 2) {
		throw new Error('ERROR! No colors to save');
	}

	Object.entries<Array<IResultJsonObject>>(temporaryColorsJson).forEach(([category, colors]) => {
		Object.entries(colors).forEach(([, color]) => {
			const resultFileJsonObject: IResultJsonObject = {
				id: color.id,
				label: color.label,
				value: color.value,
			};

			if (resultColorsJson[category] === undefined) {
				resultColorsJson[category] = [];
			}
			resultColorsJson[category].push(resultFileJsonObject);
		});
	});

	fileWriter.arrayToFile(tokensFilesConfig.destinationPath + binValues.destination, result);
	if (binValues.destinationJson) {
		fileWriter.jsonToFile(
			tokensFilesConfig.destinationPath + binValues.destinationJson,
			resultColorsJson,
		);
	}

	return hexToCssVariable;
};

const ImportSingleTokenFile = (
	binValues: ConfigFileObject,
	jsonColors: Array<any>,
	hexToCssVariable: Dict<string>,
	themeName: string,
	isTheme: boolean,
) => {
	let result: Array<string> = [];
	let resultJsonTokens = {};
	let resultVariables: Array<string> = [];

	if (isTheme) {
		resultVariables.push('.theme-' + themeName + ' {');
	} else {
		resultVariables.push(':root {');
	}

	jsonColors.forEach((obj) => {
		const patternColorsToIgnore = /deprecated|Pattern|RAW|theme/i;
		if (obj.name.match(patternColorsToIgnore) === null) {
			let tokenName = obj.name;
			tokenName = 'color-' + tokenName.replace(/\//i, '-');
			obj.values.hex = modifiers.makeHexShortcut(obj.values.hex);

			const tab = isTheme ? '\t' : '';

			if (obj.values.alpha !== 1) {
				const rgb = hexToRgb(obj.values.hex);
				if (rgb && hexToCssVariable[rgb.toString()] === undefined) {
					throw new Error('No RGB color:' + rgb);
				}

				resultVariables.push(
					tab +
						'--' +
						tokenName +
						': ' +
						'rgba(var(' +
						hexToCssVariable[obj.values.hex] +
						'-rgb), ' +
						obj.values.alpha +
						');',
				);
			} else {
				if (hexToCssVariable[obj.values.hex] === undefined) {
					throw new Error('No HEX color:' + obj.values.hex);
				}
				resultVariables.push(
					tab + '--' + tokenName + ': var(' + hexToCssVariable[obj.values.hex] + ');',
				);
			}
			result.push('$' + tokenName + ': ' + 'var(--' + tokenName + ');');

			/** JSON Tokens */
			const tokenNameSplitted = tokenName.split('-');
			const category = tokenNameSplitted[2];
			const resultJsonObject: ITokenJsonObject = {
				id: binValues.destination + '_' + tokenName,
				label: tokenName,
				value:
					obj.values.alpha == 1
						? 'var(' + hexToCssVariable[obj.values.hex] + ')'
						: 'rgba(var(' +
						  hexToCssVariable[obj.values.hex] +
						  '-rgb), ' +
						  obj.values.alpha +
						  ')',
			};
			if (resultJsonTokens[category] === undefined) {
				resultJsonTokens[category] = [];
			}
			resultJsonTokens[category].push(resultJsonObject);
		}
	});
	resultVariables.push('}');

	if (result.length == 0) {
		throw new Error('ERROR! No colors to save');
	}

	fileWriter.arrayToFile(tokensFilesConfig.destinationPath + binValues.destination, result);
	fileWriter.jsonToFile(
		tokensFilesConfig.destinationPath + binValues.destinationJson,
		resultJsonTokens,
	);
	if (binValues.destinationVariables) {
		fileWriter.arrayToFile(
			tokensFilesConfig.destinationPath + binValues.destinationVariables,
			resultVariables,
		);
	}
};

const hexToRgb = (hex: string) => {
	if (typeof hex !== 'string' || [4, 7].includes(hex.length) === false) {
		return null;
	}

	if (hex.length === 4) {
		hex = hex + hex[1] + hex[2] + hex[3];
	}
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? '' +
				parseInt(result[1], 16) +
				', ' +
				parseInt(result[2], 16) +
				', ' +
				parseInt(result[3], 16)
		: null;
};

const SynchronizeSingleBin = async (bin) => {
	const response = await axios.get(tokensFilesConfig.jsonBinApiUrl + bin.id + '/latest');
	let hexToCssVariable;

	if (!response.data.record.colors) {
		throw new TypeError('Response structure has no colors!');
	}

	hexToCssVariable = ImportColorsRaw(
		bin.name,
		bin.files.colorsRaw,
		response.data.record.colors,
		bin.isTheme,
	);
	if (typeof hexToCssVariable !== 'object') {
		throw new TypeError('Colors in downloaded raw colors file are broken!');
	}

	if (bin.files.tokens) {
		ImportSingleTokenFile(
			bin.files.tokens,
			response.data.record.colors,
			hexToCssVariable,
			bin.name,
			bin.isTheme,
		);
	}
	console.log('The import was successful for bin: ' + bin.id);
};

const SynchronizeColorsTokens = async () => {
	tokensFilesConfig.bins.forEach((bin) => {
		SynchronizeSingleBin(bin);
	});
};

SynchronizeColorsTokens();
