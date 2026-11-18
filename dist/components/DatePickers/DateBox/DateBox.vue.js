import I from "./DateBox.vue2.js";
import { resolveComponent as E, createElementBlock as n, openBlock as o, normalizeClass as a, createElementVNode as s, createCommentVNode as d, createVNode as l, toDisplayString as i, createBlock as _, Fragment as c } from "vue";
/* empty css             */
import p from "../../../_virtual/_plugin-vue_export-helper.js";
const S = {
  key: 0,
  class: "ds-dateBox__loader"
}, D = { class: "ds-dateBox__dateWrapper" }, T = {
  key: 0,
  class: "ds-dateBox__eyebrow"
}, A = { class: "ds-dateBox__date" }, O = { class: "ds-dateBox__dateText" }, B = {
  key: 0,
  class: "ds-dateBox__loader"
}, C = { class: "ds-dateBox__dateWrapper" }, N = {
  key: 0,
  class: "ds-dateBox__eyebrow"
}, R = { class: "ds-dateBox__date" }, u = { class: "ds-dateBox__dateText" };
function L(e, r, h, m, b, y) {
  const t = E("ds-icon");
  return o(), n("div", {
    class: a(["ds-dateBox", {
      "-ds-disabled": e.state === e.DATE_PICKER_STATES.DISABLED,
      "-ds-loading": e.state === e.DATE_PICKER_STATES.LOADING,
      "-ds-interactive": e.isInteractive,
      "-ds-warning": e.color === e.DATE_PICKER_COLORS.WARNING,
      "-ds-neutralWeak": e.DATE_PICKER_COLORS.NEUTRAL_WEAK === e.color,
      "-ds-neutral": e.DATE_PICKER_COLORS.NEUTRAL === e.color,
      "-ds-danger": e.color === e.DATE_PICKER_COLORS.DANGER,
      "-ds-isOpen": e.isOpen
    }])
  }, [
    s("div", {
      class: a(["ds-dateBox__widthWrapper", { "-ds-has-icon": e.startIcon, "-ds-iconHiddenOnMobile": e.areIconsHiddenOnMobile }])
    }, [
      e.state === e.DATE_PICKER_STATES.LOADING ? (o(), n("div", S, [
        l(t, {
          icon: e.ICONS.FAD_SPINNER_THIRD,
          size: e.ICON_SIZES.X_SMALL,
          spinning: ""
        }, null, 8, ["icon", "size"])
      ])) : d("", !0),
      s("div", D, [
        e.startDateEyebrowText ? (o(), n("span", T, i(e.startDateEyebrowText), 1)) : d("", !0),
        s("div", A, [
          e.startIcon ? (o(), _(t, {
            key: 0,
            class: a(["ds-dateBox__icon", { "-ds-hiddenOnMobile": e.areIconsHiddenOnMobile }]),
            icon: e.startIcon,
            size: e.ICON_SIZES.XX_SMALL
          }, null, 8, ["class", "icon", "size"])) : d("", !0),
          s("span", O, i(e.startDateText), 1)
        ])
      ])
    ], 2),
    e.startDate && e.endDateIfDifferentThanStartDate ? (o(), n(c, { key: 0 }, [
      r[0] || (r[0] = s("span", { class: "ds-dateBox__separator" }, "–", -1)),
      s("div", {
        class: a(["ds-dateBox__widthWrapper -ds-justify-to-end", {
          "-ds-has-icon": e.endIcon,
          "-ds-iconHiddenOnMobile": e.areIconsHiddenOnMobile
        }])
      }, [
        e.state === e.DATE_PICKER_STATES.LOADING ? (o(), n("div", B, [
          l(t, {
            icon: e.ICONS.FAD_SPINNER_THIRD,
            size: e.ICON_SIZES.X_SMALL,
            spinning: ""
          }, null, 8, ["icon", "size"])
        ])) : d("", !0),
        s("div", C, [
          e.endDateEyebrowText ? (o(), n("span", N, i(e.endDateEyebrowText), 1)) : d("", !0),
          s("div", R, [
            e.endIcon ? (o(), _(t, {
              key: 0,
              class: a(["ds-dateBox__icon", { "-ds-hiddenOnMobile": e.areIconsHiddenOnMobile }]),
              icon: e.endIcon,
              size: e.ICON_SIZES.XX_SMALL
            }, null, 8, ["class", "icon", "size"])) : d("", !0),
            s("span", u, i(e.endDateText), 1)
          ])
        ])
      ], 2)
    ], 64)) : d("", !0)
  ], 2);
}
const P = /* @__PURE__ */ p(I, [["render", L], ["__scopeId", "data-v-8c1dd908"]]);
export {
  P as default
};
//# sourceMappingURL=DateBox.vue.js.map
