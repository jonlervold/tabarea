import handleTextInputChange from "../../../handlers/handleTextInputChange";
import { consts } from "../../../consts";

const TextParameter = ({ searchState, setSearchState, object, title }) => {
  return (
    <div className={"search-parameter"}>
      <h5>{title}</h5>
      <input
        value={searchState[object].value}
        maxlength="50"
        onChange={(e) =>
          handleTextInputChange(
            searchState,
            setSearchState,
            object,
            consts.VALUE,
            e.target.value
          )
        }
      ></input>
    </div>
  );
};

export default TextParameter;
