import { createLocalVue, shallowMount } from '@vue/test-utils';

import Pagination from './Pagination.vue';

describe('Pagination', () => {
	const createComponent = ({ currentPage = 1, initialPage = 1, itemsTotalAmount = 30 } = {}) => {
		const localVue = createLocalVue();

		return shallowMount(Pagination, {
			localVue,
			propsData: {
				currentPage,
				initialPage,
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
				initialPage: 1,
				itemsTotalAmount: 1,
			},
			expected: ['1'],
		},
		{
			props: {
				currentPage: 1,
				initialPage: 1,
				itemsTotalAmount: 30,
			},
			expected: ['1'],
		},
		{
			props: {
				currentPage: 1,
				initialPage: 1,
				itemsTotalAmount: 60,
			},
			expected: ['1', '2'],
		},
		{
			props: {
				currentPage: 1,
				initialPage: 1,
				itemsTotalAmount: 100,
			},
			expected: ['1', '2', '3', '4'],
		},
		{
			props: {
				currentPage: 1,
				initialPage: 1,
				itemsTotalAmount: 150,
			},
			expected: ['1', '2', '3', '4', '5'],
		},
		{
			props: {
				currentPage: 1,
				initialPage: 1,
				itemsTotalAmount: 300,
			},
			expected: ['1', '2', '3', '4', '5', '…', '10'],
		},
		{
			props: {
				currentPage: 6,
				initialPage: 1,
				itemsTotalAmount: 300,
			},
			expected: ['1', '…', '5', '6', '7', '…', '10'],
		},
		{
			props: {
				currentPage: 4,
				initialPage: 1,
				itemsTotalAmount: 300,
			},
			expected: ['1', '2', '3', '4', '5', '…', '10'],
		},
		{
			props: {
				currentPage: 5,
				initialPage: 1,
				itemsTotalAmount: 300,
			},
			expected: ['1', '…', '4', '5', '6', '…', '10'],
		},
		{
			props: {
				currentPage: 9,
				initialPage: 1,
				itemsTotalAmount: 300,
			},
			expected: ['1', '…', '6', '7', '8', '9', '10'],
		},
		{
			props: {
				currentPage: 7,
				initialPage: 1,
				itemsTotalAmount: 300,
			},
			expected: ['1', '…', '6', '7', '8', '9', '10'],
		},
	])('should calculate correct pagination for %s', ({ props, expected }) => {
		const component = createComponent(props);
		const elements = [];
		component.findAll('.pagination__itemWrapper').wrappers.forEach((element) => {
			// @ts-ignore
			elements.push(element.text().trim());
		});
		expect(elements).toEqual(expected);
	});
});
