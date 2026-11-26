import { DIVIDER_SIZES as e, DIVIDER_PROMINENCES as i } from "./Divider.consts.js";
import { defineComponent as a } from "vue";
const l = a({
  name: "Divider",
  props: {
    isVertical: {
      type: Boolean,
      default: !1
    },
    prominence: {
      type: String,
      default: i.DEFAULT,
      validator: (t) => Object.values(i).includes(t)
    },
    size: {
      type: String,
      default: e.S,
      validator: (t) => Object.values(e).includes(t)
    }
  },
  data() {
    return {
      DIVIDER_PROMINENCES: Object.freeze(i)
    };
  },
  computed: {
    sizeClass() {
      return {
        [e.S]: "",
        [e.M]: "-ds-medium-" + (this.isVertical ? "vertical" : "horizontal"),
        [e.L]: "-ds-large-" + (this.isVertical ? "vertical" : "horizontal")
      }[this.size];
    }
  }
});
export {
  l as default
};
//# sourceMappingURL=Divider.vue2.js.map
