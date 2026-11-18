import { defineComponent as r, createElementBlock as a, openBlock as t, normalizeClass as n, unref as s, renderSlot as d } from "vue";
import { FORM_CONTROL_STATE as l, FORM_CONTROL_SIZE as o } from "./FormControlLabel.consts.js";
const f = /* @__PURE__ */ r({
  __name: "FormControlLabel",
  props: {
    size: { default: () => o.SMALL },
    state: { default: () => l.DEFAULT }
  },
  setup(m) {
    return (e, i) => (t(), a("span", {
      class: n([
        "ds-formControlLabel",
        {
          "-ds-x-small": e.size === s(o).X_SMALL,
          "-ds-small": e.size === s(o).SMALL,
          "-ds-medium": e.size === s(o).MEDIUM,
          "-ds-disabled": e.state === s(l).DISABLED
        }
      ])
    }, [
      d(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
export {
  f as default
};
//# sourceMappingURL=FormControlLabel.vue2.js.map
