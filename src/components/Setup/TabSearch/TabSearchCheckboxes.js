import handleCheckboxChange from "../../../handlers/handleCheckboxChange";
import { consts } from "../../../consts";

const TabSearchCheckboxes = ({ tabSearchState, setTabSearchState }) => {
  return (
    <div>
      <h5>Search Tabs By</h5>

      <div>
        <input
          type="checkbox"
          checked={tabSearchState[consts.FOLDER_NAME_INCLUDES].enabled}
          onChange={() =>
            handleCheckboxChange(
              tabSearchState,
              setTabSearchState,
              consts.FOLDER_NAME_INCLUDES,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.FOLDER_NAME_INCLUDES_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={tabSearchState[consts.TAB_NAME_INCLUDES].enabled}
          onChange={() =>
            handleCheckboxChange(
              tabSearchState,
              setTabSearchState,
              consts.TAB_NAME_INCLUDES,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.TAB_NAME_INCLUDES_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={tabSearchState[consts.UPLOADER_USERNAME_INCLUDES].enabled}
          onChange={() =>
            handleCheckboxChange(
              tabSearchState,
              setTabSearchState,
              consts.UPLOADER_USERNAME_INCLUDES,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.UPLOADER_USERNAME_INCLUDES_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={tabSearchState[consts.UNKNOWN_UPLOADER].enabled}
          onChange={() =>
            handleCheckboxChange(
              tabSearchState,
              setTabSearchState,
              consts.UNKNOWN_UPLOADER,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.UNKNOWN_UPLOADER_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={tabSearchState[consts.DATE_UPLOADED_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              tabSearchState,
              setTabSearchState,
              consts.DATE_UPLOADED_RANGE,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.DATE_UPLOADED_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={tabSearchState[consts.DOWNLOAD_COUNT_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              tabSearchState,
              setTabSearchState,
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
          checked={tabSearchState[consts.SIZE_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              tabSearchState,
              setTabSearchState,
              consts.SIZE_RANGE,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.SIZE_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={tabSearchState[consts.UPDATE_COUNT_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              tabSearchState,
              setTabSearchState,
              consts.UPDATE_COUNT_RANGE,
              consts.ENABLED
            )
          }
        />{" "}
        {consts.UPDATE_COUNT_RANGE_TEXT}
      </div>

      <div>
        <input
          type="checkbox"
          checked={tabSearchState[consts.RATING_COUNT_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              tabSearchState,
              setTabSearchState,
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
          checked={tabSearchState[consts.AVERAGE_RATING_RANGE].enabled}
          onChange={() =>
            handleCheckboxChange(
              tabSearchState,
              setTabSearchState,
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

export default TabSearchCheckboxes;
