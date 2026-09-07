<template>
	<ds-dropdown
		:placement="DROPDOWN_PLACEMENTS.BOTTOM_END"
		:radius="DROPDOWN_RADIUSES.BOTTOM"
		@show="$emit('show')"
		@hide="$emit('hide')"
	>
		<template #reference>
			<ds-avatar
				v-bind="avatarProps"
				class="ds-userDropdown__trigger"
				:username="username"
				:size="AVATAR_SIZES.X_SMALL"
			>
				<template v-if="$slots.teamMemberImage" #teamMemberImage>
					<slot name="teamMemberImage" />
				</template>
			</ds-avatar>
		</template>

		<template #default="{ close }">
			<div class="ds-userDropdown__panel">
				<ds-select-list>
					<ds-select-list-item-container>
						<div class="ds-userDropdown__header">
							<ds-avatar
								v-bind="avatarProps"
								:username="username"
								:size="AVATAR_SIZES.XX_SMALL"
							>
								<template v-if="$slots.teamMemberImage" #teamMemberImage>
									<slot name="teamMemberImage" />
								</template>
							</ds-avatar>
							<div class="ds-userDropdown__headerText">
								<ds-text-group
									:size="TEXT_GROUP_SIZES.X_SMALL"
									:main-text="username"
									main-text-ellipsis
									:supporting-text="email"
									supporting-text-ellipsis
									is-supporting-text-tooltip-enabled
									:is-interactive="false"
								/>
							</div>
						</div>
					</ds-select-list-item-container>

					<ds-select-list-item-divider v-if="$slots.default" />

					<slot :close="close" />
				</ds-select-list>
			</div>
		</template>
	</ds-dropdown>
</template>

<style scoped lang="scss">
@import '../../../../styles/settings/spacings';

.ds-userDropdown {
	&__trigger {
		cursor: pointer;
	}

	&__panel {
		// DsDropdown's panel is `width: auto`, so a fixed-width block child is what pins it.
		width: 220px;
	}

	&__header {
		align-items: center;
		display: flex;
		gap: $space-3;
	}

	&__headerText {
		// Required for DsTextGroup's ellipsis: `.ds-textGroup` is `width: 100%` and a flex
		// item's default `min-width: auto` refuses to shrink below its content width.
		flex: 1;
		min-width: 0;
	}
}
</style>

<script setup lang="ts">
import DsAvatar, { AVATAR_SIZES, AvatarProps } from '../../Avatar';
import DsDropdown, { DROPDOWN_PLACEMENTS, DROPDOWN_RADIUSES } from '../../Dropdown';
import DsSelectList from '../../SelectList/SelectList.vue';
import DsSelectListItemContainer from '../../SelectList/SelectListItemContainer/SelectListItemContainer.vue';
import DsSelectListItemDivider from '../../SelectList/SelectListItemDivider/SelectListItemDivider.vue';
import DsTextGroup, { TEXT_GROUP_SIZES } from '../../TextGroup';

const {
	username,
	// DsTextGroup renders the supporting row whenever it isn't `null`, so an absent email
	// has to default to `null` rather than `undefined` or it leaves an empty row behind.
	email = null,
	// Everything left over is an Avatar prop, forwarded verbatim to both avatars. `size` is
	// excluded because this component owns both of them (32px trigger, 24px header).
	...avatarProps
} = defineProps<
	Omit<AvatarProps, 'size' | 'username'> & {
		username: string;
		email?: string | null;
	}
>();

defineEmits<{
	show: [];
	hide: [];
}>();

defineSlots<{
	default?: (props: { close: () => void }) => any;
	teamMemberImage?: () => any;
}>();
</script>
