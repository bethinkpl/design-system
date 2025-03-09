<template>
	<combobox v-model="value" by="label">
		<combobox-anchor>
			<div class="relative w-full max-w-sm items-center">
				<combobox-input
					class="pl-9"
					:display-value="(val) => val?.name ?? ''"
					placeholder="Select framework..."
				/>
				<span class="absolute start-0 inset-y-0 flex items-center justify-center px-3">
					<search class="size-4 text-muted-foreground" />
				</span>
			</div>
		</combobox-anchor>

		<combobox-list>
			<combobox-empty> No framework found. </combobox-empty>

			<combobox-group>
				<combobox-item v-for="option in options" :key="option.name" :value="option">
					{{ option.name }}

					<combobox-item-indicator>
						<check :class="cn('ml-auto h-4 w-4')" />
					</combobox-item-indicator>
				</combobox-item>
			</combobox-group>
		</combobox-list>
	</combobox>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import {
	Combobox,
	ComboboxAnchor,
	ComboboxEmpty,
	ComboboxGroup,
	ComboboxInput,
	ComboboxItem,
	ComboboxItemIndicator,
	ComboboxList,
} from '@/components/ui/combobox';
import { Check, Search } from 'lucide-vue-next';
interface Item {
	name: string;
}

interface Props {
	options: Array<Item>;
}

defineProps<Props>();

const value = defineModel();
</script>
