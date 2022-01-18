const fsT = require('fs')
const tokensFilesConfig = JSON.parse(
	fsT.readFileSync('lib/js/importers/configs/tokensConfig.json', 'utf8')
);

const ImportSingleTokenFile = (sourceFile: string, destinationFile: string) => {
	try {
		let result: Array<string> = [];
		const data = fsT.readFileSync(tokensFilesConfig.sourcePath + sourceFile, 'utf8');
		const nodesRoot = JSON.parse(data);
		nodesRoot.nodes.forEach(obj => {
			let tokenColor = obj.fill.from.name;
			const tokenName = obj.fill.to.name;
			const calculatedOpacity = obj.fill.transforms?.opacity ? (1 - obj.fill.transforms.opacity * -1 * 0.01) : null;
			const tokenOpacity = (typeof calculatedOpacity === "number") ? parseFloat(calculatedOpacity.toFixed(2).toString()) : null;
			tokenColor = tokenColor.replace(/gray\/gray|green\/green|gold\/gold|orange\/orange|red\/red|violet\/violet|indigo\/indigo|blue\/blue|FFF\/FFF|theme\/theme/gi, function(matched){
				return tokensFilesConfig.doubleStringsMap[matched];
			}).replace(/\//i, '-');
			const tokenValue = (typeof calculatedOpacity === "number") ? 'rgba(var(--' + tokenColor +'), ' + tokenOpacity + ')' : '--' + tokenColor;

			result.push('$' + tokenName.replace(/\//i, '-') + ': ' + tokenValue + ';');
		});
		saveTokenFile(tokensFilesConfig.destinationPath + destinationFile, result);
	} catch (err) {
		console.error(err)
	}
}

const saveTokenFile = (filepath, content) => {
	let file = fsT.createWriteStream(filepath);
	file.on('error', function(err) { console.log(err) });
	content.forEach(function(v) { file.write(v.toLowerCase() + '\n'); });
	file.end();
}


const TokensImporter = () => {
	tokensFilesConfig.files.forEach(file => {
		ImportSingleTokenFile(file.source, file.destination);
	});
}

TokensImporter();