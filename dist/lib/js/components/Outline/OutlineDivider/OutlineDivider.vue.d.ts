import DsDivider from '../../Divider';
declare const _default: {
    name: string;
    components: {
        DsDivider: typeof DsDivider;
    };
    props: {
        prominence: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
    };
};
export default _default;
