import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    
    const [restaurantDetails, setRestaurantDetails] = useState(null);

    const {id} = useParams();

    useEffect (() => {
        getRestaurantData();
    }, []);

    async function getRestaurantData() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId="+id);
        const jsonData = await data.json();
        console.log(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setRestaurantDetails(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    return (!restaurantDetails) ? <div><h1>Loading</h1></div> : (
        <div>
            {restaurantDetails.map((restaurant) => <h4 key={restaurant?.card?.info?.name}>{restaurant?.card?.info?.name}</h4>)}
        </div>
    );
}





export default RestaurantMenu;