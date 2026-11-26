import p from "./DropdownLegacy.vue2.js";
import { resolveComponent as t, createBlock as a, openBlock as l, withCtx as r, createElementVNode as s, normalizeClass as i, normalizeStyle as u, renderSlot as d } from "vue";
/* empty css                    */
import m from "../../_virtual/_plugin-vue_export-helper.js";
const f = ["inert"];
function c(e, o, S, O, g, w) {
  const n = t("vue-popper");
  return l(), a(n, {
    ref: "popper",
    key: e.key,
    "boundaries-selector": e.boundariesSelector,
    "force-show": e.forceShow,
    options: e.options,
    "visible-arrow": !1,
    trigger: e.triggerAction,
    "delay-on-mouse-out": 300,
    onDocumentClick: o[0] || (o[0] = (D) => e.$emit("document-click")),
    onHide: e.onHide,
    onShow: e.onShow
  }, {
    reference: r(() => [
      d(e.$slots, "reference", { isOpened: e.isOpened }, void 0, !0)
    ]),
    default: r(() => [
      s("div", {
        class: i(["popper ds-dropdownLegacy", {
          "-ds-radiusBottom": e.radius === e.DROPDOWN_LEGACY_RADIUSES.BOTTOM,
          "-ds-radiusTop": e.radius === e.DROPDOWN_LEGACY_RADIUSES.TOP,
          "-ds-radiusBottom -ds-radiusTop": e.radius === e.DROPDOWN_LEGACY_RADIUSES.BOTH
        }]),
        inert: !e.isOpened
      }, [
        s("div", {
          class: i(["ds-dropdownLegacy__scrollableWrapper", { "-ds-heightLimited": !!e.maxHeight }]),
          style: u(e.scrollableWrapperStyles)
        }, [
          d(e.$slots, "default", { close: e.close }, void 0, !0)
        ], 6)
      ], 10, f)
    ]),
    _: 3
  }, 8, ["boundaries-selector", "force-show", "options", "trigger", "onHide", "onShow"]);
}
const A = /* @__PURE__ */ m(p, [["render", c], ["__scopeId", "data-v-556779d6"]]);
export {
  A as default
};
//# sourceMappingURL=DropdownLegacy.vue.js.map
