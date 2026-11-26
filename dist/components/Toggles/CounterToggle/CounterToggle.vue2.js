import { COUNTER_TOGGLE_COLORS as t } from "./CounterToggle.consts.js";
import o from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as r, ICONS as n } from "../../Icons/Icon/Icon.consts.js";
import { defineComponent as l, toRaw as u } from "vue";
const d = l({
  name: "CounterToggle",
  components: {
    Icon: o
  },
  props: {
    counter: {
      type: [String, Number],
      default: null
    },
    color: {
      type: String,
      default: t.NEUTRAL_STRONG,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    icon: {
      type: Object,
      required: !0,
      validator(e) {
        return Object.values(n).includes(u(e));
      }
    },
    isSelected: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      ICON_SIZES: Object.freeze(r)
    };
  },
  computed: {
    colorClass() {
      return `-ds-color-${this.color}`;
    },
    hasCounter() {
      return this.counter !== null && this.counter !== "" && this.counter !== void 0;
    }
  }
});
export {
  d as default
};
//# sourceMappingURL=CounterToggle.vue2.js.map
