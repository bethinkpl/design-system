import { FontAwesomeIcon as o } from "../../../vendor/@fortawesome/vue-fontawesome/index.es.js";
import { ICON_SIZES as t, ICONS as a } from "./Icon.consts.js";
import { defineComponent as n, toRaw as l } from "vue";
const p = n({
  name: "Icon",
  components: {
    FontAwesomeIcon: o
  },
  props: {
    icon: {
      type: Object,
      required: !0,
      validator(e) {
        return Object.values(a).includes(l(e));
      }
    },
    size: {
      type: String,
      default: t.MEDIUM,
      validator: (e) => Object.values(t).includes(e)
    },
    rotation: {
      type: [Number, null],
      default: null
    },
    flippedVertical: {
      type: Boolean,
      default: !1
    },
    flippedHorizontal: {
      type: Boolean,
      default: !1
    },
    /**
     * @deprecated Adds the `-ds-touchable` class, which enlarges the hit area to the
     * deprecated `$DEPRECATED-min-touchable-size`. Still has effect; renamed to flag it
     * for removal so call sites can migrate away from this layout-inflating behavior.
     */
    touchableDeprecated: {
      type: Boolean,
      default: !1
    },
    spinning: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    sizeClassName() {
      return `-ds-${this.size}`;
    },
    isFontawesomeIcon() {
      return "iconName" in this.icon;
    }
  }
});
export {
  p as default
};
//# sourceMappingURL=Icon.vue2.js.map
