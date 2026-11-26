import { SECTION_HEADER_MOBILE_LAYOUTS as n, SECTION_HEADER_SIZES as t, SECTION_HEADER_ICON_COLORS as r } from "./SectionHeader.consts.js";
import o from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as a, ICONS as l } from "../../Icons/Icon/Icon.consts.js";
import d from "../../Buttons/IconButton/IconButton.vue.js";
import { ICON_BUTTON_COLORS as s, ICON_BUTTON_SIZES as u } from "../../Buttons/IconButton/IconButton.consts.js";
import p from "../../Divider/Divider.vue.js";
import { defineComponent as f, toRaw as i } from "vue";
const C = f({
  name: "SectionHeader",
  components: {
    DsIcon: o,
    DsIconButton: d,
    DsDivider: p
  },
  props: {
    isExpandable: {
      type: Boolean,
      default: !1
    },
    hideSlotWhenCollapsed: {
      type: Boolean,
      default: !1
    },
    iconLeft: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(l).includes(i(e));
      }
    },
    iconLeftColor: {
      type: String,
      default: null,
      validator(e) {
        return Object.values(r).includes(i(e));
      }
    },
    iconRight: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(l).includes(i(e));
      }
    },
    iconRightColor: {
      type: String,
      default: null,
      validator(e) {
        return Object.values(r).includes(i(e));
      }
    },
    isExpanded: {
      type: Boolean,
      default: !1
    },
    info: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: t.MEDIUM,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    title: {
      type: String,
      required: !0
    },
    titleEllipsis: {
      type: Boolean,
      default: !1
    },
    eyebrow: {
      type: String,
      default: ""
    },
    supportingText: {
      type: String,
      default: null
    },
    hasDivider: {
      type: Boolean,
      default: !0
    },
    mobileLayout: {
      type: String,
      default: n.VERTICAL,
      validator: (e) => Object.values(n).includes(e)
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["info-click", "update:isExpanded"],
  data() {
    return {
      ICONS: Object.freeze(l),
      ICON_SIZES: Object.freeze(a),
      ICON_BUTTON_SIZES: Object.freeze(u),
      ICON_BUTTON_COLORS: Object.freeze(s),
      SECTION_HEADER_MOBILE_LAYOUTS: Object.freeze(n),
      isExpandedInternal: !1
    };
  },
  computed: {
    chevronRotation() {
      return this.isExpanded ? 180 : void 0;
    },
    showSlot() {
      return this.isExpanded || !this.hideSlotWhenCollapsed;
    },
    sizeClass() {
      return `-ds-size-${this.size}`;
    },
    iconSize() {
      return this.size === t.MEDIUM || this.size === t.LARGE ? a.X_SMALL : a.XX_SMALL;
    }
  },
  watch: {
    isExpanded: {
      handler(e) {
        e !== this.isExpandedInternal && (this.isExpandedInternal = e);
      },
      immediate: !0
    }
  },
  methods: {
    onInfoClicked() {
      this.$emit("info-click");
    },
    onTitleWrapperClicked() {
      this.isExpandable && (this.isExpandedInternal = !this.isExpandedInternal, this.$emit("update:isExpanded", this.isExpandedInternal));
    }
  }
});
export {
  C as default
};
//# sourceMappingURL=SectionHeader.vue2.js.map
