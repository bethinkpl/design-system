import { SELECT_LIST_ITEM_STATES as t, SELECT_LIST_ITEM_SIZES as r, SELECT_LIST_ITEM_SELECTION_MODE as n } from "../SelectListItem/SelectListItem.consts.js";
import a from "../SelectListItem/SelectListItem.vue.js";
import { defineComponent as o, toRaw as i } from "vue";
import { ICONS as l } from "../../Icons/Icon/Icon.consts.js";
const c = o({
  name: "SelectListItemToggle",
  components: {
    SelectListItem: a
  },
  props: {
    iconOff: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(l).includes(i(e));
      }
    },
    iconOn: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(l).includes(i(e));
      }
    },
    isOn: {
      type: Boolean,
      default: !1
    },
    labelOff: {
      type: String,
      required: !0
    },
    labelOn: {
      type: String,
      required: !0
    },
    size: {
      type: String,
      default: r.SMALL,
      validator(e) {
        return Object.values(r).includes(e);
      }
    },
    state: {
      type: String,
      default: t.DEFAULT,
      validator(e) {
        return Object.values(t).includes(e);
      }
    }
  },
  data() {
    return {
      SELECT_LIST_ITEM_SELECTION_MODE: Object.freeze(n),
      SELECT_LIST_ITEM_STATES: Object.freeze(t)
    };
  },
  computed: {
    icon() {
      return this.isOn ? this.iconOn : this.iconOff;
    },
    label() {
      return this.isOn ? this.labelOn : this.labelOff;
    }
  }
});
export {
  c as default
};
//# sourceMappingURL=SelectListItemToggle.vue2.js.map
