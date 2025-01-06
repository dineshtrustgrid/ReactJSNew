import React from "react";

import jsondata from "./jsondata.json";


const App = () => {
  const mockData = {
    restaurants: [
      {
        id: 1,
        name: "Pizza Palace",
        cuisine: ["Italian", "Fast Food"],
        rating: 4.5,
        deliveryTime: "30 mins",
        menu: [
          { id: 101, name: "Margherita Pizza", price: 250 },
          { id: 102, name: "Pepperoni Pizza", price: 300 },
        ],
      },
      {
        id: 2,
        name: "Burger Barn",
        cuisine: ["American", "Fast Food"],
        rating: 4.3,
        deliveryTime: "25 mins",
        menu: [
          { id: 201, name: "Classic Cheeseburger", price: 200 },
          { id: 202, name: "Veggie Burger", price: 180 },
        ],
      },
    ],
  };

  console.log("mock Data",mockData);
  return (
    <div>
      <h1> Restaurant Details </h1>
      {mockData.restaurants.map((restaurant) => {
        console.log("restaurantdata",restaurant);
        {/*  callback function return value */}
        return( 
          <div key={restaurant.id} style={{border:"1px solid black ",margin:"10px" , padding:"10px"}}>
          <h2> {restaurant.name} </h2>
          <b> cuisine : {restaurant.cuisine.join(",")}</b>
          <b> Rating : {restaurant.rating}</b>
          <b> Delivery Time : {restaurant.deliveryTime}</b>
          <h3>
           
            Menu :
            
            <ul>
              {restaurant.menu.map((item) => {
                return(
                <li key={item.id}>
                 
                  {item.name} - Price : $ {item.price}
                </li>
                );
              })}
            </ul>
          </h3>
          </div>

        )
        
      })}

      <h3> Read Data from Json File </h3>

      {jsondata.restaurants.map((restaurant)=>(
        <div key={restaurant.id} style={{border:"1px solid black ",margin:"10px" , padding:"10px"}}>
        <h2> {restaurant.name} </h2>
          <b> cuisine : {restaurant.cuisine}</b>
          <b> Rating : {restaurant.rating}</b>
          <b> Delivery Time : {restaurant.deliveryTime}</b>
          <h3>
            Menu : 
            <ul>
              {restaurant.menu.map((item)=>(
                <li id={item.id}> {item.name} - Price ${item.price}</li>
              ))}
            </ul>
          </h3>

        </div>
        

      ))
      }
    </div>

      );
};

export default App;


