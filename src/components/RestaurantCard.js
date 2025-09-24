import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

const RestaurantCard = ({restaurant}) => {
    const {name, cuisines, cloudinaryImageId, avgRating, id} = restaurant
  return (
    <div className="border place-content-center p-10 m-10 h-110 w-100 gap-4 bg-gray-400">
      <img
        src={IMG_CDN_URL+cloudinaryImageId}
        alt="restaurant-image"
        className="h-50 w-50 "
      ></img>
      <div className="text-xl font-bold my-5"><Link to={'restaurant/'+ id}>{name}</Link></div>
      <div>Cuisines: {cuisines.join(", ")}</div>
      <div>Rating: {avgRating}</div>
    </div>
  );
};

export default RestaurantCard;