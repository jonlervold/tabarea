import { consts } from "../../../consts";

const searchTypeSelector = ({ searchType, setSearchType }) => {
  return (
    <div className="search-type-selector">
      <label>
        <input
          type="radio"
          name="searchType"
          checked={searchType === consts.TAB}
          onChange={() => setSearchType(consts.TAB)}
        />
        Tab Search
      </label>
      <label>
        <input
          type="radio"
          name="searchType"
          checked={searchType === consts.USER}
          onChange={() => setSearchType(consts.USER)}
        />
        User Search
      </label>
      <label>
        <input
          type="radio"
          name="searchType"
          checked={searchType === consts.FOLDER}
          onChange={() => setSearchType(consts.FOLDER)}
        />
        Folder Search
      </label>
    </div>
  );
};

export default searchTypeSelector;
