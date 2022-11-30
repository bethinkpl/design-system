export interface Dict<V> {
	[key: string]: V;
}

export interface JsonAttributeValues {
	value: string;
	type: string;
}

export interface JsonAttribute<JsonAttributeValues> {
	[key: string]: JsonAttributeValues;
}

export interface ITokenJsonObject {
	id: string;
	label: string;
	labelFull: string;
	value: string;
	base: number | null;
	ratio: number | null;
}

export interface IResultJsonObject {
	id: string;
	label: string;
	labelFull: string;
	value: string;
}

export interface TypographyBinFiles {
	variablesRaw: {
		destinationVariables: string;
		destinationVariablesCss: string;
		destinationVariablesCssJson: string;
	};
	tokens: {
		destination: string;
		destinationJson: string;
	};
}

export interface TypographyConfigFileBin {
	id: string;
	files: TypographyBinFiles;
}

export interface TypographyConfigFile {
	destinationPath: string;
	jsonBinApiUrl: string;
	bin: TypographyConfigFileBin;
}

export interface ColorsBinFiles {
	variablesRaw: {
		destination: string;
		destinationJson: string;
	};
	tokens: {
		destination: string;
		destinationJson: string;
		destinationVariables: string;
	};
}

export interface ColorsConfigFileBin {
	name: string;
	id: string;
	files: ColorsBinFiles;
	isTheme: boolean;
}

export interface ITypographyToken {
	id: string;
	category: string;
	token: string;
	tokenCamelCase: string;
	attributes: Array<string>;
	attributesRaw: Array<Object>;
}
