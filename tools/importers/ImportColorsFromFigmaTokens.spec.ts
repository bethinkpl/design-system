import { afterAll, describe, expect, it } from 'vitest';
import { ImportRawColors, ImportTokens, validateRawSections } from './ImportColorsFromFigmaTokens';
import { promises, existsSync, unlinkSync } from 'fs';

const TEMP = 'tools/importers/temp/';

const testConfig = {
	destinationPath: TEMP,
	files: {
		variablesRaw: {
			destination: '_raw-test.scss',
			destinationJson: '_raw-test.json',
		},
		tokens: {
			destination: '_tokens-test.scss',
			destinationJson: '_tokens-test.json',
			destinationVariables: '_tokens-variables-test.scss',
		},
	},
};

const themeTestConfig = {
	destinationPath: TEMP,
	files: {
		variablesRaw: {
			destination: '_raw-wnl-test.scss',
			destinationJson: '_raw-wnl-test.json',
		},
		tokens: {
			destination: '_tokens-wnl-test.scss',
			destinationJson: '_tokens-wnl-test.json',
			destinationVariables: '_tokens-wnl-variables-test.scss',
		},
	},
};

const ALL_TEMP_FILES = [
	...Object.values(testConfig.files.variablesRaw),
	...Object.values(testConfig.files.tokens),
	...Object.values(themeTestConfig.files.variablesRaw),
	...Object.values(themeTestConfig.files.tokens),
].map((f) => TEMP + f);

afterAll(() => {
	for (const file of ALL_TEMP_FILES) {
		if (existsSync(file)) unlinkSync(file);
	}
});

const rawColorsFixture = {
	raw: {
		black: { $type: 'color', $value: '#0c1726' },
		'black-90%': { $type: 'color', $value: '#0c1726e5' }, // alpha — must be skipped
		'black-6%': { $type: 'color', $value: '#0c17260f' }, // alpha — must be skipped
		white: { $type: 'color', $value: '#ffffff' }, // should be shortened to #fff
		'white_0%': { $type: 'color', $value: '#ffffff00' }, // alpha — must be skipped
		'white-12%': { $type: 'color', $value: '#ffffff1f' }, // alpha — must be skipped
		gray: {
			'gray-50': { $type: 'color', $value: '#f7f7f9' },
			'gray-700': { $type: 'color', $value: '#636c84' },
			'gray-700-12%': { $type: 'color', $value: '#636c841f' }, // alpha — must be skipped
			'gray-700-0%': { $type: 'color', $value: '#636c8400' }, // alpha — must be skipped
			'gray-900': { $type: 'color', $value: '#343c50' },
		},
	},
	theme: {
		'theme-500': { $type: 'color', $value: '#078f96' },
		'theme-500-12%': { $type: 'color', $value: '#078f961f' }, // alpha — must be skipped
		'theme-500-0%': { $type: 'color', $value: '#078f9600' }, // alpha — must be skipped
		'theme-100': { $type: 'color', $value: '#d5eeef' },
	},
};

const tokensFixture = {
	default: {
		text: { $type: 'color', $value: '{raw.black}' },
		overlay: { $type: 'color', $value: '{raw.black-90%}' },
		background: { $type: 'color', $value: '{raw.white}' },
		'background-ghost': { $type: 'color', $value: '{raw.white_0%}' },
		'background-ghost-hovered': { $type: 'color', $value: '{raw.white-12%}' },
	},
	neutral: {
		text: { $type: 'color', $value: '{raw.gray.gray-900}' },
		'background-ghost': { $type: 'color', $value: '{raw.gray.gray-700-0%}' },
		'background-ghost-hovered': { $type: 'color', $value: '{raw.gray.gray-700-12%}' },
	},
	primary: {
		'background-strong': { $type: 'color', $value: '{theme.theme-500}' },
		ripple: { $type: 'color', $value: '{theme.theme-500-12%}' },
		'background-ghost': { $type: 'color', $value: '{theme.theme-500-0%}' },
	},
};

