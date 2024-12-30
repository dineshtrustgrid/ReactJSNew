
import React from "react"

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
 
 export default RestaurantCard;