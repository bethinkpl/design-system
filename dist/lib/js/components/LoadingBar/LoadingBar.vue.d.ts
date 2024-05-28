import { PropType } from 'vue';
declare const _default: {
    name: string;
    props: {
        color: {
            type: PropType<string>;
            default: string;
        };
        size: {
            type: PropType<string>;
            default: string;
        };
        time: {
            type: StringConstructor;
            required: boolean;
        };
    };
    data(): {
        intervalId: number;
        width: number;
    };
    computed: {
        sizeClassName(): string;
        loadingBarStyles(): {
            width: string;
            transition: string;
        };
    };
    mounted(): void;
};
export default _default;
