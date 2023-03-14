import AverageRatingParameter from "../shared/AverageRatingParameter";
import IntegerParameter from "../shared/IntegerParameter";
import TextParameter from "../shared/TextParameter";
import DateParameter from "../shared/DateParameter";
import { consts } from "../../../consts";

const UserSearchParameters = ({ userSearchState, setUserSearchState }) => {
  return (
    <div className={"search-parameters-wrapper"}>
      {userSearchState[consts.USERNAME_INCLUDES].enabled === true && (
        <TextParameter
          searchState={userSearchState}
          setSearchState={setUserSearchState}
          object={consts.USERNAME_INCLUDES}
          title={consts.USERNAME_INCLUDES_TEXT}
        />
      )}
      {userSearchState[consts.DATE_JOINED_RANGE].enabled === true && (
        <DateParameter
          searchState={userSearchState}
          setSearchState={setUserSearchState}
          object={consts.DATE_JOINED_RANGE}
          title={consts.DATE_JOINED_RANGE_TEXT}
        />
      )}
      {userSearchState[consts.OLDEST_TAB_DATE_RANGE].enabled === true && (
        <DateParameter
          searchState={userSearchState}
          setSearchState={setUserSearchState}
          object={consts.OLDEST_TAB_DATE_RANGE}
          title={consts.OLDEST_TAB_DATE_RANGE_TEXT}
        />
      )}
      {userSearchState[consts.NEWEST_TAB_DATE_RANGE].enabled === true && (
        <DateParameter
          searchState={userSearchState}
          setSearchState={setUserSearchState}
          object={consts.NEWEST_TAB_DATE_RANGE}
          title={consts.NEWEST_TAB_DATE_RANGE_TEXT}
        />
      )}

      {userSearchState[consts.UPLOAD_COUNT_RANGE].enabled === true && (
        <IntegerParameter
          searchState={userSearchState}
          setSearchState={setUserSearchState}
          object={consts.UPLOAD_COUNT_RANGE}
          title={consts.UPLOAD_COUNT_RANGE_TEXT}
        />
      )}
      {userSearchState[consts.FOLDERS_OWNED_COUNT_RANGE].enabled === true && (
        <IntegerParameter
          searchState={userSearchState}
          setSearchState={setUserSearchState}
          object={consts.FOLDERS_OWNED_COUNT_RANGE}
          title={consts.FOLDERS_OWNED_COUNT_RANGE_TEXT}
        />
      )}
      {userSearchState[consts.DOWNLOAD_COUNT_RANGE].enabled === true && (
        <IntegerParameter
          searchState={userSearchState}
          setSearchState={setUserSearchState}
          object={consts.DOWNLOAD_COUNT_RANGE}
          title={consts.DOWNLOAD_COUNT_RANGE_TEXT}
        />
      )}
      {userSearchState[consts.TOTAL_SIZE_RANGE].enabled === true && (
        <IntegerParameter
          searchState={userSearchState}
          setSearchState={setUserSearchState}
          object={consts.TOTAL_SIZE_RANGE}
          title={consts.TOTAL_SIZE_RANGE_TEXT}
        />
      )}
      {userSearchState[consts.RATING_COUNT_RANGE].enabled === true && (
        <IntegerParameter
          searchState={userSearchState}
          setSearchState={setUserSearchState}
          object={consts.RATING_COUNT_RANGE}
          title={consts.RATING_COUNT_RANGE_TEXT}
        />
      )}
      {userSearchState[consts.AVERAGE_RATING_RANGE].enabled === true && (
        <AverageRatingParameter
          searchState={userSearchState}
          setSearchState={setUserSearchState}
          object={consts.AVERAGE_RATING_RANGE}
          title={consts.AVERAGE_RATING_RANGE_TEXT}
        />
      )}
    </div>
  );
};

export default UserSearchParameters;
