<!-- Temporary English-only testing UI. -->
<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<playground-page title="Popover · Reka vs Legacy" :toc="toc">
		<template #intro>
			<p
				>Each case is a real usage pattern from wnl-platform, set up the same way on both
				sides with the props each version takes. Open one popover at a time. The log under
				each column shows the events the parent receives.</p
			>
			<p
				>Check in every case: <kbd>Esc</kbd> closes (Reka only) and a click outside
				closes.</p
			>
		</template>

		<test-case
			id="info-hint"
			title="Info hint"
			why="An info icon next to a label explains it. The most common Popover in wnl-platform."
			:steps="[
				'Click the ⓘ icon.',
				'Click it again, then open it and press Esc.',
				'Narrow the window to 320px and open again.',
			]"
			:expected="[
				'The panel opens below, aligned to the icon\'s left edge, with the pointer at the icon.',
				'Neutral colors, title and subtitle look the same as Legacy.',
				'At 320px the panel shifts to stay on screen and the pointer still points at the icon.',
			]"
			legacy-note="placement='bottom-start' becomes side='bottom' align='start'. Two places in wnl-platform open it on hover (triggerAction='hover'); the new Popover opens on click only, and a HoverCard component will cover hover later."
		>
			<side-by-side>
				<template #reka="{ log }">
					<div class="ds-testRow">
						<span>Average score</span>
						<popover
							side="bottom"
							align="start"
							color="neutral"
							title-text="How is it calculated?"
							subtitle-text="Updated daily"
							@update:open="log(`update:open ${$event}`)"
						>
							<template #reference>
								<ds-icon-button
									:icon="ICONS.FA_CIRCLE_INFO"
									:size="ICON_BUTTON_SIZES.XX_SMALL"
									:color="ICON_BUTTON_COLORS.NEUTRAL"
									aria-label="About average score"
								/>
							</template>
							The mean of your last 20 quiz attempts.
						</popover>
					</div>
				</template>
				<template #legacy>
					<div class="ds-testRow">
						<span>Average score</span>
						<pop-over-legacy
							placement="bottom-start"
							color="neutral"
							title-text="How is it calculated?"
							subtitle-text="Updated daily"
						>
							<template #reference>
								<ds-icon-button
									:icon="ICONS.FA_CIRCLE_INFO"
									:size="ICON_BUTTON_SIZES.XX_SMALL"
									:color="ICON_BUTTON_COLORS.NEUTRAL"
									aria-label="About average score"
								/>
							</template>
							The mean of your last 20 quiz attempts.
						</pop-over-legacy>
					</div>
				</template>
			</side-by-side>
		</test-case>

		<test-case
			id="placements"
			title="Every Legacy placement and its new equivalent"
			why="Migration guide for wnl-platform: each Legacy placement value next to the side and align that replace it."
			:steps="['Open each trigger on both sides, one at a time.']"
			:expected="[
				'Each Reka popover opens on the same side and with the same alignment as its Legacy pair.',
				'The pointer sits in the same place relative to the trigger.',
			]"
			legacy-note="Legacy has six placements. The new side × align props give all twelve combinations; try them in the Collision lab story."
		>
			<side-by-side hide-log>
				<template #reka>
					<div class="ds-testPlacementGrid">
						<popover
							v-for="placement in placements"
							:key="placement.legacy"
							:side="placement.side"
							:align="placement.align"
							:title-text="`side='${placement.side}' align='${placement.align}'`"
						>
							<template #reference>
								<ds-button :type="BUTTON_TYPES.OUTLINED">{{
									placement.legacy
								}}</ds-button>
							</template>
							Short content.
						</popover>
					</div>
				</template>
				<template #legacy>
					<div class="ds-testPlacementGrid">
						<pop-over-legacy
							v-for="placement in placements"
							:key="placement.legacy"
							:placement="placement.legacy"
							:title-text="`placement='${placement.legacy}'`"
						>
							<template #reference>
								<ds-button :type="BUTTON_TYPES.OUTLINED">{{
									placement.legacy
								}}</ds-button>
							</template>
							Short content.
						</pop-over-legacy>
					</div>
				</template>
			</side-by-side>
		</test-case>

		<test-case
			id="onboarding"
			title="Feature announcement (onboarding)"
			why="wnl-platform shows onboarding popovers from code (forceShow) and closes them with the button."
			:steps="[
				'Click Show on both sides.',
				'Type in the input, click elsewhere on the page and press Esc.',
				'Click the trigger button.',
				'Click Got it.',
			]"
			:expected="[
				'The popover opens from code, with the image, title, subtitle and button.',
				'Typing, outside clicks, Esc and trigger clicks leave it open.',
				'Got it closes it; the log shows button-click.',
			]"
			legacy-note="forceShow becomes v-model:open plus isManual."
		>
			<side-by-side>
				<template #reka="{ log }">
					<div class="ds-testOnboarding">
						<div class="ds-testRow">
							<ds-button @click="announcement.reka = true">Show</ds-button>
							<input placeholder="Type here while it is open" />
						</div>
						<popover
							v-model:open="announcement.reka"
							is-manual
							size="medium"
							:header-image-url="illustrationUrl"
							title-text="New: lesson status"
							subtitle-text="See where you left off"
							button-text="Got it"
							@update:open="log(`update:open ${$event}`)"
							@button-click="
								log('button-click');
								announcement.reka = false;
							"
						>
							<template #reference><ds-button>Lessons</ds-button></template>
							Every lesson now shows whether you have finished, started or not opened
							it yet.
						</popover>
					</div>
				</template>
				<template #legacy="{ log }">
					<div class="ds-testOnboarding">
						<div class="ds-testRow">
							<ds-button @click="announcement.legacy = true">Show</ds-button>
							<input placeholder="Type here while it is open" />
						</div>
						<pop-over-legacy
							:force-show="announcement.legacy"
							size="medium"
							:header-image-url="illustrationUrl"
							title-text="New: lesson status"
							subtitle-text="See where you left off"
							button-text="Got it"
							@button-click="
								log('button-click');
								announcement.legacy = false;
							"
						>
							<template #reference><ds-button>Lessons</ds-button></template>
							Every lesson now shows whether you have finished, started or not opened
							it yet.
						</pop-over-legacy>
					</div>
				</template>
			</side-by-side>
		</test-case>

		<test-case
			id="disabled"
			title="Disabled"
			why="Some screens show the trigger but block the popover, e.g. for locked content."
			:steps="[
				'With Disabled ticked, click both triggers.',
				'Untick Disabled and click again.',
				'Open a popover, then tick Disabled.',
			]"
			:expected="[
				'Disabled: nothing opens and the trigger looks the same.',
				'Enabled: both open.',
				'Disabling an open Reka popover closes it.',
			]"
			legacy-note="triggerAction='none' becomes isDisabled."
		>
			<label class="ds-testCheckbox"
				><input v-model="isDisabled" type="checkbox" /> Disabled</label
			>
			<side-by-side>
				<template #reka="{ log }">
					<popover
						:is-disabled="isDisabled"
						title-text="Lesson notes"
						@update:open="log(`update:open ${$event}`)"
					>
						<template #reference><ds-button>Notes</ds-button></template>
						Notes are available once you finish the lesson.
					</popover>
				</template>
				<template #legacy>
					<pop-over-legacy
						:trigger-action="isDisabled ? 'none' : 'click'"
						title-text="Lesson notes"
					>
						<template #reference><ds-button>Notes</ds-button></template>
						Notes are available once you finish the lesson.
					</pop-over-legacy>
				</template>
			</side-by-side>
		</test-case>

		<test-case
			id="long-content"
			title="Long content with max height"
			why="Longer explanations scroll inside the popover while the title and button stay visible."
			:steps="['Open the small and the medium popover.', 'Scroll inside each to the end.']"
			:expected="[
				'Small: content area 160px tall. Medium: 250px.',
				'Title, subtitle and button stay put; only the content scrolls.',
			]"
			legacy-note="maxHeight changes from true/false (fixed 160px or 250px by size) to a CSS length like '160px'."
		>
			<side-by-side>
				<template #reka="{ log }">
					<div class="ds-testRow">
						<popover
							max-height="160px"
							title-text="Small · 160px"
							button-text="Button"
							@update:open="log(`small · update:open ${$event}`)"
						>
							<template #reference><ds-button>Small</ds-button></template>
							<p v-for="n in 6" :key="n">{{ loremParagraph }}</p>
						</popover>
						<popover
							size="medium"
							max-height="250px"
							title-text="Medium · 250px"
							button-text="Button"
							@update:open="log(`medium · update:open ${$event}`)"
						>
							<template #reference><ds-button>Medium</ds-button></template>
							<p v-for="n in 6" :key="n">{{ loremParagraph }}</p>
						</popover>
					</div>
				</template>
				<template #legacy>
					<div class="ds-testRow">
						<pop-over-legacy max-height title-text="Small · 160px" button-text="Button">
							<template #reference><ds-button>Small</ds-button></template>
							<p v-for="n in 6" :key="n">{{ loremParagraph }}</p>
						</pop-over-legacy>
						<pop-over-legacy
							size="medium"
							max-height
							title-text="Medium · 250px"
							button-text="Button"
						>
							<template #reference><ds-button>Medium</ds-button></template>
							<p v-for="n in 6" :key="n">{{ loremParagraph }}</p>
						</pop-over-legacy>
					</div>
				</template>
			</side-by-side>
		</test-case>

		<test-case
			id="containers"
			title="Inside a clipping box and a scrolling container"
			why="Popovers inside cards and sidebars. This is why appendToBody is on by default."
			:steps="[
				'Open the popover in the dashed overflow: hidden box.',
				'Scroll the second box until the trigger shows, open it and scroll the box until the trigger leaves it.',
			]"
			:expected="[
				'The Reka popover shows in full outside the clipping box.',
				'In the scrolling box the popover stays inside the box: attached to the trigger while it is in view, then following it out of the box.',
			]"
			legacy-note="Legacy renders inline by default (appendToBody=false), so the box cuts it off. boundaries-selector becomes collision-boundary. Legacy keeps the popover in the box after the trigger leaves; Reka keeps following the trigger, or hides with hide-when-detached."
		>
			<side-by-side>
				<template #reka="{ log }">
					<div class="ds-testStack">
						<div class="ds-testClipped">
							<popover
								title-text="Default props"
								@update:open="log(`clipped · update:open ${$event}`)"
							>
								<template #reference
									><ds-button>In a clipping box</ds-button></template
								>
								Should not be cut off.
							</popover>
						</div>
						<div ref="rekaScrollbox" class="ds-testScrollbox">
							<div class="ds-testScrollbox__spacer">Scroll down ↓</div>
							<popover
								:collision-boundary="rekaScrollbox"
								title-text="collisionBoundary"
								@update:open="log(`scrolling · update:open ${$event}`)"
							>
								<template #reference
									><ds-button>In a scrolling box</ds-button></template
								>
								Stays within the dashed box while the trigger is in it.
							</popover>
							<div class="ds-testScrollbox__spacer"></div>
						</div>
					</div>
				</template>
				<template #legacy>
					<div class="ds-testStack">
						<div class="ds-testClipped">
							<pop-over-legacy title-text="Default props">
								<template #reference
									><ds-button>In a clipping box</ds-button></template
								>
								Should not be cut off.
							</pop-over-legacy>
						</div>
						<div id="ds-testLegacyPopoverScrollbox" class="ds-testScrollbox">
							<div class="ds-testScrollbox__spacer">Scroll down ↓</div>
							<pop-over-legacy
								boundaries-selector="#ds-testLegacyPopoverScrollbox"
								title-text="boundaries-selector"
							>
								<template #reference
									><ds-button>In a scrolling box</ds-button></template
								>
								Stays within the dashed box while the trigger is in it.
							</pop-over-legacy>
							<div class="ds-testScrollbox__spacer"></div>
						</div>
					</div>
				</template>
			</side-by-side>
		</test-case>

		<test-case
			id="modal"
			title="Inside a modal"
			why="Hints inside modal forms."
			:steps="[
				'Open the modal.',
				'Open each popover.',
				'Press Esc once with the Reka popover open.',
			]"
			:expected="[
				'The Reka popover shows above the modal and is not cut off by it.',
				'The first Esc closes only the popover; the modal stays open.',
			]"
		>
			<ds-button @click="isModalOpen = true">Open modal</ds-button>
			<modal
				v-if="isModalOpen"
				header-title="Popovers in a modal"
				@close-modal="isModalOpen = false"
			>
				<side-by-side>
					<template #reka="{ log }">
						<popover
							side="top"
							title-text="Inside a modal"
							@update:open="log(`update:open ${$event}`)"
						>
							<template #reference><ds-button>Open</ds-button></template>
							Shows above the modal.
						</popover>
					</template>
					<template #legacy>
						<pop-over-legacy placement="top" title-text="Inside a modal">
							<template #reference><ds-button>Open</ds-button></template>
							Shows above the modal.
						</pop-over-legacy>
					</template>
				</side-by-side>
			</modal>
		</test-case>
	</playground-page>
