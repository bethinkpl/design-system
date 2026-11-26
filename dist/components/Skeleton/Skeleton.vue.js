import r from "./Skeleton.vue2.js";
import { resolveComponent as t, createBlock as n, openBlock as s } from "vue";
import i from "../../_virtual/_plugin-vue_export-helper.js";
function d(e, p, a, m, h, l) {
  const o = t("prime-skeleton");
  return s(), n(o, {
    width: e.width,
    height: e.height,
    "border-radius": e.radiusTranslated,
    dt: e.designTokens
  }, null, 8, ["width", "height", "border-radius", "dt"]);
}
const _ = /* @__PURE__ */ i(r, [["render", d]]);
export {
  _ as default
};
//# sourceMappingURL=Skeleton.vue.js.map
