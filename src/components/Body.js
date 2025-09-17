import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

const Body = () => {
  return (
    <div className="body">
        {
            restaurantList.map((restaurant) => {
                return (<RestaurantCard restaurant={restaurant.card.card.info} key={restaurant.card.card.info.id} />)
            })
        }
      
    </div>
  );
};

export default Body;