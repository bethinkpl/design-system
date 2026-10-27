<!-- Temporary English-only testing UI. -->
<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<main class="ds-testLab">
		<aside class="ds-testLab__controls" :class="{ '-ds-collapsed': isCollapsed }">
			<div class="ds-testLab__controlsHeader">
				<strong>Collision lab</strong>
				<button class="ds-testLab__link" @click="isCollapsed = !isCollapsed">{{
					isCollapsed ? 'Show controls' : 'Hide'
				}}</button>
			</div>
			<template v-if="!isCollapsed">
				<p class="ds-testLab__hint"
					>Drag the trigger by its ⠿ handle, or jump to a spot below. Open the panel and
					watch where it lands. With a scrollable container, scroll it while the panel is
					open.</p
				>

				<fieldset>
					<legend>Position</legend>
					<div class="ds-testLab__presets">
						<button
							v-for="preset in presets"
							:key="preset.label"
							:title="preset.label"
							@click="moveTo(preset)"
							>{{ preset.icon }}</button
						>
					</div>
				</fieldset>

				<fieldset>
					<legend>Component</legend>
					<label v-for="option in ['dropdown', 'popover']" :key="option"
						><input v-model="kind" type="radio" :value="option" /> {{ option }}</label
					>
				</fieldset>
				<fieldset>
					<legend>Version</legend>
					<label v-for="option in ['reka', 'legacy']" :key="option"
						><input v-model="version" type="radio" :value="option" />
						{{ option }}</label
					>
				</fieldset>
				<fieldset v-if="kind === 'popover'">
					<legend>side</legend>
					<label v-for="option in sides" :key="option"
						><input v-model="side" type="radio" :value="option" /> {{ option }}</label
					>
				</fieldset>
				<fieldset>
					<legend>align</legend>
					<label v-for="option in aligns" :key="option"
						><input v-model="align" type="radio" :value="option" /> {{ option }}</label
					>
				</fieldset>
				<fieldset>
					<legend>Content</legend>
					<label v-for="(_, option) in contentSizes" :key="option"
						><input v-model="contentSize" type="radio" :value="option" />
						{{ option }}</label
					>
				</fieldset>
				<fieldset>
					<legend>Options</legend>
					<label><input v-model="hasMaxHeight" type="checkbox" /> maxHeight 200px</label>
					<label :class="{ '-ds-disabled': version === 'legacy' }"
						><input
							v-model="sideFlip"
							type="checkbox"
							:disabled="version === 'legacy'"
						/>
						sideFlip</label
					>
					<template v-if="kind === 'dropdown'">
						<label
							><input v-model="isSingleRadius" type="checkbox" /> radius single</label
						>
						<label><input v-model="sameWidth" type="checkbox" /> sameWidth</label>
					</template>
					<label><input v-model="isPinned" type="checkbox" /> Keep open</label>
				</fieldset>
				<fieldset>
					<legend>Container</legend>
					<label
						><input v-model="isScrollable" type="checkbox" /> Scrollable
						container</label
					>
					<template v-if="isScrollable">
						<label
							><input v-model="hasCollisionBoundary" type="checkbox" /> Container as
							collisionBoundary</label
						>
						<label :class="{ '-ds-disabled': isAppendToBodyFixed }"
							><input
								v-model="appendToBody"
								type="checkbox"
								:disabled="isAppendToBodyFixed"
							/>
							appendToBody</label
						>
						<label :class="{ '-ds-disabled': version === 'legacy' }"
							><input
								v-model="hideWhenDetached"
								type="checkbox"
								:disabled="version === 'legacy'"
							/>
							hideWhenDetached</label
						>
						<label :class="{ '-ds-disabled': version === 'legacy' }"
							><input
								v-model="stickToBoundary"
								type="checkbox"
								:disabled="version === 'legacy'"
							/>
							stickToBoundary</label
						>
					</template>
				</fieldset>
			</template>
		</aside>

		<output class="ds-testLab__readout">
			<span>Props: {{ propsSummary }}</span>
			<span v-if="!readout">Panel: closed</span>
			<template v-else>
				<span
					>Rendered: {{ readout.placement }}
					<strong v-if="readout.isFlipped" class="-ds-warn">flipped</strong></span
				>
				<span
					>Size: {{ readout.width }} × {{ readout.height }}px
					<strong v-if="readout.isHidden" class="-ds-warn">hidden</strong></span
				>
				<strong v-if="readout.offScreen" class="-ds-error"
					>Off screen: {{ readout.offScreen }}</strong
				>
				<strong v-if="readout.outsideContainer" class="-ds-warn"
					>Outside container: {{ readout.outsideContainer }}</strong
				>
			</template>
		</output>

		<div
			id="ds-testLabStage"
			ref="stage"
			class="ds-testLab__stage"
			:class="{ '-ds-scrollable': isScrollable }"
		>
			<div class="ds-testLab__canvas">
				<div class="ds-testLab__anchor" :style="anchorStyle">
					<span
						class="ds-testLab__grip"
						title="Drag to move"
						@pointerdown="startDrag"
						@pointermove="drag"
						@pointerup="stopDrag"
						>⠿</span
					>
					<p v-if="legacyUnsupported" class="ds-testLab__unsupported">{{
						legacyUnsupported
					}}</p>

					<template v-else-if="kind === 'dropdown' && version === 'reka'">
						<dropdown
							:key="`dropdown-reka-${remountKey}`"
							:open="isPinned || open"
							:align="align === 'end' ? 'end' : 'start'"
							:max-height="maxHeight"
							:side-flip="sideFlip"
							:radius="isSingleRadius ? 'single' : 'both'"
							:has-same-width="sameWidth"
							:append-to-body="appendToBody"
							:collision-boundary="collisionBoundary"
							:hide-when-detached="hideWhenDetached"
							:stick-to-boundary="stickToBoundary"
							@update:open="open = $event"
						>
							<template #reference
								><ds-button class="ds-testLab__trigger"
									>Trigger</ds-button
								></template
							>
							<template #default="{ close }">
								<numbered-list
									data-ds-lab-panel
									:count="itemCount"
									@pick="close()"
								/>
							</template>
						</dropdown>
					</template>
					<template v-else-if="kind === 'dropdown'">
						<dropdown-legacy
							:key="`dropdown-legacy-${remountKey}`"
							:force-show="isPinned"
							:placement="legacyPlacement"
							:max-height="maxHeight ?? undefined"
							:radius="isSingleRadius ? 'bottom' : 'both'"
							:same-width="sameWidth"
							:boundaries-selector="legacyBoundariesSelector"
						>
							<template #reference
								><ds-button class="ds-testLab__trigger"
									>Trigger</ds-button
								></template
							>
							<template #default="{ close }">
								<numbered-list
									data-ds-lab-panel
									:count="itemCount"
									@pick="close()"
								/>
							</template>
						</dropdown-legacy>
					</template>
					<template v-else-if="version === 'reka'">
						<popover
							:key="`popover-reka-${remountKey}`"
							:open="isPinned || open"
							:is-manual="isPinned"
							:side="side"
							:align="align"
							:max-height="maxHeight"
							:side-flip="sideFlip"
							:append-to-body="appendToBody"
							:collision-boundary="collisionBoundary"
							:hide-when-detached="hideWhenDetached"
							:stick-to-boundary="stickToBoundary"
							title-text="Popover title"
							@update:open="open = $event"
						>
							<template #reference
								><ds-button class="ds-testLab__trigger"
									>Trigger</ds-button
								></template
							>
							<div data-ds-lab-panel>
								<p v-for="n in itemCount" :key="n"
									>Line {{ n }} of the popover content.</p
								>
							</div>
						</popover>
					</template>
					<template v-else>
						<pop-over-legacy
							:key="`popover-legacy-${remountKey}`"
							:force-show="isPinned"
							:placement="legacyPlacement"
							:max-height="hasMaxHeight"
							:append-to-body="appendToBody"
							:boundaries-selector="legacyBoundariesSelector"
							title-text="Popover title"
						>
							<template #reference
								><ds-button class="ds-testLab__trigger"
									>Trigger</ds-button
								></template
							>
							<div data-ds-lab-panel>
								<p v-for="n in itemCount" :key="n"
									>Line {{ n }} of the popover content.</p
								>
							</div>
						</pop-over-legacy>
					</template>
				</div>
			</div>
		</div>
	</main>
