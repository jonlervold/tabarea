import { consts } from "../consts";

const runUrlSearch = (
  setMustRunUrlSearch,
  folderSearchState,
  mustRunUrlSearch,
  userSearchState,
  tabSearchState,
  searchType,
  runSearch
) => {
  if (mustRunUrlSearch) {
    if (searchType === consts.TAB) {
      runSearch(tabSearchState);
    }
    if (searchType === consts.FOLDER) {
      runSearch(folderSearchState);
    }
    if (searchType === consts.USER) {
      runSearch(userSearchState);
    }
    setMustRunUrlSearch(false);
  }
};

export default runUrlSearch;
