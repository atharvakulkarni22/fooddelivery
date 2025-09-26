import { useEffect, useState } from "react"
import { RESTAURANT_MENU_URL } from "../config";

export const useRestaurantDetails = (id) => {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    
    async function getRestaurantData() {
        const data = await fetch(RESTAURANT_MENU_URL+id);
        const jsonData = await data.json();
        // console.log(jsonData);
        console.log(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        setRestaurantDetails(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }
    
    useEffect (() => {
        getRestaurantData();
    }, [id]);
    
    return restaurantDetails;
}