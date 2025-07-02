import waitForExpect from 'wait-for-expect';

export const waitForExpectShort = (fn: () => void | Promise<void>) => {
	return waitForExpect(fn, 500, 5);
};
