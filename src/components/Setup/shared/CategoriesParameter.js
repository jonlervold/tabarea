import handleCheckboxChange from "../../../handlers/handleCheckboxChange";
import { consts } from "../../../consts";

const CategoriesParameter = ({ searchState, setSearchState }) => {
  return (
    <div className={"search-parameter"}>
      <h5>Within Categories (Base Folders)</h5>
      <div className={"categories-parameter"}>
        <div>
          <input
            type="checkbox"
            checked={searchState.withinCategories.popular}
            onChange={() =>
              handleCheckboxChange(
                searchState,
                setSearchState,
                consts.WITHIN_CATEGORIES,
                consts.POPULAR
              )
            }
          />{" "}
          {consts.POPULAR_TEXT}
        </div>

        <div>
          <input
            type="checkbox"
            checked={searchState.withinCategories.originals}
            onChange={() =>
              handleCheckboxChange(
                searchState,
                setSearchState,
                consts.WITHIN_CATEGORIES,
                consts.ORIGINALS
              )
            }
          />{" "}
          {consts.ORIGINALS_TEXT}
        </div>

        <div>
          <input
            type="checkbox"
            checked={searchState.withinCategories.unclassified}
            onChange={() =>
              handleCheckboxChange(
                searchState,
                setSearchState,
                consts.WITHIN_CATEGORIES,
                consts.UNCLASSIFIED
              )
            }
          />{" "}
          {consts.UNCLASSIFIED_TEXT}
        </div>

        <div>
          <input
            type="checkbox"
            checked={searchState.withinCategories.themes}
            onChange={() =>
              handleCheckboxChange(
                searchState,
                setSearchState,
                consts.WITHIN_CATEGORIES,
                consts.THEMES
              )
            }
          />{" "}
          {consts.THEMES_TEXT}
        </div>

        <div>
          <input
            type="checkbox"
            checked={searchState.withinCategories.classical}
            onChange={() =>
              handleCheckboxChange(
                searchState,
                setSearchState,
                consts.WITHIN_CATEGORIES,
                consts.CLASSICAL
              )
            }
          />{" "}
          {consts.CLASSICAL_TEXT}
        </div>

        <div>
          <input
            type="checkbox"
            checked={searchState.withinCategories.misc}
            onChange={() =>
              handleCheckboxChange(
                searchState,
                setSearchState,
                consts.WITHIN_CATEGORIES,
                consts.MISC
              )
            }
          />{" "}
          {consts.MISC_TEXT}
        </div>
      </div>
    </div>
  );
};

export default CategoriesParameter;
