import AverageRatingParameter from "../shared/AverageRatingParameter";
import CategoriesParameter from "../shared/CategoriesParameter";
import IntegerParameter from "../shared/IntegerParameter";
import DateParameter from "../shared/DateParameter";
import NullParameter from "../shared/NullParameter";
import TextParameter from "../shared/TextParameter";
import { consts } from "../../../consts";

const FolderSearchParameters = ({
  folderSearchState,
  setFolderSearchState,
}) => {
  return (
    <div className={"search-parameters-wrapper"}>
      {folderSearchState[consts.WITHIN_CATEGORIES].enabled === true && (
        <CategoriesParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
        />
      )}
      {folderSearchState[consts.FOLDER_NAME_INCLUDES].enabled === true && (
        <TextParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
          object={consts.FOLDER_NAME_INCLUDES}
          title={consts.FOLDER_NAME_INCLUDES_TEXT}
        />
      )}
      {folderSearchState[consts.OWNER_USERNAME_INCLUDES].enabled === true && (
        <TextParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
          object={consts.OWNER_USERNAME_INCLUDES}
          title={consts.OWNER_USERNAME_INCLUDES_TEXT}
        />
      )}
      {folderSearchState[consts.HAS_NO_OWNER].enabled === true && (
        <NullParameter
          title={consts.HAS_NO_OWNER_TEXT}
          text={"Only return folders with no owner"}
        />
      )}
      {folderSearchState[consts.CREATION_DATE_RANGE].enabled === true && (
        <DateParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
          object={consts.CREATION_DATE_RANGE}
          title={consts.CREATION_DATE_RANGE_TEXT}
        />
      )}
      {folderSearchState[consts.OLDEST_TAB_DATE_RANGE].enabled === true && (
        <DateParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
          object={consts.OLDEST_TAB_DATE_RANGE}
          title={consts.OLDEST_TAB_DATE_RANGE_TEXT}
        />
      )}
      {folderSearchState[consts.NEWEST_TAB_DATE_RANGE].enabled === true && (
        <DateParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
          object={consts.NEWEST_TAB_DATE_RANGE}
          title={consts.NEWEST_TAB_DATE_RANGE_TEXT}
        />
      )}
      {folderSearchState[consts.UPLOAD_COUNT_RANGE].enabled === true && (
        <IntegerParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
          object={consts.UPLOAD_COUNT_RANGE}
          title={consts.UPLOAD_COUNT_RANGE_TEXT}
        />
      )}
      {folderSearchState[consts.USERS_UPLOADED_COUNT_RANGE].enabled ===
        true && (
        <IntegerParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
          object={consts.USERS_UPLOADED_COUNT_RANGE}
          title={consts.USERS_UPLOADED_COUNT_RANGE_TEXT}
        />
      )}
      {folderSearchState[consts.DOWNLOAD_COUNT_RANGE].enabled === true && (
        <IntegerParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
          object={consts.DOWNLOAD_COUNT_RANGE}
          title={consts.DOWNLOAD_COUNT_RANGE_TEXT}
        />
      )}
      {folderSearchState[consts.TOTAL_SIZE_RANGE].enabled === true && (
        <IntegerParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
          object={consts.TOTAL_SIZE_RANGE}
          title={consts.TOTAL_SIZE_RANGE_TEXT}
        />
      )}
      {folderSearchState[consts.RATING_COUNT_RANGE].enabled === true && (
        <IntegerParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
          object={consts.RATING_COUNT_RANGE}
          title={consts.RATING_COUNT_RANGE_TEXT}
        />
      )}
      {folderSearchState[consts.AVERAGE_RATING_RANGE].enabled === true && (
        <AverageRatingParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
          object={consts.AVERAGE_RATING_RANGE}
          title={consts.AVERAGE_RATING_RANGE_TEXT}
        />
      )}
      {folderSearchState[consts.DESCRIPTION_INCLUDES].enabled === true && (
        <TextParameter
          searchState={folderSearchState}
          setSearchState={setFolderSearchState}
          object={consts.DESCRIPTION_INCLUDES}
          title={consts.DESCRIPTION_INCLUDES_TEXT}
        />
      )}
      {folderSearchState[consts.HAS_NO_DESCRIPTION].enabled === true && (
        <NullParameter
          title={consts.HAS_NO_DESCRIPTION_TEXT}
          text={"Only return folders with no description"}
        />
      )}
    </div>
  );
};

export default FolderSearchParameters;
