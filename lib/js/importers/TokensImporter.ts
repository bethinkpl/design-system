const fsT = require('fs');
const axios = require("axios");
const tokensFilesConfig = JSON.parse(
	fsT.readFileSync('lib/js/importers/configs/tokensConfig.json', 'utf8')
);

interface ITokenJsonObject {
	id: string;
	label: string;
	value: string;
}

const ImportSingleTokenFile = (
	binId: string,
	destinationFile: string,
	destinationFileJson: string
) => {
	try {
		let result: Array<string> = [];
		let resultJson = {};
		// fsT.readFileSync(tokensFilesConfig.sourcePath + binId, 'utf8');

		axios.get(tokensFilesConfig.jsonBinApiUrl + binId + '/latest')
			.then(function (response) {
				response.data.nodes.forEach(obj => {
					let tokenColor = obj.fill.from.name;
					let tokenName = obj.fill.to.name;
					const calculatedOpacity = obj.fill.transforms?.opacity ? (1 - obj.fill.transforms.opacity * -1 * 0.01) : null;
					const tokenOpacity = (typeof calculatedOpacity === "number") ? parseFloat(calculatedOpacity.toFixed(2).toString()) : null;
					tokenColor = tokenColor.replace(/gray\/gray|green\/green|gold\/gold|orange\/orange|red\/red|violet\/violet|indigo\/indigo|blue\/blue|FFF\/FFF|theme\/theme/gi, function(matched){
						return tokensFilesConfig.doubleStringsMap[matched];
					}).replace(/\//i, '-');
					let tokenValue = (typeof calculatedOpacity === "number") ? 'rgba(var(--' + tokenColor +'), ' + tokenOpacity + ')' : '--' + tokenColor;

					tokenValue = tokenValue.toLowerCase();
					tokenName = tokenName.replace(/\//i, '-');
					result.push('$' + tokenName + ': ' + tokenValue + ';');

					/** JSON object structure */
						// const colorName = tokenName;//colorAssignmentParts[0].replace(/--raw-/i, '');
					const tokenNameSplitted = tokenName.split('-');
					const category = tokenNameSplitted[1];
					const resultJsonObject: ITokenJsonObject = {
						id: binId + '_' + tokenName,
						label: tokenName,
						value: tokenValue,
					};
					if (resultJson[category] === undefined) {
						resultJson[category] = [];
					}
					resultJson[category].push(resultJsonObject);
				});
				saveTokenFile(tokensFilesConfig.destinationPath + destinationFile, result);
				saveTokenFileJSON(tokensFilesConfig.destinationPath + destinationFileJson, resultJson);
			})


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

const TokensImporter = () => {
	tokensFilesConfig.files.forEach(file => {
		ImportSingleTokenFile(file.binId, file.destination, file.destinationJson);
	});
}

TokensImporter();