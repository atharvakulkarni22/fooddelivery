import { useEffect, useState } from "react"
import { RESTAURANTS_URL } from "../config";


export const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    async function getRestaurants() {
        const data = await fetch(RESTAURANTS_URL);
        const jsonData = await data.json();
        setRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    useEffect(() => {
        getRestaurants();
    }, [])

    return restaurants;
}