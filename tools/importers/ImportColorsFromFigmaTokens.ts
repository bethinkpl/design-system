import { readFileSync } from 'fs';
import { makeHexShortcut, hexToRgb } from './helpers/colorsModifiers';
import { arrayToFile, jsonToFile } from './helpers/fileWriter';
import { cssFileFirstLine } from './helpers/modifiers';
import { ColorsBinFiles, Dict, IResultJsonObject, ITokenJsonObject } from './helpers/structures';

import defaultConfig from './configs/ImportColorsFromFigmaTokensConfig.json';

interface FigmaColorToken {
	$type: string;
	$value: string;
}

type FigmaColorEntry = FigmaColorToken | { [key: string]: FigmaColorEntry };

interface FigmaRawColorsJson {
	raw?: { [key: string]: FigmaColorEntry };
	// theme entries are flat (no nested groups); asymmetry with raw is intentional
	theme?: { [key: string]: FigmaColorToken };
}

interface FigmaTokensJson {
	[category: string]: { [tokenName: string]: FigmaColorToken };
}

const isAlphaVariant = (key: string): boolean => /[-_]\d+%$/.test(key);

/** Serialise with sorted keys at every level so insertion-order differences don't cause false mismatches. */
const sortedStringify = (obj: unknown): string =>
	JSON.stringify(obj, (_, val) =>
		val && typeof val === 'object' && !Array.isArray(val)
			? Object.fromEntries(Object.entries(val as object).sort())
			: val,
	);

const parseTokenReference = (reference: string): string => {
	if (!reference.startsWith('{')) {
		throw new Error(`Expected a token reference but got a literal value: ${reference}`);
	}
	const inner = reference.replace(/[{}]/g, '');
	const parts = inner.split('.');
	const group = parts[0];
	const colorKey = parts[parts.length - 1];
	const alphaMatch = colorKey.match(/[-_](\d+)%$/);

	if (alphaMatch) {
		const alpha = parseInt(alphaMatch[1]) / 100;
		const baseKey = colorKey.replace(/[-_]\d+%$/, '');
		const rgbVar = group === 'raw' ? `--raw-${baseKey}-rgb` : `--${baseKey}-rgb`;
		return `rgba(var(${rgbVar}), ${alpha})`;
	}

	const cssVar = group === 'raw' ? `--raw-${colorKey}` : `--${colorKey}`;
	return `var(${cssVar})`;
};

export const validateRawSections = (wnl: FigmaRawColorsJson, bw: FigmaRawColorsJson): void => {
	if (sortedStringify(wnl.raw) !== sortedStringify(bw.raw)) {
		throw new Error('Raw color sections in WNL and BW files differ!');
	}
};

export const ImportRawColors = (
	cfg: { destinationPath: string; files: ColorsBinFiles },
	rawColorsJson: FigmaRawColorsJson,
	themeName?: string,
): void => {
	const isTheme = !!themeName;
	const tab = isTheme ? '\t' : '';
	const scssResult: string[] = [cssFileFirstLine(isTheme, themeName)];
	const jsonResult: Dict<IResultJsonObject[]> = {};

	const addColor = (key: string, value: string, cssVarName: string, category: string): void => {
		const hex = makeHexShortcut(value);
		scssResult.push(`${tab}${cssVarName}: ${hex};`);

		const rgb = hexToRgb(hex);
		if (rgb === null) throw new Error(`Cannot convert hex to RGB: ${hex}`);
		scssResult.push(`${tab}${cssVarName}-rgb: ${rgb};`);

		if (!jsonResult[category]) jsonResult[category] = [];
		jsonResult[category].push({
			id: cfg.files.variablesRaw.destination + '_' + key,
			label: key,
			value: hex,
		});
	};

	if (!isTheme) {
		const processRawGroup = (
			group: { [key: string]: FigmaColorEntry },
			category: string,
		): void => {
			for (const [key, entry] of Object.entries(group)) {
				if (isAlphaVariant(key)) continue;

				if ('$type' in entry && entry.$type === 'color') {
					addColor(key, entry.$value, `--raw-${key}`, category);
				} else {
					processRawGroup(entry as { [key: string]: FigmaColorEntry }, key);
				}
			}
		};

		if (rawColorsJson.raw) {
			processRawGroup(rawColorsJson.raw, 'default');
		}
	} else {
		const themeGroup = rawColorsJson.theme;
		if (themeGroup) {
			for (const [key, entry] of Object.entries(themeGroup)) {
				if (isAlphaVariant(key)) continue;
				if (entry.$type === 'color') {
					addColor(key, entry.$value, `--${key}`, 'theme');
				}
			}
		}
	}

	scssResult.push('}');

	if (scssResult.length <= 2) throw new Error('No colors to save');

	arrayToFile(cfg.destinationPath + cfg.files.variablesRaw.destination, scssResult);
	jsonToFile(cfg.destinationPath + cfg.files.variablesRaw.destinationJson, jsonResult);
};

