import React from "react";
// import ReactDOM from "react-dom/client";

export const element = <span> React Element </span>; // This REact Element and it converted to React.createElement()

export const myTitle = <h1> THis is H1 Tag </h1>; // This REact Element and it converted to React.createElement()

export const Title = function () {
  // It is REact Function Component , one of the way to create function component

  return (
    <>
      <h1 className="heading"> THis is Heading </h1>
    </>
  );
};

export const userName = "Jordan walke"; // normal variable 

const HeadingComponent = () => (
 <div id="functionComponent">
    {userName} {/*  JSX expression */}
    {myTitle} {/*  JSX expression */}
    {element}  {/*  JSX expression */}
    <Title />  {/*  Component composition - means Render <Title /> when we are composing component inside other Component */}
    <Title> </Title>
    { Title() } {/*  We can call like function also at the end because it is function */}
    <h1 className="headingone">This is Heading Component </h1>

  </div>
);

export default HeadingComponent;


// export default function HeadingComponent(props){

//     return(
//         <>
//             <h1> THis is Heading Component</h1>
//         </>
//     )
// }

// const HeadingComponent = () => {  // in Fat arrow function using curly braces explicity need to provide return statement.
//     return(
//     <>
//     <h1> This is Fat arrow Heading Component</h1>
//     </>
//     )
// }

// export default HeadingComponent ;

// line No 53 is anothe way to write the Fat arrow function using Parenthises () and it return statement no need to provide .
//const HeadingComponent = () => (<><h1> THis is Testing </h1> <b>Vinod Kumar Gowda</b> </>)

//export default HeadingComponent;

// 