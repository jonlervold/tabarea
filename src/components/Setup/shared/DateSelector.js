import generateDropdownDateValues from "../../../util/generateDropdownsDateValues";
import handleDropdownChange from "../../../handlers/handleDropdownChange";
import zeroPadSingleDigits from "../../../util/zeroPadSingleDigits";
import { consts } from "../../../consts";

const DateSelector = ({ searchState, setSearchState, object, value }) => {
  const { possibleYears, possibleMonths, possibleDays, monthNames } =
    generateDropdownDateValues();

  return (
    <div className={"search-parameter"}>
      <div>
        <select
          value={searchState[object][value][consts.MONTH]}
          onChange={(e) =>
            handleDropdownChange(searchState, setSearchState, object, value, {
              year: searchState[object][value][consts.YEAR],
              month: e.target.value,
              day: searchState[object][value][consts.DAY],
            })
          }
        >
          {possibleMonths.map((i) => (
            <option key={i} value={zeroPadSingleDigits(i)}>
              {monthNames[i - 1]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          value={searchState[object][value][consts.DAY]}
          onChange={(e) =>
            handleDropdownChange(searchState, setSearchState, object, value, {
              year: searchState[object][value][consts.YEAR],
              month: searchState[object][value][consts.MONTH],
              day: e.target.value,
            })
          }
        >
          {possibleDays.map((i) => (
            <option key={i} value={zeroPadSingleDigits(i)}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          value={searchState[object][value][consts.YEAR]}
          onChange={(e) =>
            handleDropdownChange(searchState, setSearchState, object, value, {
              year: e.target.value,
              month: searchState[object][value][consts.MONTH],
              day: searchState[object][value][consts.DAY],
            })
          }
        >
          {possibleYears.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateSelector;
