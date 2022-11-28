import { PropType } from 'vue';
import { DrawerPosition } from './Drawer.consts';
declare const _default: {
    name: string;
    props: {
        position: {
            type: PropType<DrawerPosition>;
            default: "right";
            validator(position: any): boolean;
        };
        stickyHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        stickyFooter: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    computed: {
        positionClassName(): string;
    };
};
export default _default;
