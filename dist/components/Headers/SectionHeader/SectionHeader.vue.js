import C from "./SectionHeader.vue2.js";
import { resolveComponent as a, createElementBlock as i, openBlock as o, normalizeClass as n, createElementVNode as t, createBlock as d, createCommentVNode as s, renderSlot as l, toDisplayString as c, createVNode as h, withModifiers as H } from "vue";
/* empty css                   */
import f from "../../../_virtual/_plugin-vue_export-helper.js";
const k = { class: "ds-sectionHeader__wrapper" }, m = { class: "ds-sectionHeader__main" }, T = { class: "ds-sectionHeader__header" }, S = {
  key: 0,
  class: "ds-sectionHeader__slotTitleLeading"
}, y = { class: "ds-sectionHeader__titleContainer" }, E = {
  key: 0,
  class: "ds-sectionHeader__eyebrow"
}, L = ["title"], O = {
  key: 2,
  class: "ds-sectionHeader__slotTitleTrailing"
}, g = {
  key: 0,
  class: "ds-sectionHeader__info"
}, z = {
  key: 0,
  class: "ds-sectionHeader__slotHorizontal"
}, N = {
  key: 0,
  class: "ds-sectionHeader__supportingText"
};
function $(e, _, I, R, b, w) {
  const r = a("ds-icon"), p = a("ds-icon-button"), u = a("ds-divider");
  return o(), i("div", {
    class: n(["ds-sectionHeader", {
      "-ds-expandable": e.isExpandable,
      "-ds-horizontal": e.mobileLayout === e.SECTION_HEADER_MOBILE_LAYOUTS.HORIZONTAL,
      [e.sizeClass]: !0
    }])
  }, [
    t("div", k, [
      t("div", m, [
        t("div", T, [
          t("div", {
            class: "ds-sectionHeader__titleWrapper",
            onClick: _[0] || (_[0] = (...v) => e.onTitleWrapperClicked && e.onTitleWrapperClicked(...v))
          }, [
            e.$slots.titleLeading ? (o(), i("div", S, [
              l(e.$slots, "titleLeading", {}, void 0, !0)
            ])) : s("", !0),
            e.iconLeft ? (o(), d(r, {
              key: 1,
              class: n(["ds-sectionHeader__icon", {
                [`-ds-${e.iconLeftColor}`]: e.iconLeftColor
              }]),
              icon: e.iconLeft,
              size: e.iconSize
            }, null, 8, ["class", "icon", "size"])) : s("", !0),
            t("div", y, [
              e.eyebrow ? (o(), i("div", E, c(e.eyebrow), 1)) : s("", !0),
              t("div", {
                class: n(["ds-sectionHeader__title", { "-ds-ellipsis": e.titleEllipsis }]),
                title: e.titleEllipsis ? e.title : void 0
              }, c(e.title), 11, L)
            ]),
            e.$slots.titleTrailing ? (o(), i("div", O, [
              l(e.$slots, "titleTrailing", {}, void 0, !0)
            ])) : s("", !0),
            e.iconRight ? (o(), d(r, {
              key: 3,
              class: n(["ds-sectionHeader__icon", {
                [`-ds-${e.iconRightColor}`]: e.iconRightColor
              }]),
              icon: e.iconRight,
              size: e.iconSize
            }, null, 8, ["class", "icon", "size"])) : s("", !0),
            e.isExpandable ? (o(), d(r, {
              key: 4,
              class: "ds-sectionHeader__icon",
              icon: e.ICONS.FA_CHEVRON_DOWN,
              rotation: e.chevronRotation,
              size: e.iconSize
            }, null, 8, ["icon", "rotation", "size"])) : s("", !0)
          ]),
          e.info ? (o(), i("div", g, [
            h(p, {
              icon: e.ICONS.FA_CIRCLE_QUESTION,
              size: e.ICON_BUTTON_SIZES.X_SMALL,
              color: e.ICON_BUTTON_COLORS.NEUTRAL_WEAK,
              onClick: H(e.onInfoClicked, ["prevent", "stop"])
            }, null, 8, ["icon", "size", "color", "onClick"])
          ])) : s("", !0)
        ]),
        e.$slots.default && e.showSlot ? (o(), i("div", z, [
          l(e.$slots, "default", {}, void 0, !0)
        ])) : s("", !0)
      ]),
      e.supportingText ? (o(), i("div", N, c(e.supportingText), 1)) : s("", !0),
      e.$slots.default && e.showSlot ? (o(), i("div", {
        key: 1,
        class: n(["ds-sectionHeader__slotVertical", { "-ds-withoutPadding": !e.hasDivider }])
      }, [
        l(e.$slots, "default", {}, void 0, !0)
      ], 2)) : s("", !0)
    ]),
    e.hasDivider ? (o(), d(u, { key: 0 })) : s("", !0)
  ], 2);
}
const V = /* @__PURE__ */ f(C, [["render", $], ["__scopeId", "data-v-d81067e4"]]);
export {
  V as default
};
//# sourceMappingURL=SectionHeader.vue.js.map
