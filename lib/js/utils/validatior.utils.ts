export const arrayOfObjectValidator = <T>(prop: Array<T>): boolean =>
	prop.every((item) => typeof item === 'object');
