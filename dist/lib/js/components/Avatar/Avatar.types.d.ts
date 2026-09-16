import { AvatarAccessStatus, AvatarActivityStatus, AvatarSize } from './Avatar.consts';

export interface AvatarProps {
    username: string;
    avatarUrl?: string;
    size?: AvatarSize;
    activityStatus?: AvatarActivityStatus;
    accessStatus?: AvatarAccessStatus;
    teamMemberImageUrl?: string;
    activityStatusTooltip?: string;
}
export interface AvatarSlots {
    teamMemberImage?: () => any;
}
