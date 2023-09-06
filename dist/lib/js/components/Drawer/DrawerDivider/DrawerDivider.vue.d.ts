import Divider from '../../Divider';
declare const _default: {
    name: string;
    components: {
        DsDivider: typeof Divider;
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
