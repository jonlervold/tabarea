import handleCheckboxChange from "../../../handlers/handleCheckboxChange";
import { consts } from "../../../consts";

const UserSearchCheckboxes = ({ userSearchState, setUserSearchState }) => {
  return (
    <div>
      <h5>Search Users By</h5>

      <div>
        <input
          type="checkbox"
          checked={userSearchState[consts.USERNAME_INCLUDES].enabled}
          onChange={() =>
            handleCheckboxChange(
              userSearchState,
              setUserSearchState,
              consts.USERNAME_INCLUDES,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.USERNAME_INCLUDES_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={userSearchState[consts.DATE_JOINED_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              userSearchState,
              setUserSearchState,
              consts.DATE_JOINED_RANGE,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.DATE_JOINED_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={userSearchState[consts.OLDEST_TAB_DATE_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              userSearchState,
              setUserSearchState,
              consts.OLDEST_TAB_DATE_RANGE,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.OLDEST_TAB_DATE_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={userSearchState[consts.NEWEST_TAB_DATE_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              userSearchState,
              setUserSearchState,
              consts.NEWEST_TAB_DATE_RANGE,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.NEWEST_TAB_DATE_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={userSearchState[consts.UPLOAD_COUNT_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              userSearchState,
              setUserSearchState,
              consts.UPLOAD_COUNT_RANGE,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.UPLOAD_COUNT_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={userSearchState[consts.FOLDERS_OWNED_COUNT_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              userSearchState,
              setUserSearchState,
              consts.FOLDERS_OWNED_COUNT_RANGE,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.FOLDERS_OWNED_COUNT_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={userSearchState[consts.DOWNLOAD_COUNT_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              userSearchState,
              setUserSearchState,
              consts.DOWNLOAD_COUNT_RANGE,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.DOWNLOAD_COUNT_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={userSearchState[consts.TOTAL_SIZE_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              userSearchState,
              setUserSearchState,
              consts.TOTAL_SIZE_RANGE,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.TOTAL_SIZE_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={userSearchState[consts.RATING_COUNT_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              userSearchState,
              setUserSearchState,
              consts.RATING_COUNT_RANGE,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.RATING_COUNT_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={userSearchState[consts.AVERAGE_RATING_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              userSearchState,
              setUserSearchState,
              consts.AVERAGE_RATING_RANGE,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.AVERAGE_RATING_RANGE_TEXT}
      </div>
    </div>
  );
};

export default UserSearchCheckboxes;
