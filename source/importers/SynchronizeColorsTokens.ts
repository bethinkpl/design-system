const fsT = require('fs');
const axios = require("axios");
const tokensFilesConfig = JSON.parse(require('./configs/SynchronizeColorsTokens.json'));

interface IResultJsonObject {
	id: string;
	label: string;
	value: string;
	weight: number;
}

interface configFileObject {
	destination: string,
	destinationJson: string
}

interface ITokenJsonObject {
	id: string;
	label: string;
	value: string;
}

const ImportColorsRaw = (
	binValues: configFileObject,
	jsonSource: { data }
) => {
	let hexToCssVariable: Array<Object> = [];
	try {
		let result: Array<string> = [];
		let resultJson = {};

		jsonSource.data.colors.forEach(obj => {
			const patternIsRawColor = /RAW\/|theme/i;
			const patternDeprecated = /deprecated|Pattern/i;
			const patternTheme = /theme/i;
			if (obj.name.match(patternIsRawColor) && obj.name.match(patternDeprecated) === null) {
				const nameSplit = obj.name.split('/');
				let colorName = (nameSplit[2] === undefined) ? nameSplit[1] : nameSplit[2];

				obj.values.hex = obj.values.hex.replace(/FFFFFF/gi, function(){
					return 'fff';
				});

				const colorPrefix = obj.name.match(patternTheme) ? '--' : '--raw-';

				if (hexToCssVariable[obj.values.hex] === undefined) {
					hexToCssVariable[obj.values.hex] = colorPrefix + colorName;
				}

				result.push(colorPrefix + colorName + ': ' + obj.values.hex + ';');
				result.push(colorPrefix + colorName + '-rgb' + ': ' + hexToRgb(obj.values.hex) + ';');

				/** JSON object structure */
				colorName = colorName.replace(/--/i, '').replace(/raw-/i, '');
				const colorNameSplitted = colorName.split('-');
				const category = (colorNameSplitted[1] === undefined) ? 'default' : colorNameSplitted[0];
				const resultJsonObject: IResultJsonObject = {
					id: binValues.destination + '_' + colorName,
					label: colorName,
					value: obj.values.hex,
					weight: parseInt(colorNameSplitted[1])
				};

				if (resultJson[category] === undefined) {
					resultJson[category] = [];
				}
				resultJson[category].push(resultJsonObject);
				resultJson[category].sort((a,b) => a.weight - b.weight);
			}
		});
		saveColorFile(tokensFilesConfig.destinationPath + binValues.destination, result);
		saveColorFileJSON(tokensFilesConfig.destinationPath + binValues.destinationJson, resultJson);

	} catch (err) {
		console.error(err)
	}

	return hexToCssVariable;
};

const ImportSingleTokenFile = (
	binValues: configFileObject,
	jsonSource: { data },
	hexToCssVariable: Object,
) => {
	try {
		let result: Array<string> = [];
		let resultJson = {};

		jsonSource.data.colors.forEach(obj => {
			const patternDeprecated = /deprecated|Pattern|RAW|theme/i;
			if (obj.name.match(patternDeprecated) === null) {
				let tokenName = obj.name;
				tokenName = tokenName.replace(/\//i, '-');

				obj.values.hex = obj.values.hex.replace(/FFFFFF/gi, function(){
					return 'fff';
				});

				if (obj.values.alpha !== 1) {
					result.push('$' + tokenName + ': ' + 'rgba(var(' + hexToCssVariable[obj.values.hex] +'), ' + obj.values.alpha + ');');
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
		saveTokenFile(tokensFilesConfig.destinationPath + binValues.destination, result);
		saveTokenFileJSON(tokensFilesConfig.destinationPath + binValues.destinationJson, resultJson);
	} catch (err) {
		console.error(err)
	}
}

const saveTokenFileJSON  = (filepath: string, content: any) => {
	let file = fsT.createWriteStream(filepath);
	file.on('error', function(err) { console.log(err) });
	file.write(JSON.stringify(content));
	file.end();
}

const saveTokenFile = (filepath, content) => {
	let file = fsT.createWriteStream(filepath);
	file.on('error', function(err) { console.log(err) });
	content.forEach(function(v) { file.write(v.toLowerCase() + '\n'); });
	file.end();
}

const hexToRgb = (hex: string ) => {
	if (hex.length === 4) {
		hex = hex + hex[1] + hex[2] + hex[3];
	}
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? '' + parseInt(result[1], 16) + ', ' +
		parseInt(result[2], 16) + ', ' + parseInt(result[3], 16)  : null;
}

const saveColorFile = (filepath: string, content: any) => {
	let file = fsT.createWriteStream(filepath);
	file.on('error', function(err) { console.log(err) });
	file.write(':root {\n');
	content.forEach(function(v) { file.write('\t' + v.toLowerCase() + '\n'); });
	file.write('}\n')
	file.end();
}

const saveColorFileJSON  = (filepath: string, content: any) => {
	let file = fsT.createWriteStream(filepath);
	file.on('error', function(err) { console.log(err) });
	file.write(JSON.stringify(content));
	file.end();
}

const SynchronizeColorsTokens = () => {
	tokensFilesConfig.bins.forEach(bin =>{
		axios.get(tokensFilesConfig.jsonBinApiUrl + bin.id + '/latest')
		.then(function(response) {
			let hexToCssVariable;
			Object.keys(bin.files).forEach(key => {
				switch (key) {
					case "colorsRaw":
						hexToCssVariable = ImportColorsRaw(bin.files[key], response);
						break;
					case "tokens":
						ImportSingleTokenFile(bin.files[key], response, hexToCssVariable);
						break;
				}
			});
		});
	});
}

SynchronizeColorsTokens();