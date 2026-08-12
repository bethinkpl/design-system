export type PinChars = Array<string | number>;

export function toPinChars(value: string | undefined, length: number): PinChars {
	return [...(value ?? '')].slice(0, length);
}
