import { IconItem } from '../../Icons/Icon';
import SelectListItem from '../SelectListItem/SelectListItem.vue';
declare const _default: {
    name: string;
    components: {
        SelectListItem: typeof SelectListItem;
    };
    props: {
        iconOff: {
            type: ObjectConstructor;
            default: null;
            validator(icon: any): boolean;
        };
        iconOn: {
            type: ObjectConstructor;
            default: null;
            validator(icon: any): boolean;
        };
        isOn: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelOff: {
            type: StringConstructor;
            required: boolean;
        };
        labelOn: {
            type: StringConstructor;
            required: boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator(size: any): boolean;
        };
        state: {
            type: StringConstructor;
            default: string;
            validator(size: any): boolean;
        };
    };
    data(): {
        SELECT_LIST_ITEM_SELECTION_MODE: Readonly<{
            SELECT_ONLY: string;
            TOGGLE: string;
        }>;
        SELECT_LIST_ITEM_STATES: Readonly<{
            DEFAULT: string;
            LOADING: string;
        }>;
    };
    computed: {
        icon(): IconItem | null;
        label(): string;
    };
};
export default _default;
