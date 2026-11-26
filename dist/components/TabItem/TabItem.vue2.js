import l from "../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as o, ICONS as r } from "../Icons/Icon/Icon.consts.js";
import { defineComponent as a, toRaw as n } from "vue";
import { TAB_ITEM_SIZES as t } from "./TabItem.consts.js";
const m = a({
  name: "TabItem",
  components: {
    DsIcon: l
  },
  props: {
    icon: {
      type: [Object, null],
      default: null,
      validator(e) {
        return e === null || Object.values(r).includes(n(e));
      }
    },
    isSelected: {
      type: Boolean,
      required: !0
    },
    label: {
      type: String,
      default: null
    },
    labelEllipsis: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: t.MEDIUM
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["click"],
  data() {
    return {
      TAB_ITEM_SIZES: Object.freeze(t),
      ICON_SIZES: Object.freeze(o)
    };
  }
});
export {
  m as default
};
//# sourceMappingURL=TabItem.vue2.js.map
