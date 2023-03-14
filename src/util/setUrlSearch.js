import { consts } from "../consts";

const setUrlSearch = (
  handleUrlParamSearch,
  setFolderSearchState,
  setMustRunUrlSearch,
  setUserSearchState,
  setTabSearchState,
  folderSearchState,
  userSearchState,
  tabSearchState,
  setSearchType
) => {
  const searchParams = new URLSearchParams(document.location.search);
  const folderSearchValue = searchParams.get(consts.FOLDER);
  const userSearchValue = searchParams.get(consts.USER);
  const tabSearchValue = searchParams.get(consts.TAB);

  if (tabSearchValue) {
    setSearchType(consts.TAB);
    handleUrlParamSearch(
      tabSearchState,
      setTabSearchState,
      consts.TAB_NAME_INCLUDES,
      tabSearchValue
    );
  } else if (folderSearchValue) {
    setSearchType(consts.FOLDER);
    handleUrlParamSearch(
      folderSearchState,
      setFolderSearchState,
      consts.FOLDER_NAME_INCLUDES,
      folderSearchValue
    );
  } else if (userSearchValue) {
    setSearchType(consts.USER);
    handleUrlParamSearch(
      userSearchState,
      setUserSearchState,
      consts.USERNAME_INCLUDES,
      userSearchValue
    );
  }
  if (tabSearchValue || folderSearchValue || userSearchValue) {
    setMustRunUrlSearch(true);
  }
};

export default setUrlSearch;
