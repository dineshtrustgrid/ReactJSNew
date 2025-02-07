
import React, { useContext,useState } from "react";
import { CDN_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";

// const RestaurantCard = (props) => {
//      const {brandName, rating, duration} = props;
//   return(
//    <div className="res-card">
   
//      <img
//        className="res-logo"
//        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
//        alt="res-logo"
//      />
//      {/* <h3> Briyani Meals </h3> 
//      <h4>⭐ 4.5 Ratings </h4> 
//      <h4> 40 Minutes </h4> */}
//      <h3>{brandName}</h3>
//      <h4> ⭐{rating}</h4>
//      <h4>{duration}</h4>
//    </div>
//   )
// }


const RestaurantCard = (props) => {


  const {resData} = props;

  console.log("resData",resData);

  // const filteredvalue = resData.filter(res=>res.data.avgRating > 3);
  // console.log("fitervalue",filteredvalue);

  // const {loggedInuser}= useContext(userContext);
  // const {
  //   cloudinaryImageId,
  //   name,
  //   avgRating,
  //   cuisines,
  //   costForTwo,
  //   deliveryTime,
  // } = resData;

    // cloudinary Image URL for Swiggy : https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/
  return(
    <div className="res-container">
    {resData.map((item)=>{
      return(
      <div className="res-card" key={item.data.id}>
      <img
       className="res-logo"
       src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
       alt="res-logo"
     />
        <h4> ID: {item.data.id}</h4>
        <h4> Name: {item.data.name}</h4>
        <h4> cuisine : {item.data.cuisines}</h4>
        <h4>  DeliveryTime : {item.data.deliveryTime}</h4>
       
        <h4> avgRating :  ⭐ {item.data.avgRating}</h4>
      </div> 
    )})}
    </div>
  )

}



 
 export default RestaurantCard;