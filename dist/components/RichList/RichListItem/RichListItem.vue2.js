import { defineComponent as s, toRaw as n } from "vue";
import d from "../../Divider/Divider.vue.js";
import u from "../../Form/Checkbox/Checkbox.vue.js";
import c from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as h, ICONS as l, ICON_COLORS as C } from "../../Icons/Icon/Icon.consts.js";
import { RICH_LIST_ITEM_BACKGROUND_COLOR as a, RICH_LIST_ITEM_SIZE as i, RICH_LIST_ITEM_STATE as r, RICH_LIST_ITEM_LAYOUT as o, RICH_LIST_ITEM_TYPE as t, RICH_LIST_ITEM_ELEVATION as g, RICH_LIST_ITEM_BORDER_COLOR as p } from "./RichListItem.consts.js";
import { CHECKBOX_ELEVATIONS as I } from "../../Form/Checkbox/Checkbox.consts.js";
const y = s({
  name: "RichListItem",
  components: {
    DsCheckbox: u,
    DsDivider: d,
    DsIcon: c
  },
  props: {
    type: {
      type: String,
      default: t.DEFAULT,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    layout: {
      type: String,
      default: o.HORIZONTAL,
      validator(e) {
        return Object.values(o).includes(e);
      }
    },
    state: {
      type: String,
      default: r.DEFAULT,
      validator(e) {
        return Object.values(r).includes(e);
      }
    },
    size: {
      type: String,
      default: i.MEDIUM,
      validator(e) {
        return Object.values(i).includes(e);
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
        return Object.values(l).includes(n(e));
      }
    },
    iconColor: {
      type: String,
      default: null,
      validator(e) {
        return Object.values(C).includes(e);
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
        return Object.values(p).includes(e);
      }
    },
    borderColorHex: {
      type: String,
      default: null
    },
    draggableIconClassName: {
      type: String,
      default: null
    },
    backgroundColor: {
      type: String,
      default: a.NEUTRAL,
      validator(e) {
        return Object.values(a).includes(e);
      }
    },
    elevation: {
      type: String,
      default: null,
      validator(e) {
        return Object.values(g).includes(e);
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
    }
  },
  emits: {
    "icon-click": () => !0,
    click: (e) => !0,
    "update:is-selected": (e) => !0
  },
  setup() {
    return {
      ICONS: l,
      ICON_SIZES: h,
      RICH_LIST_ITEM_TYPE: t,
      RICH_LIST_ITEM_STATE: r,
      RICH_LIST_ITEM_SIZE: i,
      CHECKBOX_ELEVATIONS: I
    };
  },
  computed: {
    classList() {
      return {
        "-ds-default": this.type === t.DEFAULT,
        "-ds-flat": this.type === t.FLAT,
        "-ds-horizontal": this.isHorizontal,
        "-ds-verticalWithMedia": this.isVertical && this.hasMedia,
        "-ds-vertical": this.isVertical,
        "-ds-loading": this.state === r.LOADING,
        "-ds-dimmed": this.isDimmed,
        "-ds-interactive": this.isInteractive,
        "-ds-small": this.size === i.SMALL,
        ...this.backgroundColor && this.type !== t.FLAT && {
          [`-ds-background-${this.backgroundColor}`]: !0
        },
        ...this.elevation && this.type !== t.FLAT && {
          [`-ds-elevation-${this.elevation}`]: !0
        },
        "-ds-draggable": this.isDraggable,
        "-ds-draggable-without-handler": this.isDraggable && !this.hasDraggableHandler,
        "-ds-has-media": this.hasMedia,
        "-ds-drag": this.isDragging
      };
    },
    isHorizontal() {
      return this.layout === o.HORIZONTAL;
    },
    isVertical() {
      return this.layout === o.VERTICAL;
    },
    iconColorClass() {
      if (!(!this.iconColor || this.iconColor && this.iconColorHex))
        return `-ds-${this.iconColor}`;
    },
    iconColorStyle() {
      if (!(!this.iconColor || !this.iconColorHex))
        return {
          color: this.iconColorHex
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
    },
    hasMedia() {
      return !!this.$slots.media;
    },
    isDragging() {
      return this.isDraggable && this.state === r.DRAG;
    }
  }
});
export {
  y as default
};
//# sourceMappingURL=RichListItem.vue2.js.map
