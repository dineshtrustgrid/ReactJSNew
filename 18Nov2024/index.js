"use strict";

import React from "react";
import ReactDOM from "react-dom/client";

const headingOne = React.createElement("h1",{id:"headOne"},"HeadingOne from Parcel");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingOne);
