import e from "primevue/config";
import t from "@primevue/themes/aura";
import i from "primevue/tooltip";
const d = (o) => {
  o.use(e, {
    theme: {
      preset: t,
      options: {
        darkModeSelector: ".app-dark"
        // enabling dark mode in storybook makes all components canvas black
      }
    },
    zIndex: {
      tooltip: 16777271
      // keep above $z-index-top-layer
    }
  }), o.directive("pv-tooltip", i);
};
export {
  d as initializePrimeVue
};
//# sourceMappingURL=primevue.js.map
