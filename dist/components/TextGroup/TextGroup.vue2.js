import { defineComponent as G, useCssVars as M, ref as b, computed as T, useTemplateRef as R, onMounted as C, onUnmounted as A, watch as O, nextTick as U, createElementBlock as s, openBlock as t, normalizeClass as r, unref as l, createCommentVNode as y, createElementVNode as m, createVNode as E, toDisplayString as v, renderSlot as W, createBlock as _, withCtx as B } from "vue";
import { useElementSize as N, useThrottleFn as I } from "@vueuse/core";
import f from "../Skeleton/Skeleton.vue.js";
import { TEXT_GROUP_STATES as d, TEXT_GROUP_LOADING_SIZES as D, TEXT_GROUP_PROMINENCE as z, TEXT_GROUP_MAIN_TEXT_COLORS as k, TEXT_GROUP_ALIGNS as w, TEXT_GROUP_SIZES as p } from "./TextGroup.consts.js";
import P from "../Tooltip/Tooltip.vue.js";
const X = {
  key: 0,
  class: "ds-textGroup__skeletonWrapper"
}, $ = { key: 1 }, F = { key: 2 }, V = {
  key: 0,
  class: "ds-textGroup__skeletonWrapper"
}, H = { key: 2 }, Z = { key: 3 }, Y = {
  key: 2,
  class: "ds-textGroup__supportingWrapper"
}, j = {
  key: 0,
  class: "ds-textGroup__skeletonWrapper"
}, q = { key: 1 }, J = ["innerHTML"], h = 20, ie = /* @__PURE__ */ G({
  __name: "TextGroup",
  props: {
    size: { default: () => p.MEDIUM },
    align: { default: () => w.LEFT },
    mainTextColor: { default: () => k.NEUTRAL },
    prominence: { default: () => z.DEFAULT },
    eyebrowText: {},
    eyebrowTextEllipsis: { type: Boolean, default: !1 },
    isEyebrowTextUppercase: { type: Boolean, default: !0 },
    hasEyebrowMask: { type: Boolean, default: !1 },
    mainText: {},
    mainTextEllipsis: { type: Boolean, default: !1 },
    supportingText: {},
    supportingTextEllipsis: { type: Boolean, default: !1 },
    isInteractive: { type: Boolean, default: !0 },
    skeletonLoadingSize: { default: () => D.LARGE },
    state: { default: () => d.DEFAULT },
    isSupportingTextTooltipEnabled: { type: Boolean, default: !1 },
    isSupportingTextTooltipEnabledOnMobile: { type: Boolean, default: !0 },
    isSupportingTextTooltipAutoFilledWithContent: { type: Boolean, default: !0 },
    supportingTextTooltipContent: {}
  },
  setup(o) {
    M((e) => ({
      "6d9adaf5": S,
      "16c13b2c": c.value
    }));
    const x = T(() => `-ds-${o.prominence}`), a = T(() => o.state === d.LOADING), g = T(() => `-ds-loading-${o.skeletonLoadingSize}`), i = R("eyebrowRef"), n = b(!1), c = b("0px"), S = `${h}px`, { width: L } = N(i), u = I(
      () => {
        if (i.value) {
          const e = i.value.scrollLeft - (i.value.clientWidth - i.value.scrollWidth);
          c.value = `${e > h ? 0 : Math.floor(h - e)}px`;
        }
      },
      50,
      !0
    );
    return C(() => {
      var e;
      (e = i.value) == null || e.addEventListener("scroll", u);
    }), A(() => {
      var e;
      (e = i.value) == null || e.removeEventListener("scroll", u);
    }), O(
      () => ({
        hasEyebrowMask: o.hasEyebrowMask,
        eyebrowText: o.eyebrowText,
        isEyebrowTextUppercase: o.isEyebrowTextUppercase,
        eyebrowTextEllipsis: o.eyebrowTextEllipsis,
        state: o.state,
        eyebrowWidth: L.value
      }),
      async () => {
        if (await U(), o.hasEyebrowMask && i.value && !o.eyebrowTextEllipsis) {
          const e = i.value;
          n.value = e.scrollWidth > e.clientWidth, n.value && u();
        } else
          n.value = !1;
      },
      {
        immediate: !0
      }
    ), (e, K) => (t(), s("div", {
      class: r(["ds-textGroup", {
        "-ds-x-small": e.size === l(p).X_SMALL,
        "-ds-small": e.size === l(p).SMALL,
        "-ds-large": e.size === l(p).LARGE,
        "-ds-align-center": e.align === l(w).CENTER,
        "-ds-hovered": e.state === l(d).HOVERED,
        "-ds-loading": a.value,
        "-ds-disabled": e.state === l(d).DISABLED,
        "-ds-interactive": e.isInteractive,
        "-ds-mainTextColor-primary": e.mainTextColor === l(k).PRIMARY,
        [g.value]: a.value,
        [x.value]: !0
      }])
    }, [
      e.eyebrowText !== null ? (t(), s("div", {
        key: 0,
        class: r(["ds-textGroup__eyebrowWrapper", {
          "-ds-mask-active": n.value
        }])
      }, [
        m("div", {
          ref_key: "eyebrowRef",
          ref: i,
          class: r(["ds-textGroup__eyebrow", {
            "-ds-ellipsis": e.eyebrowTextEllipsis,
            "-ds-uppercase": e.isEyebrowTextUppercase,
            "-ds-mask": e.hasEyebrowMask,
            "-ds-mask-visible": n.value
          }])
        }, [
          a.value ? (t(), s("div", X, [
            E(f, {
              width: "50%",
              height: "100%"
            })
          ])) : e.eyebrowText === "" ? (t(), s("span", $, " ")) : (t(), s("span", F, v(e.eyebrowText), 1))
        ], 2)
      ], 2)) : y("", !0),
      e.mainText !== null || e.$slots.mainText ? (t(), s("div", {
        key: 1,
        class: r(["ds-textGroup__main", {
          "-ds-ellipsis": e.mainTextEllipsis
        }])
      }, [
        a.value ? (t(), s("div", V, [
          E(f, {
            width: "100%",
            height: "100%"
          })
        ])) : e.$slots.mainText ? W(e.$slots, "mainText", { key: 1 }, void 0, !0) : e.mainText === "" ? (t(), s("span", H, " ")) : (t(), s("span", Z, v(e.mainText), 1))
      ], 2)) : y("", !0),
      e.supportingText !== null ? (t(), s("div", Y, [
        a.value ? (t(), s("div", j, [
          E(f, {
            width: "100%",
            height: "100%"
          })
        ])) : e.supportingText === "" ? (t(), s("span", q, " ")) : (t(), _(l(P), {
          key: 2,
          class: "ds-textGroup__supportingTooltip",
          text: e.isSupportingTextTooltipAutoFilledWithContent ? e.supportingText : e.supportingTextTooltipContent,
          "is-disabled": !e.isSupportingTextTooltipEnabled,
          "is-hidden-on-mobile": !e.isSupportingTextTooltipEnabledOnMobile,
          inline: ""
        }, {
          default: B(() => [
            m("div", {
              class: r(["ds-textGroup__supporting", {
                "-ds-ellipsis": e.supportingTextEllipsis
              }])
            }, [
              m("span", { innerHTML: e.supportingText }, null, 8, J)
            ], 2)
          ]),
          _: 1
        }, 8, ["text", "is-disabled", "is-hidden-on-mobile"]))
      ])) : y("", !0)
    ], 2));
  }
});
export {
  ie as default
};
//# sourceMappingURL=TextGroup.vue2.js.map
