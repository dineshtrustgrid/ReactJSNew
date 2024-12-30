
import React from "react";

import RestaurantCard from "./RestaurantCard";

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
  
  export default Body;