import o from "../../Divider/Divider.vue.js";
import { DIVIDER_SIZES as t, DIVIDER_PROMINENCES as i } from "../../Divider/Divider.consts.js";
import { defineComponent as n } from "vue";
const p = n({
  name: "MenuDivider",
  components: {
    DsDivider: o
  },
  props: {
    prominence: {
      type: String,
      default: i.DEFAULT,
      validator: (e) => Object.values(i).includes(e)
    },
    size: {
      type: String,
      default: t.S,
      validator: (e) => Object.values(t).includes(e)
    }
  }
});
export {
  p as default
};
//# sourceMappingURL=MenuDivider.vue2.js.map
