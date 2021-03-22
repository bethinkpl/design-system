// import Vuex from 'vuex';
// import { createLocalVue, shallowMount } from '@vue/test-utils';
//
// import AccessDisplay from './AccessDisplay.vue';
// import { COURSE_ACCESS_STATUS } from 'js/consts/user';
//
// describe('AccessDisplay', () => {
// 	const createComponent = ({
// 		getCurrentCourseProductSignupsOpen = true,
// 		isModalVisible = false,
// 		exposeBuyButton = false,
// 	} = {}) => {
// 		const localVue = createLocalVue();
// 		localVue.use(Vuex);
//
// 		const store = new Vuex.Store({
// 			modules: {
// 				currentUser: {
// 					getters: {
// 						courseAccessCurrent: () => ({
// 							status: COURSE_ACCESS_STATUS.ACTIVE,
// 						}),
// 					},
// 				},
// 				products: {
// 					getters: {
// 						getCurrentCourseProductSignupsOpen: () =>
// 							getCurrentCourseProductSignupsOpen,
// 					},
// 					namespaced: true,
// 				},
// 			},
// 		});
//
// 		return shallowMount<AccessDisplay>(AccessDisplay, {
// 			localVue,
// 			store,
// 			data() {
// 				return {
// 					isModalVisible,
// 				};
// 			},
// 			propsData: {
// 				exposeBuyButton,
// 			},
// 		});
// 	};
//
// 	it('should render', () => {
// 		const component = createComponent();
// 		expect(component.exists()).toBe(true);
// 	});
//
// 	describe('buy button', () => {
// 		it('should render when exposeBuyButton prop is true and course signups opened', () => {
// 			const component = createComponent({
// 				getCurrentCourseProductSignupsOpen: true,
// 				exposeBuyButton: true,
// 			});
// 			expect(component.text()).toContain('Przedłuż dostęp');
// 		});
//
// 		it('should not render when exposeBuyButton prop is false', () => {
// 			const component = createComponent({
// 				getCurrentCourseProductSignupsOpen: true,
// 				exposeBuyButton: false,
// 			});
// 			expect(component.text()).not.toContain('Przedłuż dostęp');
// 		});
//
// 		it('should not render when exposeBuyButton prop is true but course signups closed', () => {
// 			const component = createComponent({
// 				getCurrentCourseProductSignupsOpen: false,
// 				exposeBuyButton: true,
// 			});
// 			expect(component.text()).not.toContain('Przedłuż dostęp');
// 		});
//
// 		it('should open checkout when clicked', () => {
// 			window.open = jest.fn();
//
// 			const component = createComponent({
// 				getCurrentCourseProductSignupsOpen: true,
// 				exposeBuyButton: true,
// 			});
//
// 			const button = component.find('[data-test-selector="buy-button-exposed"]');
// 			button.trigger('click');
//
// 			expect(window.open).toBeCalledTimes(1);
// 		});
// 	});
//
// 	describe('buy button in modal', () => {
// 		it('should render when course signups opened', () => {
// 			const component = createComponent({
// 				getCurrentCourseProductSignupsOpen: true,
// 				isModalVisible: true,
// 			});
// 			expect(component.text()).toContain('Przedłuż dostęp');
// 		});
//
// 		it('should not render when course signups closed', () => {
// 			const component = createComponent({
// 				getCurrentCourseProductSignupsOpen: false,
// 				isModalVisible: true,
// 			});
// 			expect(component.text()).not.toContain('Przedłuż dostęp');
// 		});
//
// 		it('should open checkout when clicked', () => {
// 			window.open = jest.fn();
//
// 			const component = createComponent({
// 				getCurrentCourseProductSignupsOpen: true,
// 				isModalVisible: true,
// 			});
//
// 			const button = component.find('[data-test-selector="buy-button-in-modal"]');
// 			button.trigger('click');
//
// 			expect(window.open).toBeCalledTimes(1);
// 		});
// 	});
// });
