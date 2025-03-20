import { Value } from '../../utils/type.utils';

export declare const AVATAR_SIZES: {
    readonly XX_SMALL: "xx-small";
    readonly X_SMALL: "x-small";
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
    readonly X_LARGE: "x-large";
};
export type AvatarSize = Value<typeof AVATAR_SIZES>;
export declare const AVATAR_ACTIVITY_STATUSES: {
    readonly ACTIVE: "active";
    readonly INACTIVE: "inactive";
};
export type AvatarActivityStatus = Value<typeof AVATAR_ACTIVITY_STATUSES>;
export declare const AVATAR_ACCESS_STATUSES: {
    readonly ACTIVE: "active";
    readonly INACTIVE: "inactive";
    readonly AWAITING: "awaiting";
    readonly BLOCKED: "blocked";
    readonly TEAM_MEMBER: "team-member";
};
export type AvatarAccessStatus = Value<typeof AVATAR_ACCESS_STATUSES>;
