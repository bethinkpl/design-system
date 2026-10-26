<!-- Temporary English-only testing UI. -->
<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<playground-page title="Dropdown · Reka vs Legacy" :toc="toc">
		<template #intro>
			<p
				>Each case is a real usage pattern from wnl-platform or landing-app, set up the same
				way on both sides with the props each version takes. Open one panel at a time. The
				log under each column shows the events the parent receives.</p
			>
			<p
				>Check in every case: <kbd>Esc</kbd> closes (Reka only) and a click outside
				closes.</p
			>
		</template>

		<test-case
			id="action-menu"
			title="Action menu at the right edge"
			why="The most common pattern: an icon button at the end of a row opens a list of actions aligned to its right edge."
			:steps="[
				'Open the menu with the ⋮ button.',
				'Pick an action.',
				'Open again and press Esc.',
				'Narrow the window to 320px and open again.',
			]"
			:expected="[
				'The panel\'s right edge lines up with the button\'s right edge.',
				'Picking an action closes the panel and updates Last action.',
				'Esc closes the panel.',
				'At 320px the panel stays fully on screen.',
			]"
			legacy-note="placement='bottom-end' becomes align='end'. Esc does nothing in Legacy."
		>
			<side-by-side>
				<template #reka="{ log }">
					<div class="ds-testSpread">
						<span class="ds-testState">Last action: {{ lastAction.reka }}</span>
						<dropdown align="end" @update:open="log(`update:open ${$event}`)">
							<template #reference>
								<ds-icon-button
									:icon="ICONS.FA_ELLIPSIS_VERTICAL"
									:color="ICON_BUTTON_COLORS.NEUTRAL"
									aria-label="More actions"
								/>
							</template>
							<template #default="{ close }">
								<select-list>
									<select-list-item
										v-for="action in actions"
										:key="action"
										:label="action"
										@click="runAction('reka', action, close)"
									/>
								</select-list>
							</template>
						</dropdown>
					</div>
				</template>
				<template #legacy="{ log }">
					<div class="ds-testSpread">
						<span class="ds-testState">Last action: {{ lastAction.legacy }}</span>
						<dropdown-legacy
							placement="bottom-end"
							@show="log('show')"
							@hide="log('hide')"
							@document-click="log('document-click')"
						>
							<template #reference>
								<ds-icon-button
									:icon="ICONS.FA_ELLIPSIS_VERTICAL"
									:color="ICON_BUTTON_COLORS.NEUTRAL"
									aria-label="More actions"
								/>
							</template>
							<template #default="{ close }">
								<select-list>
									<select-list-item
										v-for="action in actions"
										:key="action"
										:label="action"
										@click="runAction('legacy', action, close)"
									/>
								</select-list>
							</template>
						</dropdown-legacy>
					</div>
				</template>
			</side-by-side>
		</test-case>

		<test-case
			id="select-field"
			title="Select field"
			why="A field-like trigger with a same-width panel and one rounded edge, e.g. filters and sorting in wnl-platform."
			:steps="[
				'Open the field and pick an option.',
				'Watch the chevron while opening and closing.',
				'Check the panel corners where it meets the trigger.',
			]"
			:expected="[
				'The panel is exactly as wide as the trigger.',
				'Only the bottom corners of the panel are rounded; the edge touching the trigger is square.',
				'The chevron points up while open (isOpen in the reference slot).',
			]"
			legacy-note="radius='bottom' becomes radius='single', which follows the side the panel opens on. To see it flip above the trigger, use the Collision lab story."
		>
			<side-by-side>
				<template #reka="{ log }">
					<dropdown
						same-width
						radius="single"
						@update:open="log(`update:open ${$event}`)"
					>
						<template #reference="{ isOpen }">
							<ds-button
								:type="BUTTON_TYPES.OUTLINED"
								:icon-right="isOpen ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN"
								class="ds-testField"
							>
								{{ sort.reka }}
							</ds-button>
						</template>
						<template #default="{ close }">
							<select-list>
								<select-list-item
									v-for="option in sortOptions"
									:key="option"
									:label="option"
									:is-selected="option === sort.reka"
									@click="pickSort('reka', option, close)"
								/>
							</select-list>
						</template>
					</dropdown>
				</template>
				<template #legacy="{ log }">
					<dropdown-legacy
						same-width
						radius="bottom"
						@show="log('show')"
						@hide="log('hide')"
						@document-click="log('document-click')"
					>
						<template #reference="{ isOpened }">
							<ds-button
								:type="BUTTON_TYPES.OUTLINED"
								:icon-right="isOpened ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN"
								class="ds-testField"
							>
								{{ sort.legacy }}
							</ds-button>
						</template>
						<template #default="{ close }">
							<select-list>
								<select-list-item
									v-for="option in sortOptions"
									:key="option"
									:label="option"
									:is-selected="option === sort.legacy"
									@click="pickSort('legacy', option, close)"
								/>
							</select-list>
						</template>
					</dropdown-legacy>
				</template>
			</side-by-side>
		</test-case>

		<test-case
			id="rich-trigger"
			title="Rich list row trigger"
			why="landing-app ProductDropdown: the whole row opens the panel, and so does the chevron in the actions slot, which stops click propagation."
			:steps="[
				'Click the row text.',
				'Close, then click the chevron.',
				'Pick a product with a long name.',
			]"
			:expected="[
				'Both the row and the chevron open and close the panel.',
				'State under the row matches what you see.',
				'The panel is as wide as the row and long names wrap.',
			]"
			legacy-note="The chevron needs the popper ref workaround (doToggle); Reka passes toggle() in the reference slot."
		>
			<side-by-side hide-log>
				<template #reka><rich-dropdown-case :legacy="false" /></template>
				<template #legacy><rich-dropdown-case legacy /></template>
			</side-by-side>
		</test-case>

		<test-case
			id="long-list"
			title="Long list"
			why="Lists of lessons or courses can be long; maxHeight keeps the panel small and scrolls inside."
			:steps="[
				'Open the list with maxHeight and scroll inside it to Item 45.',
				'Open the list without maxHeight.',
			]"
			:expected="[
				'With maxHeight the panel is 240px tall and the last item is reachable by scrolling inside.',
				'Without maxHeight the panel shows all items and the page scrolls to reveal them.',
			]"
		>
			<side-by-side>
				<template #reka="{ log }">
					<div class="ds-testRow">
						<dropdown
							max-height="240px"
							@update:open="log(`maxHeight · update:open ${$event}`)"
						>
							<template #reference><ds-button>maxHeight 240px</ds-button></template>
							<template #default="{ close }">
								<numbered-list :count="45" @pick="close()" />
							</template>
						</dropdown>
						<dropdown @update:open="log(`no maxHeight · update:open ${$event}`)">
							<template #reference><ds-button>No maxHeight</ds-button></template>
							<template #default="{ close }">
								<numbered-list :count="45" @pick="close()" />
							</template>
						</dropdown>
					</div>
				</template>
				<template #legacy="{ log }">
					<div class="ds-testRow">
						<dropdown-legacy
							max-height="240px"
							@show="log('maxHeight · show')"
							@hide="log('maxHeight · hide')"
						>
							<template #reference><ds-button>maxHeight 240px</ds-button></template>
							<template #default="{ close }">
								<numbered-list :count="45" @pick="close()" />
							</template>
						</dropdown-legacy>
						<dropdown-legacy
							@show="log('no maxHeight · show')"
							@hide="log('no maxHeight · hide')"
						>
							<template #reference><ds-button>No maxHeight</ds-button></template>
							<template #default="{ close }">
								<numbered-list :count="45" @pick="close()" />
							</template>
						</dropdown-legacy>
					</div>
				</template>
			</side-by-side>
		</test-case>

		<test-case
			id="scroll-container"
			title="Inside a scrolling container"
			why="Dropdowns in scrolling sidebars and tables. wnl-platform passes boundaries-selector in a few such places."
			:steps="[
				'Scroll the dashed box until the trigger shows, and open the panel.',
				'Scroll the box until the trigger leaves it, in both directions.',
			]"
			:expected="[
				'While the trigger is in the box, the panel stays attached to it and inside the box.',
				'Once the trigger leaves the box, the panel detaches and stays at the box edge.',
			]"
			legacy-note="boundaries-selector (a CSS selector) becomes collision-boundary (an element). Legacy keeps the panel in the box on its own; Reka needs stick-to-boundary for that."
		>
			<side-by-side>
				<template #reka="{ log }">
					<div ref="rekaScrollbox" class="ds-testScrollbox">
						<div class="ds-testScrollbox__spacer">Scroll down ↓</div>
						<dropdown
							:collision-boundary="rekaScrollbox"
							stick-to-boundary
							max-height="160px"
							@update:open="log(`update:open ${$event}`)"
						>
							<template #reference><ds-button>Open in container</ds-button></template>
							<template #default="{ close }">
								<numbered-list :count="12" @pick="close()" />
							</template>
						</dropdown>
						<div class="ds-testScrollbox__spacer"></div>
					</div>
				</template>
				<template #legacy="{ log }">
					<div id="ds-testLegacyScrollbox" class="ds-testScrollbox">
						<div class="ds-testScrollbox__spacer">Scroll down ↓</div>
						<dropdown-legacy
							boundaries-selector="#ds-testLegacyScrollbox"
							max-height="160px"
							@show="log('show')"
							@hide="log('hide')"
						>
							<template #reference><ds-button>Open in container</ds-button></template>
							<template #default="{ close }">
								<numbered-list :count="12" @pick="close()" />
							</template>
						</dropdown-legacy>
						<div class="ds-testScrollbox__spacer"></div>
					</div>
				</template>
			</side-by-side>
		</test-case>

		<test-case
			id="clipping"
			title="Inside an overflow: hidden box"
			why="Cards and table cells often clip their content. This is why appendToBody is on by default."
			:steps="['Open both panels with default props.']"
			:expected="['The Reka panel shows in full outside the dashed box.']"
			legacy-note="Legacy Dropdown has no appendToBody and renders inline, so the box cuts its panel off."
		>
			<side-by-side>
				<template #reka="{ log }">
					<div class="ds-testClipped">
						<dropdown @update:open="log(`update:open ${$event}`)">
							<template #reference><ds-button>Default props</ds-button></template>
							<template #default="{ close }">
								<numbered-list :count="6" @pick="close()" />
							</template>
						</dropdown>
					</div>
				</template>
				<template #legacy="{ log }">
					<div class="ds-testClipped">
						<dropdown-legacy @show="log('show')" @hide="log('hide')">
							<template #reference><ds-button>Default props</ds-button></template>
							<template #default="{ close }">
								<numbered-list :count="6" @pick="close()" />
							</template>
						</dropdown-legacy>
					</div>
				</template>
			</side-by-side>
		</test-case>

		<test-case
			id="modal"
			title="Inside a modal"
			why="Forms in modals use dropdowns; the panel has to show above the modal and past its edge."
			:steps="[
				'Open the modal.',
				'Open each dropdown and scroll inside it.',
				'Press Esc once with the Reka panel open.',
			]"
			:expected="[
				'The Reka panel shows above the modal and is not cut off by it.',
				'The first Esc closes only the dropdown; the modal stays open.',
			]"
		>
			<ds-button @click="isModalOpen = true">Open modal</ds-button>
			<modal
				v-if="isModalOpen"
				header-title="Dropdowns in a modal"
				@close-modal="isModalOpen = false"
			>
				<side-by-side>
					<template #reka="{ log }">
						<dropdown
							same-width
							max-height="240px"
							@update:open="log(`update:open ${$event}`)"
						>
							<template #reference><ds-button>Pick an item</ds-button></template>
							<template #default="{ close }">
								<numbered-list :count="30" @pick="close()" />
							</template>
						</dropdown>
					</template>
					<template #legacy="{ log }">
						<dropdown-legacy
							same-width
							max-height="240px"
							@show="log('show')"
							@hide="log('hide')"
						>
							<template #reference><ds-button>Pick an item</ds-button></template>
							<template #default="{ close }">
								<numbered-list :count="30" @pick="close()" />
							</template>
						</dropdown-legacy>
					</template>
				</side-by-side>
			</modal>
		</test-case>
	</playground-page>
