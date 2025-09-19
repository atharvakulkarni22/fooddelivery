import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({restaurant}) => {
    const {name, cuisines, cloudinaryImageId, avgRating} = restaurant
  return (
    <div className="restaurant-card">
      <img
        src={IMG_CDN_URL+cloudinaryImageId}
        alt="restaurant-image"
        className="restaurant-image"
      ></img>
      <h4>{name}</h4>
      <div>Cuisines: {cuisines.join(", ")}</div>
      <div>Rating: {avgRating}</div>
    </div>
  );
};

export default RestaurantCard;