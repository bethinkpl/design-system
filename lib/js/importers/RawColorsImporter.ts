// import { Common } from './common';
//let common = new Common();
//common.hexToRgb('#000000');


const fsC = require('fs')
const colorsFilesConfig = JSON.parse(
	fsC.readFileSync('lib/js/importers/configs/rawColorsConfig.json', 'utf8')
	);

const ImportSingleColorFile = (sourceFile: string, destinationFile: string, isTheme: boolean) => {
	try {
		let result: Array<string> = [];
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

				const colorAssignmentParts = colorAssignment.split(':');
				result.push(colorAssignmentParts[0] + '-rgb' + ': ' + hexToRgb(colorAssignmentParts[1].substring(0, colorAssignmentParts[1].length - 1).trim()) + ';');
			}

			saveColorFile(colorsFilesConfig.destinationPath + destinationFile, result);
		}
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
		ImportSingleColorFile(file.source, file.destination, file.isTheme);
	});
}

RawColorsImporter();