import { defineComponent as r } from "vue";
import { SECTION_TITLE_SIZES as t } from "./SectionTitle.consts.js";
const o = r({
  name: "SectionTitle",
  props: {
    // It's unused for now but we want to have the prop already
    size: {
      type: String,
      default: t.XS,
      validator(e) {
        return Object.values(t).includes(e);
      }
    },
    supportingText: {
      type: String,
      default: null
    },
    titleText: {
      type: String,
      required: !0
    }
  }
});
export {
  o as default
};
//# sourceMappingURL=SectionTitle.vue2.js.map
