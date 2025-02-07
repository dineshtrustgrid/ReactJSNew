
import React from "react";

import { useState } from "react";

const FetchAPI = ()=>{

    const [data,setData]=useState(null);

    //fetch("https://jsonplaceholder.typicode.com/posts/1")
    fetch("http://localhost:5173/jsondata.json")
    .then(response =>{
        const {status} = response;
    if(status >= 200 && status < 300 ){
        console.log(" success",status);
        
    }
    else if(status>=400 && status < 500){
        console.log("client error",status);
    }
    else if (status >= 500){
        console.log("server error", status);

    }
    else{
        console.log("unexpected status",status);
    }

    return response.json();
    })
    .then(data => {
        console.log("responsedata",data)
        setData(data);
})
    .catch(error => console.log("error",error));

   console.log("fetchdata",data);

return(
    <>
    <h1> This fetch APi data</h1>
    {/* {data.map((value)=>(
        <ul key={value.id}>
        {value.title}

        </ul>
    ))} */}

    {/* {data ? (
        <ul>
        <li key={data.id}> User ID :{data.userId}</li>
           <li> ID : {data.id}</li>
           <li> TItle : {data.title}</li>

           <li> BOdy : {data.body}</li>


        </ul>
         ) :"Nodata"}
     */}
    </>
)
}

export default FetchAPI;
