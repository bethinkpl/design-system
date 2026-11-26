import { defineComponent as g, computed as u, createElementBlock as d, openBlock as r, normalizeClass as l, unref as a, Fragment as I, createElementVNode as s, toDisplayString as o, createBlock as _, createCommentVNode as t } from "vue";
import p from "../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as m } from "../Icons/Icon/Icon.consts.js";
import { PROGRESS_BAR_LEGEND_SIZES as c } from "./ProgressBarLegend.consts.js";
const L = { class: "ds-progressBarLegendItem__label" }, B = { class: "ds-progressBarLegendItem__wrapper" }, f = { class: "ds-progressBarLegendItem__dataWrapper" }, v = { class: "ds-progressBarLegendItem__data" }, h = {
  key: 0,
  class: "ds-progressBarLegendItem__percentValue"
}, S = {
  key: 1,
  class: "ds-progressBarLegendItem__wrapper"
}, k = { class: "ds-progressBarLegendItem__label" }, z = { class: "ds-progressBarLegendItem__dataWrapper" }, E = { class: "ds-progressBarLegendItem__data" }, V = {
  key: 0,
  class: "ds-progressBarLegendItem__percentValue"
}, C = /* @__PURE__ */ g({
  __name: "ProgressBarLegendItem",
  props: {
    size: { default: () => c.SMALL },
    color: {},
    icon: { default: null },
    label: { default: "" },
    data: { default: "" },
    percentValue: { default: "" }
  },
  setup(i) {
    const n = u(() => {
      if (i.percentValue)
        return `(${i.percentValue}%)`;
    });
    return (e, y) => (r(), d("div", {
      class: l(["ds-progressBarLegendItem", { "-ds-small": e.size === a(c).SMALL }])
    }, [
      e.size === a(c).MEDIUM ? (r(), d(I, { key: 0 }, [
        s("div", L, o(e.label), 1),
        s("div", B, [
          s("div", {
            class: l(["ds-progressBarLegendItem__dataIndicator", { "-ds-hasIcon": !!e.icon, [`-ds-${e.color}`]: !0 }])
          }, [
            e.icon ? (r(), _(a(p), {
              key: 0,
              class: "ds-progressBarLegendItem__icon",
              size: a(m).XX_SMALL,
              icon: e.icon
            }, null, 8, ["size", "icon"])) : t("", !0)
          ], 2),
          s("div", f, [
            s("span", v, o(e.data), 1),
            n.value ? (r(), d("span", h, o(n.value), 1)) : t("", !0)
          ])
        ])
      ], 64)) : (r(), d("div", S, [
        s("div", {
          class: l(["ds-progressBarLegendItem__dataIndicator", { "-ds-hasIcon": !!e.icon, [`-ds-${e.color}`]: !0 }])
        }, [
          e.icon ? (r(), _(a(p), {
            key: 0,
            class: "ds-progressBarLegendItem__icon",
            size: a(m).XXX_SMALL,
            icon: e.icon
          }, null, 8, ["size", "icon"])) : t("", !0)
        ], 2),
        s("div", k, o(e.label), 1),
        s("div", z, [
          s("span", E, o(e.data), 1),
          n.value ? (r(), d("span", V, o(n.value), 1)) : t("", !0)
        ])
      ]))
    ], 2));
  }
});
export {
  C as default
};
//# sourceMappingURL=ProgressBarLegendItem.vue2.js.map
