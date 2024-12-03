
import React from "react";
import ReactDOM from "react-dom/client";


// const root = ReactDOM.createRoot(document.getElementById("root"));
// const headingOne = <h1 id="headone"> Heading One in H1 Tag</h1>;
// const headingTwo = <h2 id="headTwo"> HeadTwo in H2 Tag</h2>;
// const output = <> 
// {headingOne}
// {headingTwo}
// </>
// root.render(output);

const loginPanel = (<React.Fragment>
    <div>
        UserName : <input id="username"/>
    </div>
    <div>
        Password : <input id="password" type="password" />
    </div>
    <div>
        <button id="login"> Login  </button>
        <button id="reset"> Reset </button>
    </div>
</React.Fragment>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(loginPanel);



