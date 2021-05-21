module.exports = function (prefix, selector, prefixedSelector) {
	if (
		(selector.startsWith('.v-application') ||
			selector.startsWith('.theme--light.v-application')) &&
		!selector.startsWith('.v-application--')
	) {
		return prefixedSelector;
	}

	if (selector === 'html') {
		return prefixedSelector;
	}

	if (selector.match(/^(select|textarea)/) || selector.match(/( |,)(select|textarea)/)) {
		return prefixedSelector;
	}

	return selector;
};
