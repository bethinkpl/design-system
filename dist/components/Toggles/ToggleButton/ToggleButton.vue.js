import r from "./ToggleButton.vue2.js";
import { resolveComponent as T, createElementBlock as t, openBlock as o, normalizeClass as i, createElementVNode as d, createBlock as l, createCommentVNode as s, toDisplayString as S } from "vue";
/* empty css                  */
import u from "../../../_virtual/_plugin-vue_export-helper.js";
const p = { class: "ds-toggleButton__contentWrapper" };
function g(e, a, E, m, B, O) {
  const n = T("ds-icon");
  return o(), t("div", {
    class: i(["ds-toggleButtonWrapper", {
      "-rounded": e.radius === e.TOGGLE_BUTTON_RADIUSES.ROUNDED
    }])
  }, [
    d("div", {
      class: i(["ds-toggleButton", {
        "-ds-small": e.size === e.TOGGLE_BUTTON_SIZES.SMALL,
        "-ds-medium": e.size === e.TOGGLE_BUTTON_SIZES.MEDIUM,
        "-ds-large": e.size === e.TOGGLE_BUTTON_SIZES.LARGE,
        "-ds-hasSmallHorizontalPadding": e.hasSmallHorizontalPadding,
        "-ds-rounded": e.radius === e.TOGGLE_BUTTON_RADIUSES.ROUNDED,
        [e.colorClassName]: !0,
        "-ds-disabled": e.state === e.TOGGLE_BUTTON_STATES.DISABLED,
        "-ds-loading": e.state === e.TOGGLE_BUTTON_STATES.LOADING,
        "-ds-interactive": e.isInteractiveComputed,
        "-ds-selected": e.isSelected
      }]),
      onClick: a[0] || (a[0] = (L) => e.isInteractiveComputed && e.$emit("click"))
    }, [
      d("div", p, [
        e.iconLeft ? (o(), l(n, {
          key: 0,
          class: "ds-toggleButton__icon",
          icon: e.iconLeft,
          size: e.iconSize
        }, null, 8, ["icon", "size"])) : s("", !0),
        e.label ? (o(), t("span", {
          key: 1,
          class: i(["ds-toggleButton__content", {
            "-ds-small": e.labelSize === e.TOGGLE_BUTTON_LABEL_SIZES.SMALL,
            "-ds-uppercase": e.isLabelUppercase
          }])
        }, S(e.label), 3)) : s("", !0),
        e.iconRight ? (o(), l(n, {
          key: 2,
          class: "ds-toggleButton__icon",
          icon: e.iconRight,
          size: e.iconSize
        }, null, 8, ["icon", "size"])) : s("", !0)
      ]),
      e.state === e.TOGGLE_BUTTON_STATES.LOADING ? (o(), l(n, {
        key: 0,
        class: "ds-toggleButton__icon ds-toggleButton__loadingSpinner",
        icon: e.ICONS.FAD_SPINNER_THIRD,
        size: e.iconSize,
        spinning: ""
      }, null, 8, ["icon", "size"])) : s("", !0)
    ], 2)
  ], 2);
}
const I = /* @__PURE__ */ u(r, [["render", g], ["__scopeId", "data-v-f8e388ab"]]);
export {
  I as default
};
//# sourceMappingURL=ToggleButton.vue.js.map
