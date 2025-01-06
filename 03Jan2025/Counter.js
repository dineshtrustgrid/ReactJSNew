
import React,{ useState} from "react";

const Counter = (props) => {

const {value} =props; // object destructing

const [count,setCount] = useState(value); // array destructing 


const increment = ()=> {

    setCount(count + 1);

}

const decrement = () => {
    setCount(count -1);

}
 
    return(
        <>
            <h1>Count : {count}</h1>

            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
        </>
    )
}

// const Counter = () => (

   

//     <>
//         <h1> Count : </h1>
//         <button onClick={increment}> + </button>
//     </>
// )



export default Counter;
