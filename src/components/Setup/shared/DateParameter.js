import handleDropdownChange from "../../../handlers/handleDropdownChange";
import DateSelector from "./DateSelector";
import { consts } from "../../../consts";

const DateParameter = ({ searchState, setSearchState, object, title }) => {
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
        <DateSelector
          searchState={searchState}
          setSearchState={setSearchState}
          object={object}
          value={consts.PRIMARY_VALUE}
        />
      </div>
      {searchState[object].operator === consts.RANGE && (
        <div>
          <div>&</div>
          <div>
            <DateSelector
              searchState={searchState}
              setSearchState={setSearchState}
              object={object}
              value={consts.SECONDARY_VALUE}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DateParameter;
