import r from "./Divider.vue2.js";
import { createElementBlock as s, openBlock as o, normalizeClass as i } from "vue";
/* empty css             */
import a from "../../_virtual/_plugin-vue_export-helper.js";
function n(e, t, d, l, p, m) {
  return o(), s("div", {
    class: i(["ds-divider", {
      "-ds-vertical": e.isVertical,
      "-ds-horizontal": !e.isVertical,
      "-ds-strong": e.prominence === e.DIVIDER_PROMINENCES.STRONG,
      "-ds-weak": e.prominence === e.DIVIDER_PROMINENCES.WEAK,
      [e.sizeClass]: !0
    }])
  }, null, 2);
}
const u = /* @__PURE__ */ a(r, [["render", n], ["__scopeId", "data-v-8353e011"]]);
export {
  u as default
};
//# sourceMappingURL=Divider.vue.js.map
