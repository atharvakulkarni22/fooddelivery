import { useParams } from "react-router-dom";
import { useRestaurantDetails } from "./useRestaurantDetails";


const RestaurantMenu = () => {
    
    const {id} = useParams();

    const restaurantDetails = useRestaurantDetails(id);

    return (!restaurantDetails) ? <div><h1>Loading</h1></div> : (
        <div>
            {restaurantDetails.map((restaurant) => <h4 key={restaurant?.card?.info?.name}>{restaurant?.card?.info?.name}</h4>)}
        </div>
    );
}





export default RestaurantMenu;