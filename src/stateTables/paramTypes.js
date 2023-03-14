import { consts } from "../consts";

export const paramTypes = {
  TEXT: {
    [consts.PARAM_TYPE]: consts.TEXT_TYPE,
    [consts.ENABLED]: false,
    [consts.VALUE]: "",
  },

  NUMBER_RANGE: {
    [consts.PARAM_TYPE]: consts.NUMBER_RANGE_TYPE,
    [consts.ENABLED]: false,
    [consts.OPERATOR]: consts.GREATER_THAN,
    [consts.PRIMARY_VALUE]: "",
    [consts.SECONDARY_VALUE]: "",
  },

  DATE_RANGE: {
    [consts.PARAM_TYPE]: consts.DATE_RANGE_TYPE,
    [consts.ENABLED]: false,
    [consts.OPERATOR]: consts.GREATER_THAN,
    [consts.PRIMARY_VALUE]: {
      [consts.YEAR]: "1996",
      [consts.MONTH]: "10",
      [consts.DAY]: "06",
    },
    [consts.SECONDARY_VALUE]: {
      [consts.YEAR]: "2019",
      [consts.MONTH]: "10",
      [consts.DAY]: "25",
    },
  },

  NULL: {
    [consts.PARAM_TYPE]: consts.NULL_TYPE,
    [consts.ENABLED]: false,
  },

  SECTIONS: {
    [consts.PARAM_TYPE]: consts.SECTIONS_TYPE,
    [consts.ENABLED]: false,
    [consts.POPULAR]: false,
    [consts.CLASSICAL]: false,
    [consts.MISC]: false,
    [consts.THEMES]: false,
    [consts.ORIGINALS]: false,
    [consts.UNCLASSIFIED]: false,
  },
};
