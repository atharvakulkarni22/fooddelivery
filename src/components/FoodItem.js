import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { addItem } from "./utils/cartSlice";

const FoodItem = (restaurant) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    } 

    // console.log(restaurant.restaurant);
    const {name, price, imageId} = restaurant.restaurant;
    return (
        <div>
            <img className="h-20 w-20 p-2 m-2" src={IMG_CDN_URL+imageId}></img>
            <div className="p-2 m-2">
                <div className="font-bold">Name: {name}</div>
                <div>Price: {price} Rs</div>
            </div>
        </div>
    );
}

export default FoodItem;