<template>
	<div
		class="ds-avatar"
		:class="{
			'-ds-xx-small': size === AVATAR_SIZES.XX_SMALL,
			'-ds-x-small': size === AVATAR_SIZES.X_SMALL,
			'-ds-small': size === AVATAR_SIZES.SMALL,
			'-ds-medium': size === AVATAR_SIZES.MEDIUM,
			'-ds-large': size === AVATAR_SIZES.LARGE,
			'-ds-x-large': size === AVATAR_SIZES.X_LARGE,
		}"
	>
		<div
			class="ds-avatar__content"
			:style="{
				backgroundColor: initialBackgroundColor,
			}"
		>
			<img v-if="!!avatarUrl" :src="avatarUrl" :alt="username" class="ds-avatar__image" />
			<span v-else class="ds-avatar__initials">{{ initials }}</span>
		</div>
		<div v-if="activityStatus" class="ds-avatar__activityStatus">
			<ds-badge
				:color="activityStatusColor"
				:elevation="BADGE_ELEVATIONS.X_SMALL"
				:size="activityStatusSize"
			/>
		</div>
		<div v-if="accessStatus" class="ds-avatar__accessStatus">
			<ds-badge
				:color="accessStatusColor"
				:elevation="BADGE_ELEVATIONS.SMALL"
				:icon="accessStatusIcon"
				:size="accessStatusSize"
				:image-url="accessStatusImage"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../../../../lib/styles/settings/radiuses';
@import '../../../../lib/styles/settings/colors/tokens';
@import '../../../../lib/styles/settings/typography/tokens';

.ds-avatar {
	$root: &;

	display: flex;
	flex-shrink: 0;
	position: relative;

	&.-ds-xx-small {
		height: 24px;
		width: 24px;

		& #{$root}__content {
			@include info-s-default-regular;
		}
	}

	&.-ds-x-small {
		height: 32px;
		width: 32px;

		& #{$root}__content {
			@include heading-s-default-regular;
		}
	}

	&.-ds-small {
		height: 40px;
		width: 40px;

		& #{$root}__content {
			@include heading-m-default-regular;
		}
	}

	&.-ds-medium {
		height: 64px;
		width: 64px;

		& #{$root}__content {
			@include displayHeading-xs-default-regular;
		}
	}

	&.-ds-large {
		height: 88px;
		width: 88px;

		& #{$root}__content {
			@include displayHeading-m-default-regular;
		}
	}

	&.-ds-x-large {
		height: 140px;
		width: 140px;

		& #{$root}__content {
			@include displayHeading-m-default-regular;
		}
	}

	&.-ds-xx-small,
	&.-ds-x-small,
	&.-ds-small,
	&.-ds-medium {
		& #{$root}__content {
			border-radius: $radius-s;
		}
	}

	&.-ds-large,
	&.-ds-x-large {
		& #{$root}__content {
			border-radius: $radius-m;
		}
	}

	&__content {
		align-items: center;
		color: $color-inverted-text;
		display: flex;
		flex: 1;
		justify-content: center;
		overflow: hidden;
		user-select: none;
	}

	&__image {
		display: block;
		height: 100%;
		width: 100%;
	}

	&__accessStatus {
		@at-root {
			.ds-avatar.-ds-xx-small & {
				bottom: -2px;
				right: -2px;
			}

			.ds-avatar.-ds-large & {
				bottom: 1px;
				right: 1px;
			}
		}

		bottom: 0;
		display: flex;
		position: absolute;
		right: 0;
	}

	&__activityStatus {
		display: flex;
		left: -4px;
		position: absolute;
		top: -4px;

		.ds-avatar.-ds-xx-small &,
		.ds-avatar.-ds-x-small &,
		.ds-avatar.-ds-small & {
			left: -3px;
			top: -3px;
		}
	}
}
</style>

<script setup lang="ts">
import {
	AVATAR_ACCESS_STATUSES,
	AVATAR_ACTIVITY_STATUSES,
	AVATAR_SIZES,
	AvatarAccessStatus,
	AvatarActivityStatus,
	AvatarSize,
} from './Avatar.consts';
import DsBadge, { BADGE_ELEVATIONS, BADGE_SIZES, BADGE_COLORS } from '../Badge';
import { computed } from 'vue';
import { ICONS } from '../Icons/Icon';

const {
	size = AVATAR_SIZES.X_SMALL,
	username,
	avatarUrl,
	activityStatus,
	accessStatus,
	teamMemberImageUrl,
} = defineProps<{
	username: string;
	avatarUrl?: string;
	size?: AvatarSize;
	activityStatus?: AvatarActivityStatus;
	accessStatus?: AvatarAccessStatus;
	teamMemberImageUrl?: string;
}>();

