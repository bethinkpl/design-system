import { defineComponent as d, createElementBlock as s, openBlock as a, normalizeClass as o, unref as l, createBlock as r, createCommentVNode as E, createElementVNode as _, renderSlot as c, toDisplayString as t } from "vue";
import { LABEL_VALUE_ITEM_VALUE_COLORS as n, LABEL_VALUE_ITEM_SIZES as i, LABEL_VALUE_ITEM_STATES as u } from "./LabelValueItem.consts.js";
import m from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as L, ICONS as I } from "../../Icons/Icon/Icon.consts.js";
const T = /* @__PURE__ */ d({
  __name: "LabelValueItem",
  props: {
    state: { default: () => u.DEFAULT },
    label: {},
    valueText: {},
    size: { default: () => i.MEDIUM },
    isLabelStrong: { type: Boolean, default: !1 },
    valueColor: { default: () => n.NEUTRAL },
    icon: { default: null }
  },
  setup(p) {
    return (e, A) => (a(), s("div", {
      class: o(["ds-labelValueItem", { "-ds-large": e.size === l(i).LARGE }])
    }, [
      e.icon ? (a(), r(l(m), {
        key: 0,
        class: "ds-labelValueItem__icon",
        icon: e.icon,
        size: l(L).XX_SMALL
      }, null, 8, ["icon", "size"])) : E("", !0),
      _("div", {
        class: o(["ds-labelValueItem__label", { "-ds-strong": e.isLabelStrong }])
      }, t(e.label), 3),
      c(e.$slots, "accessory", {}, void 0, !0),
      e.state === l(u).LOADING ? (a(), r(l(m), {
        key: 1,
        icon: l(I).FAD_SPINNER_THIRD,
        size: l(L).XX_SMALL,
        spinning: ""
      }, null, 8, ["icon", "size"])) : (a(), s("div", {
        key: 2,
        class: o(["ds-labelValueItem__value", {
          "-ds-color-primary": e.valueColor === l(n).PRIMARY
        }])
      }, t(e.valueText), 3))
    ], 2));
  }
});
export {
  T as default
};
//# sourceMappingURL=LabelValueItem.vue2.js.map
