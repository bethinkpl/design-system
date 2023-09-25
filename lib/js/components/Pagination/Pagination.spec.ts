import { shallowMount } from '@vue/test-utils';

import Pagination from './Pagination.vue';

describe('Pagination', () => {
	const createComponent = ({ currentPage = 1, itemsTotalAmount = 30 } = {}) => {
		return shallowMount(Pagination, {
			props: {
				currentPage,
				itemsTotalAmount,
			} as any,
			global: {
				stubs: {
					Dropdown: {
						template: '<div class="dropdown"><slot name="reference" /><slot/></div>',
					},
					SelectList: {
						template: '<div class="select-list"><slot/></div>',
					},
					SelectListItem: {
						template: '<div class="select-list-item"><slot/></div>',
					},
				},
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
		component.findAll('.ds-pagination__itemWrapper').forEach((element) => {
			elements.push(element.text().trim());
		});
		expect(elements).toEqual(expected);
	});

	test.each([
		{
			props: {
				currentPage: 3,
				itemsTotalAmount: 300,
			},
			expected: {
				dropdowns: 1,
				dropdownItemsCount: 10,
				dropdownItems: [
					{ label: '1 (1 - 30)', isSelected: 'false' },
					{ label: '2 (31 - 60)', isSelected: 'false' },
					{ label: '3 (61 - 90)', isSelected: 'true' },
					{ label: '4 (91 - 120)', isSelected: 'false' },
					{ label: '5 (121 - 150)', isSelected: 'false' },
					{ label: '6 (151 - 180)', isSelected: 'false' },
					{ label: '7 (181 - 210)', isSelected: 'false' },
					{ label: '8 (211 - 240)', isSelected: 'false' },
					{ label: '9 (241 - 270)', isSelected: 'false' },
					{ label: '10 (271 - 300)', isSelected: 'false' },
				],
			},
		},
		{
			props: {
				currentPage: 3,
				itemsTotalAmount: 221,
			},
			expected: {
				dropdowns: 1,
				dropdownItemsCount: 8,
				dropdownItems: [
					{ label: '1 (1 - 30)', isSelected: 'false' },
					{ label: '2 (31 - 60)', isSelected: 'false' },
					{ label: '3 (61 - 90)', isSelected: 'true' },
					{ label: '4 (91 - 120)', isSelected: 'false' },
					{ label: '5 (121 - 150)', isSelected: 'false' },
					{ label: '6 (151 - 180)', isSelected: 'false' },
					{ label: '7 (181 - 210)', isSelected: 'false' },
					{ label: '8 (211 - 221)', isSelected: 'false' },
				],
			},
		},
		{
			props: {
				currentPage: 6,
				itemsTotalAmount: 311,
			},
			expected: {
				dropdowns: 2,
				dropdownItemsCount: 11,
				dropdownItems: [
					{ label: '1 (1 - 30)', isSelected: 'false' },
					{ label: '2 (31 - 60)', isSelected: 'false' },
					{ label: '3 (61 - 90)', isSelected: 'false' },
					{ label: '4 (91 - 120)', isSelected: 'false' },
					{ label: '5 (121 - 150)', isSelected: 'false' },
					{ label: '6 (151 - 180)', isSelected: 'true' },
					{ label: '7 (181 - 210)', isSelected: 'false' },
					{ label: '8 (211 - 240)', isSelected: 'false' },
					{ label: '9 (241 - 270)', isSelected: 'false' },
					{ label: '10 (271 - 300)', isSelected: 'false' },
					{ label: '11 (301 - 311)', isSelected: 'false' },
				],
			},
		},
	])('should render dropdown for %o', ({ props, expected }) => {
		const component = createComponent(props);

		expect(component.findAll('.dropdown').length).toBe(expected.dropdowns);

		const dropdown = component.find('.dropdown');
		expect(dropdown.findAll('.select-list-item').length).toBe(expected.dropdownItemsCount);

		dropdown.findAll('.select-list-item').forEach((item, index) => {
			expect(item.attributes('label')).toBe(expected.dropdownItems[index].label);
			expect(item.attributes('is-selected')).toBe(expected.dropdownItems[index].isSelected);
		});
	});

	it('should update selected item after page change', async () => {
		let currentPage = 3;
		const component = createComponent({
			currentPage,
			itemsTotalAmount: 300,
		});

		const dropdown = component.find('.dropdown');
		expect(
			dropdown.findAll('.select-list-item')[currentPage - 1].attributes('is-selected'),
		).toBe('true');

		await component.setProps({ currentPage: 1 });

		expect(component.findAll('.select-list-item')[0].attributes('is-selected')).toBe('true');

		expect(
			component.findAll('.select-list-item')[currentPage - 1].attributes('is-selected'),
		).toBe('false');
	});
});
