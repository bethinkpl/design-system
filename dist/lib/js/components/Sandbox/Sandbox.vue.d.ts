import PrimeButton from 'primevue/button';
import Calendar from 'primevue/calendar';
import FloatLabel from 'primevue/floatlabel';
import InputSwitch from 'primevue/inputswitch';
import 'primevue/resources/themes/saga-blue/theme.css';
declare const _default: {
    name: string;
    components: {
        Calendar: typeof Calendar;
        FloatLabel: typeof FloatLabel;
        PrimeButton: typeof PrimeButton;
        InputSwitch: typeof InputSwitch;
    };
    data(): {
        calendarValue: null;
        checked: boolean;
        buttonLabel: string;
    };
    methods: {
        onSubmit(): void;
    };
};
export default _default;
