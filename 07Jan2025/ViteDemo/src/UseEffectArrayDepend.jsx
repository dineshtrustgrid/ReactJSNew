import React,{useState,useEffect} from "react";



const UseEffectArrayDepend = () =>{

    const [count ,setCount] =useState(0);
    // case 3 :
    useEffect(()=>{
        console.log("Count componenet is changed ,Useefect will be called");
    },[count]);

    return(<>
        <h1> UseEffect Array Dependencies </h1>
        <h1> Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}> Click Me !!!</button>
    </>)
}
export default UseEffectArrayDepend;