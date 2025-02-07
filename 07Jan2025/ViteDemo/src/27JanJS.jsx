import { useState } from "react";
import { useEffect } from "react";

const Body = () => {

    const [listOfRestaurant , setListOfRestaurant] = useState([]);

    useEffect(()=>{
        console.log("UseEffect");

        fetchData();
    },[]);

    // WHen we fetch the data Using All Origin its wraps the actual response in a special container called "contents"
    // we can think receiving a package inside a box and we need open the box to know the item .
    // When we are fetching directly from API like Swiggy ,etc we might face browser restrictions called CORS .
    // All origin is a service that helps bypass this issue by acting as middleware or middle man 
   //  https://api.allorigins.win/get?url=' - third party api we can access along with this URL

    const fetchData = async()=>{
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      // const data = await fetch("https://api.allorigins.win/get?url="+ encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')) 
       //console.log("JsonData",data);
       const data = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null'))
       const jsonData = await data.json();
       const parsedData = JSON.parse(jsonData.contents);
        console.log("parsedData",parsedData?.data?.cards[3]?.card?.card?.info?.name);

    }
    return(
        <>

        <h1> Body </h1>

        </>
    )

}
export default Body ;


// When localhost application trying to access another application which is hosted at remote server 
// THen web Browser will not allow us to access it and this problem is called as CORS policy problem.
//  TO avoid : 




// JSON.strigfy() ---> It converts our JSON to String form.

// JSON.parse()   ---> We have string content and we need to convert it to JSON form.

// Our Target is to access the Swiggy API content which is in the form of JSON.

// But unfortuntaley we cannot access it directly.

// So we are taking the help of AllOrgin to access the Swiggy APIs.

// AllOrgin will wrap the Swiggy content into string form and stroes it in the contents(container).

// So now we, need to convert string to JSON form --> JSON.parse().