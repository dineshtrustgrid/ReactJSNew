
// const headingTwo = React.createElement('h2',{id:"headingTwo"},"headingTwo");
// const root =ReactDOM.createRoot(document.getElementById('headingTwo'));

// root.render(headingTwo);

// const headingTwo = React.createElement('a',{id:"anchorid"},
//     React.createElement('h1',{id:"h1"},"H1Tag inside a")

// );

// const root = ReactDOM.createRoot(document.getElementById('headingTwo'));

// root.render(headingTwo);

{/* <div id="headingTwo"> 
<a id="anchorid"> 
<h1 id= "h1">
    H1Tag inside a
</h1>
</a>
</div> */}

// Nested Tag creation using React
// 

{/* <div id="headingTwo">
<h3 id="headingThree">
<b id="boldOne"> BoldOne </b>
<p id="para"> Paragraph One</p>
</h3>    
</div> */}

const headingThree = React.createElement('h3',{id:"headingThree"},
    [
        React.createElement('b',{id:"boldOne"},
        [
            React.createElement('p',{id:"insidebold"},"insidebold")
        ]),
        
        React.createElement('p',{id:"para"},"Paragraph One")
    ]
)

const root = ReactDOM.createRoot(document.getElementById("headingTwo"));
root.render(headingThree);

