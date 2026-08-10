export function toPinChars(value: string | undefined, length: number): Array<string> {
	return [...(value ?? '')].slice(0, length);
}
