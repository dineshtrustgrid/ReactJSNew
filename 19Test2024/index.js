
// "use Strict";
import React from "react";
import ReactDOM from "react-dom/client";

const headingOne = React.createElement("h1",{id:"headingOne"},"HeadingOne");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingOne);