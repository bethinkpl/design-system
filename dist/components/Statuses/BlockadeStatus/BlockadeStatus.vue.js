import t from "./BlockadeStatus.vue2.js";
import { resolveComponent as s, createElementBlock as a, openBlock as c, normalizeClass as n, createVNode as r, createElementVNode as i, toDisplayString as l } from "vue";
/* empty css                    */
import d from "../../../_virtual/_plugin-vue_export-helper.js";
const p = { class: "ds-blockadeStatus__text" };
function _(o, m, u, f, S, k) {
  const e = s("icon");
  return c(), a("div", {
    class: n(["ds-blockadeStatus", o.statusClass])
  }, [
    r(e, {
      size: o.ICON_SIZES.X_SMALL,
      icon: o.icon,
      class: "ds-blockadeStatus__icon"
    }, null, 8, ["size", "icon"]),
    i("span", p, l(o.text), 1)
  ], 2);
}
const z = /* @__PURE__ */ d(t, [["render", _], ["__scopeId", "data-v-9c661391"]]);
export {
  z as default
};
//# sourceMappingURL=BlockadeStatus.vue.js.map
