import React,{useState,useEffect} from "react";


const UseEffectEmptyArray = () => {

    const [count ,setCount]=useState(0);

    // case 2: Equivalent to ComponentDidMount() or replacement of COmponentDidmount(0)
    useEffect(()=>{
        console.log("Called the first time ,component is rendered");
    },[]);

    return(<>
            <h1>UseEffect Empty Array Example </h1>
            <h1> count : {count}</h1>
            <button onClick={()=>setCount(count+1)}> CLick Me !!!</button>
    </>)
}
export default UseEffectEmptyArray;