import t from "../../Divider/Divider.vue.js";
import { DIVIDER_SIZES as i, DIVIDER_PROMINENCES as r } from "../../Divider/Divider.consts.js";
import { defineComponent as o } from "vue";
const d = o({
  name: "DrawerDivider",
  components: {
    DsDivider: t
  },
  props: {
    prominence: {
      type: String,
      default: r.DEFAULT,
      validator: (e) => Object.values(r).includes(e)
    },
    size: {
      type: String,
      default: i.S,
      validator: (e) => Object.values(i).includes(e)
    }
  }
});
export {
  d as default
};
//# sourceMappingURL=DrawerDivider.vue2.js.map
