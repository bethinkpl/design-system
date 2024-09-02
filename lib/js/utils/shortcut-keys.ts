export const isElementEditable = (element: HTMLElement | null): boolean => {
	return (
		element?.tagName === 'INPUT' ||
		element?.tagName === 'SELECT' ||
		element?.tagName === 'TEXTAREA' ||
		!!element?.isContentEditable
	);
};
