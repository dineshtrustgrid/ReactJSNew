"use strict";

import React from "react";
import ReactDOM from "react-dom/client";


// const headingOne = <h1> Testing HeadingOne</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingOne);

const isMorning = true;
const morningText = "morning User";
const afternoonText = "Good Afternoon user";

const morningElement = <div className="morning"> {morningText} It is 7 AM IST </div>;
const afternoonElement = <div className="afternoon"> {afternoonText} It is 12PM IST</div>;
console.log("morning element",morningElement);
console.log("afternoon Element",afternoonElement);

const result = isMorning ? morningElement :afternoonElement;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(result);