const { initials, initialBackgroundColor } = useInitials();
const { accessStatusColor, accessStatusIcon, accessStatusSize, accessStatusImage } =
	useAccessStatus();
const { activityStatusColor, activityStatusSize } = useActivityStatus();
function useInitials() {
	const initialsBackgrounds = [
		'#1abc9c',
		'#2ecc71',
		'#3498db',
		'#9b59b6',
		'#34495e',
		'#16a085',
		'#27ae60',
		'#2980b9',
		'#8e44ad',
		'#2c3e50',
		'#f1c40f',
		'#e67e22',
		'#e74c3c',
		'#f39c12',
		'#d35400',
		'#c0392b',
	];

	function getInitials(username: string) {
		const [first, second] = username.split(/\s+/);

		if (first && second) {
			return `${first[0]}${second[0]}`.toUpperCase();
		}

		return first.substring(0, 2).toUpperCase();
	}

	const initialBackgroundColor = computed(() => {
		if (avatarUrl) {
			return;
		}

		const colorIndex = (username.charCodeAt(0) - 65) % 16;

		return initialsBackgrounds[colorIndex];
	});

	const initials = computed(() => getInitials(username));

	return { initials, initialBackgroundColor };
}

function useAccessStatus() {
	const accessStatusColor = computed(() => {
		switch (accessStatus) {
			case AVATAR_ACCESS_STATUSES.ACTIVE:
				return BADGE_COLORS.SUCCESS;
			case AVATAR_ACCESS_STATUSES.INACTIVE:
			case AVATAR_ACCESS_STATUSES.AWAITING:
				return BADGE_COLORS.NEUTRAL;
			case AVATAR_ACCESS_STATUSES.BLOCKED:
				return BADGE_COLORS.DANGER;
			default:
				return undefined;
		}
	});

	const accessStatusIcon = computed(() => {
		switch (accessStatus) {
			case AVATAR_ACCESS_STATUSES.ACTIVE:
				return ICONS.FA_UNLOCK_KEYHOLE;
			case AVATAR_ACCESS_STATUSES.BLOCKED:
			case AVATAR_ACCESS_STATUSES.INACTIVE:
				return ICONS.FA_LOCK_KEYHOLE;
			case AVATAR_ACCESS_STATUSES.AWAITING:
				return ICONS.FA_HOURGLASS_START;
			default:
				return undefined;
		}
	});

	const accessStatusSize = computed(() => {
		// Casting to AvatarSize to work around an IDE issue (PhpStorm incorrectly flags some case branches as unreachable)
		switch (size as AvatarSize) {
			case AVATAR_SIZES.XX_SMALL:
				return BADGE_SIZES.SMALL;
			case AVATAR_SIZES.X_SMALL:
				return BADGE_SIZES.SMALL;
			case AVATAR_SIZES.SMALL:
				return BADGE_SIZES.SMALL;
			case AVATAR_SIZES.MEDIUM:
				return BADGE_SIZES.MEDIUM;
			case AVATAR_SIZES.LARGE:
				return BADGE_SIZES.MEDIUM;
			case AVATAR_SIZES.X_LARGE:
			default:
				return BADGE_SIZES.X_LARGE;
		}
	});

	const accessStatusImage = computed(() => {
		if (accessStatus !== AVATAR_ACCESS_STATUSES.TEAM_MEMBER) {
			return undefined;
		}

		return teamMemberImageUrl;
	});

	return { accessStatusColor, accessStatusIcon, accessStatusSize, accessStatusImage };
}

function useActivityStatus() {
	const activityStatusColor = computed(() => {
		switch (activityStatus) {
			case AVATAR_ACTIVITY_STATUSES.ACTIVE:
				return BADGE_COLORS.SUCCESS;
			default:
			case AVATAR_ACTIVITY_STATUSES.INACTIVE:
				return BADGE_COLORS.NEUTRAL;
		}
	});

	const activityStatusSize = computed(() => {
		// Casting to AvatarSize to work around an IDE issue (PhpStorm incorrectly flags some case branches as unreachable)
		switch (size as AvatarSize) {
			case AVATAR_SIZES.XX_SMALL:
				return BADGE_SIZES.X_SMALL;
			case AVATAR_SIZES.X_SMALL:
				return BADGE_SIZES.SMALL;
			case AVATAR_SIZES.SMALL:
				return BADGE_SIZES.SMALL;
			case AVATAR_SIZES.MEDIUM:
				return BADGE_SIZES.MEDIUM;
			case AVATAR_SIZES.LARGE:
				return BADGE_SIZES.MEDIUM;
			case AVATAR_SIZES.X_LARGE:
			default:
				return BADGE_SIZES.MEDIUM;
		}
	});

	return { activityStatusColor, activityStatusSize };
}
</script>
