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
      <div className="search-text">
        <input type="text" placeholder="Search" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
        <button onClick={() => { setFilteredRestaurantData(filterData(searchText, restaurantData))}}>Search</button>
      </div>
      <div className="body">
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