</template>

<style>
.ds-testPlacementGrid {
	display: grid;
	gap: 48px 16px;
	grid-template-columns: repeat(2, max-content);
	padding: 24px 8px;
}
.ds-testOnboarding {
	display: flex;
	flex-direction: column;
	gap: 16px;
	min-height: 420px;
}
.ds-testOnboarding input,
.ds-testCheckbox {
	font: inherit;
}
.ds-testCheckbox {
	display: block;
	margin-bottom: 12px;
}
.ds-testStack {
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
}
</style>

<script setup lang="ts">
import { reactive, ref, useTemplateRef } from 'vue';
import PlaygroundPage from './PlaygroundPage.vue';
import TestCase from './TestCase.vue';
import SideBySide from './SideBySide.vue';
import Popover from '../../components/Popover/Popover.vue';
import { PopoverAlign, PopoverSide } from '../../components/Popover/Popover.consts';
import PopOverLegacy from '../../components/PopOverLegacy/PopOverLegacy.vue';
import Modal from '../../components/Modals/Modal/Modal.vue';
import DsButton, { BUTTON_TYPES } from '../../components/Buttons/Button';
import DsIconButton, {
	ICON_BUTTON_COLORS,
	ICON_BUTTON_SIZES,
} from '../../components/Buttons/IconButton';
import { ICONS } from '../../components/Icons/Icon';

