import { useParams } from "react-router-dom";
import { useRestaurantDetails } from "./useRestaurantDetails";
import FoodItem from "./FoodItem";


const RestaurantMenu = () => {
    
    const {id} = useParams();

    const restaurantDetails = useRestaurantDetails(id);

    return (!restaurantDetails) ? <div><h1>Loading</h1></div> : (
        <div >
            {restaurantDetails.map((restaurant) => 
            <div className="p-2 m-2 flex flex-wrap w-full"><FoodItem key={restaurant?.card?.info?.id} restaurant={restaurant?.card?.info}></FoodItem> <button className="m-5 p-5 bg-green-200 w-20" onClick={() => handleAddItem(restaurant.restaurant)}>Add</button></div>
            )};
        </div>
    );
}





export default RestaurantMenu;