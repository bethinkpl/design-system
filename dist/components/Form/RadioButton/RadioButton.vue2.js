import { defineComponent as r } from "vue";
import { RADIO_BUTTON_STATE as t, RADIO_BUTTON_SIZE as o } from "./RadioButton.consts.js";
import n from "../SelectionControl/SelectionControl.vue.js";
import { SELECTION_CONTROL_TYPE as a } from "../SelectionControl/SelectionControl.consts.js";
import { ICONS as i } from "../../Icons/Icon/Icon.consts.js";
const O = r({
  name: "RadioButton",
  components: { SelectionControl: n },
  props: {
    size: {
      type: String,
      default: o.SMALL,
      validator(e) {
        return Object.values(o).includes(e);
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
    }
  },
  // TODO fix me when touching this file
  // eslint-disable-next-line vue/require-emit-validator
  emits: ["update:is-selected", "input:focus", "input:blur"],
  data() {
    return {
      ICONS: Object.freeze(i),
      SELECTION_CONTROL_TYPE: Object.freeze(a)
    };
  }
});
export {
  O as default
};
//# sourceMappingURL=RadioButton.vue2.js.map
