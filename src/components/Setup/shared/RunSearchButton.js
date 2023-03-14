const RunSearchButton = ({ runSearch, searchIsLoading }) => {
  return (
    <button
      className={"run-search-button"}
      disabled={searchIsLoading}
      onClick={runSearch}
    >
      Run Search
    </button>
  );
};

export default RunSearchButton;
