import { createLocalVue, shallowMount } from '@vue/test-utils';

import Card from './Card.vue';

describe('Card', () => {
	const createComponent = ({
		headerSlot = '',
		contentSlot = '',
		footerSlot = '',
		headerHasPadding = false,
		dividerUnderHeader = false,
	} = {}) => {
		const localVue = createLocalVue();

		return shallowMount(Card, {
			localVue,
			mocks: {},
			propsData: {
				headerHasPadding,
				dividerUnderHeader,
			},
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

	it('should render content slot', () => {
		const content = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ contentSlot: content });

		expect(component.find('.card__content').text()).toContain(content);
	});

	it('should render header slot', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ headerSlot: header });

		expect(component.text()).toContain(header);
	});

	it('should render footer slot', () => {
		const footer = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ footerSlot: footer });

		expect(component.text()).toContain(footer);
	});

	it('should render header slot with padding', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({ headerSlot: header, headerHasPadding: true });

		expect(component.find('.card__header').classes()).toContain('-withPadding');
	});

	it('should render divider', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			headerSlot: header,
			contentSlot: 'asd',
			dividerUnderHeader: true,
		});

		expect(component.find('.card__headerDivider').exists()).toBe(true);
	});

	it("doesn't render divider when no header", () => {
		const component = createComponent({ dividerUnderHeader: true });

		expect(component.find('.card__headerDivider').exists()).toBe(false);
	});

	it("doesn't render divider when no content", () => {
		const component = createComponent({ headerSlot: 'test', dividerUnderHeader: true });

		expect(component.find('.card__headerDivider').exists()).toBe(false);
	});

	it('should render divider with margin if headerHasPadding', () => {
		const header = 'Wpłynąlem na suchego przestwór oceanu';
		const component = createComponent({
			headerSlot: header,
			contentSlot: 'asd',
			dividerUnderHeader: true,
			headerHasPadding: true,
		});

		expect(component.find('.card__headerDivider').classes()).toContain('-withHorizontalMargin');
	});
});
