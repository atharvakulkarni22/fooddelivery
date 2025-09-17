import { IMG_LOGO } from "../config";

const Header = () => {
  return (
    <div className="header">
      <img
        src={IMG_LOGO}
        alt="logo"
        className="logo"
      ></img>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;