const toc = [
	{ id: 'info-hint', title: 'Info hint' },
	{ id: 'placements', title: 'Placements' },
	{ id: 'onboarding', title: 'Onboarding' },
	{ id: 'disabled', title: 'Disabled' },
	{ id: 'long-content', title: 'Max height' },
	{ id: 'containers', title: 'Clipping and scrolling' },
	{ id: 'modal', title: 'Modal' },
];

const placements: Array<{ legacy: string; side: PopoverSide; align: PopoverAlign }> = [
	{ legacy: 'top', side: 'top', align: 'center' },
	{ legacy: 'bottom', side: 'bottom', align: 'center' },
	{ legacy: 'left', side: 'left', align: 'center' },
	{ legacy: 'right', side: 'right', align: 'center' },
	{ legacy: 'bottom-start', side: 'bottom', align: 'start' },
	{ legacy: 'bottom-end', side: 'bottom', align: 'end' },
];

const illustrationUrl =
	'https://wnl-platform-dev-kuba.s3.eu-central-1.amazonaws.com/public/illustation-StatusLekcji.png';
const announcement = reactive({ reka: false, legacy: false });

const isDisabled = ref(true);

const loremParagraph =
	'Bacon ipsum dolor amet t-bone meatball ground round turducken buffalo pork. Short loin pastrami brisket.';

const rekaScrollbox = useTemplateRef<HTMLElement>('rekaScrollbox');
const isModalOpen = ref(false);
</script>
