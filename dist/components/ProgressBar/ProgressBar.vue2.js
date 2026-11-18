import { defineComponent as S } from "vue";
import { PROGRESS_BAR_LABEL_DATA_POSITIONS as n, PROGRESS_BAR_BADGE_COLORS as i, PROGRESS_BAR_LAYOUTS as a, PROGRESS_BAR_RADII as l, PROGRESS_BAR_LABEL_TEXT_SIZES as r, PROGRESS_BAR_SIZES as u } from "./ProgressBar.consts.js";
import o from "../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as s, ICONS as d } from "../Icons/Icon/Icon.consts.js";
import p from "./ProgressBarLegend.vue.js";
import { PROGRESS_BAR_LEGEND_SIZES as f } from "./ProgressBarLegend.consts.js";
import R from "./ProgressBarLabelDataWrapper.vue.js";
const y = S({
  name: "ProgressBar",
  components: {
    ProgressBarLabelDataWrapper: R,
    ProgressBarLegend: p,
    DsIcon: o
  },
  props: {
    size: {
      type: String,
      default: u.SMALL,
      validator(e) {
        return Object.values(u).includes(e);
      }
    },
    labelTextSize: {
      type: String,
      default: r.SMALL,
      validator(e) {
        return Object.values(r).includes(e);
      }
    },
    ranges: {
      type: Array,
      required: !0,
      validator(e) {
        return e.every(
          (t) => t.start >= 0 && t.length >= 0 && t.start + t.length <= 100
        );
      }
    },
    radius: {
      type: String,
      default: l.DEFAULT,
      validator(e) {
        return Object.values(l).includes(e);
      }
    },
    layout: {
      type: String,
      default: a.DEFAULT,
      validator(e) {
        return Object.values(a).includes(e);
      }
    },
    labelText: {
      type: String,
      default: null
    },
    labelData: {
      type: String,
      default: null
    },
    labelDataSupporting: {
      type: String,
      default: null
    },
    labelDataSuffix: {
      type: String,
      default: null
    },
    labelTextEllipsis: {
      type: Boolean,
      default: !1
    },
    badgePosition: {
      type: Number,
      default: null,
      validator(e) {
        return e >= 0 && e <= 100;
      }
    },
    badgeColor: {
      type: String,
      default: i.INFO,
      validator(e) {
        return Object.values(i).includes(e);
      }
    },
    hasLegend: {
      type: Boolean,
      default: !1
    },
    legendSize: {
      type: String,
      default: f.SMALL
    },
    hasLegendPercentValue: {
      type: Boolean,
      default: !0
    },
    labelDataPosition: {
      type: String,
      default: n.TOP
    }
  },
  setup() {
    return {
      PROGRESS_BAR_SIZES: u,
      PROGRESS_BAR_RADII: l,
      PROGRESS_BAR_LAYOUTS: a,
      PROGRESS_BAR_LABEL_TEXT_SIZES: r,
      ICONS: d,
      ICON_SIZES: s,
      PROGRESS_BAR_LABEL_DATA_POSITIONS: n
    };
  },
  computed: {
    labelDataExists() {
      return this.labelData || this.labelDataSupporting || this.labelDataSuffix;
    }
  }
});
export {
  y as default
};
//# sourceMappingURL=ProgressBar.vue2.js.map
