
import React from "react";
import ReactDOM from "react-dom/client";


// const headingOne = <h1 id="headOne"> headingOne </h1>;
// console.log("headingOne",headingOne);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(headingOne);

/*
const headingThree = React.createElement('h3',{id:"headingThree"},
    [
        React.createElement('b',{id:"boldOne"},
        [
            React.createElement('p',{id:"insidebold"},"insidebold")
        ]),
        
        React.createElement('p',{id:"para"},"Paragraph One")
    ]
)

*/

const headTwo= <React.Fragment>
<h1> headingOne inside h1Tag</h1>
<h2> HeadingTwo Inside h2 Tag</h2>
<p> Paragraph Tag inside P Tag </p>

<h3 id="headingThree">

<b id="boldone">
<p id ="insidebold">inside Bold</p>
</b>
<p id="paragraphOne">ParagraphOne</p>


 </h3>




</React.Fragment>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headTwo);

