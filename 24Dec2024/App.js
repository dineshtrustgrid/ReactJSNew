// Removing return statement will not give any error ,To display content in webpage return statement is needed
// ESM  - ECMAScript Module
import React from "react";

export  default function App() { // Default Parameter
  return (
    <>
      <h1> function Declaration </h1>
      <h2> This JSx expressopm</h2>
    </>
  );
}

// In Fat arrow function () => Return statement is by default will be available , no need to provide 
// explicity to give return ()

const Value = () => {  // Non Default parameter / Named parameter

    return(
        <>

<h2> This is Fat Arrow Function </h2> 
<h3> This is h3 Tag </h3>
<h4> This is h4 Tag </h4>
<h5> THis is h5 Tag</h5>
</>
    )
} 

export  {Value};

//  File Name same as export default Component in that file .