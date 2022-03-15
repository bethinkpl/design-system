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
}

interface ITokenJsonObject {
	id: string;
	label: string;
	value: string;
}

const ImportColorsRaw = (binValues: configFileObject, jsonColors: Array<any>) => {
	let hexToCssVariable: Object = {};
	try {
		let result: Array<string> = [];
		let temporaryColorsJson: Dict<Array<IResultJsonObject>> = {};
		let resultColorsJson: Dict<Array<IResultFileJsonObject>> = {};

		result.push(':root {');

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
				console.log(colorName);
				obj.values.hex = obj.values.hex.replace(/FFFFFF/gi, function () {
					return 'fff';
				});

				const colorFinalName = obj.name.match(patternTheme)
					? '--' + colorName
					: '--raw-' + colorName;

				if (hexToCssVariable[obj.values.hex] === undefined) {
					hexToCssVariable[obj.values.hex] = colorFinalName;
				}

				result.push(colorFinalName + ': ' + obj.values.hex + ';');

				const rgb = hexToRgb(obj.values.hex);
				if (rgb !== null) {
					result.push(colorFinalName + '-rgb' + ': ' + rgb + ';');
				}

				/** JSON object structure */
				const colorNameSplitted = colorName.split('-');
				const category =
					colorNameSplitted[1] === undefined ? 'default' : colorNameSplitted[0];
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

		result.push('}\n');

		if (result.length === 2) {
			throw new Error('No colors to save');
		}

		Object.entries<Array<IResultJsonObject>>(temporaryColorsJson).forEach(
			([category, colors]) => {
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
			},
		);

		arrayToFile(tokensFilesConfig.destinationPath + binValues.destination, result);
		jsonToFile(tokensFilesConfig.destinationPath + binValues.destinationJson, resultColorsJson);
	} catch (err) {
		console.error(err);
	}

	return hexToCssVariable;
};

const ImportSingleTokenFile = (
	binValues: configFileObject,
	jsonColors: Array<any>,
	hexToCssVariable: Object,
) => {
	try {
		let result: Array<string> = [];
		let resultJson = {};

		jsonColors.forEach((obj) => {
			const patternColorsToIgnore = /deprecated|Pattern|RAW|theme/i;
			if (obj.name.match(patternColorsToIgnore) === null) {
				let tokenName = obj.name;
				tokenName = tokenName.replace(/\//i, '-');

				if (obj.values.hex.split('').every((char) => char === obj.values.hex[0])) {
					obj.values.hex = `${obj.values.hex[0]}${obj.values.hex[1]}${obj.values.hex[2]}`;
				}

				if (obj.values.alpha !== 1) {
					result.push(
						'$' +
							tokenName +
							': ' +
							'rgba(var(' +
							hexToCssVariable[obj.values.hex] +
							'-rgb), ' +
							obj.values.alpha +
							');',
					);
				} else {
					result.push('$' + tokenName + ': ' + hexToCssVariable[obj.values.hex] + ';');
				}

				/** JSON object structure */
				const tokenNameSplitted = tokenName.split('-');
				const category = tokenNameSplitted[1];
				const resultJsonObject: ITokenJsonObject = {
					id: binValues.destination + '_' + tokenName,
					label: tokenName,
					value: hexToCssVariable[obj.values.hex],
				};
				if (resultJson[category] === undefined) {
					resultJson[category] = [];
				}
				resultJson[category].push(resultJsonObject);
			}
		});

		if (result.length == 0) {
			throw new Error('No colors to save');
		}

		arrayToFile(tokensFilesConfig.destinationPath + binValues.destination, result);
		jsonToFile(tokensFilesConfig.destinationPath + binValues.destinationJson, resultJson);
	} catch (err) {
		console.error(err);
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
	try {
		const response = await axios.get(tokensFilesConfig.jsonBinApiUrl + bin.id + '/latest');
		let hexToCssVariable;

		if (!response.data.colors) {
			throw new TypeError('Response structure has no colors!');
		}

		hexToCssVariable = ImportColorsRaw(bin.files.colorsRaw, response.data.colors);
		if (typeof hexToCssVariable !== 'object') {
			throw new TypeError('Colors in downloaded raw colors file are broken!');
		}

		ImportSingleTokenFile(bin.files.tokens, response.data.colors, hexToCssVariable);
	} catch (err) {
		console.error(err);
	}
};

const SynchronizeColorsTokens = async () => {
	tokensFilesConfig.bins.forEach((bin) => {
		SynchronizeSingleBin(bin);
	});
};

SynchronizeColorsTokens();
