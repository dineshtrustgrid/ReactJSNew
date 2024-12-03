
import React from "react";
import ReactDOM from "react-dom/client";
import "mysttyle.css";

const userID = 101;
const userName = "Jordan walke"; // creator of React JS

const printDetails = <h1 className="info">user ID is {userID} and username is {userName}</h1>; // JSX 
console.log("printDetails",printDetails);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(printDetails);

// why Babel is converted JSX to React.creatELement()
// ans : They have designed bcoz we are creating react element with the help of creatELement() and its function of React
//and JSX expression is looks like HTML.
