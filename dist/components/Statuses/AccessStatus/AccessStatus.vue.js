import t from "./AccessStatus.vue2.js";
import { resolveComponent as o, createElementBlock as c, openBlock as a, normalizeClass as n, createVNode as r, createElementVNode as i, toDisplayString as p } from "vue";
/* empty css                  */
import _ from "../../../_virtual/_plugin-vue_export-helper.js";
const l = { class: "ds-accessStatus__text" };
function d(s, m, u, f, S, C) {
  const e = o("icon");
  return a(), c("div", {
    class: n(["ds-accessStatus", s.statusClass])
  }, [
    r(e, {
      size: s.ICON_SIZES.X_SMALL,
      icon: s.icon,
      class: "ds-accessStatus__icon"
    }, null, 8, ["size", "icon"]),
    i("span", l, p(s.text), 1)
  ], 2);
}
const I = /* @__PURE__ */ _(t, [["render", d], ["__scopeId", "data-v-badb1f4e"]]);
export {
  I as default
};
//# sourceMappingURL=AccessStatus.vue.js.map
