import { PROGRESS_DONUT_CHART_STATES as r } from "./ProgressDonutChart.consts.js";
import { defineComponent as o } from "vue";
import S from "../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as R, ICONS as a } from "../Icons/Icon/Icon.consts.js";
const n = 90, _ = 40, T = 4, s = _ / 2, O = _ / 2 - T / 2, i = o({
  name: "ProgressDonutChart",
  components: {
    DsIcon: S
  },
  props: {
    label: { type: String, default: "" },
    state: {
      type: String,
      default: r.DEFAULT,
      validator(t) {
        return Object.values(r).includes(t);
      }
    },
    ranges: {
      type: Array,
      required: !0,
      validator(t) {
        return t.every(
          (e) => e.start >= 0 && e.length >= 0 && e.start + e.length <= 100
        );
      }
    }
  },
  data() {
    return {
      PROGRESS_DONUT_CHART_STATES: Object.freeze(r),
      ICONS: Object.freeze(a),
      ICON_SIZES: Object.freeze(R),
      PROGRESS_DONUT_CHART_SIZE: _,
      PROGRESS_DONUT_CHART_CIRCLE_CENTER_POINT: s,
      PROGRESS_DONUT_CHART_CIRCLE_RADIUS: O
    };
  },
  computed: {
    labelText() {
      return [this.state === r.OVERAGE && "+", this.label].filter(Boolean).join("");
    },
    calculatedRanges() {
      return this.ranges.map((t) => ({
        ...t,
        rotate: t.start / 100 * 360 + n
      }));
    }
  }
});
export {
  i as default
};
//# sourceMappingURL=ProgressDonutChart.vue2.js.map
