import { defineComponent as e } from "vue";
import { GROUP_RICH_LIST_ITEM_BACKGROUND_COLOR as o, GROUP_RICH_LIST_ITEM_BORDER_COLOR as t } from "./GroupRichListItem.consts.js";
const n = e({
  name: "GroupRichListItem",
  props: {
    isExpanded: {
      type: Boolean,
      default: !1
    },
    borderColor: {
      type: String,
      default: null,
      validator(r) {
        return Object.values(t).includes(r);
      }
    },
    borderColorHex: {
      type: String,
      default: null
    },
    backgroundColor: {
      type: String,
      default: o.NEUTRAL,
      validator(r) {
        return Object.values(o).includes(
          r
        );
      }
    }
  },
  computed: {
    classList() {
      return {
        ...this.backgroundColor && {
          [`-ds-background-${this.backgroundColor}`]: !0
        }
      };
    },
    borderColorClass() {
      if (!(!this.borderColor || this.borderColorHex))
        return `-ds-border-${this.borderColor}`;
    },
    borderColorStyle() {
      if (this.borderColorHex)
        return {
          backgroundColor: this.borderColorHex
        };
    }
  }
});
export {
  n as default
};
//# sourceMappingURL=GroupRichListItem.vue2.js.map
