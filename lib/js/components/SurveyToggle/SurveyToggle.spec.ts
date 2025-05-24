import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import SurveyToggle from './SurveyToggle.vue';
import {
	SURVEY_TOGGLE_MEANINGS,
	SURVEY_TOGGLE_STATES,
	SURVEY_TOGGLE_STATUSES,
} from './SurveyToggle.consts';

describe('SurveyToggle', () => {
	const createComponent = ({
		label = '',
		contentText = '',
		color = SURVEY_TOGGLE_MEANINGS.PRIMARY,
		state = SURVEY_TOGGLE_STATES.DEFAULT,
		status = SURVEY_TOGGLE_STATUSES.DEFAULT as typeof SURVEY_TOGGLE_STATUSES[keyof typeof SURVEY_TOGGLE_STATUSES], // TODO: make an util
	} = {}) => {
		return shallowMount(SurveyToggle, {
			props: {
				label,
				color,
				contentText,
				state,
				status,
			} as any,
		});
	};

	it('should create', () => {
		const component = createComponent();

		expect(component.exists()).toBe(true);
	});

	it('should render surveyToggle class', () => {
		const component = createComponent();

		expect(component.find('.ds-surveyToggle').exists()).toBe(true);
	});

	it('should render text from label prop', () => {
		const label = 'Wspłynąłem na suchego przestwór oceanu';
		const component = createComponent({ label });

		expect(component.find('.ds-surveyToggle__label').text()).toContain(label);
	});

	it('after click on toggle component should emit "click" event', async () => {
		const component = createComponent();

		await component.find('.ds-surveyToggle__toggle').trigger('click');

		expect(component.emitted()?.click?.[0]).toBeDefined();
	});

	it.each([SURVEY_TOGGLE_STATUSES.DEFAULT, SURVEY_TOGGLE_STATUSES.SELECTED])(
		'when state prop is set to selected component should render icon',
		(status) => {
			const component = createComponent({ status });

			expect(component.find('ds-icon-stub').exists()).toBe(
				status === SURVEY_TOGGLE_STATUSES.SELECTED,
			);
		},
	);

	it('when isActive prop is false and color is primary component should render', () => {
		const contentText = 'Wspłynąłem na suchego przestwór oceanu';
		const component = createComponent({
			color: SURVEY_TOGGLE_MEANINGS.PRIMARY,
			contentText,
		});
		expect(component.find('.ds-surveyToggle__content').text()).toContain(contentText);
	});
});
