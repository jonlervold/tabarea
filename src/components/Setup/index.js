import { useEffect, useState } from "react";
import { folderSearchData } from "../../stateTables/folderSearchData";
import { userSearchData } from "../../stateTables/userSearchData";
import { tabSearchData } from "../../stateTables/tabSearchData";
import { consts } from "../../consts";
import TabSearch from "./TabSearch";
import UserSearch from "./UserSearch";
import FolderSearch from "./FolderSearch";
import runUrlSearch from "../../util/runUrlSearch";
import setUrlSearch from "../../util/setUrlSearch";
import RunSearchButton from "./shared/RunSearchButton";
import SearchTypeSelector from "./shared/SearchTypeSelector";
import handleUrlParamSearch from "../../handlers/handleUrlParamSearch";

const Setup = ({ runSearch, searchIsLoading }) => {
  const [searchType, setSearchType] = useState(consts.TAB);
  const [tabSearchState, setTabSearchState] = useState(tabSearchData);
  const [userSearchState, setUserSearchState] = useState(userSearchData);
  const [folderSearchState, setFolderSearchState] = useState(folderSearchData);
  const [mustRunUrlSearch, setMustRunUrlSearch] = useState(false);

  useEffect(() => {
    setUrlSearch(
      handleUrlParamSearch,
      setFolderSearchState,
      setMustRunUrlSearch,
      setUserSearchState,
      setTabSearchState,
      folderSearchState,
      userSearchState,
      tabSearchState,
      setSearchType
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    runUrlSearch(
      setMustRunUrlSearch,
      folderSearchState,
      mustRunUrlSearch,
      userSearchState,
      tabSearchState,
      searchType,
      runSearch
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mustRunUrlSearch, tabSearchState, folderSearchState, userSearchState]);

  return (
    <div>
      <SearchTypeSelector
        searchType={searchType}
        setSearchType={setSearchType}
      />

      {searchType === consts.TAB && (
        <div>
          <TabSearch
            tabSearchState={tabSearchState}
            setTabSearchState={setTabSearchState}
          />
          <RunSearchButton
            runSearch={() => runSearch(tabSearchState)}
            searchIsLoading={searchIsLoading}
          />
        </div>
      )}
      {searchType === consts.FOLDER && (
        <div>
          <FolderSearch
            folderSearchState={folderSearchState}
            setFolderSearchState={setFolderSearchState}
          />
          <RunSearchButton
            runSearch={() => runSearch(folderSearchState)}
            searchIsLoading={searchIsLoading}
          />
        </div>
      )}
      {searchType === consts.USER && (
        <div>
          <UserSearch
            userSearchState={userSearchState}
            setUserSearchState={setUserSearchState}
          />
          <RunSearchButton
            runSearch={() => runSearch(userSearchState)}
            searchIsLoading={searchIsLoading}
          />
        </div>
      )}
    </div>
  );
};

export default Setup;
