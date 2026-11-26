import { defineComponent as o, toRaw as r } from "vue";
import { SELECTION_CONTROL_STATE as t, SELECTION_CONTROL_SIZE as i, SELECTION_CONTROL_TYPE as u } from "./SelectionControl.consts.js";
import l from "../../Icons/Icon/Icon.vue.js";
import { ICON_SIZES as s, ICONS as n } from "../../Icons/Icon/Icon.consts.js";
const O = o({
  name: "SelectionControl",
  components: { Icon: l },
  props: {
    size: {
      type: String,
      default: i.SMALL,
      validator(e) {
        return Object.values(i).includes(e);
      }
    },
    label: {
      type: String,
      default: null
    },
    isSelected: {
      type: Boolean,
      default: !1
    },
    state: {
      type: String,
      default: t.DEFAULT,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    selectedIcon: {
      type: Object,
      required: !0,
      validator(e) {
        return Object.values(n).includes(r(e));
      }
    },
    notSelectedIcon: {
      type: Object,
      required: !0,
      validator(e) {
        return Object.values(n).includes(r(e));
      }
    },
    type: {
      type: String,
      required: !0,
      validator(e) {
        return Object.values(u).includes(e);
      }
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["update:is-selected", "input:focus", "input:blur"],
  data() {
    return {
      isFocused: !1,
      SELECTION_CONTROL_STATE: Object.freeze(t),
      SELECTION_CONTROL_TYPE: Object.freeze(u)
    };
  },
  computed: {
    icon() {
      return this.isSelected ? this.selectedIcon : this.notSelectedIcon;
    },
    iconSize() {
      return this.size === i.X_SMALL ? s.XX_SMALL : this.size === i.SMALL ? s.X_SMALL : s.SMALL;
    }
  },
  methods: {
    onToggle() {
      this.state === t.DISABLED || this.state === t.LOADING || this.$emit("update:is-selected", !this.isSelected);
    },
    onFocus() {
      this.isFocused = !0, this.$emit("input:focus");
    },
    onBlur() {
      this.isFocused = !1, this.$emit("input:blur");
    }
  }
});
export {
  O as default
};
//# sourceMappingURL=SelectionControl.vue2.js.map
