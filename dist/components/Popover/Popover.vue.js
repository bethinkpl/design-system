import { defineComponent as b, mergeModels as v, useModel as B, computed as A, watch as I, createElementBlock as s, openBlock as l, renderSlot as r, createBlock as f, unref as o, withCtx as a, createVNode as p, normalizeClass as R, createCommentVNode as n, createElementVNode as y, toDisplayString as c, normalizeStyle as M, createTextVNode as k } from "vue";
import { PopoverRoot as C, PopoverTrigger as N, PopoverPortal as U, PopoverContent as V, PopoverArrow as L } from "reka-ui";
import _ from "../shared/PopoverTriggerReference.vue.js";
import { isTouchDevice as w } from "../../utils/device.js";
import { POPOVER_SIZES as m, POPOVER_COLORS as E, POPOVER_AUTOFOCUS as O, POPOVER_ALIGNS as F, POPOVER_SIDES as H } from "./Popover.consts.js";
import z from "../Buttons/Button/Button.vue.js";
import { BUTTON_SIZES as $, BUTTON_TYPES as W } from "../Buttons/Button/Button.consts.js";
const G = ["src"], Z = { class: "ds-popover__content" }, K = {
  key: 0,
  class: "ds-popover__title"
}, X = {
  key: 1,
  class: "ds-popover__subtitle"
}, Y = 24, j = 16, q = 4, J = 12, se = /* @__PURE__ */ b({
  __name: "Popover",
  props: /* @__PURE__ */ v({
    collisionBoundary: { default: null },
    isDisabled: { type: Boolean, default: !1 },
    isManual: { type: Boolean, default: !1 },
    side: { default: () => H.BOTTOM },
    align: { default: () => F.CENTER },
    color: { default: () => E.DEFAULT },
    titleText: { default: null },
    subtitleText: { default: null },
    buttonText: { default: null },
    headerImageUrl: { default: null },
    appendToBody: { type: Boolean, default: !0 },
    sideFlip: { type: Boolean, default: !0 },
    size: { default: () => m.SMALL },
    maxHeight: { default: null },
    isPointerVisible: { type: Boolean, default: !0 },
    hideWhenDetached: { type: Boolean, default: !1 },
    autofocus: { default: () => O.ENABLED }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ v(["button-click"], ["update:open"]),
  setup(t, { expose: S }) {
    const i = B(t, "open"), g = A(() => t.maxHeight ? { maxHeight: t.maxHeight } : {});
    function D(e) {
      t.isManual || (i.value = e);
    }
    function d(e) {
      t.isManual && e.preventDefault();
    }
    function P(e) {
      (t.isManual || t.autofocus === O.DISABLED_ON_TOUCH_DEVICES && w()) && e.preventDefault();
    }
    function u() {
      i.value = !1;
    }
    return I(
      () => t.isDisabled,
      (e) => {
        e && !t.isManual && u();
      }
    ), S({ close: u }), (e, T) => (l(), s("span", null, [
      e.isDisabled ? r(e.$slots, "reference", { key: 0 }) : (l(), f(o(C), {
        key: 1,
        open: i.value,
        "onUpdate:open": D
      }, {
        default: a(() => [
          p(o(N), { as: _ }, {
            default: a(() => [
              r(e.$slots, "reference")
            ]),
            _: 3
          }),
          p(o(U), {
            disabled: !e.appendToBody
          }, {
            default: a(() => {
              var h;
              return [
                p(o(V), {
                  class: R(["ds-popover", {
                    "-ds-color-neutral": e.color === o(E).NEUTRAL,
                    "-ds-small": e.size === o(m).SMALL,
                    "-ds-medium": e.size === o(m).MEDIUM
                  }]),
                  side: e.side,
                  align: e.align,
                  "side-offset": q,
                  "arrow-padding": J,
                  "side-flip": e.sideFlip,
                  "collision-boundary": (h = e.collisionBoundary) != null ? h : void 0,
                  "position-strategy": "absolute",
                  "hide-when-detached": e.hideWhenDetached,
                  onOpenAutoFocus: P,
                  onCloseAutoFocus: d,
                  onEscapeKeyDown: d,
                  onInteractOutside: d
                }, {
                  default: a(() => [
                    e.headerImageUrl ? (l(), s("img", {
                      key: 0,
                      class: "ds-popover__image",
                      src: e.headerImageUrl,
                      alt: ""
                    }, null, 8, G)) : n("", !0),
                    y("div", Z, [
                      e.titleText ? (l(), s("div", K, c(e.titleText), 1)) : n("", !0),
                      e.subtitleText ? (l(), s("div", X, c(e.subtitleText), 1)) : n("", !0),
                      y("div", {
                        class: "ds-popover__contentSlot",
                        style: M(g.value)
                      }, [
                        r(e.$slots, "default", { close: u })
                      ], 4)
                    ]),
                    e.buttonText ? (l(), f(o(z), {
                      key: 1,
                      class: "ds-popover__button",
                      type: o(W).TEXT,
                      size: o($).LARGE,
                      onClick: T[0] || (T[0] = (Q) => e.$emit("button-click"))
                    }, {
                      default: a(() => [
                        k(c(e.buttonText), 1)
                      ]),
                      _: 1
                    }, 8, ["type", "size"])) : n("", !0),
                    e.isPointerVisible ? (l(), f(o(L), {
                      key: 2,
                      class: "ds-popover__arrow",
                      width: Y,
                      height: j
                    })) : n("", !0)
                  ]),
                  _: 3
                }, 8, ["class", "side", "align", "side-flip", "collision-boundary", "hide-when-detached"])
              ];
            }),
            _: 3
          }, 8, ["disabled"])
        ]),
        _: 3
      }, 8, ["open"]))
    ]));
  }
});
export {
  se as default
};
//# sourceMappingURL=Popover.vue.js.map
