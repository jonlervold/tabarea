import { paramTypes } from "./paramTypes";
import { consts } from "../consts";

export const folderSearchData = {
  // search type
  [consts.SEARCH_TYPE]: consts.FOLDER,

  // text type
  [consts.OWNER_USERNAME_INCLUDES]: paramTypes.TEXT,
  [consts.FOLDER_NAME_INCLUDES]: paramTypes.TEXT,
  [consts.DESCRIPTION_INCLUDES]: paramTypes.TEXT,

  // integer range type
  [consts.USERS_UPLOADED_COUNT_RANGE]: paramTypes.NUMBER_RANGE,
  [consts.DOWNLOAD_COUNT_RANGE]: paramTypes.NUMBER_RANGE,
  [consts.RATING_COUNT_RANGE]: paramTypes.NUMBER_RANGE,
  [consts.UPLOAD_COUNT_RANGE]: paramTypes.NUMBER_RANGE,
  [consts.TOTAL_SIZE_RANGE]: paramTypes.NUMBER_RANGE,

  // average rating type
  [consts.AVERAGE_RATING_RANGE]: paramTypes.NUMBER_RANGE,

  // date range type
  [consts.CREATION_DATE_RANGE]: paramTypes.DATE_RANGE,
  [consts.NEWEST_TAB_DATE_RANGE]: paramTypes.DATE_RANGE,
  [consts.OLDEST_TAB_DATE_RANGE]: paramTypes.DATE_RANGE,

  // sections type
  [consts.WITHIN_CATEGORIES]: paramTypes.SECTIONS,

  // null type
  [consts.HAS_NO_DESCRIPTION]: paramTypes.NULL,
  [consts.HAS_NO_OWNER]: paramTypes.NULL,
};
