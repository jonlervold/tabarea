import FolderResults from "./FolderResults";
import SearchedFor from "./SearchedFor";
import UserResults from "./UserResults";
import Pagination from "./Pagination";
import TabResults from "./TabResults";
import { consts } from "../../consts";

const Results = ({
  page,
  searchType,
  sortSearch,
  searchResults,
  handlePageClick,
  searchParameters,
  showDescriptions,
  handleDescriptionsClick,
}) => {
  const resultsCount = Object.keys(searchResults).length;

  return (
    <div>
      <div>
        <SearchedFor
          searchParameters={searchParameters}
          resultsCount={resultsCount}
        />

        <div className="n-results">
          <strong>{resultsCount.toLocaleString()}</strong> Result
          {resultsCount !== 1 && "s"}
        </div>

        {resultsCount > 0 && (
          <>
            {searchType === consts.FOLDER && (
              <div className="show-folder-descriptions">
                <input
                  type="checkbox"
                  checked={showDescriptions}
                  onChange={() => handleDescriptionsClick()}
                />{" "}
                Show Folder Descriptions
              </div>
            )}

            <Pagination
              resultsCount={resultsCount}
              page={page}
              handlePageClick={handlePageClick}
            />

            {searchType === consts.TAB && (
              <TabResults
                searchResults={searchResults}
                sortSearch={sortSearch}
                page={page}
              />
            )}

            {searchType === consts.FOLDER && (
              <FolderResults
                searchResults={searchResults}
                sortSearch={sortSearch}
                page={page}
                showDescriptions={showDescriptions}
              />
            )}

            {searchType === consts.USER && (
              <UserResults
                searchResults={searchResults}
                sortSearch={sortSearch}
                page={page}
              />
            )}

            <Pagination
              resultsCount={resultsCount}
              page={page}
              handlePageClick={handlePageClick}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Results;
