import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
    );
};

const Header = () => {
    return (
    <div className="header">
        <img src = "https://cdn.vectorstock.com/i/1000v/43/65/food-delivery-icon-set-vector-4904365.jpg" alt="logo" className="logo"></img>
        <ul className="nav-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <RestaurantCard />
        </div>
    );    
}
 
const Footer = () => {
    return (
        <h4>Footer</h4>
    );
}

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <img src="https://cdn.vectorstock.com/i/1000v/43/65/food-delivery-icon-set-vector-4904365.jpg" alt="reataurant-image" className="reataurant-image"></img>
            <h4>Restaurant Name</h4>
            <div>Cuisines</div>
            <div>rating</div>
        </div>
    );
}

root.render(<App />);