export const testAction = (action, payload, ctx = {}, expectedMutations, done) => {
	let count = 0;

	// mock commit
	const commit = (type, payload) => {
		const mutation = expectedMutations[count];

		expect(mutation.type).toEqual(type);

		if (payload) {
			expect(mutation.payload).toEqual(payload);
		}

		count++;

		if (count >= expectedMutations.length) {
			done();
		}
	};

	// call the action with mocked store and arguments
	action({ commit, ...ctx }, payload);

	// check if no mutations should have been dispatched
	if (expectedMutations.length === 0) {
		expect(count).toEqual(0);
		done();
	}
};
