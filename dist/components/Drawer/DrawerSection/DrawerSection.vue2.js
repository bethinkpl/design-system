import l from "../../Headers/SectionHeader/SectionHeader.vue.js";
import { SECTION_HEADER_SIZES as n, SECTION_HEADER_ICON_COLORS as t, SECTION_HEADER_MOBILE_LAYOUTS as r } from "../../Headers/SectionHeader/SectionHeader.consts.js";
import { defineComponent as d, toRaw as a } from "vue";
import { ICONS as i } from "../../Icons/Icon/Icon.consts.js";
import { ICON_BUTTON_SIZES as o, ICON_BUTTON_COLORS as s } from "../../Buttons/IconButton/IconButton.consts.js";
const O = d({
  name: "DrawerSection",
  components: {
    DsSectionHeader: l
  },
  props: {
    isExpandable: {
      type: Boolean,
      default: !1
    },
    iconLeft: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(i).includes(a(e));
      }
    },
    iconLeftColor: {
      type: String,
      default: t.NEUTRAL_WEAK,
      validator(e) {
        return Object.values(t).includes(a(e));
      }
    },
    iconRight: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(i).includes(a(e));
      }
    },
    iconRightColor: {
      type: String,
      default: t.NEUTRAL_WEAK,
      validator(e) {
        return Object.values(t).includes(a(e));
      }
    },
    isExpanded: {
      type: Boolean,
      default: !0
    },
    info: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: n.XX_SMALL,
      validator(e) {
        return Object.values(n).includes(e);
      }
    },
    title: {
      type: String,
      default: null
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
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["info-click", "update:isExpanded"],
  setup() {
    return {
      ICON_BUTTON_COLORS: s,
      ICON_BUTTON_SIZES: o,
      ICONS: i,
      SECTION_HEADER_MOBILE_LAYOUTS: r
    };
  },
  data() {
    return {
      isExpandedInternal: this.isExpanded
    };
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
    onExpandableHeaderClick(e) {
      this.isExpandedInternal = e, this.$emit("update:isExpanded", e);
    },
    onInfoClick() {
      this.$emit("info-click");
    }
  }
});
export {
  O as default
};
//# sourceMappingURL=DrawerSection.vue2.js.map
