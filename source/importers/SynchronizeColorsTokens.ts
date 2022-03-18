const fsT = require('fs');
const axios = require('axios');
const tokensFilesConfig = require('./configs/SynchronizeColorsTokensConfig.json');

interface Dict<V> {
	[key: string]: V;
}

interface IResultFileJsonObject {
	id: string;
	label: string;
	value: string;
}

interface IResultJsonObject extends IResultFileJsonObject {
	weight: number;
}

interface configFileObject {
	destination: string;
	destinationJson: string;
	destinationTokensVariables: string;
}

interface ITokenJsonObject {
	id: string;
	label: string;
	value: string;
}

const ImportColorsRaw = (
	name: string,
	binValues: configFileObject,
	jsonColors: Array<any>,
	isTheme: boolean,
) => {
	let hexToCssVariable: Object = {};

	let result: Array<string> = [];
	let temporaryColorsJson: Dict<Array<IResultJsonObject>> = {};
	let resultColorsJson: Dict<Array<IResultFileJsonObject>> = {};

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
			obj.values.hex = makeHexShortcut(obj.values.hex);

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
				weight: parseInt(colorNameSplitted[1]),
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
			const resultFileJsonObject: IResultFileJsonObject = {
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

	arrayToFile(tokensFilesConfig.destinationPath + binValues.destination, result);
	if (binValues.destinationJson) {
		jsonToFile(tokensFilesConfig.destinationPath + binValues.destinationJson, resultColorsJson);
	}

	return hexToCssVariable;
};

const ImportSingleTokenFile = (
	binValues: configFileObject,
	jsonColors: Array<any>,
	hexToCssVariable: Dict<string>,
) => {
	let result: Array<string> = [];
	let resultJsonTokens = {};
	let resultJsonVariables: Array<string> = [];

	resultJsonVariables.push(':root {');

	jsonColors.forEach((obj) => {
		const patternColorsToIgnore = /deprecated|Pattern|RAW|theme/i;
		if (obj.name.match(patternColorsToIgnore) === null) {
			let tokenName = obj.name;
			tokenName = tokenName.replace(/\//i, '-');
			obj.values.hex = makeHexShortcut(obj.values.hex);

			if (obj.values.alpha !== 1) {
				const rgb = hexToRgb(obj.values.hex);
				if (rgb && hexToCssVariable[rgb.toString()] === undefined) {
					throw new Error('No RGB color:' + rgb);
				}

				resultJsonVariables.push(
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
				resultJsonVariables.push(
					'--' + tokenName + ': var(' + hexToCssVariable[obj.values.hex] + ');',
				);
			}
			result.push('$' + tokenName + ': ' + 'var(--' + tokenName + ');');

			/** JSON Tokens */
			const tokenNameSplitted = tokenName.split('-');
			const category = tokenNameSplitted[1];
			const resultJsonObject: ITokenJsonObject = {
				id: binValues.destination + '_' + tokenName,
				label: tokenName,
				value:
					obj.values.alpha == 1
						? hexToCssVariable[obj.values.hex]
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
	resultJsonVariables.push('}');

	if (result.length == 0) {
		throw new Error('ERROR! No colors to save');
	}

	arrayToFile(tokensFilesConfig.destinationPath + binValues.destination, result);
	jsonToFile(tokensFilesConfig.destinationPath + binValues.destinationJson, resultJsonTokens);
	if (binValues.destinationTokensVariables) {
		arrayToFile(
			tokensFilesConfig.destinationPath + binValues.destinationTokensVariables,
			resultJsonVariables,
		);
	}
};

const makeHexShortcut = (hex: string) => {
	if (hex.split('').every((char) => char === hex[1] || char === '#')) {
		hex = '#' + `${hex[1]}${hex[2]}${hex[3]}`;
	}
	return hex;
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

const jsonToFile = (filepath: string, content: Object) => {
	let file = fsT.createWriteStream(filepath);
	file.on('error', function (err) {
		console.log(err);
	});
	file.write(JSON.stringify(content));
	file.end();
};

const SynchronizeSingleBin = async (bin) => {
	const response = await axios.get(tokensFilesConfig.jsonBinApiUrl + bin.id + '/latest');
	let hexToCssVariable;

	if (!response.data.colors) {
		throw new TypeError('Response structure has no colors!');
	}

	hexToCssVariable = ImportColorsRaw(
		bin.name,
		bin.files.colorsRaw,
		response.data.colors,
		bin.isTheme,
	);
	if (typeof hexToCssVariable !== 'object') {
		throw new TypeError('Colors in downloaded raw colors file are broken!');
	}

	if (bin.files.tokens) {
		ImportSingleTokenFile(bin.files.tokens, response.data.colors, hexToCssVariable);
	}
	console.log('The import was successful for bin: ' + bin.id);
};

const SynchronizeColorsTokens = async () => {
	tokensFilesConfig.bins.forEach((bin) => {
		SynchronizeSingleBin(bin);
	});
};

SynchronizeColorsTokens();
