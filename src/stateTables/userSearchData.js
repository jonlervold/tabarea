import { paramTypes } from "./paramTypes";
import { consts } from "../consts";

export const userSearchData = {
  // search type
  [consts.SEARCH_TYPE]: consts.USER,

  // text type
  [consts.USERNAME_INCLUDES]: paramTypes.TEXT,

  // integer range type
  [consts.UPLOAD_COUNT_RANGE]: paramTypes.NUMBER_RANGE,
  [consts.FOLDERS_OWNED_COUNT_RANGE]: paramTypes.NUMBER_RANGE,
  [consts.DOWNLOAD_COUNT_RANGE]: paramTypes.NUMBER_RANGE,
  [consts.RATING_COUNT_RANGE]: paramTypes.NUMBER_RANGE,
  [consts.TOTAL_SIZE_RANGE]: paramTypes.NUMBER_RANGE,

  // average rating range type
  [consts.AVERAGE_RATING_RANGE]: paramTypes.NUMBER_RANGE,

  // date range type
  [consts.DATE_JOINED_RANGE]: paramTypes.DATE_RANGE,
  [consts.OLDEST_TAB_DATE_RANGE]: paramTypes.DATE_RANGE,
  [consts.NEWEST_TAB_DATE_RANGE]: paramTypes.DATE_RANGE,
};
