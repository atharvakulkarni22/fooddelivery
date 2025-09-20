import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

const RestaurantCard = ({restaurant}) => {
    const {name, cuisines, cloudinaryImageId, avgRating, id} = restaurant
  return (
    <div className="restaurant-card">
      <img
        src={IMG_CDN_URL+cloudinaryImageId}
        alt="restaurant-image"
        className="restaurant-image"
      ></img>
      <h4><Link to={'restaurant/'+ id}>{name}</Link></h4>
      <div>Cuisines: {cuisines.join(", ")}</div>
      <div>Rating: {avgRating}</div>
    </div>
  );
};

export default RestaurantCard;