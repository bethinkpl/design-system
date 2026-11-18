import { defineComponent as o, useSlots as r, computed as a, inject as s, provide as c, createElementBlock as d, openBlock as i, normalizeClass as m, unref as f, renderSlot as E } from "vue";
import { MENU_LAYOUT_INJECTION_KEY as u, MENU_LAYOUTS as n } from "./Menu.consts.js";
const y = /* @__PURE__ */ o({
  __name: "Menu",
  props: {
    layout: { default: null }
  },
  setup(t) {
    r();
    const l = a(() => {
      if (t.layout !== null)
        return t.layout;
      const e = s(u, null);
      return e !== null ? e : n.DEFAULT;
    });
    return c(u, l.value), (e, p) => (i(), d("ul", {
      class: m([
        "ds-menu",
        {
          "-ds-extensive": l.value === f(n).EXTENSIVE
        }
      ])
    }, [
      E(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
export {
  y as default
};
//# sourceMappingURL=Menu.vue2.js.map
