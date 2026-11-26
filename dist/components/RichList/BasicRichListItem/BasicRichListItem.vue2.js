import { defineComponent as s, toRaw as d } from "vue";
import p from "../../TextGroup/TextGroup.vue.js";
import f from "../RichListItem/RichListItem.vue.js";
import { RICH_LIST_ITEM_BACKGROUND_COLOR as r, RICH_LIST_ITEM_SIZE as t, RICH_LIST_ITEM_LAYOUT as o, RICH_LIST_ITEM_STATE as l, RICH_LIST_ITEM_TYPE as u, RICH_LIST_ITEM_ELEVATION as T, RICH_LIST_ITEM_BORDER_COLOR as I } from "../RichListItem/RichListItem.consts.js";
import { TEXT_GROUP_MAIN_TEXT_COLORS as i, TEXT_GROUP_STATES as a, TEXT_GROUP_SIZES as n } from "../../TextGroup/TextGroup.consts.js";
import { ICON_COLORS as S, ICONS as c } from "../../Icons/Icon/Icon.consts.js";
const v = s({
  name: "BasicRichListItem",
  components: {
    DsTextGroup: p,
    RichListItem: f
  },
  props: {
    type: {
      type: String,
      default: u.DEFAULT,
      validator(e) {
        return Object.values(u).includes(e);
      }
    },
    state: {
      type: String,
      default: l.DEFAULT,
      validator(e) {
        return Object.values(l).includes(e);
      }
    },
    layout: {
      type: String,
      default: o.HORIZONTAL,
      validator(e) {
        return Object.values(o).includes(e);
      }
    },
    size: {
      type: String,
      default: t.MEDIUM,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    isInteractive: {
      type: Boolean,
      default: !0
    },
    isDimmed: {
      type: Boolean,
      default: !1
    },
    isDraggable: {
      type: Boolean,
      default: !0
    },
    icon: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(c).includes(d(e));
      }
    },
    iconColor: {
      type: String,
      default: null,
      validator(e) {
        return Object.values(S).includes(e);
      }
    },
    iconColorHex: {
      type: String,
      default: null
    },
    borderColor: {
      type: String,
      default: null,
      validator(e) {
        return Object.values(I).includes(e);
      }
    },
    borderColorHex: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    textEllipsis: {
      type: Boolean,
      default: !1
    },
    eyebrow: {
      type: String,
      default: null
    },
    eyebrowEllipsis: {
      type: Boolean,
      default: !1
    },
    isEyebrowUppercase: {
      type: Boolean,
      default: !1
    },
    supportingText: {
      type: String,
      default: null
    },
    supportingTextEllipsis: {
      type: Boolean,
      default: !1
    },
    isSupportingTextTooltipEnabled: {
      type: Boolean,
      default: !1
    },
    backgroundColor: {
      type: String,
      default: r.NEUTRAL,
      validator(e) {
        return Object.values(r).includes(e);
      }
    },
    elevation: {
      type: String,
      default: null,
      validator(e) {
        return Object.values(T).includes(e);
      }
    },
    hasDraggableHandler: {
      type: Boolean,
      default: !0
    },
    hasActionsSlotDivider: {
      type: Boolean,
      default: !0
    },
    isSelectable: {
      type: Boolean,
      default: !0
    },
    isSelected: {
      type: Boolean,
      default: !1
    },
    isTextGroupSelected: {
      type: Boolean,
      default: !1
    }
  },
  emits: {
    "update:is-selected": (e) => !0
  },
  data() {
    return {
      hovered: !1,
      RICH_LIST_ITEM_SIZE: Object.freeze(t),
      RICH_LIST_ITEM_STATE: Object.freeze(l)
    };
  },
  computed: {
    textGroupSize() {
      return {
        [t.SMALL]: n.SMALL,
        [t.MEDIUM]: n.MEDIUM
      }[this.size];
    },
    textGroupState() {
      return this.state === l.LOADING ? a.LOADING : this.hovered && this.isInteractive ? a.HOVERED : a.DEFAULT;
    },
    textGroupMainTextColor() {
      return this.isTextGroupSelected ? i.PRIMARY : i.NEUTRAL;
    }
  }
});
export {
  v as default
};
//# sourceMappingURL=BasicRichListItem.vue2.js.map
