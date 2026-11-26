import { toRaw as t } from "vue";
import { TILE_COMPACT_LAYOUTS as l, TILE_ADDITIONAL_TEXT_MAX_WIDTHS as a, TILE_STATES as r, TILE_COLORS as u } from "./Tile.consts.js";
import { ICONS as i } from "../Icons/Icon/Icon.consts.js";
const p = {
  interactive: {
    type: Boolean,
    default: !1
  },
  iconLeft: {
    type: Object,
    default: null,
    validator(e) {
      return Object.values(i).includes(t(e));
    }
  },
  iconRight: {
    type: Object,
    default: null,
    validator(e) {
      return Object.values(i).includes(t(e));
    }
  },
  text: {
    type: String,
    required: !0
  },
  eyebrowText: {
    type: String,
    default: null
  },
  additionalText: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: u.NEUTRAL,
    validator(e) {
      return Object.values(u).includes(e);
    }
  },
  isEyebrowTextUppercase: {
    type: Boolean,
    default: !1
  },
  state: {
    type: String,
    default: r.DEFAULT,
    validator(e) {
      return Object.values(r).includes(e);
    }
  },
  eyebrowEllipsis: {
    type: Boolean,
    default: !0
  },
  textEllipsis: {
    type: Boolean,
    default: !0
  },
  borderColor: {
    type: String,
    default: null
  },
  additionalTextMaxWidth: {
    type: String,
    default: a.SMALL,
    validator(e) {
      return Object.values(a).includes(e);
    }
  },
  compactLayout: {
    type: String,
    default: l.DEFAULT,
    validator(e) {
      return Object.values(l).includes(e);
    }
  }
};
export {
  p as props
};
//# sourceMappingURL=Tile.shared.js.map