</template>

<style>
.ds-testField {
	min-width: 220px;
}
</style>

<script setup lang="ts">
import { reactive, ref, useTemplateRef } from 'vue';
import PlaygroundPage from './PlaygroundPage.vue';
import TestCase from './TestCase.vue';
import SideBySide from './SideBySide.vue';
import NumberedList from './NumberedList.vue';
import RichDropdownCase from './RichDropdownCase.vue';
import Dropdown from '../../components/Dropdown/Dropdown.vue';
import DropdownLegacy from '../../components/DropdownLegacy/DropdownLegacy.vue';
import Modal from '../../components/Modals/Modal/Modal.vue';
import DsButton, { BUTTON_TYPES } from '../../components/Buttons/Button';
import DsIconButton, { ICON_BUTTON_COLORS } from '../../components/Buttons/IconButton';
import { ICONS } from '../../components/Icons/Icon';
import SelectList from '../../components/SelectList/SelectList.vue';
import SelectListItem from '../../components/SelectList/SelectListItem/SelectListItem.vue';

const toc = [
	{ id: 'action-menu', title: 'Action menu' },
	{ id: 'select-field', title: 'Select field' },
	{ id: 'rich-trigger', title: 'Rich list row' },
	{ id: 'long-list', title: 'Long list' },
	{ id: 'scroll-container', title: 'Scrolling container' },
	{ id: 'clipping', title: 'overflow: hidden' },
	{ id: 'modal', title: 'Modal' },
];

type Side = 'reka' | 'legacy';

const actions = ['Edit', 'Duplicate', 'Copy link', 'Archive'];
const lastAction = reactive<Record<Side, string>>({ reka: 'none', legacy: 'none' });
function runAction(side: Side, action: string, close: () => void) {
	lastAction[side] = action;
	close();
}

const sortOptions = ['Newest first', 'Oldest first', 'Alphabetical', 'Most popular'];
const sort = reactive<Record<Side, string>>({ reka: sortOptions[0], legacy: sortOptions[0] });
function pickSort(side: Side, option: string, close: () => void) {
	sort[side] = option;
	close();
}

const rekaScrollbox = useTemplateRef<HTMLElement>('rekaScrollbox');
const isModalOpen = ref(false);
</script>
