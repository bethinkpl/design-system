<!-- Temporary English-only testing UI. -->
<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<div class="ds-testPair" :class="{ 'ds-testPairEnd': edge }">
		<div v-for="legacy in [false, true]" :key="String(legacy)" class="ds-testExample">
			<small>{{ legacy ? 'Legacy · vue-popperjs' : 'New · Reka' }}</small>
			<component :is="panel(legacy)" v-bind="panelProps(legacy)">
				<template #reference>
					<ds-button as="button" :style="{ width: wide ? '240px' : undefined }">
						{{ legacy ? 'Legacy' : 'Reka' }} · {{ label }}
					</ds-button>
				</template>
				<template #default="{ close }">
					<div
						class="ds-testPanelBody"
						:style="{ width: kind === 'dropdown' ? '240px' : undefined }"
					>
						<template v-if="form">
							<label>Search <input placeholder="Type here; check focus" /></label>
							<label><input type="checkbox" /> Keep selection</label>
							<button @click="expanded = !expanded">Toggle extra content</button>
							<p v-if="expanded"
								>Content grew after opening. The panel should reposition.</p
							>
						</template>
						<p v-if="unbroken" class="ds-testUnbroken">{{
							'LongUnbrokenContent'.repeat(20)
						}}</p>
						<button
							v-for="n in count"
							:key="n"
							class="ds-testOption"
							@click="selected = n"
						>
							Item {{ n }}{{ selected === n ? ' ✓ selected' : '' }}
						</button>
						<button class="ds-testOption" @click="close()">Close panel</button>
					</div>
				</template>
			</component>
		</div>
	</div>
</template>

<style>
.ds-testUnbroken {
	overflow-wrap: anywhere;
}
.ds-testPair {
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
}
.ds-testPairEnd {
	justify-content: flex-end;
}
.ds-testExample {
	display: flex;
	flex-direction: column;
	gap: 8px;
}
.ds-testExample small {
	color: #526078;
	font: 12px/1.4 system-ui;
}
.ds-testTrigger {
	background: white;
	border: 1px solid #becadd;
	border-radius: 6px;
	color: #18243b;
	cursor: pointer;
	font: 14px/1.4 system-ui;
	padding: 10px 14px;
}
.ds-testTrigger:focus-visible {
	outline: 3px solid #618dff;
	outline-offset: 2px;
}
.ds-testPanelBody {
	box-sizing: border-box;
	padding: 8px;
}
.ds-testPanelBody label {
	display: block;
	padding: 8px 0;
}
.ds-testPanelBody input:not([type='checkbox']) {
	box-sizing: border-box;
	padding: 8px;
	width: 100%;
}
.ds-testOption {
	background: transparent;
	border: 0;
	border-radius: 4px;
	color: inherit;
	cursor: pointer;
	display: block;
	padding: 10px;
	text-align: left;
	width: 100%;
}
.ds-testOption:hover,
.ds-testOption:focus-visible {
	background: #e8efff;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import DsButton from '../../components/Buttons/Button';
import Dropdown from '../../components/Dropdown/Dropdown.vue';
import DropdownLegacy from '../../components/DropdownLegacy/DropdownLegacy.vue';
import Popover from '../../components/Popover/Popover.vue';
import PopOverLegacy from '../../components/PopOverLegacy/PopOverLegacy.vue';

const {
	kind,
	label = 'Open',
	count = 3,
	limited = false,
	portal,
	single = false,
	edge = false,
	wide = false,
	form = false,
	unbroken = false,
	hideWhenDetached = false,
} = defineProps<{
	kind: 'dropdown' | 'popover';
	label?: string;
	count?: number;
	limited?: boolean;
	portal?: boolean;
	single?: boolean;
	edge?: boolean;
	wide?: boolean;
	form?: boolean;
	unbroken?: boolean;
	// Reka only; Legacy has no equivalent.
	hideWhenDetached?: boolean;
}>();
const selected = ref<number | null>(null);
const expanded = ref(false);
function panel(legacy: boolean) {
	return kind === 'dropdown'
		? legacy
			? DropdownLegacy
			: Dropdown
		: legacy
			? PopOverLegacy
			: Popover;
}
function panelProps(legacy: boolean) {
	const props: Record<string, unknown> = {};
	if (portal !== undefined) props.appendToBody = portal;
	if (!legacy) props.hideWhenDetached = hideWhenDetached;
	if (kind === 'dropdown') {
		props.maxHeight = limited ? '180px' : undefined;
		props.sameWidth = wide;
		props.radius = single ? (legacy ? 'bottom' : 'single') : 'both';
		if (edge) {
			if (legacy) props.placement = 'bottom-end';
			else props.align = 'end';
		}
	} else {
		props.maxHeight = limited;
		props.titleText = label;
		props.size = 'small';
	}
	return props;
}
</script>
