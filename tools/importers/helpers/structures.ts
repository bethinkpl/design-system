export interface Dict<V> {
	[key: string]: V;
}

export interface ITokenJsonObject {
	id: string;
	label: string;
	value: string;
}

export interface IResultJsonObject {
	id: string;
	label: string;
	value: string;
}

export interface ConfigFileObject {
	destinationVariables: string;
	destinationVariablesCss: string;
	destinationVariablesCssJson: string;
	destinationJson: string;
	destination: string;
}

export interface ITypographyToken {
	token: string;
	tokenCamelCase: string;
	attributes: Array<string>;
}
