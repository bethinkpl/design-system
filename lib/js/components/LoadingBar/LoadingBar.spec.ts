import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { ComponentProps } from 'vue-component-type-helpers';
import LoadingBar from './LoadingBar.vue';
import DsContainerRibbon from '../ContainerRibbon/ContainerRibbon.vue';
import { CONTAINER_RIBBON_COLORS, CONTAINER_RIBBON_SIZES } from '../ContainerRibbon';
import { LOADING_BAR_COLORS, LOADING_BAR_SIZES } from './LoadingBar.consts';

const setup = (props: ComponentProps<typeof LoadingBar>) => mount(LoadingBar, { props });

const progressStyle = (wrapper: ReturnType<typeof setup>) =>
	wrapper.find('.ds-loadingBar__progress').attributes('style') ?? '';

// jsdom neither runs animations nor applies the component's `<style scoped>` block, so nothing here
// observes the fill itself — that needs a real browser. What these do cover is the declarative wiring
// the animation depends on: the duration reaching the element, `'0'` opting out, and no JS being
// involved in starting it.
describe('LoadingBar', () => {
	it('should render the track and the progress element', () => {
		const wrapper = setup({ time: '5' });

		expect(wrapper.find('.ds-loadingBar').exists()).toBe(true);
		expect(wrapper.find('.ds-loadingBar__progress').exists()).toBe(true);
	});

	it('should set the animation duration from the time prop', () => {
		const wrapper = setup({ time: '5' });

		expect(progressStyle(wrapper)).toContain('animation-duration: 5s');
	});

	it('should not set a width on the progress element when animating', () => {
		// the keyframes own the width — an inline one would override the animated value
		const wrapper = setup({ time: '5' });

		expect(progressStyle(wrapper)).not.toContain('width');
	});

	it('should show a full bar with no animation for time 0', () => {
		const wrapper = setup({ time: '0' });

		expect(progressStyle(wrapper)).toContain('animation: none');
		expect(progressStyle(wrapper)).toContain('width: 100%');
	});

	// The fill used to be started from `onMounted`, which raced the browser's first style pass and
	// left the bar snapped to full when it lost. The rendered output must be complete on mount.
	it('should render its final styles synchronously on mount', () => {
		const wrapper = setup({ time: '5' });
		const styleOnMount = progressStyle(wrapper);

		expect(styleOnMount).toBe(progressStyle(wrapper));
		expect(styleOnMount).toContain('animation-duration: 5s');
	});

	it.each([
		{ size: LOADING_BAR_SIZES.SMALL, expected: CONTAINER_RIBBON_SIZES.SMALL },
		{ size: LOADING_BAR_SIZES.MEDIUM, expected: CONTAINER_RIBBON_SIZES.MEDIUM },
		{ size: LOADING_BAR_SIZES.LARGE, expected: CONTAINER_RIBBON_SIZES.LARGE },
	])('should pass ribbon size $expected for size $size', ({ size, expected }) => {
		const wrapper = setup({ size, time: '5' });

		expect(wrapper.findComponent(DsContainerRibbon).props('size')).toBe(expected);
	});

	it.each([
		{
			color: LOADING_BAR_COLORS.NEUTRAL_HEAVY,
			expected: CONTAINER_RIBBON_COLORS.NEUTRAL_HEAVY,
		},
		{
			color: LOADING_BAR_COLORS.NEUTRAL_STRONG,
			expected: CONTAINER_RIBBON_COLORS.NEUTRAL_STRONG,
		},
		{ color: LOADING_BAR_COLORS.SUCCESS, expected: CONTAINER_RIBBON_COLORS.SUCCESS },
		{ color: LOADING_BAR_COLORS.WARNING, expected: CONTAINER_RIBBON_COLORS.WARNING },
		{ color: LOADING_BAR_COLORS.DANGER, expected: CONTAINER_RIBBON_COLORS.DANGER },
		{ color: LOADING_BAR_COLORS.INFO, expected: CONTAINER_RIBBON_COLORS.INFO },
	])('should pass ribbon color $expected for color $color', ({ color, expected }) => {
		const wrapper = setup({ color, time: '5' });

		expect(wrapper.findComponent(DsContainerRibbon).props('color')).toBe(expected);
	});
});
