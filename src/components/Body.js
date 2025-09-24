import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useEffect, useState } from "react";
import { useRestaurants } from "./useRestaurants.js";

function filterData (searchText, restaurantData) {
  const data = restaurantData.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);

  const restaurantData = useRestaurants();

  useEffect(() => {
    setFilteredRestaurantData(restaurantData);
  }, [restaurantData]);

  return (
    <>
      <div className="place-self-center">
        <input type="text" placeholder="Search" className="p-5 w-100 m-5 outline-amber-500  bg-amber-200"  value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
        <button className="w-30 m-5 bg-amber-600 h-10 rounded-full" onClick={() => { setFilteredRestaurantData(filterData(searchText, restaurantData))}}>Search</button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantData?.map((restaurant) => {
          return (
            <RestaurantCard  key={restaurant?.info?.id}
              restaurant={restaurant.info}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
