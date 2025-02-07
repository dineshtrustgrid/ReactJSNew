import React ,{useState,useEffect}from "react";

const UseEffectDemo = () =>{

   //const [count ,setCount] = useState(0);

    
    useEffect(()=>{
        console.log("UseEffect function running after render function");
    })
      

    return (
        
        <>
            {/* <h1> Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}> Click Me !!!</button> */}
            <h1> Render </h1>
            
        </>
    )
}

export default UseEffectDemo;