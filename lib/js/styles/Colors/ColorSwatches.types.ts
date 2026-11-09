export interface ColorSwatchItem {
	name: string;
	value?: string;
}

export interface ColorSwatchGroup {
	title: string;
	items: Array<ColorSwatchItem>;
}
