// External css should place at the top and restart the server
import "./mysttyle.css";
import React from "react";
import ReactDOM from "react-dom/client";


// some JSX attributes are similar to HTML attributes 
// eg: href attribute is similar in HTML and JSX.

// const url = "https://reactjs.org";

// const link1 = <a href="https://reactjs.org"> React JS </a>
// const link2 = <a href= {url}> React Again </a>

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<>
//     {link1}
//     {link2}
// </>)


// JSX internal Style 

// const myStyle = {
//     backgroundColor : "violet",
//     color : "black"

// }

// const elementOne = <h1 style={myStyle}> H1 Tag with Style attribute</h1>

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(elementOne);

// ----------------------------

// JSX Inline Style 

const elementTwo = <h1 style={{backgroundColor : "red", color:"black" }}> JSX inline Styles </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elementTwo);


// const elementThree = <h1> This External Style </h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(elementThree);