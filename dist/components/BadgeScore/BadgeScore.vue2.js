import { BADGE_SCORE_SIZES as t, BADGE_SCORE_COLORS as i } from "./BadgeScore.consts.js";
import n from "../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as r, ICONS as o } from "../Icons/Icon/Icon.consts.js";
import { defineComponent as u, toRaw as S } from "vue";
const s = u({
  name: "BadgeScore",
  components: {
    WnlIcon: n
  },
  props: {
    text: {
      type: String,
      required: !0
    },
    suffix: {
      type: String,
      required: !1,
      default: null
    },
    color: {
      type: String,
      required: !0,
      validator(e) {
        return Object.values(i).includes(e);
      }
    },
    icon: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(o).includes(S(e));
      }
    },
    size: {
      type: String,
      default: t.MEDIUM,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    fullWidth: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      ICON_SIZES: Object.freeze(r),
      BADGE_SCORE_COLORS: Object.freeze(i),
      BADGE_SCORE_SIZES: Object.freeze(t)
    };
  },
  computed: {
    iconSize() {
      return this.size === t.SMALL ? r.X_SMALL : this.size === t.XSMALL ? r.XXX_SMALL : r.SMALL;
    }
  }
});
export {
  s as default
};
//# sourceMappingURL=BadgeScore.vue2.js.map
