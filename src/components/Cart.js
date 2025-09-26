import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);

    return(
        <>
            <div className="place-content-center p-10 m-10 text-2xl font-bold"> Cart Items </div>
            <div>
                {cartItems.map((item) => 
                    <FoodItem key={item?.id} restaurant={item}></FoodItem>
                )}
            </div>
        </>
    );
}

export default Cart;