describe('ImportColorsFromFigmaTokens', () => {
	it('ImportRawColors generates correct _raw.scss and _raw.json', async () => {
		ImportRawColors(testConfig, rawColorsFixture);
		await new Promise((r) => setTimeout(r, 1));

		// --- _raw.scss ---
		const scssContent = await promises.readFile(
			testConfig.destinationPath + testConfig.files.variablesRaw.destination,
			'utf8',
		);
		const scssLines = scssContent.split(/\r?\n/);

		expect(scssLines[0]).toBe(':root {');
		expect(scssLines[1]).toBe('\t--raw-black: #0c1726;');
		expect(scssLines[2]).toBe('\t--raw-black-rgb: 12, 23, 38;');
		expect(scssContent).toContain('\t--raw-white: #fff;');
		expect(scssContent).toContain('\t--raw-white-rgb: 255, 255, 255;');
		expect(scssContent).toContain('\t--raw-gray-50: #f7f7f9;');
		expect(scssContent).toContain('\t--raw-gray-900: #343c50;');

		// default theme vars (from WNL) are included in the base _raw.scss
		expect(scssContent).toContain('\t--theme-500: #078f96;');
		expect(scssContent).toContain('\t--theme-500-rgb: 7, 143, 150;');
		expect(scssContent).toContain('\t--theme-100: #d5eeef;');

		// alpha variants must not appear
		expect(scssContent).not.toContain('black-90%');
		expect(scssContent).not.toContain('black-6%');
		expect(scssContent).not.toContain('white_0%');
		expect(scssContent).not.toContain('white-12%');
		expect(scssContent).not.toContain('gray-700-12%');
		expect(scssContent).not.toContain('gray-700-0%');
		expect(scssContent).not.toContain('theme-500-12%');
		expect(scssContent).not.toContain('theme-500-0%');

		// --- _raw.json ---
		const jsonContent = await promises.readFile(
			testConfig.destinationPath + testConfig.files.variablesRaw.destinationJson,
			'utf8',
		);
		const json = JSON.parse(jsonContent);

		expect(json.default.find((c: { label: string }) => c.label === 'black')).toMatchObject({
			label: 'black',
			value: '#0C1726',
		});
		expect(json.default.find((c: { label: string }) => c.label === 'white')).toMatchObject({
			label: 'white',
			value: '#FFF',
		});
		expect(json.gray.find((c: { label: string }) => c.label === 'gray-50')).toMatchObject({
			label: 'gray-50',
			value: '#F7F7F9',
		});

		// default theme vars (WNL) are present in base _raw.json
		expect(json.theme.find((c: { label: string }) => c.label === 'theme-500')).toMatchObject({
			label: 'theme-500',
			value: '#078F96',
		});

		// no alpha variant entries in JSON
		const allLabels: string[] = [...json.default, ...json.gray, ...json.theme].map(
			(c: { label: string }) => c.label,
		);
		expect(allLabels.every((label) => !label.includes('%'))).toBe(true);
	});

	it('ImportTokens generates correct _tokens-variables.scss, _tokens.scss, and _tokens.json', async () => {
		ImportTokens(testConfig, tokensFixture);
		await new Promise((r) => setTimeout(r, 1));

		// --- _tokens-variables.scss ---
		const variablesContent = await promises.readFile(
			testConfig.destinationPath + testConfig.files.tokens.destinationVariables,
			'utf8',
		);
		const variablesLines = variablesContent.split(/\r?\n/);

		expect(variablesLines[0]).toBe(':root {');
		expect(variablesContent).toContain('\t--color-default-text: var(--raw-black);');
		expect(variablesContent).toContain(
			'\t--color-default-overlay: rgba(var(--raw-black-rgb), 0.9);',
		);
		expect(variablesContent).toContain('\t--color-default-background: var(--raw-white);');
		expect(variablesContent).toContain(
			'\t--color-default-background-ghost: rgba(var(--raw-white-rgb), 0);',
		);
		expect(variablesContent).toContain(
			'\t--color-default-background-ghost-hovered: rgba(var(--raw-white-rgb), 0.12);',
		);
		expect(variablesContent).toContain('\t--color-neutral-text: var(--raw-gray-900);');
		expect(variablesContent).toContain(
			'\t--color-neutral-background-ghost: rgba(var(--raw-gray-700-rgb), 0);',
		);
		expect(variablesContent).toContain(
			'\t--color-neutral-background-ghost-hovered: rgba(var(--raw-gray-700-rgb), 0.12);',
		);
		expect(variablesContent).toContain(
			'\t--color-primary-background-strong: var(--theme-500);',
		);
		expect(variablesContent).toContain(
			'\t--color-primary-ripple: rgba(var(--theme-500-rgb), 0.12);',
		);
		expect(variablesContent).toContain(
			'\t--color-primary-background-ghost: rgba(var(--theme-500-rgb), 0);',
		);

		// --- _tokens.scss ---
		const scssContent = await promises.readFile(
			testConfig.destinationPath + testConfig.files.tokens.destination,
			'utf8',
		);

		expect(scssContent).toContain('$color-default-text: var(--color-default-text);');
		expect(scssContent).toContain('$color-default-overlay: var(--color-default-overlay);');
		expect(scssContent).toContain(
			'$color-neutral-background-ghost: var(--color-neutral-background-ghost);',
		);
		expect(scssContent).toContain(
			'$color-primary-background-strong: var(--color-primary-background-strong);',
		);

		// --- _tokens.json ---
		const jsonContent = await promises.readFile(
			testConfig.destinationPath + testConfig.files.tokens.destinationJson,
			'utf8',
		);
		const json = JSON.parse(jsonContent);

		expect(json.text[0].label).toBe('color-default-text');
		expect(json.text[0].value).toBe('var(--raw-black)');
		expect(
			json.overlay.find(
				(t: { value: string }) => t.value === 'rgba(var(--raw-black-rgb), 0.9)',
			),
		).toBeDefined();
		expect(
			json.text.find((t: { label: string }) => t.label === 'color-neutral-text'),
		).toMatchObject({ label: 'color-neutral-text', value: 'var(--raw-gray-900)' });
		expect(
			json.background.find(
				(t: { label: string }) => t.label === 'color-primary-background-strong',
			),
		).toMatchObject({ label: 'color-primary-background-strong', value: 'var(--theme-500)' });
	});

	it('ImportRawColors (theme mode) generates correct _raw-wnl.scss and _raw-wnl.json', async () => {
		ImportRawColors(themeTestConfig, rawColorsFixture, 'wnl');
		await new Promise((r) => setTimeout(r, 1));

		// --- _raw-wnl.scss ---
		const scssContent = await promises.readFile(
			themeTestConfig.destinationPath + themeTestConfig.files.variablesRaw.destination,
			'utf8',
		);
		const scssLines = scssContent.split(/\r?\n/);

		expect(scssLines[0]).toBe('.-ds-theme-wnl {');
		expect(scssContent).toContain('\t--theme-500: #078f96;');
		expect(scssContent).toContain('\t--theme-500-rgb: 7, 143, 150;');
		expect(scssContent).toContain('\t--theme-100: #d5eeef;');

		// must not contain raw- prefix entries
		expect(scssContent).not.toContain('--raw-');

		// alpha variants must not appear
		expect(scssContent).not.toContain('theme-500-12%');
		expect(scssContent).not.toContain('theme-500-0%');

		// --- _raw-wnl.json ---
		const jsonContent = await promises.readFile(
			themeTestConfig.destinationPath + themeTestConfig.files.variablesRaw.destinationJson,
			'utf8',
		);
		const json = JSON.parse(jsonContent);

		expect(json.theme.find((c: { label: string }) => c.label === 'theme-500')).toMatchObject({
			label: 'theme-500',
			value: '#078F96',
		});
		expect(json.theme.every((c: { label: string }) => !c.label.includes('%'))).toBe(true);
	});

	it('ImportTokens (theme mode) generates correct _tokens-wnl-variables.scss, _tokens-wnl.scss, and _tokens-wnl.json', async () => {
		ImportTokens(themeTestConfig, tokensFixture, 'wnl');
		await new Promise((r) => setTimeout(r, 1));

		// --- _tokens-wnl-variables.scss ---
		const variablesContent = await promises.readFile(
			themeTestConfig.destinationPath + themeTestConfig.files.tokens.destinationVariables,
			'utf8',
		);
		const variablesLines = variablesContent.split(/\r?\n/);

		expect(variablesLines[0]).toBe('.-ds-theme-wnl {');
		// only theme-referencing tokens should appear
		expect(variablesContent).toContain(
			'\t--color-primary-background-strong: var(--theme-500);',
		);
		expect(variablesContent).toContain(
			'\t--color-primary-ripple: rgba(var(--theme-500-rgb), 0.12);',
		);
		// raw-referencing tokens must not appear in theme file
		expect(variablesContent).not.toContain('--color-default-text');
		expect(variablesContent).not.toContain('--color-neutral-text');

		// --- _tokens-wnl.scss ---
		const scssContent = await promises.readFile(
			themeTestConfig.destinationPath + themeTestConfig.files.tokens.destination,
			'utf8',
		);

		expect(scssContent).toContain(
			'$color-primary-background-strong: var(--color-primary-background-strong);',
		);
		expect(scssContent).not.toContain('$color-default-text');

		// --- _tokens-wnl.json ---
		const jsonContent = await promises.readFile(
			themeTestConfig.destinationPath + themeTestConfig.files.tokens.destinationJson,
			'utf8',
		);
		const json = JSON.parse(jsonContent);

		expect(
			json.background.find(
				(t: { label: string }) => t.label === 'color-primary-background-strong',
			),
		).toMatchObject({ label: 'color-primary-background-strong', value: 'var(--theme-500)' });
		expect(json.text).toBeUndefined();
	});

	it('validateRawSections does not throw when raw sections are equal', () => {
		const wnl = { raw: { black: { $type: 'color', $value: '#0c1726' } } };
		const bw = { raw: { black: { $type: 'color', $value: '#0c1726' } } };
		expect(() => validateRawSections(wnl, bw)).not.toThrow();
	});

	it('validateRawSections throws when raw sections differ', () => {
		const wnl = { raw: { black: { $type: 'color', $value: '#0c1726' } } };
		const bw = { raw: { black: { $type: 'color', $value: '#000000' } } };
		expect(() => validateRawSections(wnl, bw)).toThrow(
			'Raw color sections in WNL and BW files differ!',
		);
	});
});
