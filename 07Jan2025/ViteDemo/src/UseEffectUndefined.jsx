import React,{useState,useEffect} from "react";



const UseEffectUndefined = () =>{
    //case 1:
    useEffect(()=>{
        console.log("Called every Time Component is Rendered");
    });

    const [count,setCount] =useState(0);


    return(
        <>
            <h1> UseEffect count: {count}</h1>
            <button onClick={()=>setCount(count+1)}> Click Me !!!</button>
        </>
    )
}
export default UseEffectUndefined;