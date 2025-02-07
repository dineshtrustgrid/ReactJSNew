import React,{useState,useEffect} from "react";

const UseEffectDemo = () =>{

    const [count,SetCount] =useState(0); 

    useEffect(()=>{
        console.log("UseEffect runs only when count changes");
    },[count]); // dependency array will ensure that useEffect runs only specific value changes

    const setCount =()=>{

        SetCount(count +1);

    }
    return(
        <>
            <h1>count :{count}</h1>
            <button onClick={setCount}> CLick Me !!!</button>
        </>
    )
}

export default UseEffectDemo;