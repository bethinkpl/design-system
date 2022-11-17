import { WriteStream, createWriteStream } from 'fs';

export const arrayToFile = (filepath: string, content: Array<string>) => {
	let file: WriteStream = createWriteStream(filepath);
	file.on('error', function (err) {
		console.error(err);
	});

	const noIndentationRules: RegExp = /root|}/i;
	let hasFileIndentation = false;
	content.forEach(function (v) {
		if (v.match(noIndentationRules)) {
			hasFileIndentation = true;
			file.write(v.toLowerCase() + '\n');
		} else {
			const hasLineIndentation = hasFileIndentation ? '\t' : '';
			file.write(hasLineIndentation + v.toLowerCase() + '\n');
		}
	});
	file.end();
};

export const arrayToMixinFile = (filepath: string, content: Array<string>) => {
	let file: WriteStream = createWriteStream(filepath);
	file.on('error', function (err) {
		console.error(err);
	});

	const noIndentationRules: RegExp = /@mixin|@import|}/i;

	content.forEach(function (v) {
		let hasLineIndentation: boolean = true;
		if (v.match(noIndentationRules)) {
			hasLineIndentation = false;
		}
		file.write(hasLineIndentation ? '\t' + v + '\n' : v + '\n');
	});
	file.end();
};

export const jsonToFile = (filepath: string, content: Object) => {
	let file = createWriteStream(filepath);
	file.on('error', function (err) {
		console.error(err);
	});
	file.write(JSON.stringify(content));
	file.end();
};
