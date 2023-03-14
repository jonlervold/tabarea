const Loading = ({ searchIsLoading }) => {
  return (
    <div className={searchIsLoading ? "" : "hidden"}>
      <div className="loading-wrapper fade">
        <div className="loading-text">Your Search Is Loading</div>
        <img
          className="loading-image"
          src={process.env.PUBLIC_URL + "/images/tbt-icon.gif"}
          alt="TabIt Icon"
        />
      </div>
    </div>
  );
};

export default Loading;
