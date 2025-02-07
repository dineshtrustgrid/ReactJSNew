
import React, { useState } from "react";


const UseStateFilter = () =>{

    const [listOfRestaurant,setListOfRestaurant] = useState([
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
                cuisines:["Chickenwings","loliiopop","friedchicken"],
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
    ])

    return(
        <>
            <h1>Use State</h1>
            <button onClick={()=>{
                const listvalue=listOfRestaurant.filter((res)=>res.data.avgRating > 4)
                console.log("listvalue",listvalue);
                setListOfRestaurant(listvalue);
            }}> Filter </button>
        </>
    )
}

export default UseStateFilter;