import useSearch from "./hooks/useSearch";
import Loading from "./components/Loading";
import Results from "./components/Results";
import Setup from "./components/Setup";
import Error from "./components/Error";
import "./App.css";

function App() {
  const {
    page,
    runSearch,
    sortSearch,
    searchType,
    errorMessage,
    searchResults,
    handlePageClick,
    searchIsLoading,
    searchParameters,
    showDescriptions,
    handleDescriptionsClick,
  } = useSearch();

  return (
    <div className="App">
      <h2 className="notopmargin">Advanced Search</h2>
      <h3>Setup</h3>
      <Setup runSearch={runSearch} searchIsLoading={searchIsLoading} />

      <Loading searchIsLoading={searchIsLoading} />

      {!searchIsLoading && <Error errorMessage={errorMessage} />}

      {searchResults && !searchIsLoading && (
        <div>
          <h3>Results</h3>
          <Results
            page={page}
            sortSearch={sortSearch}
            searchType={searchType}
            searchResults={searchResults}
            handlePageClick={handlePageClick}
            searchParameters={searchParameters}
            showDescriptions={showDescriptions}
            handleDescriptionsClick={handleDescriptionsClick}
          />
        </div>
      )}
    </div>
  );
}

export default App;
