import AverageRatingParameter from "../shared/AverageRatingParameter";
import IntegerParameter from "../shared/IntegerParameter";
import DateParameter from "../shared/DateParameter";
import NullParameter from "../shared/NullParameter";
import TextParameter from "../shared/TextParameter";
import { consts } from "../../../consts";

const TabSearchParameters = ({ tabSearchState, setTabSearchState }) => {
  return (
    <div className={"search-parameters-wrapper"}>
      {tabSearchState[consts.FOLDER_NAME_INCLUDES].enabled === true && (
        <TextParameter
          searchState={tabSearchState}
          setSearchState={setTabSearchState}
          object={consts.FOLDER_NAME_INCLUDES}
          title={consts.FOLDER_NAME_INCLUDES_TEXT}
        />
      )}
      {tabSearchState[consts.TAB_NAME_INCLUDES].enabled === true && (
        <TextParameter
          searchState={tabSearchState}
          setSearchState={setTabSearchState}
          object={consts.TAB_NAME_INCLUDES}
          title={consts.TAB_NAME_INCLUDES_TEXT}
        />
      )}
      {tabSearchState[consts.UPLOADER_USERNAME_INCLUDES].enabled === true && (
        <TextParameter
          searchState={tabSearchState}
          setSearchState={setTabSearchState}
          object={consts.UPLOADER_USERNAME_INCLUDES}
          title={consts.UPLOADER_USERNAME_INCLUDES_TEXT}
        />
      )}
      {tabSearchState[consts.UNKNOWN_UPLOADER].enabled === true && (
        <NullParameter
          title={consts.UNKNOWN_UPLOADER_TEXT}
          text={"Only return tabs with no listed uploader"}
        />
      )}
      {tabSearchState[consts.DATE_UPLOADED_RANGE].enabled === true && (
        <DateParameter
          searchState={tabSearchState}
          setSearchState={setTabSearchState}
          object={consts.DATE_UPLOADED_RANGE}
          title={consts.DATE_UPLOADED_RANGE_TEXT}
        />
      )}
      {tabSearchState[consts.DOWNLOAD_COUNT_RANGE].enabled === true && (
        <IntegerParameter
          searchState={tabSearchState}
          setSearchState={setTabSearchState}
          object={consts.DOWNLOAD_COUNT_RANGE}
          title={consts.DOWNLOAD_COUNT_RANGE_TEXT}
        />
      )}
      {tabSearchState[consts.SIZE_RANGE].enabled === true && (
        <IntegerParameter
          searchState={tabSearchState}
          setSearchState={setTabSearchState}
          object={consts.SIZE_RANGE}
          title={consts.SIZE_RANGE_TEXT}
        />
      )}
      {tabSearchState[consts.UPDATE_COUNT_RANGE].enabled === true && (
        <IntegerParameter
          searchState={tabSearchState}
          setSearchState={setTabSearchState}
          object={consts.UPDATE_COUNT_RANGE}
          title={consts.UPDATE_COUNT_RANGE_TEXT}
        />
      )}
      {tabSearchState[consts.RATING_COUNT_RANGE].enabled === true && (
        <IntegerParameter
          searchState={tabSearchState}
          setSearchState={setTabSearchState}
          object={consts.RATING_COUNT_RANGE}
          title={consts.RATING_COUNT_RANGE_TEXT}
        />
      )}
      {tabSearchState[consts.AVERAGE_RATING_RANGE].enabled === true && (
        <AverageRatingParameter
          searchState={tabSearchState}
          setSearchState={setTabSearchState}
          object={consts.AVERAGE_RATING_RANGE}
          title={consts.AVERAGE_RATING_RANGE_TEXT}
        />
      )}
    </div>
  );
};

export default TabSearchParameters;
