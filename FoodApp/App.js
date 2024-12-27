import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Header Function Component
const Header = () => {
  return (
    <div className="header">
      <div className="log-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({brandName, rating, duration}) => (
   // const {brandName, rating, duration} = props;
  <div className="res-card">
  
    <img
      className="res-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
      alt="res-logo"
    />
    {/* <h3> Briyani Meals </h3> 
    <h4>⭐ 4.5 Ratings </h4> 
    <h4> 40 Minutes </h4> */}
    <h3>{brandName}</h3>
    <h4> ⭐{rating}</h4>
    <h4>{duration}</h4>
  </div>
)

const Body = () => (
  <div className="body">
    <div className="search"> Search </div>
    <div className="res-container">
      <RestaurantCard brandName="Meghana Foods"  rating ={4.5} duration ="40 Minutes"/>
      <RestaurantCard  brandName="Star Briyani" rating ={4.6} duration="55 Minutes"/>
      <RestaurantCard  brandName="Hyderabad Briyani" rating={4.7} duration="40 Minutes"/>
      <RestaurantCard brandName="Nagarjuna" rating={4.4} duration="35 Minutes"/>
      <RestaurantCard  brandName="Nandhas" rating={4.8} duration="30 Minutes"/>
      
    </div>

  </div>
);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
