/* eslint dot-notation: 0 */

global['$wnl'] = {
	contactInfo: {
		email: 'support@bethink.tech',
	},
	env: {
		appUrl: 'http://test',
	},
	logger: {
		warning: () => {},
		// eslint-disable-next-line no-console
		error: console.error,
		// eslint-disable-next-line no-console
		capture: console.error,
	},
	course: {
		productLogo: '',
	},
	settings: {
		APP_TITLE: 'Test App',
	},
	featureToggles: Object.freeze({
		QUESTION_BANK_ENABLED: true,
	}),
};

global['Echo'] = {
	join: () => global['Echo'],
	here: () => global['Echo'],
	joining: () => global['Echo'],
	leaving: () => global['Echo'],
};

// Jest swallows console errors which causes false positives
global.console.error = (error) => {
	throw new Error(error);
};
