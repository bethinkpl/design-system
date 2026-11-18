import r from "../../Divider/Divider.vue.js";
import { PAGE_HEADER_MOBILE_LAYOUTS as e } from "./PageHeader.consts.js";
import { defineComponent as o } from "vue";
const p = o({
  name: "PageHeader",
  components: {
    DsDivider: r
  },
  props: {
    pageTitle: {
      type: String,
      required: !0
    },
    eyebrow: {
      type: String,
      default: null
    },
    supportingInfo: {
      type: String,
      default: null
    },
    divider: {
      type: Boolean,
      default: !0
    },
    mobileLayout: {
      type: String,
      default: e.VERTICAL,
      validator: (t) => Object.values(e).includes(t)
    }
  },
  data() {
    return {
      PAGE_HEADER_MOBILE_LAYOUTS: Object.freeze(e)
    };
  }
});
export {
  p as default
};
//# sourceMappingURL=PageHeader.vue2.js.map
