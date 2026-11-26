import d from "./Image.vue2.js";
import { resolveComponent as i, createElementBlock as r, openBlock as n, createElementVNode as t, createCommentVNode as l, normalizeClass as m, createVNode as p } from "vue";
/* empty css           */
import _ from "../../_virtual/_plugin-vue_export-helper.js";
const f = { class: "ds-image" }, g = ["src"], E = {
  key: 0,
  class: "ds-image__loader"
};
function c(e, o, u, I, S, v) {
  const a = i("ds-skeleton");
  return n(), r("div", f, [
    t("img", {
      class: m(["ds-image__image", {
        "-ds-contain": e.fit === e.IMAGE_FITS.CONTAIN,
        "-ds-cover": e.fit === e.IMAGE_FITS.COVER
      }]),
      draggable: "false",
      loading: "lazy",
      src: e.src,
      onError: o[0] || (o[0] = (...s) => e.onError && e.onError(...s)),
      onLoad: o[1] || (o[1] = (s) => e.isLoading = !1)
    }, null, 42, g),
    e.isLoading ? (n(), r("div", E, [
      p(a, {
        radius: e.SKELETON_RADIUS_SIZES.SMALL
      }, null, 8, ["radius"])
    ])) : l("", !0)
  ]);
}
const C = /* @__PURE__ */ _(d, [["render", c], ["__scopeId", "data-v-22eed58d"]]);
export {
  C as default
};
//# sourceMappingURL=Image.vue.js.map
