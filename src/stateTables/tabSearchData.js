import { paramTypes } from "./paramTypes";
import { consts } from "../consts";

export const tabSearchData = {
  // search type
  [consts.SEARCH_TYPE]: consts.TAB,

  // text type
  [consts.UPLOADER_USERNAME_INCLUDES]: paramTypes.TEXT,
  [consts.FOLDER_NAME_INCLUDES]: paramTypes.TEXT,
  [consts.TAB_NAME_INCLUDES]: paramTypes.TEXT,

  // integer range type
  [consts.DOWNLOAD_COUNT_RANGE]: paramTypes.NUMBER_RANGE,
  [consts.UPDATE_COUNT_RANGE]: paramTypes.NUMBER_RANGE,
  [consts.RATING_COUNT_RANGE]: paramTypes.NUMBER_RANGE,
  [consts.SIZE_RANGE]: paramTypes.NUMBER_RANGE,

  // average rating type
  [consts.AVERAGE_RATING_RANGE]: paramTypes.NUMBER_RANGE,

  // date range type
  [consts.DATE_UPLOADED_RANGE]: paramTypes.DATE_RANGE,

  // null type
  [consts.UNKNOWN_UPLOADER]: paramTypes.NULL,
};
