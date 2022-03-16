import { Value } from '../../utils/type.utils';
import { BADGE_COLORS } from './Badge.consts';
declare const _default: {
    name: string;
    props: {
        label: {
            type: StringConstructor;
            required: boolean;
        };
        color: {
            type: StringConstructor;
            required: boolean;
            validator(value: Value<typeof BADGE_COLORS>): boolean;
        };
    };
    created(): void;
};
export default _default;
