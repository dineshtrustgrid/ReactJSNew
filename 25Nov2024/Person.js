import React  from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.querySelector("#root"));

class Person extends React.Component {

    constructor(props){
        super(props);
       
    }
    
    render(){
        console.log("Inside Render Method ");
        console.log("this props",this.props);
       //console.log("props", props); 
        return <>
            <h1>{this.props.id} </h1>
            <h2>{this.props.userName} </h2>
        </>
    }
}
// root.render(new Person(id="101",userName="dinesh"));

root.render(<Person id="123" userName="dinesh"/>);

// Task :
// ES 6 class concepts
// what is Props in React ?
// what is Component in React ? // Component is UI element .