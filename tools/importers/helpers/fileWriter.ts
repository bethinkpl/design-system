import { WriteStream, createWriteStream } from 'fs';

/** Resolves once the stream has fully flushed to disk; rejects on write error. */
const finished = (file: WriteStream): Promise<void> =>
	new Promise((resolve, reject) => {
		file.on('error', reject);
		file.on('finish', resolve);
	});

export const arrayToFile = (filepath: string, content: Array<string>): Promise<void> => {
	let file: WriteStream = createWriteStream(filepath);
	const done = finished(file);

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
	return done;
};

export const arrayToMixinFile = (filepath: string, content: Array<string>): Promise<void> => {
	let file: WriteStream = createWriteStream(filepath);
	const done = finished(file);

	const noIndentationRules: RegExp = /@mixin|@import|}/i;

	content.forEach(function (v) {
		let hasLineIndentation: boolean = true;
		if (v.match(noIndentationRules)) {
			hasLineIndentation = false;
		}
		file.write(hasLineIndentation ? '\t' + v + '\n' : v + '\n');
	});
	file.end();
	return done;
};

export const jsonToFile = (filepath: string, content: Object): Promise<void> => {
	let file = createWriteStream(filepath);
	const done = finished(file);
	file.write(JSON.stringify(content));
	file.end();
	return done;
};
