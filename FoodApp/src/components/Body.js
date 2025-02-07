
import React ,{useEffect, useState}from "react";

import RestaurantCard from "./RestaurantCard";


let restaurantDetails = [
  {
      data:{
          id:101,
          name: "Dominos",
          cuisines:["Burger","sandwich","ROll"],
          deliveryTime:+"30",
          avgRating: "4.6"
      }
  },
  {
      data:{
          id:102,
          name: "KFC",
          cuisines:["Chickenwings ","loliiopop ","friedchicken"],
          deliveryTime :+"25",
          avgRating: "3.7"
      }
  },

  {
      data:{
          id:103,
          name:"Hyberbadi",
          cuisines:["Briyani","Soup","Grill"],
          deliveryTime:+"20",   
          avgRating:"2.8"
      }
  }
]

const Body = () => {
    const [listOfRestaurant , setListOfRestaurant] = useState(restaurantDetails);

    // const [listOfRestaurant,setListOfRestaurant] = useState([
    //   {
    //     data:{
    //         id:101,
    //         name: "Dominos",
    //         cuisines:["Burger","sandwich","ROll"],
    //         deliveryTime:+"30",
    //         avgRating: "4.6"
    //     }
    // },
    // {
    //     data:{
    //         id:102,
    //         name: "KFC",
    //         cuisines:["Chickenwings ","loliiopop ","friedchicken"],
    //         deliveryTime :+"25",
    //         avgRating: "3.7"
    //     }
    // },
  
    // {
    //     data:{
    //         id:103,
    //         name:"Hyberbadi",
    //         cuisines:["Briyani","Soup","Grill"],
    //         deliveryTime:+"20",   
    //         avgRating:"2.8"
    //     }
    // }
    // ]);

    // useEffect(()=>{
    //     console.log("list",listOfRestaurant);
    // const filterlist= listOfRestaurant.filter((res)=>res.data.avgRating > 3)
    // setListOfRestaurant(filterlist);

    // },[]); // componentDIdmount()


    useEffect(()=>{
            console.log("UseEffect");
    
            fetchData();
        },[]);
    
    const fetchData = async()=>{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            
            const jsonData = await data.json();
            console.log("JsonData",jsonData);
        }
        
    console.log("inside Body");
    // console.log("list",listOfRestaurant);
    // const filterlist= listOfRestaurant.filter((res)=>res.data.avgRating > 2 )
    // setListOfRestaurant(filterlist);
    

    return(

    <div className="body">
      <div className="search"> Search </div>
      <div >
        {/* <RestaurantCard brandName="Meghana Foods"  rating ={4.5} duration ="40 Minutes"/>
        <RestaurantCard  brandName="Star Briyani" rating ={4.6} duration="55 Minutes"/>
        <RestaurantCard  brandName="Hyderabad Briyani" rating={4.7} duration="40 Minutes"/>
        <RestaurantCard brandName="Nagarjuna" rating={4.4} duration="35 Minutes"/>
        <RestaurantCard  brandName="Nandhas" rating={4.8} duration="30 Minutes"/> */}

        <RestaurantCard  resData={listOfRestaurant}/>
        
               {/* {listOfRestaurant.map((res)=>{
          <div key={res.data.id}>
          <li>ID: {res.data.id}</li>
          </div>})}
         */}
      </div>
  
    </div>
    )
}
  
export default Body;