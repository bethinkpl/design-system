import { shallowMount } from '@vue/test-utils';

import Pagination from './Pagination.vue';

describe('Pagination', () => {
	const createComponent = ({ currentPage = 1, itemsTotalAmount = 30 } = {}) => {
		return shallowMount(Pagination, {
			props: {
				currentPage,
				itemsTotalAmount,
			},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	test.each([
		{
			props: {
				currentPage: 1,
				itemsTotalAmount: 1,
			},
			expected: [],
		},
		{
			props: {
				currentPage: 1,
				itemsTotalAmount: 30,
			},
			expected: [],
		},
		{
			props: {
				currentPage: 1,
				itemsTotalAmount: 60,
			},
			expected: ['1', '2'],
		},
		{
			props: {
				currentPage: 1,
				itemsTotalAmount: 100,
			},
			expected: ['1', '2', '3', '4'],
		},
		{
			props: {
				currentPage: 1,
				itemsTotalAmount: 150,
			},
			expected: ['1', '2', '3', '4', '5'],
		},
		{
			props: {
				currentPage: 1,
				itemsTotalAmount: 300,
			},
			expected: ['1', '2', '3', '4', '5', '…', '10'],
		},
		{
			props: {
				currentPage: 6,
				itemsTotalAmount: 300,
			},
			expected: ['1', '…', '5', '6', '7', '…', '10'],
		},
		{
			props: {
				currentPage: 4,
				itemsTotalAmount: 300,
			},
			expected: ['1', '2', '3', '4', '5', '…', '10'],
		},
		{
			props: {
				currentPage: 5,
				itemsTotalAmount: 300,
			},
			expected: ['1', '…', '4', '5', '6', '…', '10'],
		},
		{
			props: {
				currentPage: 9,
				itemsTotalAmount: 300,
			},
			expected: ['1', '…', '6', '7', '8', '9', '10'],
		},
		{
			props: {
				currentPage: 7,
				itemsTotalAmount: 300,
			},
			expected: ['1', '…', '6', '7', '8', '9', '10'],
		},
	])('should calculate correct pagination for %o', ({ props, expected }) => {
		const component = createComponent(props);
		const elements: Array<string> = [];
		component.findAll('.ds-pagination__itemWrapper').wrappers.forEach((element) => {
			elements.push(element.text().trim());
		});
		expect(elements).toEqual(expected);
	});
});