export const ImportTokens = (
	cfg: { destinationPath: string; files: ColorsBinFiles },
	tokensJson: FigmaTokensJson,
	themeName?: string,
): void => {
	const isTheme = !!themeName;
	const tab = isTheme ? '\t' : '';
	const variablesResult: string[] = [cssFileFirstLine(isTheme, themeName)];
	const scssResult: string[] = [];
	const jsonResult: Dict<ITokenJsonObject[]> = {};

	for (const [category, tokens] of Object.entries(tokensJson)) {
		for (const [tokenKey, tokenEntry] of Object.entries(tokens)) {
			if (tokenEntry.$type !== 'color') continue;

			const tokenName = `color-${category}-${tokenKey}`;
			const resolvedValue = parseTokenReference(tokenEntry.$value);

			variablesResult.push(`${tab}--${tokenName}: ${resolvedValue};`);
			scssResult.push(`$${tokenName}: var(--${tokenName});`);

			if (!jsonResult[category]) jsonResult[category] = [];
			jsonResult[category].push({
				id: cfg.files.tokens.destination + '_' + tokenName,
				label: tokenName,
				value: resolvedValue,
			});
		}
	}

	variablesResult.push('}');

	if (scssResult.length === 0) throw new Error('No tokens to save');

	arrayToFile(cfg.destinationPath + cfg.files.tokens.destinationVariables, variablesResult);
	arrayToFile(cfg.destinationPath + cfg.files.tokens.destination, scssResult);
	jsonToFile(cfg.destinationPath + cfg.files.tokens.destinationJson, jsonResult);
};

const run = async () => {
	const wnlColorsPath = process.argv[2];
	if (!wnlColorsPath) {
		console.error('Usage: importColors <wnl-raw.json> <bw-raw.json> <tokens.json>');
		return;
	}

	const bwColorsPath = process.argv[3];
	const tokensPath = process.argv[4];

	console.log('Importing colors...');

	const wnlColorsJson: FigmaRawColorsJson = JSON.parse(readFileSync(wnlColorsPath, 'utf8'));
	const bwColorsJson: FigmaRawColorsJson | null = bwColorsPath
		? JSON.parse(readFileSync(bwColorsPath, 'utf8'))
		: null;

	if (bwColorsJson) {
		validateRawSections(wnlColorsJson, bwColorsJson);
	}

	const baseCfg = {
		destinationPath: defaultConfig.destinationPath,
		files: defaultConfig.base.files,
	};
	ImportRawColors(baseCfg, wnlColorsJson);
	console.log('Base raw colors imported successfully.');

	const tokensJson: FigmaTokensJson | null = tokensPath
		? JSON.parse(readFileSync(tokensPath, 'utf8'))
		: null;

	if (tokensJson) {
		ImportTokens(baseCfg, tokensJson);
		console.log('Base tokens imported successfully.');
	}

	// Each theme maps to its source file by position: themes[0] → wnlColorsJson, themes[1] → bwColorsJson, etc.
	const themeColorsJsons: (FigmaRawColorsJson | null)[] = [wnlColorsJson, bwColorsJson];

	for (let i = 0; i < defaultConfig.themes.length; i++) {
		const theme = defaultConfig.themes[i];
		const themeColorsJson = themeColorsJsons[i] ?? null;
		if (!themeColorsJson) continue;

		const themeCfg = { destinationPath: defaultConfig.destinationPath, files: theme.files };

		ImportRawColors(themeCfg, themeColorsJson, theme.name);
		console.log(`Theme raw colors imported successfully for: ${theme.name}`);

		if (tokensJson) {
			ImportTokens(themeCfg, tokensJson, theme.name);
			console.log(`Theme tokens imported successfully for: ${theme.name}`);
		}
	}
};

run().catch(console.error);
