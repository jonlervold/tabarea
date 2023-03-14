import handleCheckboxChange from "../../../handlers/handleCheckboxChange";
import { consts } from "../../../consts";

const FolderSearchCheckboxes = ({
  folderSearchState,
  setFolderSearchState,
}) => {
  return (
    <div>
      <h5>Search Folders By</h5>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.WITHIN_CATEGORIES].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.WITHIN_CATEGORIES,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.WITHIN_CATEGORIES_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.FOLDER_NAME_INCLUDES].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.FOLDER_NAME_INCLUDES,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.FOLDER_NAME_INCLUDES_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.OWNER_USERNAME_INCLUDES].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.OWNER_USERNAME_INCLUDES,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.OWNER_USERNAME_INCLUDES_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.HAS_NO_OWNER].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.HAS_NO_OWNER,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.HAS_NO_OWNER_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.CREATION_DATE_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.CREATION_DATE_RANGE,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.CREATION_DATE_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.OLDEST_TAB_DATE_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.OLDEST_TAB_DATE_RANGE,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.OLDEST_TAB_DATE_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.NEWEST_TAB_DATE_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.NEWEST_TAB_DATE_RANGE,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.NEWEST_TAB_DATE_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.UPLOAD_COUNT_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.UPLOAD_COUNT_RANGE,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.UPLOAD_COUNT_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.USERS_UPLOADED_COUNT_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.USERS_UPLOADED_COUNT_RANGE,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.USERS_UPLOADED_COUNT_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.DOWNLOAD_COUNT_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.DOWNLOAD_COUNT_RANGE,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.DOWNLOAD_COUNT_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.TOTAL_SIZE_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.TOTAL_SIZE_RANGE,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.TOTAL_SIZE_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.RATING_COUNT_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.RATING_COUNT_RANGE,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.RATING_COUNT_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.AVERAGE_RATING_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.AVERAGE_RATING_RANGE,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.AVERAGE_RATING_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.DESCRIPTION_INCLUDES].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.DESCRIPTION_INCLUDES,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.DESCRIPTION_INCLUDES_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={folderSearchState[consts.HAS_NO_DESCRIPTION].enabled}
          onChange={() =>
            handleCheckboxChange(
              folderSearchState,
              setFolderSearchState,
              consts.HAS_NO_DESCRIPTION,
              [consts.ENABLED]
            )
          }
        />{" "}
        {consts.HAS_NO_DESCRIPTION_TEXT}
      </div>
    </div>
  );
};

export default FolderSearchCheckboxes;
