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
	</div>
</template>

<style scoped lang="scss">
@import '../../../../lib/styles/settings/radiuses';
@import '../../../../lib/styles/settings/colors/tokens';
@import '../../../../lib/styles/settings/typography/tokens';

.ds-avatar {
	$root: &;

	display: flex;

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
}
</style>

<script setup lang="ts">
import { AVATAR_SIZES, AvatarSize } from './Avatar.consts';
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		username: string;
		avatarUrl?: string;
		size?: AvatarSize;
	}>(),
	{
		size: AVATAR_SIZES.X_SMALL,
		avatarUrl: undefined,
	},
);

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
	if (props.avatarUrl) {
		return;
	}

	const colorIndex = (props.username.charCodeAt(0) - 65) % 16;

	return initialsBackgrounds[colorIndex];
});
const initials = computed(() => getInitials(props.username));
</script>
