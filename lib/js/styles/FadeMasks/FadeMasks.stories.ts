import { Meta, StoryFn } from '@storybook/vue3';
import './FadeMasks.stories.scss';

export default {
	title: 'foundations/Fade Masks',
} as Meta;

// Each example is a scroll container with the mixin from lib/styles/mixins/_fade-mask.scss
// (or flex-overflow-mask.scss) applied via the `-ds-*` modifiers in FadeMasks.stories.scss.
// The same box sits on two surfaces to show the alpha mask doesn't depend on the background.
const examples = [
	{
		call: 'fadeMask(right, 40px)',
		modifier: '-ds-right',
		description:
			'Fades the content towards the right edge. The right padding lets the last item scroll fully out of the fade.',
		direction: 'row',
	},
	{
		call: 'fadeMask(bottom, 40px)',
		modifier: '-ds-bottom',
		description: 'Same curve towards the bottom edge, for vertically scrolling lists.',
		direction: 'column',
	},
	{
		call: 'fadeMask(left, 40px, <offset>)',
		modifier: '-ds-leftOffset',
		description:
			"How TextGroup's eyebrow uses it: starts scrolled to the end, and the offset pushes the band out as the start comes closer, so the first item ends up unfaded.",
		direction: 'row',
		hasScrollOffset: true,
	},
	{
		call: 'flexOverflowMask(40px)',
		modifier: '-ds-flexOverflow',
		description:
			'Scrollable flex row with fadeMask(right) built in; it adds the right margin to the last child itself.',
		direction: 'row',
	},
	{
		call: 'fadeMaskBoth(vertical, 24px, 40px)',
		modifier: '-ds-bothVertical',
		description:
			'Fades the top and bottom edges in one mask, each with its own width. Two fadeMask calls on one element would override each other.',
		direction: 'column',
	},
	{
		call: 'fadeMaskBoth(horizontal, 40px)',
		modifier: '-ds-bothHorizontal',
		description:
			'Fades the left and right edges in one mask; the end width defaults to the start width.',
		direction: 'row',
	},
];

const surfaces = ['', '-ds-primary'];

const items = Array.from({ length: 12 }, (_, index) => `Item ${index + 1}`);

// Mirrors TextGroup's eyebrow mask: the box is rtl, so it starts scrolled to the end, and the band is pushed
// out by however much of it doesn't fit before the start.
const MASK_WIDTH = 40;

const updateScrollOffset = (element: HTMLElement) => {
	const pixelsToBeginning = element.scrollLeft - (element.clientWidth - element.scrollWidth);
	const offset = pixelsToBeginning > MASK_WIDTH ? 0 : Math.floor(MASK_WIDTH - pixelsToBeginning);
	element.style.setProperty('--ds-fade-mask-demo-offset', `${offset}px`);
};

const initScrollOffset = (element: HTMLElement | null) => {
	// The ref is set before layout, so measure on the next frame.
	if (element) {
		requestAnimationFrame(() => updateScrollOffset(element));
	}
};

const StoryTemplate: StoryFn = () => ({
	setup() {
		return {
			examples,
			surfaces,
			items,
			initScrollOffset,
			onScroll: (event: Event) => updateScrollOffset(event.target as HTMLElement),
		};
	},
	template: `
		<div class="ds-fadeMaskDemo">
			<div v-for="example in examples" :key="example.call" class="ds-fadeMaskDemo__example">
				<code>@include {{ example.call }};</code>
				<p class="ds-fadeMaskDemo__description">{{ example.description }}</p>
				<div class="ds-fadeMaskDemo__surfaces">
					<div
						v-for="surface in surfaces"
						:key="surface"
						:class="['ds-fadeMaskDemo__surface', surface]"
					>
						<div
							:ref="example.hasScrollOffset ? initScrollOffset : undefined"
							:class="['ds-fadeMaskDemo__box', '-ds-' + example.direction, example.modifier]"
							@scroll="example.hasScrollOffset && onScroll($event)"
						>
							<div v-if="example.hasScrollOffset" class="ds-fadeMaskDemo__track">
								<div v-for="item in items" :key="item" class="ds-fadeMaskDemo__item">{{ item }}</div>
							</div>
							<template v-else>
								<div v-for="item in items" :key="item" class="ds-fadeMaskDemo__item">{{ item }}</div>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
});

export const Static = StoryTemplate.bind({});
