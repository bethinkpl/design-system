import { PropType } from 'vue';
import DsDivider from '../../Divider/Divider.vue';
declare const _default: {
    name: string;
    components: {
        DsDivider: typeof DsDivider;
        DsLoadingBar: typeof DsDivider;
    };
    props: {
        headerHasPadding: {
            type: BooleanConstructor;
            default: boolean;
        };
        dividerUnderHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        hasBorder: {
            type: BooleanConstructor;
            default: boolean;
        };
        borderPosition: {
            type: PropType<string>;
            default: string;
        };
        borderSize: {
            type: PropType<string>;
            default: string;
        };
        borderColor: {
            type: PropType<string>;
            default: string;
        };
        hasLoadingBar: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadingBarColor: {
            type: PropType<string>;
            default: string;
        };
        loadingBarTime: {
            type: StringConstructor;
            default: string;
        };
    };
    computed: {
        hasLeftBoarder(): any;
        hasTopBoarder(): any;
        borderColorClass(): string;
        borderSizeClass(): string;
    };
};
export default _default;
