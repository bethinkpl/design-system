import { defineComponent as C, computed as t, createElementBlock as i, openBlock as o, normalizeClass as s, unref as d, createCommentVNode as n, createBlock as N, renderSlot as f } from "vue";
import c from "../../Divider/Divider.vue.js";
import T from "../../LoadingBar/LoadingBar.vue.js";
import { LOADING_BAR_COLORS as m } from "../../LoadingBar/LoadingBar.consts.js";
import h from "../../ContainerRibbon/ContainerRibbon.vue.js";
import { CARD_RIBBON_COLORS as S, CARD_RIBBON_SIZES as y, CARD_RIBBON_POSITIONS as l, CARD_BACKGROUND_COLORS as u, CARD_RADIUSES as r, CARD_ELEVATIONS as b, CARD_PADDING_SIZES as O } from "./Card.consts.js";
import { CONTAINER_RIBBON_LAYOUTS as B, CONTAINER_RIBBON_RADIUSES as E } from "../../ContainerRibbon/ContainerRibbon.consts.js";
const D = {
  key: 0,
  class: "ds-card__ribbon"
}, I = {
  key: 1,
  class: "ds-card__experimentalContent"
}, $ = /* @__PURE__ */ C({
  __name: "Card",
  props: {
    contentHasPadding: { type: Boolean, default: !0 },
    headerHasPadding: { type: Boolean, default: !1 },
    footerHasPadding: { type: Boolean, default: !1 },
    paddingSize: { default: () => O.SMALL },
    dividerUnderHeader: { type: Boolean, default: !1 },
    hasRibbon: { type: Boolean, default: !1 },
    elevation: { default: () => b.DEFAULT },
    radius: { default: () => r.ALL },
    backgroundColor: { default: () => u.DEFAULT },
    isFlat: { type: Boolean, default: !1 },
    ribbonPosition: { default: () => l.TOP },
    ribbonSize: { default: () => y.MEDIUM },
    ribbonColor: { default: () => S.NEUTRAL_HEAVY },
    hasRibbonRadius: { type: Boolean, default: !1 },
    hasLoadingBar: { type: Boolean, default: !1 },
    loadingBarColor: { default: () => m.NEUTRAL_HEAVY },
    loadingBarTime: { default: "0" },
    isContentScrollable: { type: Boolean, default: !1 },
    hasRadius: {}
  },
  setup(a) {
    const v = t(() => ({
      [l.TOP]: B.HORIZONTAL,
      [l.LEFT]: B.VERTICAL
    })[a.ribbonPosition] || B.HORIZONTAL), L = t(
      () => a.isFlat && a.elevation === b.DEFAULT ? b.NONE : a.elevation
    ), R = t(
      () => a.isFlat && a.radius === r.ALL ? r.NONE : a.radius
    ), g = t(
      () => a.isFlat && a.backgroundColor === u.DEFAULT ? u.NONE : a.backgroundColor
    ), A = t(() => {
      const e = {
        [l.TOP]: E.BOTTOM,
        [l.LEFT]: E.RIGHT
      };
      return a.hasRibbonRadius && R.value === r.NONE ? e[a.ribbonPosition] : E.NONE;
    });
    return (e, P) => (o(), i("div", {
      class: s([
        "ds-card",
        {
          "-ds-paddingMedium": e.paddingSize === d(O).MEDIUM,
          "-ds-paddingLarge": e.paddingSize === d(O).LARGE,
          "-ds-leftRibbon": e.hasRibbon && !e.hasLoadingBar && e.ribbonPosition === d(l).LEFT,
          "-ds-elevationTop": L.value === d(b).TOP,
          "-ds-elevationNone": L.value === d(b).NONE,
          "-ds-radiusTop": R.value === d(r).TOP,
          "-ds-radiusNone": R.value === d(r).NONE,
          "-ds-backgroundNeutral": g.value === d(u).NEUTRAL,
          "-ds-backgroundNone": g.value === d(u).NONE
        }
      ])
    }, [
      e.hasRibbon || e.hasLoadingBar ? (o(), i("div", D, [
        e.hasRibbon && !e.hasLoadingBar ? (o(), N(h, {
          key: 0,
          size: e.ribbonSize,
          color: e.ribbonColor,
          layout: v.value,
          radius: A.value
        }, null, 8, ["size", "color", "layout", "radius"])) : n("", !0),
        e.hasLoadingBar ? (o(), N(d(T), {
          key: 1,
          time: e.loadingBarTime,
          color: e.loadingBarColor,
          size: e.ribbonSize
        }, null, 8, ["time", "color", "size"])) : n("", !0)
      ])) : n("", !0),
      e.$slots.experimentalContent ? (o(), i("div", I, [
        f(e.$slots, "experimentalContent", {}, void 0, !0)
      ])) : (o(), i("div", {
        key: 2,
        class: s(["ds-card__slotsWrapper", { "-ds-containerIsScrollable": e.isContentScrollable }])
      }, [
        e.$slots.header ? (o(), i("div", {
          key: 0,
          class: s(["ds-card__header", { "-ds-withPadding": e.headerHasPadding }])
        }, [
          f(e.$slots, "header", {}, void 0, !0)
        ], 2)) : n("", !0),
        e.$slots.header && e.$slots.content && e.dividerUnderHeader ? (o(), N(c, {
          key: 1,
          class: s(["ds-card__headerDivider", { "-ds-withHorizontalMargin": e.headerHasPadding }])
        }, null, 8, ["class"])) : n("", !0),
        e.$slots.content ? (o(), i("div", {
          key: 2,
          class: s(["ds-card__content", {
            "-ds-scrollable": e.isContentScrollable,
            "-ds-withPadding": e.contentHasPadding
          }])
        }, [
          f(e.$slots, "content", {}, void 0, !0)
        ], 2)) : n("", !0),
        e.$slots.footer ? (o(), i("div", {
          key: 3,
          class: s(["ds-card__footer", { "-ds-withPadding": e.footerHasPadding }])
        }, [
          f(e.$slots, "footer", {}, void 0, !0)
        ], 2)) : n("", !0)
      ], 2))
    ], 2));
  }
});
export {
  $ as default
};
//# sourceMappingURL=Card.vue2.js.map
