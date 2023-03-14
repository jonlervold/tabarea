const RatingStarImg = ({ ratingAverage }) => {
  const parsedRatingAverage = parseFloat(ratingAverage);
  if (parsedRatingAverage >= 3.75) {
    return (
      <img alt="4 stars" src={process.env.PUBLIC_URL + "/images/rating4.png"} />
    );
  }
  if (parsedRatingAverage >= 3.25) {
    return (
      <img
        alt="3.5 stars"
        src={process.env.PUBLIC_URL + "/images/rating3h.png"}
      />
    );
  }
  if (parsedRatingAverage >= 2.75) {
    return (
      <img alt="3 stars" src={process.env.PUBLIC_URL + "/images/rating3.png"} />
    );
  }
  if (parsedRatingAverage >= 2.25) {
    return (
      <img
        alt="2.5 stars"
        src={process.env.PUBLIC_URL + "/images/rating2h.png"}
      />
    );
  }
  if (parsedRatingAverage >= 1.75) {
    return (
      <img alt="2 stars" src={process.env.PUBLIC_URL + "/images/rating2.png"} />
    );
  }
  if (parsedRatingAverage >= 1.25) {
    return (
      <img
        alt="1.5 stars"
        src={process.env.PUBLIC_URL + "/images/rating1h.png"}
      />
    );
  }
  if (parsedRatingAverage >= 1) {
    return (
      <img alt="1 star" src={process.env.PUBLIC_URL + "/images/rating1.png"} />
    );
  }
};

export default RatingStarImg;
