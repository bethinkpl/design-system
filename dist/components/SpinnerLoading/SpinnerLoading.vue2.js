import { defineComponent as s, createElementBlock as i, openBlock as r, createVNode as t, createElementVNode as a, unref as e, toDisplayString as c } from "vue";
import { ICON_SIZES as p, ICONS as m } from "../Icons/Icon/Icon.consts.js";
import l from "../Icons/Icon/Icon.vue.js";
import { useLegacyI18n as d } from "../../composables/useLegacyI18n.js";
const _ = { class: "ds-spinnerLoading" }, L = /* @__PURE__ */ s({
  __name: "SpinnerLoading",
  props: {
    message: {}
  },
  setup(g) {
    const { t: n } = d();
    return (o, f) => (r(), i("div", _, [
      t(l, {
        icon: e(m).FAD_SPINNER_THIRD,
        size: e(p).SMALL,
        spinning: ""
      }, null, 8, ["icon", "size"]),
      a("div", null, c(o.message || e(n)("ds.globals.loading")), 1)
    ]));
  }
});
export {
  L as default
};
//# sourceMappingURL=SpinnerLoading.vue2.js.map
