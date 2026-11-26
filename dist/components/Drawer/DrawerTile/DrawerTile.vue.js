import t from "./DrawerTile.vue2.js";
import { resolveComponent as s, createElementBlock as n, openBlock as p, createVNode as i, mergeProps as c } from "vue";
/* empty css                */
import d from "../../../_virtual/_plugin-vue_export-helper.js";
const l = { class: "ds-drawerTile" };
function m(e, o, a, _, f, $) {
  const r = s("ds-tile");
  return p(), n("div", l, [
    i(r, c(e.$props, {
      onClick: o[0] || (o[0] = (u) => e.$emit("click"))
    }), null, 16)
  ]);
}
const C = /* @__PURE__ */ d(t, [["render", m], ["__scopeId", "data-v-5691d8ae"]]);
export {
  C as default
};
//# sourceMappingURL=DrawerTile.vue.js.map
