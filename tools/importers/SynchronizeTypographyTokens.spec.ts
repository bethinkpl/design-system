import {
	ImportTypographyVariables,
	ImportTypographyTokens,
	requestForBin,
} from './SynchronizeTypographyTokens';
const fs = require('fs');
const tokensFilesConfig = require('./configs/FakeSynchronizeTypographyTokensConfig.json');

describe('Typography Tokens', () => {
	it('check config & create files', async () => {
		let requestResponse = await requestForBin(
			tokensFilesConfig.bin,
			tokensFilesConfig.jsonBinApiUrl,
		);

		ImportTypographyVariables(
			tokensFilesConfig,
			requestResponse.data.record.values.LMSDesignSystemTypography,
		);

		ImportTypographyTokens(
			tokensFilesConfig,
			requestResponse.data.record.values.LMSDesignSystemTypography,
		);
	});
	it('check variable SCSS file', async () => {
		await new Promise((r) => setTimeout(r, 500));
		let variableFileRaw = await fs.promises.readFile(
			tokensFilesConfig.destinationPath +
				tokensFilesConfig.bin.files.variablesRaw.destinationVariables,
			'utf8',
		);
		let variableFileSplit = variableFileRaw.split(/\r?\n/);
		expect(variableFileSplit[0]).toBe(
			'$typography-line-height-base: var(--typography-line-height-base);',
		);
	});

	it('check variable CSS file', async () => {
		let variableFileCss = await fs.promises.readFile(
			tokensFilesConfig.destinationPath +
				tokensFilesConfig.bin.files.variablesRaw.destinationVariablesCss,
			'utf8',
		);
		let variableFileCssSplit = variableFileCss.split(/\r?\n/);
		expect(variableFileCssSplit[0]).toBe(':root {');
		expect(variableFileCssSplit[1]).toBe('\t--typography-line-height-base: 16px;');
	});

	it('check variable json file', async () => {
		let variableFileJson = await fs.promises.readFile(
			tokensFilesConfig.destinationPath +
				tokensFilesConfig.bin.files.variablesRaw.destinationVariablesCssJson,
			'utf8',
		);
		let variableFileSplit = JSON.parse(variableFileJson);
		expect(variableFileSplit.fontSize[0].label).toBe('typography-font-size-base');
		expect(variableFileSplit.fontSize[0].value).toBe('16px');
	});

	it('check tokens SCSS file', async () => {
		let variableFileTokens = await fs.promises.readFile(
			tokensFilesConfig.destinationPath + tokensFilesConfig.bin.files.tokens.destination,
			'utf8',
		);
		let variableFileSplit = variableFileTokens.split(/\r?\n/);
		expect(variableFileSplit[0]).toBe("@import 'variables';");
		expect(variableFileSplit[3]).toBe('\t--token: display-heading-m-regular;');
	});

	it('check tokens JSON file', async () => {
		let variableFileJsonTokens = await fs.promises.readFile(
			tokensFilesConfig.destinationPath + tokensFilesConfig.bin.files.tokens.destinationJson,
			'utf8',
		);
		let variableFileSplit = JSON.parse(variableFileJsonTokens);
		expect(variableFileSplit.DisplayHeading[0].token).toBe('display-heading-m-regular');
		expect(variableFileSplit.DisplayHeading[0].attributes).toContain('font-size-4xl');
	});
});
