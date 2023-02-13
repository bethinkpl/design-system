import { shallowMount } from '@vue/test-utils';

import Modal from './Modal.vue';

describe('Modal', () => {
	const createComponent = ({ headerSlot = '', slot = '', showHeader = true } = {}) => {
		return shallowMount(Modal, {
			props: {
				showHeader,
			} as any,
			slots: {
				header: headerSlot,
				slot,
			},
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render header slot', () => {
		const header = 'Wpłynąłem na suchego przestwór oceanu';
		const component = createComponent({ headerSlot: header });

		expect(component.find('.m-modal__header').text()).toContain(header);
	});

	it('should render main slot', () => {
		const slot = 'Wpłynąłem na suchego przestwór oceanu';
		const component = createComponent({ headerSlot: slot });

		expect(component.find('.m-modal__header').text()).toContain(slot);
	});

	it('click on on modal should emit "close-modal" event', async () => {
		const component = createComponent();
		await component.find('.m-modal').trigger('click');

		expect(component.emitted()?.['close-modal']?.[0]).toBeDefined();
	});

	it.each([false, true])(
		'component should render header base on showHeader prop',
		(showHeader) => {
			const component = createComponent({ showHeader });
			expect(component.find('.m-modal__header').exists()).toBe(showHeader);
		},
	);
});
