import k from "./Modal.vue2.js";
import { resolveComponent as m, createBlock as n, openBlock as o, Teleport as p, createElementVNode as s, mergeProps as _, withModifiers as y, normalizeClass as i, renderSlot as f, createVNode as B, createElementBlock as a, createCommentVNode as r, toDisplayString as d, withCtx as c, createTextVNode as T } from "vue";
/* empty css           */
import O from "../../../_virtual/_plugin-vue_export-helper.js";
const C = { class: "ds-modal__rightActions" }, E = { class: "ds-modal__scrollableWrapper" }, b = ["src"], I = {
  key: 0,
  class: "ds-modal__header"
}, N = {
  key: 1,
  class: "ds-modal__headerSubtitle"
}, v = {
  key: 1,
  class: "ds-modal__slotContent"
}, A = {
  key: 0,
  class: "ds-modal__footerCtaSecondary"
}, L = {
  key: 0,
  class: "ds-modal__checkbox"
}, g = {
  for: "ds-modal__checkboxInput",
  class: "ds-modal__checkboxLabel"
}, U = {
  key: 1,
  class: "ds-modal__footerCtaPrimary"
};
function $(e, t, D, R, F, M) {
  const S = m("wnl-icon-button"), h = m("feature-icon"), u = m("wnl-button");
  return o(), n(p, { to: "body" }, [
    s("div", _({ class: "ds-modal" }, e.$attrs, {
      onClick: t[5] || (t[5] = y((l) => e.$emit("close-modal"), ["self"]))
    }), [
      s("div", {
        class: i(["ds-modal__wrapper", {
          "-ds-small": e.size === e.MODAL_SIZES.SMALL,
          "-ds-isFullHeight": e.isFullHeight
        }])
      }, [
        s("div", C, [
          f(e.$slots, "rightActions", {}, void 0, !0),
          B(S, {
            "touchable-deprecated": "",
            icon: e.ICONS.FA_XMARK,
            size: e.ICON_SIZES.SMALL,
            elevation: e.BUTTON_ELEVATIONS.X_SMALL,
            color: e.ICON_BUTTON_COLORS.NEUTRAL_WEAK,
            "data-test-selector": "ds-modal__closeButton",
            onClick: t[0] || (t[0] = y((l) => e.$emit("close-modal"), ["stop"]))
          }, null, 8, ["icon", "size", "elevation", "color"])
        ]),
        s("div", E, [
          e.headerImage ? (o(), a("img", {
            key: 0,
            class: "ds-modal__image",
            src: e.headerImage,
            alt: ""
          }, null, 8, b)) : r("", !0),
          s("div", {
            class: i(["ds-modal__content", { "-ds-centered": e.contentCentered }])
          }, [
            e.headerTitle ? (o(), a("div", I, [
              e.headerFeatureIcon ? (o(), n(h, {
                key: 0,
                class: "ds-modal__headerFeatureIcon",
                color: e.calcHeaderFeatureIconColor,
                icon: e.headerFeatureIcon,
                size: e.FEATURE_ICON_SIZES.X_LARGE,
                "double-background": ""
              }, null, 8, ["color", "icon", "size"])) : r("", !0),
              s("h4", {
                class: i(["ds-modal__headerTitle", {
                  "-ds-small": e.headerTitleSize === e.MODAL_HEADER_TITLE_SIZES.SMALL
                }])
              }, d(e.headerTitle), 3),
              e.headerSubtitle ? (o(), a("h5", N, d(e.headerSubtitle), 1)) : r("", !0)
            ])) : r("", !0),
            e.$slots.default ? (o(), a("div", v, [
              f(e.$slots, "default", {}, void 0, !0)
            ])) : r("", !0),
            s("div", {
              class: i(["ds-modal__footerWrapper", { "-ds-stickyFooter": e.isFooterSticky }])
            }, [
              e.displayFooter ? (o(), a("div", {
                key: 0,
                class: i(["ds-modal__footer", {
                  "-ds-singleColumn": e.calcSingleColumn,
                  "-ds-horizontal": e.footerLayout === e.MODAL_FOOTER_LAYOUTS.HORIZONTAL
                }])
              }, [
                e.footerTertiaryButtonText || e.footerCheckboxText ? (o(), a("div", A, [
                  e.footerCheckboxText ? (o(), a("div", L, [
                    s("input", {
                      id: "ds-modal__checkboxInput",
                      type: "checkbox",
                      checked: !1,
                      onChange: t[1] || (t[1] = (l) => e.$emit(
                        "checkbox-change",
                        l.target.checked
                      ))
                    }, null, 32),
                    s("label", g, d(e.footerCheckboxText), 1)
                  ])) : r("", !0),
                  e.footerTertiaryButtonText ? (o(), n(u, {
                    key: 1,
                    type: e.BUTTON_TYPES.TEXT,
                    color: e.BUTTON_COLORS.NEUTRAL,
                    radius: e.BUTTON_RADIUSES.ROUNDED,
                    "icon-left": e.footerTertiaryButtonIcon,
                    state: e.footerTertiaryButtonState,
                    class: "ds-modal__tertiaryButton",
                    onClick: t[2] || (t[2] = (l) => e.$emit("tertiary-button-click"))
                  }, {
                    default: c(() => [
                      T(d(e.footerTertiaryButtonText), 1)
                    ]),
                    _: 1
                  }, 8, ["type", "color", "radius", "icon-left", "state"])) : r("", !0)
                ])) : r("", !0),
                e.footerSecondaryButtonText || e.footerPrimaryButtonText ? (o(), a("div", U, [
                  e.footerSecondaryButtonText ? (o(), n(u, {
                    key: 0,
                    type: e.BUTTON_TYPES.OUTLINED,
                    color: e.calcFooterSecondaryButtonColor,
                    radius: e.BUTTON_RADIUSES.ROUNDED,
                    "icon-right": e.footerSecondaryButtonIcon,
                    state: e.footerSecondaryButtonState,
                    onClick: t[3] || (t[3] = (l) => e.$emit("secondary-button-click"))
                  }, {
                    default: c(() => [
                      T(d(e.footerSecondaryButtonText), 1)
                    ]),
                    _: 1
                  }, 8, ["type", "color", "radius", "icon-right", "state"])) : r("", !0),
                  e.footerPrimaryButtonText ? (o(), n(u, {
                    key: 1,
                    color: e.calcFooterPrimaryButtonColor,
                    radius: e.BUTTON_RADIUSES.ROUNDED,
                    "icon-right": e.footerPrimaryButtonIcon,
                    state: e.footerPrimaryButtonState,
                    onClick: t[4] || (t[4] = (l) => e.$emit("primary-button-click"))
                  }, {
                    default: c(() => [
                      T(d(e.footerPrimaryButtonText), 1)
                    ]),
                    _: 1
                  }, 8, ["color", "radius", "icon-right", "state"])) : r("", !0)
                ])) : r("", !0)
              ], 2)) : r("", !0)
            ], 2)
          ], 2)
        ])
      ], 2)
    ], 16)
  ]);
}
const V = /* @__PURE__ */ O(k, [["render", $], ["__scopeId", "data-v-b51576a8"]]);
export {
  V as default
};
//# sourceMappingURL=Modal.vue.js.map
