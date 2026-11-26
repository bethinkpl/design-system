import u from "./OverlayHeader.vue2.js";
import { resolveComponent as l, createElementBlock as o, openBlock as s, normalizeClass as v, createCommentVNode as r, createVNode as d, renderSlot as t, createElementVNode as a, toDisplayString as y, Fragment as E, withCtx as c } from "vue";
/* empty css                   */
import N from "../../../_virtual/_plugin-vue_export-helper.js";
const m = {
  key: 0,
  class: "ds-overlayHeader__loadingWrapper"
}, C = {
  key: 1,
  class: "ds-overlayHeader__accessory"
}, b = {
  key: 2,
  class: "ds-overlayHeader__content"
}, h = {
  key: 0,
  class: "ds-overlayHeader__eyebrow"
}, L = ["title"], S = {
  key: 1,
  class: "ds-overlayHeader__eyebrowAccessory"
}, H = { class: "ds-overlayHeader__main" }, g = {
  key: 0,
  class: "ds-overlayHeader__titleLeading"
}, A = ["title"], I = { class: "ds-overlayHeader__title -ds-desktop" }, k = { class: "ds-overlayHeader__title -ds-mobile" }, w = {
  key: 2,
  class: "ds-overlayHeader__titleTrailingWrapper"
}, D = { class: "ds-overlayHeader__titleTrailing" }, $ = { class: "ds-overlayHeader__actions" };
function B(e, n, U, f, V, M) {
  const _ = l("ds-skeleton"), p = l("ds-divider"), O = l("ds-icon-button"), T = l("ds-dropdown"), R = l("ds-tooltip");
  return s(), o("div", {
    class: v(["ds-overlayHeader", {
      "-ds-borderNeutral": e.borderColor === e.OVERLAY_HEADER_BORDER_COLORS.NEUTRAL,
      "-ds-borderSuccess": e.borderColor === e.OVERLAY_HEADER_BORDER_COLORS.SUCCESS,
      "-ds-borderFail": e.borderColor === e.OVERLAY_HEADER_BORDER_COLORS.FAIL,
      "-ds-borderWarning": e.borderColor === e.OVERLAY_HEADER_BORDER_COLORS.WARNING
    }])
  }, [
    e.isLoading ? (s(), o("div", m, [
      d(_, {
        width: "50%",
        height: "12px"
      }),
      d(_, {
        class: "ds-overlayHeader__loadingBar -ds-desktop",
        width: "100%",
        height: "20px"
      }),
      d(_, {
        class: "ds-overlayHeader__loadingBar -ds-mobile",
        width: "100%",
        height: "18px"
      })
    ])) : r("", !0),
    !e.isLoading && e.$slots.accessory ? (s(), o("div", C, [
      t(e.$slots, "accessory", {}, void 0, !0)
    ])) : r("", !0),
    e.isLoading ? r("", !0) : (s(), o("div", b, [
      e.eyebrowText || e.$slots.eyebrowAccessory ? (s(), o("div", h, [
        e.eyebrowText ? (s(), o("div", {
          key: 0,
          class: v(["ds-overlayHeader__eyebrowText", { "-ds-withRightMargin": e.$slots.eyebrowAccessory }]),
          title: e.eyebrowText
        }, y(e.eyebrowText), 11, L)) : r("", !0),
        e.$slots.eyebrowAccessory ? (s(), o("div", S, [
          t(e.$slots, "eyebrowAccessory", {}, void 0, !0)
        ])) : r("", !0)
      ])) : r("", !0),
      a("div", H, [
        e.$slots.titleLeading ? (s(), o("div", g, [
          t(e.$slots, "titleLeading", {}, void 0, !0)
        ])) : r("", !0),
        e.title || e.shortTitle ? (s(), o("div", {
          key: 1,
          class: v(["ds-overlayHeader__titleWrapper", { "-ds-interactive": e.isTitleInteractive }]),
          title: e.title,
          onClick: n[0] || (n[0] = (...i) => e.onTitleClick && e.onTitleClick(...i))
        }, [
          a("div", I, y(e.title), 1),
          a("div", k, y(e.shortTitle || e.title), 1)
        ], 10, A)) : r("", !0),
        e.$slots.titleTrailing ? (s(), o("div", w, [
          a("div", D, [
            t(e.$slots, "titleTrailing", {}, void 0, !0)
          ])
        ])) : r("", !0)
      ])
    ])),
    !e.isLoading && e.$slots.actions ? (s(), o(E, { key: 3 }, [
      a("div", $, [
        t(e.$slots, "actions", {}, void 0, !0)
      ]),
      d(p, {
        class: "ds-overlayHeader__divider",
        prominence: e.DIVIDER_PROMINENCES.STRONG,
        "is-vertical": ""
      }, null, 8, ["prominence"])
    ], 64)) : r("", !0),
    !e.isLoading && e.$slots.dropdown ? (s(), o(E, { key: 4 }, [
      d(T, {
        align: e.DROPDOWN_ALIGNS.END
      }, {
        reference: c(({ isOpen: i }) => [
          d(O, {
            "touchable-deprecated": "",
            icon: e.dropdownIcon,
            size: e.ICON_BUTTON_SIZES.MEDIUM,
            color: e.ICON_BUTTON_COLORS.NEUTRAL,
            state: i ? e.ICON_BUTTON_STATES.HOVERED : e.ICON_BUTTON_STATES.DEFAULT
          }, null, 8, ["icon", "size", "color", "state"])
        ]),
        default: c(({ close: i }) => [
          t(e.$slots, "dropdown", { close: i }, void 0, !0)
        ]),
        _: 3
      }, 8, ["align"]),
      d(p, {
        class: "ds-overlayHeader__divider",
        prominence: e.DIVIDER_PROMINENCES.STRONG,
        "is-vertical": ""
      }, null, 8, ["prominence"])
    ], 64)) : r("", !0),
    d(R, {
      "is-pointer-visible": !1,
      placement: e.TOOLTIP_PLACEMENTS.LEFT,
      text: e.t("ds.overlayHeader.close")
    }, {
      default: c(() => [
        d(O, {
          "touchable-deprecated": "",
          "data-test-selector": "overlay-header-close-button",
          icon: e.ICONS.FA_XMARK,
          size: e.ICON_BUTTON_SIZES.MEDIUM,
          color: e.ICON_BUTTON_COLORS.NEUTRAL,
          onClick: n[1] || (n[1] = (i) => e.$emit("close"))
        }, null, 8, ["icon", "size", "color"])
      ]),
      _: 1
    }, 8, ["placement", "text"])
  ], 2);
}
const G = /* @__PURE__ */ N(u, [["render", B], ["__scopeId", "data-v-279473b8"]]);
export {
  G as default
};
//# sourceMappingURL=OverlayHeader.vue.js.map
