import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useEffect, useState } from "react";

function filterData (searchText, restaurantData) {
  const data = restaurantData.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);


  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5288974&lng=73.8665321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    // console.log(jsonData.data.cards[1].card.card);
    const restaurantData = jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    setRestaurantData(restaurantData);
    setFilteredRestaurantData(restaurantData);
  }

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
