import { PropType } from 'vue';
import { DrawerPosition } from './Drawer.consts';
declare const _default: {
    name: string;
    props: {
        position: {
            type: PropType<DrawerPosition>;
            default: "right";
            validate(position: any): void;
        };
    };
    computed: {
        positionClassName(): string;
    };
};
export default _default;
