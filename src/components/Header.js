import { IMG_LOGO } from "../config";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img
        src={IMG_LOGO}
        alt="logo"
        className="logo"
      ></img>
      <ul className="nav-items">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Header;