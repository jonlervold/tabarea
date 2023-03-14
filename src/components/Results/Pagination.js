const Pagination = ({ resultsCount, page, handlePageClick }) => {
  const pagesCount = Math.ceil(resultsCount / 100);
  let allPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    allPages.push(i);
  }
  const pagination = (
    <div>
      {allPages.length > 1 && (
        <div>
          <div className="pagination-wrapper">
            Go to page:
            {allPages.map((number) => (
              <span
                key={number}
                className={
                  page === number
                    ? "pagination-current-page"
                    : "pagination-links"
                }
                onClick={() => handlePageClick(number)}
              >
                {number}
              </span>
            ))}
          </div>
          <div className="pagination-wrapper">
            {page === 1 ? (
              <span>{"<-"} Prev</span>
            ) : (
              <span
                className="pagination-links"
                onClick={() => handlePageClick(page - 1)}
              >
                {"<-"} Prev
              </span>
            )}
            |
            {page === pagesCount ? (
              <span>Next {"->"}</span>
            ) : (
              <span
                className="pagination-links"
                onClick={() => handlePageClick(page + 1)}
              >
                Next {"->"}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
  return pagination;
};

export default Pagination;
