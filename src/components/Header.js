import { useSelector } from "react-redux";
import { IMG_LOGO } from "../config";
import { Link } from "react-router-dom";

const Header = () => {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex place-content-between space-y-10 p-5 m-5 border-2 border-amber-500">
      <img
        src={IMG_LOGO}
        alt="logo"
        className="h-30"
      ></img>
      <h1 className="text-2xl font-bold">Food Delivery</h1>
      <ul className="flex">
        <li className="font-bold m-5"><Link to='/'>Home</Link></li>
        <li className="font-bold m-5"><Link to='/about'>About Us</Link></li>
        <li className="font-bold m-5"><Link to='/contact'>Contact</Link></li>
        <li className="font-bold m-5"><Link to='/cart'>Cart {cartItems.length}-Items</Link></li>
      </ul>
    </div>
  );
};

export default Header;