</template>

<style>
.ds-testLab {
	background-color: #f3f6fb;
	background-image:
		linear-gradient(#e3e9f2 1px, transparent 1px),
		linear-gradient(90deg, #e3e9f2 1px, transparent 1px);
	background-size: 40px 40px;
	color: #18243b;
	font: 14px/1.5 system-ui;
	inset: 0;
	overflow: hidden;
	position: fixed;
}
.ds-testLab__controls {
	background: white;
	border: 1px solid #dce3ed;
	border-radius: 12px;
	box-shadow: 0 4px 16px rgb(24 36 59 / 8%);
	left: 12px;
	max-height: calc(100vh - 24px);
	overflow: auto;
	padding: 12px 16px;
	position: absolute;
	top: 12px;
	width: 240px;
	z-index: 1;
}
.ds-testLab__controls.-ds-collapsed {
	width: auto;
}
.ds-testLab__controlsHeader {
	align-items: center;
	display: flex;
	gap: 12px;
	justify-content: space-between;
}
.ds-testLab__link {
	background: none;
	border: 0;
	color: #284f9e;
	cursor: pointer;
	font: inherit;
	padding: 0;
}
.ds-testLab__hint {
	color: #526078;
	font-size: 13px;
	margin: 8px 0;
}
.ds-testLab fieldset {
	border: 0;
	display: flex;
	flex-wrap: wrap;
	gap: 2px 12px;
	margin: 0;
	padding: 6px 0;
}
.ds-testLab legend {
	color: #526078;
	font-size: 11px;
	letter-spacing: 0.08em;
	padding: 0;
	text-transform: uppercase;
}
.ds-testLab label {
	cursor: pointer;
	white-space: nowrap;
}
.ds-testLab label.-ds-disabled {
	opacity: 0.5;
}
.ds-testLab__presets {
	display: grid;
	gap: 4px;
	grid-template-columns: repeat(3, 32px);
}
.ds-testLab__presets button {
	background: #f3f6fb;
	border: 1px solid #becadd;
	border-radius: 4px;
	cursor: pointer;
	height: 28px;
}
.ds-testLab__readout {
	background: #18243b;
	border-radius: 8px;
	color: white;
	display: flex;
	flex-direction: column;
	font:
		12px/1.6 ui-monospace,
		monospace;
	opacity: 0.92;
	padding: 8px 12px;
	pointer-events: none;
	position: absolute;
	right: 12px;
	top: 12px;
	z-index: 1;
}
.ds-testLab__readout .-ds-warn {
	color: #ffc861;
}
.ds-testLab__readout .-ds-error {
	color: #ff8a80;
}
.ds-testLab__stage {
	inset: 0;
	position: absolute;
}
.ds-testLab__stage.-ds-scrollable {
	background: rgb(255 255 255 / 50%);
	border: 2px dashed #8fa3c0;
	border-radius: 8px;
	inset: 12px 12px 12px 268px;
	overflow: auto;
}
.ds-testLab__canvas {
	height: 100%;
	position: relative;
	width: 100%;
}
.ds-testLab__stage.-ds-scrollable .ds-testLab__canvas {
	height: 300%;
	width: 300%;
}
.ds-testLab__anchor {
	align-items: center;
	display: flex;
	gap: 4px;
	position: absolute;
	transform: translate(-50%, -50%);
}
.ds-testLab__grip {
	background: white;
	border: 1px solid #becadd;
	border-radius: 4px;
	cursor: grab;
	padding: 4px 2px;
	touch-action: none;
	user-select: none;
}
.ds-testLab__grip:active {
	cursor: grabbing;
}
.ds-testLab__trigger {
	min-width: 200px;
}
.ds-testLab__unsupported {
	background: #fff6e5;
	border-radius: 6px;
	margin: 0;
	max-width: 220px;
	padding: 8px 12px;
}
.ds-testLab [data-ds-lab-panel] p {
	margin: 0 0 4px;
}
</style>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef, watch } from 'vue';
import NumberedList from './NumberedList.vue';
import Dropdown from '../../components/Dropdown/Dropdown.vue';
import DropdownLegacy from '../../components/DropdownLegacy/DropdownLegacy.vue';
import Popover from '../../components/Popover/Popover.vue';
import { PopoverAlign, PopoverSide } from '../../components/Popover/Popover.consts';
import PopOverLegacy from '../../components/PopOverLegacy/PopOverLegacy.vue';
import DsButton from '../../components/Buttons/Button';

const kind = ref<'dropdown' | 'popover'>('dropdown');
const version = ref<'reka' | 'legacy'>('reka');
const side = ref<PopoverSide>('bottom');
const align = ref<PopoverAlign>('start');
const contentSizes = { short: 3, medium: 12, long: 45 } as const;
const contentSize = ref<keyof typeof contentSizes>('medium');
const hasMaxHeight = ref(false);
const sideFlip = ref(true);
const isSingleRadius = ref(false);
const sameWidth = ref(false);
const isPinned = ref(false);
const isCollapsed = ref(false);
const open = ref(false);

// Scrollable container: the stage becomes a dashed box whose content is three times its size,
// scrolled to the middle, so the trigger can be scrolled out of view in any direction.
const isScrollable = ref(false);
const hasCollisionBoundary = ref(false);
const appendToBody = ref(true);
const hideWhenDetached = ref(false);
const stickToBoundary = ref(false);
const stage = useTemplateRef<HTMLElement>('stage');
const collisionBoundary = computed(() =>
	isScrollable.value && hasCollisionBoundary.value ? stage.value : null,
);
const legacyBoundariesSelector = computed(() =>
	isScrollable.value && hasCollisionBoundary.value ? '#ds-testLabStage' : undefined,
);
// Legacy Dropdown always renders inline.
const isAppendToBodyFixed = computed(() => version.value === 'legacy' && kind.value === 'dropdown');
watch(isScrollable, (scrollable) => {
	if (!scrollable) {
		hasCollisionBoundary.value = false;
		appendToBody.value = true;
		hideWhenDetached.value = false;
		stickToBoundary.value = false;
	}
	centerScroll();
});
async function centerScroll() {
	await nextTick();
	if (!isScrollable.value || !stage.value) return;
	stage.value.scrollLeft = stage.value.clientWidth;
	stage.value.scrollTop = stage.value.clientHeight;
}

const sides: Array<PopoverSide> = ['top', 'right', 'bottom', 'left'];
const aligns = computed<Array<PopoverAlign>>(() =>
	kind.value === 'dropdown' ? ['start', 'end'] : ['start', 'center', 'end'],
);
watch(kind, () => {
	if (!aligns.value.includes(align.value)) align.value = 'start';
});

const itemCount = computed(() => contentSizes[contentSize.value]);
const maxHeight = computed(() => (hasMaxHeight.value ? '200px' : null));

// Legacy takes one placement string and only knows some combinations.
const legacyPlacement = computed(() => {
	if (kind.value === 'dropdown') return `bottom-${align.value}`;
	if (align.value === 'center') return side.value;
	return `${side.value}-${align.value}`;
});
const legacyUnsupported = computed(() => {
	if (version.value !== 'legacy') return null;
	const supported =
		kind.value === 'dropdown'
			? ['bottom-start', 'bottom-end']
			: ['top', 'right', 'bottom', 'left', 'bottom-start', 'bottom-end'];
	return supported.includes(legacyPlacement.value)
		? null
		: `Legacy has no placement '${legacyPlacement.value}'.`;
});

const propsSummary = computed(() => {
	const containerParts = isScrollable.value
		? [
				appendToBody.value && !isAppendToBodyFixed.value ? null : ':appendToBody=false',
				hasCollisionBoundary.value
					? version.value === 'legacy'
						? 'boundariesSelector'
						: 'collisionBoundary'
					: null,
				hideWhenDetached.value && version.value === 'reka' ? 'hideWhenDetached' : null,
				stickToBoundary.value && version.value === 'reka' ? 'stickToBoundary' : null,
			]
		: [];
	if (version.value === 'legacy') {
		return [
			`placement='${legacyPlacement.value}'`,
			hasMaxHeight.value ? 'maxHeight' : null,
			...containerParts,
		]
			.filter(Boolean)
			.join(' ');
	}
	const parts = [
		kind.value === 'popover' ? `side='${side.value}'` : null,
		`align='${align.value}'`,
		maxHeight.value ? `maxHeight='${maxHeight.value}'` : null,
		sideFlip.value ? null : ':sideFlip=false',
		...containerParts,
	];
	return parts.filter(Boolean).join(' ');
});

// Any option change remounts the panel, as Legacy only reads its options on mount.
const remountKey = ref(0);
watch(
	[
		kind,
		version,
		side,
		align,
		contentSize,
		hasMaxHeight,
		sideFlip,
		isSingleRadius,
		sameWidth,
		isScrollable,
		hasCollisionBoundary,
		appendToBody,
		hideWhenDetached,
		stickToBoundary,
	],
	() => {
		open.value = false;
		remountKey.value++;
	},
);

const presets = [
	{ icon: '↖', label: 'Top left', x: 8, y: 6 },
	{ icon: '↑', label: 'Top', x: 50, y: 6 },
	{ icon: '↗', label: 'Top right', x: 92, y: 6 },
	{ icon: '←', label: 'Left', x: 8, y: 50 },
	{ icon: '•', label: 'Center', x: 50, y: 50 },
	{ icon: '→', label: 'Right', x: 92, y: 50 },
	{ icon: '↙', label: 'Bottom left', x: 8, y: 94 },
	{ icon: '↓', label: 'Bottom', x: 50, y: 94 },
	{ icon: '↘', label: 'Bottom right', x: 92, y: 94 },
];
// In percent of the visible stage; in a scrollable container, of its middle third.
const position = ref({ x: 50, y: 50 });
const anchorStyle = computed(() => {
	const toCanvas = (value: number) => (isScrollable.value ? (100 + value) / 3 : value);
	return { left: `${toCanvas(position.value.x)}%`, top: `${toCanvas(position.value.y)}%` };
});
function moveTo(preset: { x: number; y: number }) {
	position.value = { x: preset.x, y: preset.y };
	centerScroll();
}

let isDragging = false;
function startDrag(event: PointerEvent) {
	isDragging = true;
	(event.target as HTMLElement).setPointerCapture(event.pointerId);
}
function drag(event: PointerEvent) {
	if (!isDragging) return;
	const canvas = stage.value?.firstElementChild;
	if (!canvas) return;
	const rect = canvas.getBoundingClientRect();
	const fromCanvas = (value: number) => (isScrollable.value ? value * 3 - 100 : value);
	const clamp = (value: number) =>
		isScrollable.value ? Math.min(198, Math.max(-98, value)) : Math.min(98, Math.max(2, value));
	position.value = {
		x: clamp(fromCanvas(((event.clientX - rect.left) / rect.width) * 100)),
		y: clamp(fromCanvas(((event.clientY - rect.top) / rect.height) * 100)),
	};
}
function stopDrag() {
	isDragging = false;
}

// Reads where the open panel actually landed. Reka marks the panel with data-side and
// data-align, popper.js with x-placement.
interface Readout {
	placement: string;
	isFlipped: boolean;
	width: number;
	height: number;
	isHidden: boolean;
	offScreen: string;
	outsideContainer: string;
}
// How far the rect sticks out of the bounds, e.g. "top 120px, right 8px".
function overflow(
	rect: DOMRect,
	bounds: { top: number; right: number; bottom: number; left: number },
) {
	return [
		rect.top < bounds.top ? `top ${Math.round(bounds.top - rect.top)}px` : null,
		rect.bottom > bounds.bottom ? `bottom ${Math.round(rect.bottom - bounds.bottom)}px` : null,
		rect.left < bounds.left ? `left ${Math.round(bounds.left - rect.left)}px` : null,
		rect.right > bounds.right ? `right ${Math.round(rect.right - bounds.right)}px` : null,
	]
		.filter(Boolean)
		.join(', ');
}
const readout = ref<Readout | null>(null);
function measure() {
	const marker = document.querySelector('[data-ds-lab-panel]');
	const panel = marker?.closest('[data-side], [x-placement]');
	if (!panel) {
		readout.value = null;
		return;
	}
	const rect = panel.getBoundingClientRect();
	if (!rect.width) {
		readout.value = null;
		return;
	}
	const placement =
		panel.getAttribute('x-placement') ??
		`side='${panel.getAttribute('data-side')}' align='${panel.getAttribute('data-align')}'`;
	const requestedSide = kind.value === 'dropdown' ? 'bottom' : side.value;
	const renderedSide = (
		panel.getAttribute('x-placement') ??
		panel.getAttribute('data-side') ??
		''
	).split('-')[0];
	const offScreen = overflow(rect, {
		top: 0,
		right: window.innerWidth,
		bottom: window.innerHeight,
		left: 0,
	});
	let outsideContainer = '';
	if (isScrollable.value && stage.value) {
		const box = stage.value.getBoundingClientRect();
		const border = stage.value.clientLeft;
		outsideContainer = overflow(rect, {
			top: box.top + border,
			right: box.left + border + stage.value.clientWidth,
			bottom: box.top + border + stage.value.clientHeight,
			left: box.left + border,
		});
	}
	readout.value = {
		placement,
		isFlipped: renderedSide !== requestedSide,
		width: Math.round(rect.width),
		height: Math.round(rect.height),
		isHidden: getComputedStyle(panel).visibility === 'hidden',
		offScreen,
		outsideContainer,
	};
}
let measureTimer: ReturnType<typeof setInterval> | undefined;
onMounted(() => {
	measureTimer = setInterval(measure, 200);
});
onBeforeUnmount(() => clearInterval(measureTimer));
</script>
