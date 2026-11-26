import { SURVEY_TOGGLE_STATES as n, SURVEY_TOGGLE_STATUSES as t, SURVEY_TOGGLE_MEANINGS as r } from "./SurveyToggle.consts.js";
import a from "../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as i, ICONS as s } from "../Icons/Icon/Icon.consts.js";
import { defineComponent as u } from "vue";
const d = u({
  name: "SurveyToggle",
  components: {
    DsIcon: a
  },
  props: {
    label: {
      type: [String, null],
      default: null
    },
    contentText: {
      type: [String, null],
      default: null
    },
    meaning: {
      type: [String, null],
      default: r.PRIMARY,
      validator(e) {
        return Object.values(r).includes(e);
      }
    },
    status: {
      type: String,
      default: t.DEFAULT,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    state: {
      type: String,
      default: n.DEFAULT,
      validator(e) {
        return Object.values(n).includes(e);
      }
    },
    selectedIcon: {
      type: Object,
      default() {
        return s.FA_CHECK_SOLID;
      },
      validator(e) {
        return Object.values(s).includes(e);
      }
    }
  },
  data() {
    return {
      hovered: !1,
      ICON_SIZES: Object.freeze(i),
      SURVEY_TOGGLE_MEANING: Object.freeze(r),
      SURVEY_TOGGLE_STATUSES: Object.freeze(t),
      SURVEY_TOGGLE_STATES: Object.freeze(n)
    };
  },
  computed: {
    isPrimarySelected() {
      return this.meaning === r.PRIMARY && this.status === t.SELECTED;
    },
    isPrimary() {
      return this.meaning === r.PRIMARY && this.status === t.DEFAULT;
    },
    isNeutral() {
      return this.meaning === r.NEUTRAL && this.status === t.DEFAULT;
    },
    isNeutralSelected() {
      return this.meaning === r.NEUTRAL && this.status === t.SELECTED;
    },
    isHoveredState() {
      return this.state === n.DISABLED ? !1 : this.state === n.HOVERED ? !0 : this.hovered;
    }
  }
});
export {
  d as default
};
//# sourceMappingURL=SurveyToggle.vue2.js.map
