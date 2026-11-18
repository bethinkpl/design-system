import { NUMBER_IN_CIRCLE_COLORS as e } from "./NumberInCircle.consts.js";
import { defineComponent as o, createElementBlock as s, openBlock as t, normalizeClass as n, renderSlot as d } from "vue";
/* empty css                    */
import a from "../../_virtual/_plugin-vue_export-helper.js";
const l = o({
  name: "NumberInCircle",
  props: {
    index: {
      type: Number,
      default: 1
    },
    medium: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: e.DEFAULT,
      validator(r) {
        return Object.values(e).includes(r);
      }
    }
  },
  computed: {
    colorClass() {
      return {
        [e.DEFAULT]: `-ds-is${this.index}`,
        [e.PRIMARY]: "-ds-primary",
        [e.NEUTRAL]: "-ds-neutral",
        [e.SUCCESS]: "-ds-success",
        [e.DANGER]: "-ds-danger",
        [e.INFO]: "-ds-info",
        [e.ACCENT]: "-ds-accent"
      }[this.color];
    }
  }
});
function c(r, i, u, m, p, f) {
  return t(), s("div", {
    class: n(["ds-numberInCircle", {
      "-ds-medium": r.medium,
      [r.colorClass]: !0
    }])
  }, [
    d(r.$slots, "default", {}, void 0, !0)
  ], 2);
}
const I = /* @__PURE__ */ a(l, [["render", c], ["__scopeId", "data-v-0e41d818"]]);
export {
  I as default
};
//# sourceMappingURL=NumberInCircle.vue.js.map
