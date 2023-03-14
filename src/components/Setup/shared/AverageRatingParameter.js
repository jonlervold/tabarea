import handleRatingFieldChange from "../../../handlers/handleRatingFieldChange";
import handleDropdownChange from "../../../handlers/handleDropdownChange";
import { consts } from "../../../consts";

const AverageRatingParameter = ({
  searchState,
  setSearchState,
  object,
  title,
}) => {
  return (
    <div className={"search-parameter"}>
      <h5>{title}</h5>
      <div className={"range-selector"}>
        <select
          value={searchState[object].operator}
          onChange={(e) =>
            handleDropdownChange(
              searchState,
              setSearchState,
              object,
              consts.OPERATOR,
              e.target.value
            )
          }
        >
          <option value={consts.GREATER_THAN}>&gt;</option>
          <option value={consts.LESS_THAN}>&lt;</option>
          <option value={consts.EQUAL_TO}>=</option>
          <option value={consts.GREATER_THAN_OR_EQUAL_TO}>&gt;=</option>
          <option value={consts.LESS_THAN_OR_EQUAL_TO}>&lt;=</option>
          <option value={consts.RANGE}>Between</option>
        </select>
      </div>
      <div>
        <input
          value={searchState[object].primaryValue}
          onChange={(e) =>
            handleRatingFieldChange(
              searchState,
              setSearchState,
              object,
              consts.PRIMARY_VALUE,
              e.target.value
            )
          }
        />
      </div>
      {searchState[object].operator === consts.RANGE && (
        <div>
          <div>&</div>{" "}
          <div>
            <input
              value={searchState[object].secondaryValue}
              onChange={(e) =>
                handleRatingFieldChange(
                  searchState,
                  setSearchState,
                  object,
                  consts.SECONDARY_VALUE,
                  e.target.value
                )
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AverageRatingParameter;
