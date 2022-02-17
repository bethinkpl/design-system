// import { Common } from './common';
//let common = new Common();
//common.hexToRgb('#000000');


const fsC = require('fs')
const colorsFilesConfig = JSON.parse(
	fsC.readFileSync('lib/js/importers/configs/rawColorsConfig.json', 'utf8')
	);
interface IResultJsonObject {
	id: string;
	label: string;
	value: string;
	weight: number;
}

const ImportSingleColorFile = (
	sourceFile: string,
	destinationFile: string,
	destinationFileJson: string,
	isTheme: boolean) => {
	try {
		let result: Array<string> = [];
		let resultJson = {};
		const data = fsC.readFileSync(colorsFilesConfig.sourcePath + sourceFile, 'utf8');
		const lines = data.split('\n');
		for (let line = 0; line < lines.length; line++){
			const patternRaw = isTheme ? /theme/i : /r-a-w/i;
			const patternIsColor = /--/i;
			const patternDeprecated = /deprecated/i;
			let colorAssignment = lines[line];

			if (colorAssignment.match(patternRaw) !== null
				&& colorAssignment.match(patternDeprecated) === null
				&& colorAssignment.match(patternIsColor) !== null) {
				colorAssignment = colorAssignment.replace(/r-a-w-/i, 'raw');
				colorAssignment =  isTheme ?
					colorAssignment.replace(/--theme--theme/gi, function(matched){
						return colorsFilesConfig.doubleStringsMap[matched];
					}) :
					colorAssignment.replace(/graygray|greengreen|goldgold|orangeorange|redred|violetviolet|indigoindigo|blueblue|FFFFFF|themetheme/gi, function(matched){
						return colorsFilesConfig.doubleStringsMap[matched];
					});
				result.push(colorAssignment);

				/** SCSS row structure */
				const colorAssignmentParts = colorAssignment.split(':');
				result.push(colorAssignmentParts[0] + '-rgb' + ': ' + hexToRgb(colorAssignmentParts[1].substring(0, colorAssignmentParts[1].length - 1).trim()) + ';');


				/** JSON object structure */
				const colorName = colorAssignmentParts[0].replace(/--/i, '').replace(/raw-/i, '');
				const colorNameSplitted = colorName.split('-');
				const category = (colorNameSplitted[1] === undefined) ? 'default' : colorNameSplitted[0];
				colorAssignmentParts[1] = colorAssignmentParts[1].replace(';','').replace(' ','')

				const resultJsonObject: IResultJsonObject = {
					id: sourceFile + '_' + colorName,
					label: colorName,
					value: colorAssignmentParts[1],
					weight: colorNameSplitted[3] ? parseInt(colorNameSplitted[3]) : parseInt(colorNameSplitted[1])
				};
				if (resultJson[category] === undefined) {
					resultJson[category] = [];
				}
				resultJson[category].push(resultJsonObject);
				resultJson[category].sort((a,b) => (parseInt(a.weight) > parseInt(b.weight)) ? 1 : ((parseInt(b.weight) > parseInt(a.weight)) ? -1 : 0))
			}
		}

		saveColorFile(colorsFilesConfig.destinationPath + destinationFile, result);
		saveColorFileJSON(colorsFilesConfig.destinationPath + destinationFileJson, resultJson);
	} catch (err) {
		console.error(err)
	}
}

const hexToRgb = (hex: string ) => {
	if (hex.length === 4) {
		hex = hex + hex[1] + hex[2] + hex[3];
	}
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? '' + parseInt(result[1], 16) + ', ' +
		parseInt(result[2], 16) + ', ' + parseInt(result[3], 16)  : null;
}

const saveColorFileJSON  = (filepath: string, content: any) => {
	let file = fsC.createWriteStream(filepath);
	file.on('error', function(err) { console.log(err) });
	file.write(JSON.stringify(content));
	file.end();
}

const saveColorFile = (filepath: string, content: any) => {
	let file = fsC.createWriteStream(filepath);
	file.on('error', function(err) { console.log(err) });
	file.write(':root {\n');
	content.forEach(function(v) { file.write('\t' + v.toLowerCase() + '\n'); });
	file.write('}\n')
	file.end();
}

const RawColorsImporter = () => {
	colorsFilesConfig.files.forEach(file => {
		ImportSingleColorFile(file.source, file.destination, file.destinationJson, file.isTheme);
	});
}

RawColorsImporter();