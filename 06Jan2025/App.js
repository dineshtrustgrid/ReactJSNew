import React, { useState } from "react";

// import jsondata from "./jsondata.json";


const App = () => {
 
  // const mockData = {
    const  restaurants = [
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
    ]
  // };

//   const [data,setData]=useState([mockData]);
//  console.log("use State Data",data);

 const [jsondata] = [...restaurants];
 console.log("Jsondata",jsondata);
  return (
    <div>
      <h1> Restaurtant details </h1>
      <h3> Read Data from Json File </h3>

      {jsondata.map((restaurant)=>(
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

      {/* {data.map((restaurant)=>{

        return(
          <div key={restaurant.id}>
        <p>Restaurtant ID :  {restaurant.id}</p>
        </div>

        ) 
        

      }

       
    )}*/}


    </div>

      );
};

export default App;


