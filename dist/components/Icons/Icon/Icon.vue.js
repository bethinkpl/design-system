import r from "./Icon.vue2.js";
import { resolveComponent as t, createElementBlock as a, openBlock as e, normalizeStyle as l, normalizeClass as p, createBlock as i, resolveDynamicComponent as c } from "vue";
/* empty css          */
import m from "../../../_virtual/_plugin-vue_export-helper.js";
function d(o, f, u, k, y, z) {
  var n;
  const s = t("font-awesome-icon");
  return e(), a("div", {
    class: p(["ds-icon", {
      "-ds-touchable": o.touchableDeprecated,
      "-ds-spin": o.spinning,
      "-ds-flipped-vertical": o.flippedVertical,
      "-ds-flipped-horizontal": o.flippedHorizontal,
      [o.sizeClassName]: !0
    }]),
    style: l({ "--rotate": `${(n = o.rotation) != null ? n : 0}deg` })
  }, [
    o.isFontawesomeIcon ? (e(), i(s, {
      key: 0,
      icon: o.icon
    }, null, 8, ["icon"])) : (e(), i(c(o.icon), { key: 1 }))
  ], 6);
}
const w = /* @__PURE__ */ m(r, [["render", d]]);
export {
  w as default
};
//# sourceMappingURL=Icon.vue.js.map
