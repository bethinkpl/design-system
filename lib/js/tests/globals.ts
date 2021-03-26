// Jest swallows console errors which causes false positives
global.console.error = (error: any) => {
	throw new Error(error);
};
