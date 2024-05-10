import Sandbox from './Sandbox.vue';
import PrimeVue from "primevue/config";

export default Sandbox;

export const initializePrimeVue = (app) => {
    app.use(PrimeVue, { ripple: true });
}