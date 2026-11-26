import r from "./CounterToggle.vue2.js";
import { resolveComponent as t, createElementBlock as o, openBlock as s, normalizeClass as c, createVNode as i, createCommentVNode as l, toDisplayString as a } from "vue";
/* empty css                   */
import d from "../../../_virtual/_plugin-vue_export-helper.js";
const p = {
  key: 0,
  class: "ds-counterToggle__counter"
};
function m(e, u, _, f, g, C) {
  const n = t("icon");
  return s(), o("div", {
    class: c(["ds-counterToggle", [{ "-ds-selected": e.isSelected, "-ds-disabled": e.isDisabled }, e.colorClass]])
  }, [
    i(n, {
      class: "ds-counterToggle__icon",
      icon: e.icon,
      size: e.ICON_SIZES.X_SMALL
    }, null, 8, ["icon", "size"]),
    e.hasCounter ? (s(), o("span", p, a(e.counter), 1)) : l("", !0)
  ], 2);
}
const k = /* @__PURE__ */ d(r, [["render", m], ["__scopeId", "data-v-3f681974"]]);
export {
  k as default
};
//# sourceMappingURL=CounterToggle.vue.js.map
