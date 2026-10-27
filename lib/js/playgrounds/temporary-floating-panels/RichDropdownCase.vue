<!-- Temporary English-only testing UI. -->
<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
	<div class="ds-testProductCase">
		<p>{{ legacy ? 'Legacy · popper ref workaround' : 'Reka · reference slot toggle()' }}</p>
		<component
			:is="legacy ? DropdownLegacy : Dropdown"
			ref="dropdown"
			has-same-width
			append-to-body
			:open="open"
			@update:open="open = $event"
			@show="open = true"
			@hide="open = false"
		>
			<template #reference="{ toggle }">
				<ds-basic-rich-list-item
					:size="RICH_LIST_ITEM_SIZE.MEDIUM"
					:is-draggable="false"
					:is-selectable="false"
					:has-actions-slot-divider="false"
					:background-color="RICH_LIST_ITEM_BACKGROUND_COLOR.NEUTRAL_WEAK"
					eyebrow="Study access · 12 months"
					is-eyebrow-uppercase
					:text="selectedProduct"
					:data-test-product-trigger="legacy ? 'legacy' : 'reka'"
				>
					<template #leadingAccessory>
						<span class="ds-testProductThumbnail" aria-hidden="true">P</span>
					</template>
					<template #actions>
						<span @click="legacy ? toggleLegacy($event) : toggle()">
							<ds-icon-button
								:icon="open ? ICONS.FA_ANGLE_UP : ICONS.FA_ANGLE_DOWN"
								:size="ICON_BUTTON_SIZES.SMALL"
								:color="ICON_BUTTON_COLORS.NEUTRAL"
								:aria-label="`${legacy ? 'Legacy' : 'Reka'} product chevron`"
							/>
						</span>
					</template>
				</ds-basic-rich-list-item>
			</template>
			<template #default="{ close }">
				<ds-select-list>
					<ds-select-list-item
						v-for="product in products"
						:key="product"
						:label="product"
						:is-selected="selectedProduct === product"
						@click="selectProduct(product, close)"
					/>
				</ds-select-list>
			</template>
		</component>
		<small>State: {{ open ? 'open' : 'closed' }} · Selected: {{ selectedProduct }}</small>
	</div>
</template>

<style>
.ds-testProductCase {
	min-width: 0;
}
.ds-testProductCase small {
	display: block;
	margin-top: 8px;
}
.ds-testProductThumbnail {
	background: #dbe7ff;
	border-radius: 4px;
	color: #284f9e;
	display: grid;
	height: 28px;
	place-items: center;
	width: 30px;
}
</style>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import Dropdown from '../../components/Dropdown/Dropdown.vue';
import DropdownLegacy from '../../components/DropdownLegacy/DropdownLegacy.vue';
import DsBasicRichListItem from '../../components/RichList/BasicRichListItem';
import {
	RICH_LIST_ITEM_BACKGROUND_COLOR,
	RICH_LIST_ITEM_SIZE,
} from '../../components/RichList/RichListItem';
import DsIconButton, {
	ICON_BUTTON_COLORS,
	ICON_BUTTON_SIZES,
} from '../../components/Buttons/IconButton';
import { ICONS } from '../../components/Icons/Icon';
import DsSelectList from '../../components/SelectList/SelectList.vue';
import DsSelectListItem from '../../components/SelectList/SelectListItem/SelectListItem.vue';

defineProps<{ legacy: boolean }>();
const products = [
	'Medicine course',
	'Dentistry course',
	'A product with a longer name to check wrapping and panel width',
];
const selectedProduct = ref(products[0]);
const open = ref(false);
const dropdown = useTemplateRef<{ $refs: { popper?: { doToggle: (event: MouseEvent) => void } } }>(
	'dropdown',
);
function toggleLegacy(event: MouseEvent) {
	dropdown.value?.$refs.popper?.doToggle(event);
}
function selectProduct(product: string, close: () => void) {
	selectedProduct.value = product;
	close();
}
</script>
