import { defineComponent as d, toRaw as S } from "vue";
import { SWITCH_SIDE as t, SWITCH_STATE as r, SWITCH_RADIUSES as i, SWITCH_SIZES as n } from "./Switch.consts.js";
import c from "../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as a, ICONS as u } from "../Icons/Icon/Icon.consts.js";
const I = d({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Switch",
  components: {
    DsIcon: c
  },
  props: {
    size: {
      type: String,
      default: n.MEDIUM,
      validator(e) {
        return Object.values(n).includes(e);
      }
    },
    radius: {
      type: String,
      default: i.CAPSULE,
      validator(e) {
        return Object.values(i).includes(e);
      }
    },
    iconLeft: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(u).includes(S(e));
      }
    },
    iconRight: {
      type: Object,
      default: null,
      validator(e) {
        return Object.values(u).includes(S(e));
      }
    },
    labelLeft: {
      type: String,
      default: ""
    },
    labelRight: {
      type: String,
      default: ""
    },
    state: {
      type: String,
      default: r.DEFAULT,
      validator(e) {
        return Object.values(r).includes(e);
      }
    },
    selectedSide: {
      type: String,
      default: t.LEFT,
      validator(e) {
        return Object.values(t).includes(e);
      }
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["update:selectedSide"],
  data() {
    return {
      ICONS: Object.freeze(u),
      ICON_SIZES: Object.freeze(a),
      SWITCH_RADIUSES: Object.freeze(i),
      SWITCH_SIDE: Object.freeze(t),
      SWITCH_SIZE: Object.freeze(n),
      SWITCH_STATE: Object.freeze(r),
      // TODO: Remove currentSide when storybook is upgraded (IT-5440)
      // This is a workaround for keeping the animation preview in storybook when prop changes
      currentSide: this.selectedSide
    };
  },
  computed: {
    currentIcon() {
      return this.currentSide === t.LEFT ? this.iconLeft : this.iconRight;
    },
    currentLabel() {
      return this.currentSide === t.LEFT ? this.labelLeft : this.labelRight;
    },
    oppositeSide() {
      return this.currentSide === t.LEFT ? t.RIGHT : t.LEFT;
    }
  },
  watch: {
    selectedSide: {
      handler(e) {
        e !== this.currentSide && (this.currentSide = e);
      },
      immediate: !0
    }
  },
  methods: {
    onSwitch() {
      this.state !== r.DISABLED && (this.currentSide = this.oppositeSide, this.$emit("update:selectedSide", this.currentSide));
    }
  }
});
export {
  I as default
};
//# sourceMappingURL=Switch.vue2.js.map
