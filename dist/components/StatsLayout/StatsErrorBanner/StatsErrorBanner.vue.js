import { defineComponent as n, createBlock as s, openBlock as a, unref as t, withCtx as i, createTextVNode as m, toDisplayString as u } from "vue";
import { BANNER_COLORS as c } from "../../Banner/Banner.consts.js";
import l from "../../Banner/Banner.vue.js";
import { useLegacyI18n as p } from "../../../composables/useLegacyI18n.js";
import { ICONS as d } from "../../Icons/Icon/Icon.consts.js";
const N = /* @__PURE__ */ n({
  __name: "StatsErrorBanner",
  emits: ["button-clicked"],
  setup(f) {
    const { t: o } = p();
    return (r, e) => (a(), s(l, {
      title: t(o)("ds.statsLayout.statsErrorBanner.title"),
      "button-text": t(o)("ds.statsLayout.statsErrorBanner.buttonText"),
      icon: t(d).FA_CIRCLE_EXCLAMATION,
      color: t(c).DANGER,
      onButtonClicked: e[0] || (e[0] = (B) => r.$emit("button-clicked"))
    }, {
      defaultText: i(() => [
        m(u(t(o)("ds.statsLayout.statsErrorBanner.message")), 1)
      ]),
      _: 1
    }, 8, ["title", "button-text", "icon", "color"]));
  }
});
export {
  N as default
};
//# sourceMappingURL=StatsErrorBanner.vue.js.map
