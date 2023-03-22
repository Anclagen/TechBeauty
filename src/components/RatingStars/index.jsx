import fullStar from "../../assets/review_star.png";
import emptyStar from "../../assets/empty_review_star.png";
import { RatingStar } from "./styles";

/**
 * Create rating stars for a product out of 5.
 * @param {Number} rating current rating of the product
 * @param {Array} reviews array of reviews with ratings for product
 * @returns
 */
export function RatingStars({ rating, reviews }) {
  const full = parseInt(Math.round(rating));
  const empty = 5 - full;
  const stars = [];

  for (let i = 0; i < full; i++) {
    stars.push(<RatingStar src={fullStar} alt="rating star icon" key={`full-${i}`} />);
  }
  for (let i = 0; i < empty; i++) {
    stars.push(<RatingStar src={emptyStar} alt="rating star icon" key={`empty-${i}`} />);
  }

  return (
    <p>
      {stars} ({reviews && reviews.length === 0 ? "Unrated" : rating})
    </p>
  );
}
