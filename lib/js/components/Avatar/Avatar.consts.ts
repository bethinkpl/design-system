import { Value } from '../../utils/type.utils';

export const AVATAR_SIZES = {
	XX_SMALL: 'xx-small',
	X_SMALL: 'x-small',
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	X_LARGE: 'x-large',
} as const;

export type AvatarSize = Value<typeof AVATAR_SIZES>;

export const AVATAR_ACTIVITY_STATUSES = {
	ACTIVE: 'active',
	INACTIVE: 'inactive',
} as const;

export type AvatarActivityStatus = Value<typeof AVATAR_ACTIVITY_STATUSES>;

export const AVATAR_ACCESS_STATUSES = {
	ACTIVE: 'active',
	INACTIVE: 'inactive',
	AWAITING: 'awaiting',
	BLOCKED: 'blocked',
	TEAM_MEMBER: 'team-member',
} as const;

export type AvatarAccessStatus = Value<typeof AVATAR_ACCESS_STATUSES>;
