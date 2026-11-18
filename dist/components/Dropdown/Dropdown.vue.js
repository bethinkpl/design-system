import { defineComponent as D, mergeModels as E, useModel as S, computed as g, createElementBlock as B, openBlock as v, createVNode as d, unref as a, withCtx as n, renderSlot as r, normalizeClass as y, createElementVNode as O, normalizeStyle as T } from "vue";
import { PopoverRoot as W, PopoverTrigger as N, PopoverPortal as b, PopoverContent as P } from "reka-ui";
import A from "../shared/PopoverTriggerReference.vue.js";
import { isTouchDevice as C } from "../../utils/device.js";
import { DROPDOWN_RADIUSES as s, DROPDOWN_AUTOFOCUS as p, DROPDOWN_ALIGNS as H } from "./Dropdown.consts.js";
const w = 4, U = /* @__PURE__ */ D({
  __name: "Dropdown",
  props: /* @__PURE__ */ E({
    appendToBody: { type: Boolean, default: !0 },
    collisionBoundary: { default: null },
    hasSameWidth: { type: Boolean, default: !1 },
    radius: { default: () => s.BOTH_EDGES },
    align: { default: () => H.START },
    maxHeight: { default: null },
    sideFlip: { type: Boolean, default: !0 },
    hideWhenDetached: { type: Boolean, default: !1 },
    autofocus: { default: () => p.ENABLED }
  }, {
    open: { type: Boolean, default: !1 },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(l, { expose: f }) {
    const o = S(l, "open"), m = g(() => l.maxHeight ? { maxHeight: l.maxHeight } : {});
    function c() {
      o.value = !o.value;
    }
    function h(e) {
      l.autofocus === p.DISABLED_ON_TOUCH_DEVICES && C() && e.preventDefault();
    }
    function i() {
      o.value = !1;
    }
    return f({ close: i }), (e, u) => (v(), B("span", null, [
      d(a(W), {
        open: o.value,
        "onUpdate:open": u[0] || (u[0] = (t) => o.value = t)
      }, {
        default: n(() => [
          d(a(N), { as: A }, {
            default: n(() => [
              r(e.$slots, "reference", {
                isOpen: o.value,
                toggle: c
              })
            ]),
            _: 3
          }),
          d(a(b), {
            disabled: !e.appendToBody
          }, {
            default: n(() => {
              var t;
              return [
                d(a(P), {
                  class: y(["ds-dropdown", {
                    "-ds-radiusSingleEdge": e.radius === a(s).SINGLE_EDGE,
                    "-ds-radiusBothEdges": e.radius === a(s).BOTH_EDGES,
                    "-ds-hasSameWidth": e.hasSameWidth
                  }]),
                  side: "bottom",
                  align: e.align,
                  "side-flip": e.sideFlip,
                  "side-offset": w,
                  "collision-boundary": (t = e.collisionBoundary) != null ? t : void 0,
                  "position-strategy": "absolute",
                  "hide-when-detached": e.hideWhenDetached,
                  onOpenAutoFocus: h
                }, {
                  default: n(() => [
                    O("div", {
                      class: "ds-dropdown__scrollableWrapper",
                      style: T(m.value)
                    }, [
                      r(e.$slots, "default", { close: i })
                    ], 4)
                  ]),
                  _: 3
                }, 8, ["class", "align", "side-flip", "collision-boundary", "hide-when-detached"])
              ];
            }),
            _: 3
          }, 8, ["disabled"])
        ]),
        _: 3
      }, 8, ["open"])
    ]));
  }
});
export {
  U as default
};
//# sourceMappingURL=Dropdown.vue.js.map
