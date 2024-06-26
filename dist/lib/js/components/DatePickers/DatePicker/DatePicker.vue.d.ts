import { PropType } from 'vue';
import DsTile from '../../Tile';
declare const _default: {
    name: string;
    components: {
        DatePickerBox: typeof DsTile;
        DsTile: typeof DsTile;
    };
    props: {
        triggerType: {
            type: PropType<string>;
            default: string;
        };
        isInteractive: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        date: {
            type: StringConstructor;
            default: string;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        isLabelUppercase: {
            type: BooleanConstructor;
            default: boolean;
        };
        icon: {
            type: ObjectConstructor;
            default: null;
            validate: (icon: any) => boolean;
        };
        isIconHiddenOnMobile: {
            type: BooleanConstructor;
            default: boolean;
        };
        calendarPosition: {
            type: PropType<string>;
            default: string;
        };
        errorMessage: {
            type: StringConstructor;
            default: string;
        };
        state: {
            type: PropType<string>;
            default: string;
        };
        color: {
            type: PropType<string>;
            default: string;
        };
        defaultDate: {
            type: (StringConstructor | DateConstructor | NumberConstructor)[];
            default: null;
        };
        disableDates: {
            type: ArrayConstructor;
            default: () => never[];
        };
        minDate: {
            type: (StringConstructor | DateConstructor | NumberConstructor)[];
            default: null;
        };
        maxDate: {
            type: (StringConstructor | DateConstructor | NumberConstructor)[];
            default: null;
        };
    };
    emits: {
        'update:date': () => boolean;
    };
    data(): {
        datePicker: null;
        isOpen: boolean;
        DATE_PICKER_STATES: Readonly<{
            DEFAULT: string;
            DISABLED: string;
            LOADING: string;
        }>;
        DATE_PICKER_TRIGGER_TYPES: Readonly<{
            BOX: string;
            TILE: string;
        }>;
    };
    computed: {
        isDatePickerEnabled(): any;
        eyebrowText(): string;
        text(): any;
    };
    mounted(): Promise<void>;
    unmounted(): void;
    methods: {
        toggle(): void;
    };
};
export default _default;
