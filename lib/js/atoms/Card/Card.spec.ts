import { createLocalVue, shallowMount } from '@vue/test-utils';

import Card from './Card.vue';

describe('Card', () => {
	const createComponent = ({ headerSlot = '', contentSlot = '', footerSlot = '' } = {}) => {
		const localVue = createLocalVue();

		return shallowMount(Card, {
			localVue,
			mocks: {},
			propsData: {},
			stubs: {},
			slots: {
				header: headerSlot,
				content: contentSlot,
				footer: footerSlot,
			},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render card class', () => {
		const component = createComponent();

		expect(component.find('.card').exists()).toBe(true);
	});

	it('should render render content slot', () => {
		const content = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ contentSlot: content });

		expect(component.find('.card__content').text()).toContain(content);
	});

	it('should render render header slot', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ headerSlot: header });

		expect(component.text()).toContain(header);
	});

	it('should render render footer slot', () => {
		const footer = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ footerSlot: footer });

		expect(component.text()).toContain(footer);
	});
});
