import generateSortedSearch from "../util/generateSortedSearch";
import fetchSearchResults from "../api/fetchSearchResults";
import { consts } from "../consts";
import { useState } from "react";

const useSearch = () => {
  const minSearchDuration = 2000;
  const [searchIsReversed, setSearchIsReversed] = useState(false);
  const [searchParameters, setSearchParameters] = useState(null);
  const [showDescriptions, setShowDescriptions] = useState(true);
  const [searchIsLoading, setSearchIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchType, setSearchType] = useState(null);
  const [sortKey, setSortKey] = useState(null);
  const [page, setPage] = useState(1);

  const runSearch = async (searchObject) => {
    const startTime = new Date();
    setSearchIsLoading(true);
    setErrorMessage(null);

    // prevent user from actually querying the server
    // if same search params are already loaded
    if (searchObject !== searchParameters) {
      const fetchedResults = await fetchSearchResults(searchObject);

      if (
        fetchedResults.status === 200 &&
        fetchedResults.data !== "no-valid-params"
      ) {
        setSearchParameters(searchObject);
        setSearchType(fetchedResults.data.searchType);
        if (searchType === consts.TAB) {
          setSortKey(consts.SORT_KEY_TAB);
        }
        if (searchType === consts.FOLDER) {
          setSortKey(consts.SORT_KEY_FOLDER);
        }
        if (searchType === consts.USER) {
          setSortKey(consts.SORT_KEY_USER);
        }
        setPage(1);
        setSearchResults(fetchedResults.data.results);
      } else if (fetchedResults.data === consts.NO_VALID_PARAMS) {
        setErrorMessage(
          "Search failed. The server received no valid search parameters. Please check your search values."
        );
        setSearchResults(null);
      } else {
        setErrorMessage(
          "There was a problem fetching your results from the server. Please refresh and try again."
        );
        setSearchResults(null);
      }
    }

    const endTime = new Date();
    const runTime = endTime.getTime() - startTime.getTime();
    const remainingTime =
      minSearchDuration - runTime < 0 ? 0 : minSearchDuration - runTime;

    setTimeout(() => setSearchIsLoading(false), remainingTime);
  };

  const sortSearch = (clickedSortKey) => {
    // text columns sort ascending on first click
    // number and date columns sort descending on first click
    // results of sorting by non-primary columns always sub-alphabetizes by primary column
    if (clickedSortKey === sortKey && searchIsReversed === false) {
      const reverse = true;
      const reversedSearchResults = generateSortedSearch(
        searchResults,
        searchType,
        clickedSortKey,
        reverse
      );
      setSearchIsReversed(true);
      setSearchResults(reversedSearchResults);
    } else {
      setSortKey(clickedSortKey);
      const newSortSearchResults = generateSortedSearch(
        searchResults,
        searchType,
        clickedSortKey
      );
      setSearchIsReversed(false);
      setSearchResults(newSortSearchResults);
    }
    setPage(1);
  };

  const handlePageClick = (newPage) => {
    setPage(newPage);
  };

  const handleDescriptionsClick = () => {
    setShowDescriptions(!showDescriptions);
  };

  return {
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
  };
};

export default useSearch;
